export interface DataType {
  idx: number;
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
  createAt: string;
  endDate: string;
  scrap: number;
  flag: number;
}

export interface ItemType {
  index: number;
  item: DataType;
  onPress: () => void;
}
