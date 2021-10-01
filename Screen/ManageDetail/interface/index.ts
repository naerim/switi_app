export interface ManageType {
  id: number;
  apply: number;
  nickname: string;
  email: string;
  apply_detail: string;
  profilepath: string;
  studyMember: { contact: string };
}

export interface ItemType {
  index: number;
  item: ManageType;
}
