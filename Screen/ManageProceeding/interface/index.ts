export interface ManageType {
  end_flag: boolean;
  id: number;
  apply: number;
  nickname: string;
  email: string;
  apply_detail: string;
  profilepath: string;
  studyMember: {
    leader: boolean;
    contact: string;
  };
  User: any;
  idUser: number;
  idStudy: number;
}

export interface ItemType {
  proceeding?: boolean; // 진행중인지 모집글인지
  idStudy: number;
  titleStudy?: string;
  index: number;
  item: ManageType;
  desc?: boolean;
  leader?: boolean;
}
