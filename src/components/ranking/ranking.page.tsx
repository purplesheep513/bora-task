import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from "react";
import { useInView } from "react-intersection-observer";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { getData } from './functions/ranking.data.ts';
import { convertPeriod, scrollTop, sort } from './functions/ranking.function.ts';
import { MultiSelectComboBox } from './ranking.comboBox.tsx';
import { ComicRankItem } from './ranking.type';
import { Tooltip } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const Ranking = (): React.ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [genre,setGenre] = React.useState('romance');
  const [ref, inView] = useInView();
  const page = React.useRef(1);

  const [comicsData, setComicsData] = React.useState([]);
  const [originalComicsData, setOriginalComicsData] = React.useState([]);

  const [tabValue, setTabValue] = React.useState(genre === 'romance' ? 0 : 1);
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTabValue(newValue);
  };
  const [isAtTop, setIsAtTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const currentGenre = searchParams.get('genre')
    page.current = 1;
    setOriginalComicsData(getData(currentGenre, 1))
    setGenre(currentGenre)
  }, [searchParams])


  React.useEffect(()=>{
    setComicsData(sort(originalComicsData,selectedFilters))

    if(inView){
      page.current++;
      if(page.current < 6) {
        const data = [...originalComicsData, ...getData(genre, page.current)]
        setOriginalComicsData(data)
        setComicsData(sort(data,selectedFilters))
      }
    }
  },[selectedFilters, inView, genre])

  if(comicsData.length === 0){
    setOriginalComicsData(getData(genre,1))
    setComicsData(getData(genre,1))
    return <>loading...</>
  }

  return (
    <>
      {isAtTop && <div className='scroll-top' onClick={scrollTop}>
        <Tooltip title='위로' arrow>
          <ArrowCircleUpIcon fontSize='inherit'/>
        </Tooltip>
      </div>
      }
      <div className='ranking-container'>
        {genre!=='drama' && <Navigate to={'/ranking?genre=romance'} replace={true} />}
        <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example">
          <Tab 
            icon={<FavoriteIcon />} 
            label="Romance" 
            style={{outline:'none'}} 
            onClick={()=> navigate('/ranking?genre=romance')} />
          <Tab 
            icon={<SportsKabaddiIcon />} 
            label="Drama" 
            style={{outline:'none'}} 
            onClick={()=> navigate('/ranking?genre=drama')} />
          <MultiSelectComboBox setSelectedFilters={setSelectedFilters}/>
        </Tabs>
      </div>
      <div className='card-container middle'>
        {comicsData.map((item, key)=>{
          return (
            <MediaCard 
              key={key} 
              title={item.title} 
              artists={item.artists} 
              thumbnailSrc={item.thumbnailSrc} 
              genres={item.genres} 
              freedEpisodeSize={item.freedEpisodeSize} 
              currentRank={item.currentRank} 
              previousRank={item.previousRank} 
              contentsState={item.contentsState}
              schedule={item.schedule}
            />
          )
        })}
      </div>
      <div ref={ref}>-</div>
    </>

  );
};

const MediaCard = (data:ComicRankItem) => {
  const rank = data.previousRank-data.currentRank
  const fontColor = rank === 0 ? '': rank > 0 ? 'blue' : 'red'
  const state = data.contentsState === 
    'completed' ? '완결' : convertPeriod(data.schedule?.periods)

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={data.thumbnailSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography 
          className='title-container' 
          gutterBottom 
          variant="h6" 
          component="div" 
        >
          <h1 className='rank'>{data.currentRank}</h1>
          <span className={`rank-text ${fontColor}`}>
            {rank === 0 ? 
              <span className='pdr5'>-</span> : 
              rank > 0 ? 
              <>{rank}<ArrowDropUpIcon/></> :
              <>{rank*(-1)}<ArrowDropDownIcon/></>
            }
          </span>
          <Tooltip title={data.title}>
            <span>{data.title}</span>
          </Tooltip>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.artists?.
          filter(item => ['writer','painter','scripter'].includes(item.role)).
          map(el => el.name).join(' / ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.freedEpisodeSize}화 무료
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {state}
        </Typography>
      </CardContent>
    </Card>
  );
}