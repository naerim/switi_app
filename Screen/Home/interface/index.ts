export interface DataType {
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
}

export interface TagType {
  nameList: string[];
  setSelectCategory: (prev: (prev: number[]) => number[]) => void;
  setSelectArea: (prev: (prev: number[]) => number[]) => void;
  setSelectTarget: (prev: (prev: number[]) => number[]) => void;
}
