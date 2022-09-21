import { Title } from "../title/Title";

export type Project = {
  createdAt: Date;
  id: string;
  projectName: string;
  titles?: Array<Title>;
  updatedAt: Date;
};
