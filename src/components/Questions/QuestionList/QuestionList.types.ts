export interface QuestionListProps<RowItem> {
  className?: string
  placeholderCount?: number
  data: Array<RowItem>
  hasMoreData: boolean
  dataLoading?: boolean
  bottomHitThreshold?: number
  onNextPageRequested: () => any
}
