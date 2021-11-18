export interface DataType {
  Regions: any;
  Applies: any;
  User: { nickname: string };
  idUser: number;
  Images: any;
  Interests: any;
  States: any;
  gu: string;
  id: number;
  username: string;
  online_flag: number;
  title: string;
  desc: string;
  category: string;
  address: string;
  target: string;
  recruit_num: string;
  detail_address: string;
  period: string;
  contact: string;
  createdAt: string;
  endDate: Date;
  scrapCount: number;
  flag: boolean;
  Gus: any;
}

export interface ItemType {
  index: number;
  item: DataType;
  paddingHorizontal?: number;
}

export interface TagType {
  nameList: string[];
  setSelectCategory: (prev: (prev: number[]) => number[]) => void;
  setSelectArea: (prev: (prev: number[]) => number[]) => void;
  setSelectTarget: (prev: (prev: number[]) => number[]) => void;
  tagList: { id: number; name: string; category: string }[];
  setTagList: (
    prev: (
      prev: { id: number; name: string; category: string }[]
    ) => { id: number; name: string; category: string }[]
  ) => void;
}

export interface CheckProps {
  id: number;
  endDate: string;
  title: string;
  end_flag: boolean;
}
