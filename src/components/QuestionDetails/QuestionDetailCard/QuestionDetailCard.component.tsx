import React from "react";

import Grid from '../../../components/Layout/Grid/Grid.component';
import Text from "../../Core/Text/Text.component";

import { DetailCardProps } from './QuestionDetailCard.types';

import QuestionDetailCardWrapper from './QuestionDetailCard.theme';

const QuestionDetailCard: React.FC<DetailCardProps> = (props) => {
  const {
    id,
    className,
	} = props;

  return (
    <QuestionDetailCardWrapper
      id={id}
      className={className}
    >
      <div className="details-choice">
        <Text size="m">Choice</Text>
      </div>
      <div className="details-vote-amount">
        <Text size="m">Votes</Text>
      </div>
      <div className="details-percentage">
        <Text size="m">Percentage%</Text>
      </div>
      <div className="details-vote">
        Vote
      </div>
    </QuestionDetailCardWrapper>
  )
}

export default QuestionDetailCard;