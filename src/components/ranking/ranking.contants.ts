import { ComicRankItem } from './ranking.type'

export const filterOptions = [
  { title: '연재중', key:'contentsState', value:'scheduled'},
  { title: '완결', key:'contentsState', value:'completed' },
  { title: '무료회차 3개 이상', key:'freedEpisodeSize', value:'3', overEqual: true },
  { title: '단행본 작품', key:'isPrint', value: true },
]

export const defaultData:ComicRankItem[] = [
  {
    id: 0, // 작품 id
    alias: null, // 작품 별칭
    title: null, // 작품 타이틀
    artists: [{name:null, role:null, id: null}], // 작가 정보
    schedule: {
     periods: [], // 연재 요일
    },
    genres: [], // 작품 장르
    freedEpisodeSize: null, // 무료회차 수
    contentsState: null, // 연재, 완결 값
    currentRank: null, // 현재 랭킹
    previousRank: null, // 이전 랭킹
    updatedAt: null, // 업데이트 일자
    isPrint: null, // 단행본 여부
    thumbnailSrc:null,
   }
]