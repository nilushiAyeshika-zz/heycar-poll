import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import Grid from '../../components/Layout/Grid/Grid.component';
import QuestionDetail from "../../components/QuestionDetails/QuestionDetail/QuestionDetail.component";
import Text from "../../components/Core/Text/Text.component";
import IconTitle from "../../components/Shared/IconTitle/IconTitle.component";

import QuestionDetailsScreenWrapper from './QuestionDetailsScreen.theme';

const QuestionDetailsScreen: React.FC = () => {
  return (
    <QuestionDetailsScreenWrapper>
			<Grid className="question-inner-wrapper" alignItems="center" width="122.2rem" margin="4rem 0" direction="column">
				<IconTitle
					margin="0 0 4rem 0"
					icon={<FontAwesomeIcon icon={faList} />}
          backgroundColor="rgb(234, 93, 136)"
					className="questions-title"
				>
					<Text size="xl">Questions Detail</Text>
				</IconTitle>
        <QuestionDetail />
			</Grid>
    </QuestionDetailsScreenWrapper>
  )
}

export default QuestionDetailsScreen;