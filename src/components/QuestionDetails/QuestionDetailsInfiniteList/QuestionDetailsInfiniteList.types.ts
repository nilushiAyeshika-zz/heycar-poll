export interface DetailInfiniteProps<RowItem> {
	id: string;
	className?: string;
  placeholderCount?: number
  data: Array<RowItem>
  dataLoading?: boolean
  bottomHitThreshold?: number
  onNextPageRequested?: () => any
}