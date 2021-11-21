import React, { useCallback, useEffect, useState } from 'react'

import Grid from '../../../components/Layout/Grid/Grid.component'
import QuestionDetailCard from '../QuestionDetailCard/QuestionDetailCard.component'
import QuestionListContentLoader from '../QuestionListContentLoader/QuestionListContentLoader.component'

import { IDetailListProps } from './QuestionDetailsList.types'

import QuestionDetailsInfiniteWrapper from './QuestionDetailsList.theme'

const DefaultPlaceholderItemsCount = 3

const QuestionDetailsList: React.FC<IDetailListProps> = (props) => {
  const {
    id, className, placeholderCount, data, dataLoading,
    onHandleVoteClick, checkedChoiceId 
} = props

  const [checkedId, setCheckedId] = useState(checkedChoiceId)

  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount

  const handleVoteClick = useCallback((event, callbackValue) => {
    setCheckedId(callbackValue.id)
    onHandleVoteClick(callbackValue)
  }, [onHandleVoteClick])

  useEffect(() => {
    setCheckedId(checkedChoiceId)
  }, [checkedChoiceId])

  return (
    <QuestionDetailsInfiniteWrapper id={id} className={className}>
      {data?.length > 0 &&
        data.map((item, index) => (
          <QuestionDetailCard
            key={item.choice + index}
            id={item.choice + index}
            questionId={id}
            className="ques-card"
            choice={item.choice}
            url={item.url}
            votes={item.votes}
            onVoteClick={handleVoteClick}
            checkedId={checkedId}
          />
        ))}

      {dataLoading &&
        Array.from(Array(placeholderItemsCount).keys()).map((index) => (
          <QuestionListContentLoader key={index} />
        ))}
    </QuestionDetailsInfiniteWrapper>
  )
}

export default QuestionDetailsList
