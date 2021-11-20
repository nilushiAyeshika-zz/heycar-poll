import React from "react";

import Grid from '../../../components/Layout/Grid/Grid.component';
import Text from "../../Core/Text/Text.component";

import { IDetailCard } from './QuestionDetailCard.types';

import QuestionDetailCardWrapper from './QuestionDetailCard.theme';

const QuestionDetailCard: React.FC<IDetailCard> = (props) => {
  const {
    id,
    className,
    choice,
    votes,
	} = props;

  return (
    <QuestionDetailCardWrapper
      id={id}
      className={className}
    >
      <Grid className="details-choice">
        <Text size="m">{choice}</Text>
      </Grid>
      <Grid className="details-vote-amount">
        <Text size="m">{votes}</Text>
      </Grid>
      <Grid className="details-percentage">
        <Text size="m">Percentage%</Text>
      </Grid>
      <Grid className="details-vote">
        Vote
      </Grid>
    </QuestionDetailCardWrapper>
  )
}

export default QuestionDetailCard;