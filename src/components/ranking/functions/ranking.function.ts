import { ComicRankItem, OptionType, Period } from '../ranking.type'

export const sort = (
  items: Array<ComicRankItem>, 
  filterCondition: Array<OptionType>
  ) =>{
  let filteredItems = [...items]

  filterCondition?.forEach(el => {
    filteredItems = filteredItems.
    filter(item => el.overEqual ? item[el.key]>= el.value : item[el.key] === el.value)
  })

  return filteredItems
}

const convertKoreanDay = {
  MON: "월요일",
  TUE: "화요일",
  WED: "수요일",
  THU: "목요일",
  FRI: "금요일",
  SAT: "토요일",
  SUN: "일요일"
}

export const convertPeriod = (period:Period[]) => {
  return `매주 ${period.map(item => convertKoreanDay[item]).join(' · ')} 연재`
}

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

