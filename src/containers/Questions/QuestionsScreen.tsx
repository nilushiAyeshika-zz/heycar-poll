import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import Grid from '../../components/Layout/Grid/Grid.component';
import QuestionList from "../../components/Questions/QuestionList/QuestionList";
import Text from "../../components/Core/Text/Text.component";
import IconTitle from "../../components/Shared/IconTitle/IconTitle.component";
import { getQuestionList } from "../../features/questions/QuestionsActions";
import QuestionScreenWrapper from './QuestionScreen.theme';

const QuestionScreen: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
    dispatch(getQuestionList());
  }, []);

  return (
    <QuestionScreenWrapper>
			<Grid alignItems="center" margin="4rem 0" direction="column" className="question-screen-wrapper">
				<IconTitle
					margin="0 0 4rem 0"
					padding="0 0 0 5rem"
					icon={<FontAwesomeIcon icon={faRocket} />}
					className="questions-title"
				>
					<Text size="xl">Questions</Text>
				</IconTitle>
				<QuestionList
					data={[]}
					bottomHitThreshold={200}
				/>
			</Grid>
    </QuestionScreenWrapper>
  )
}

export default QuestionScreen;