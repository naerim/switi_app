export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
}

export interface dataType {
  key: number;
  name: string;
}

export interface itemType {
  index: number;
  item: dataType;
}

export interface TagType {
  nameList: string[];
  select: number[];
  setSelect: (prev: (prev: number[]) => number[]) => void;
  data: dataType[];
}
