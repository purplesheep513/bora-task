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
import { Navigate, useSearchParams } from 'react-router-dom';
import romance from '../../assets/response_mock/romance/page_1.json';
import { convertPeriod, sort } from './functions/ranking.function.ts';
import { MultiSelectComboBox } from './ranking.comboBox.tsx';
import { defaultData } from './ranking.contants.ts';
import { ComicRankItem } from './ranking.type';

export const Ranking = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get('genre')

  const [comicsData, setComicsData] = React.useState(defaultData);
  const [tabValue, setTabValue] = React.useState(0);

  const [selectedFilters, setSelectedFilters] = React.useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // const tt =  api.get('/api/comics/romance?page=1')
  React.useEffect(()=>{
    setComicsData(sort(romance.data,selectedFilters))
  },[selectedFilters])

  return (
    <>
      <div className='ranking-container'>
        {genre!=='drama' && <Navigate to={'/ranking?genre=romance'} replace={true} />}
        <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example">
          <Tab icon={<FavoriteIcon />} label="Romance" style={{outline:'none'}} href='/ranking' />
          <Tab icon={<SportsKabaddiIcon />} label="Drama" style={{outline:'none'}} href='/ranking?genre=drama'/>
        </Tabs>
      </div>
      <MultiSelectComboBox setSelectedFilters={setSelectedFilters}/>
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
    </>

  );
};

const MediaCard = (data:ComicRankItem) => {
  const rank = data.previousRank-data.currentRank
  const fontColor = rank === 0 ? '': rank > 0 ? 'blue' : 'red'
  
  const state = data.contentsState === 
    'completed'? '완결' : convertPeriod(data.schedule?.periods)
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={data.thumbnailSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{width:320, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}} >
          <span className={`rank-text ${fontColor}`}>
            {rank === 0 ? <>-</>: rank >0 ? <>{rank}<ArrowDropUpIcon/></> :<>{rank*(-1)}<ArrowDropDownIcon/></>}
            </span>
          {data.title}
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