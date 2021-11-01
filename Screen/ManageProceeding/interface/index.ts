export interface ManageType {
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
  index: number;
  item: ManageType;
  desc?: boolean;
  leader?: boolean;
}
