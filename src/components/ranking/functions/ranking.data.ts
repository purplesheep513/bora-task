import romance_1 from "../../../assets/response_mock/romance/page_1.json";
import romance_2 from "../../../assets/response_mock/romance/page_2.json";
import romance_3 from "../../../assets/response_mock/romance/page_3.json";
import romance_4 from "../../../assets/response_mock/romance/page_4.json";
import romance_5 from "../../../assets/response_mock/romance/page_5.json";

import drama_1 from "../../../assets/response_mock/drama/page_1.json";
import drama_2 from "../../../assets/response_mock/drama/page_2.json";
import drama_3 from "../../../assets/response_mock/drama/page_3.json";
import drama_4 from "../../../assets/response_mock/drama/page_4.json";
import drama_5 from "../../../assets/response_mock/drama/page_5.json";

const variable = {
  romance_1: romance_1,
  romance_2: romance_2,
  romance_3: romance_3,
  romance_4: romance_4,
  romance_5: romance_5,
  drama_1: drama_1,
  drama_2: drama_2,
  drama_3: drama_3,
  drama_4: drama_4,
  drama_5: drama_5,
};

export const getData = (genre: string, page: number) => {
  const comicsData = variable[`${genre}_${page}`];

  return comicsData ? comicsData.data : [];
};
