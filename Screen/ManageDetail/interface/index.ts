export interface ManageType {
  id: number;
  apply: number;
  idStudy: number;
  idUser: number;
  contact: string;
  apply_detail: string;
}

export interface ItemType {
  index: number;
  item: ManageType;
}
