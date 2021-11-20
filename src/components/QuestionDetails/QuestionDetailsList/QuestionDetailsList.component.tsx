import React, { useCallback, useEffect, useState } from "react";
import moment from 'moment';

import Grid from '../../../components/Layout/Grid/Grid.component';
import QuestionDetailCard from "../QuestionDetailCard/QuestionDetailCard.component";

import { IDetailListProps } from './QuestionDetailsList.types';

import QuestionDetailsInfiniteWrapper from './QuestionDetailsList.theme';

const DefaultPlaceholderItemsCount = 5;

const QuestionDetailsList: React.FC<IDetailListProps> = (props) => {
  const {
    id,
    className,
    placeholderCount,
    data,
    dataLoading,
  } = props;

  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount;
  
  return (
    <QuestionDetailsInfiniteWrapper
      id={id}
      className={className}
    >
      {data?.length > 0 && data.map((item, index) => (
        <QuestionDetailCard
          key={item.choice + index}
          id={item.choice + index}
          className="ques-card"
          choice={item.choice}
          url={item.url}
          votes={item.votes}
        />
      ))}

      {dataLoading && Array.from(Array(placeholderItemsCount).keys()).map((index) => (
        <Grid key={index}> loading </Grid>
      ))}
    </QuestionDetailsInfiniteWrapper>
  )
}

export default QuestionDetailsList;