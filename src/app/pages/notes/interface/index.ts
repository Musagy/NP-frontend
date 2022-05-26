export interface NewNote {
  title: string;
  content: string;
}
export interface Note extends NewNote {
  _id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}
