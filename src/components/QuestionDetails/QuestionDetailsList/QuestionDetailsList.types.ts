import { IDetailListChoices } from "../QuestionDetail/QuestionDetail.types";

export interface IDetailListProps {
	id: string;
	className?: string;
  placeholderCount?: number
  // data: any
  data: IDetailListChoices[]
  dataLoading: boolean
}