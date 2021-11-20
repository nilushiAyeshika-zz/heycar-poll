import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import Grid from '../../../components/Layout/Grid/Grid.component';
import Text from "../../Core/Text/Text.component";
import IconTitle from "../../Shared/IconTitle/IconTitle.component";
import QuestionDetailsList from "../QuestionDetailsList/QuestionDetailsList.component";
import Button from "../../Core/Button/Button.component";
import { generateRandomColors, isLightColor } from "../../../utils/theme.utils";

import { IDetails } from "./QuestionDetail.types";
import QuestionDetailsWrapper from './QuestionDetail.theme';

const QuestionDetail: React.FC<IDetails> = (props) => {
  const { data, loading } = props;
  const iconBgColor = generateRandomColors('qestion one');
  
  return (
    <Grid direction="column">
      <QuestionDetailsWrapper>
        <Grid className="vote-body-wrapper">
          <Grid>
              <IconTitle
                icon={<FontAwesomeIcon icon={faQuestion} />}
                className="card-icon-title"
                backgroundColor={iconBgColor}
                isLightIcon={isLightColor(iconBgColor)}
              >
                <Text size="l" weight="bold">Question:</Text>
                <Text size="l">&nbsp; {data?.question}</Text>
              </IconTitle>
            </Grid>
          <QuestionDetailsList
            id="Details-Infinite-List"
            data={data?.choices}
            dataLoading={loading}
          />
        </Grid>
        <Button
          onClick={() => console.log('sfsdf')}
          width="20rem"
          margin="4rem 0"
          className="vote-button"
        >
          <Text size="m" color="typo-white">Save Votes</Text>
        </Button>
      </QuestionDetailsWrapper>
    </Grid>
  )
}

export default QuestionDetail;