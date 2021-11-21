import React, { useEffect, useCallback, useState } from 'react'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import Card from '../Card/Card.component'
import Grid from '../../Layout/Grid/Grid.component'

import { QuestionListProps } from './QuestionList.types'

import QuestionListWrapper from './QuestionList.theme'

const DefaultPlaceholderItemsCount = 3

const QuestionList: React.FC<QuestionListProps<any>> = (props) => {
  const { className, placeholderCount, data, dataLoading, hasMoreData, onNextPageRequested } = props

  const navigate = useNavigate()
  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount

  const handleNextPageRequest = useCallback(() => {
    onNextPageRequested()
  }, [onNextPageRequested])

  const handleQuestionItemClick = useCallback((url) => {
    const questionId = url.substring(url.lastIndexOf('/') + 1)
    navigate(`question/${questionId}`)
  }, [])

  const renderInfiniteScrollView = () => (
    <InfiniteScroll
      dataLength={data.length}
      next={handleNextPageRequest}
      hasMore={hasMoreData}
      loader={<h4>Loading...</h4>}
      refreshFunction={() => null}
      pullDownToRefreshThreshold={50}
      // height={200}
    >
      {data.length > 0 &&
        data.map((item) => {
          const choiceLength = item.choices.length
          const publishedAt = moment(item.published_at).format('YYYY/MM/DD')

          return (
            <Card
              key={item.published_at}
              title={item.question}
              publishedAt={publishedAt}
              choices={choiceLength}
              className="question-card"
              onClick={handleQuestionItemClick}
              callbackValue={item.url}
            />
          )
        })}
    </InfiniteScroll>
  )

  const renderLoadingView = () => {
    return Array.from(Array(placeholderItemsCount).keys()).map((index) => (
      <Grid key={index}> loading </Grid>
    ))
  }

  return (
    <QuestionListWrapper className={className}>
      <Grid className="card-list-inner">
        {dataLoading ? renderLoadingView() : renderInfiniteScrollView()}
      </Grid>
    </QuestionListWrapper>
  )
}

export default QuestionList
