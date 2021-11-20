export interface QuestionListProps<RowItem> {
	className?: string;
  placeholderCount?: number
  data: Array<RowItem>
  dataLoading?: boolean
  bottomHitThreshold?: number
  onNextPageRequested?: () => any
}