import { ComicRankItem, OptionType, Period } from '../ranking.type'

export const sort = (items:Array<ComicRankItem>,filterCondition:Array<OptionType>) =>{
  let filteredItems = [...items]
  filterCondition?.forEach(el => {
    filteredItems = filteredItems.
    filter(item => el.overEqual ? item[el.key]>= el.value : item[el.key] === el.value)
  })
  return filteredItems
}

const convertKoreanDay = (day:Period) => {
  switch(day){
    case "MON" : return "월요일"
    case "TUE" : return "화요일"
    case "WED" : return "수요일"
    case "THU" : return "목요일"
    case "FRI" : return "금요일"
    case "SAT" : return "토요일"
    case "SUN" : return "일요일"
  }
}

export const convertPeriod = (period:Period[]) => {
  return `매주 ${period.map(item => convertKoreanDay(item)).join(', ')} 연재`
}