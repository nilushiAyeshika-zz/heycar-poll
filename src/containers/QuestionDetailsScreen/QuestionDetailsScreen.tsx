import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Grid from '../../components/Layout/Grid/Grid.component';
import QuestionDetail from "../../components/QuestionDetails/QuestionDetail/QuestionDetail.component";
import Text from "../../components/Core/Text/Text.component";
import IconTitle from "../../components/Shared/IconTitle/IconTitle.component";
import { getQuestionDetails } from "../../features/QuestionDetails/actions";
import { selectors as questionDetailsState } from '../../features/QuestionDetails/reducer';

import QuestionDetailsScreenWrapper from './QuestionDetailsScreen.theme';

const QuestionDetailsScreen: React.FC = (props: any) => {
	const { questionDetailsList, isListLoading } = props;

	const params = useParams();
	const dispatch = useDispatch();
	const { questionId } = params;

	useEffect(() => {
		const id = parseInt(questionId as string);
		console.log(id)
    dispatch(getQuestionDetails(id));
  }, []);

	console.log(questionDetailsList)

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
        <QuestionDetail
					data={questionDetailsList}
					loading={isListLoading}
				/>
			</Grid>
    </QuestionDetailsScreenWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  questionDetailsList: questionDetailsState.data(state),
  isListLoading: questionDetailsState.loading(state),
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsScreen);