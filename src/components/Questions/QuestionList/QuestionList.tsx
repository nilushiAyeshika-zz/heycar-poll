import React, { useEffect, useCallback, useState } from "react";
import debounce from 'debounce';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from "../Card/Card.component";
import Grid from "../../Layout/Grid/Grid.component";

import { QuestionListProps } from './QuestionList.types';

import QuestionListWrapper from './QuestionList.theme';

const DefaultPlaceholderItemsCount = 5;

const QuestionList: React.FC<QuestionListProps<any>> = (props) => {
  const {
    className,
    placeholderCount,
    data,
    dataLoading,
    hasMoreData,
    onNextPageRequested,
  } = props;

  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount;

	const handleNextPageRequest = useCallback(() => {
    onNextPageRequested();
	}, [onNextPageRequested]);
  console.log(data)

  return (
    <QuestionListWrapper
      className={className}
    >
      <Grid className="card-list-inner">
        <InfiniteScroll
          dataLength={data.length}
          next={handleNextPageRequest}
          hasMore={hasMoreData}
          loader={<h4>Loading...</h4>}
          refreshFunction={() => null}
          pullDownToRefreshThreshold={50}
          height={200}
        >
          {data.length > 0 && data.map(item => {
            const choiceLength = item.choices.length;
            const publishedAt = moment(item.published_at).format('YYYY/MM/DD');

            return (
              <Card
                key={item.published_at}
                title={item.question}
                publishedAt={publishedAt}
                choices={choiceLength}
                className="question-card"
                onClick={() => console.log('hii')}
              />
            );
          })}
          {/* <Grid className="card-list-inner">
        <Card title="Question one"
          className="question-card"
          onClick={() => console.log('hii')}
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Two"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Three"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Four"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Five"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Six"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Seven"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Four"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Five"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Six"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Seven"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
      </Grid> */}
        </InfiniteScroll>
      </Grid>




      {/* <Grid className="card-list-inner">
        {data.length > 0 && data.map(item => {
          const choiceLength = item.choices.length;
          const publishedAt = moment(item.published_at).format('YYYY/MM/DD');

          return (
            <Card
              key={item.published_at}
              title={item.question}
              publishedAt={publishedAt}
              choices={choiceLength}
              className="question-card"
              onClick={() => console.log('hii')}
            />
          );
        })}
      </Grid> */}
    </QuestionListWrapper>
  )
}

export default QuestionList;