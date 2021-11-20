import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Grid from '../../components/Layout/Grid/Grid.component';
import QuestionList from "../../components/Questions/QuestionList/QuestionList";
import Text from "../../components/Core/Text/Text.component";
import IconTitle from "../../components/Shared/IconTitle/IconTitle.component";
import { getQuestionList } from "../../features/Questions/actions";
import { selectors as questionState } from '../../features/Questions/reducer';

import QuestionScreenWrapper from './QuestionScreen.theme';

const QuestionScreen: React.FC = (props: any) => {
	const { questionList,  isListLoading, nextPageLink } = props;
	
	const dispatch = useDispatch();

	const [pageCount, setPageCount] = useState(1);
	const moreDataAvailable = nextPageLink?.includes("next");

	const handleNextPageRequest = useCallback(() => {
		console.log(props)

		if (!isListLoading && moreDataAvailable) {
			setPageCount(pageCount + 1);
			dispatch(getQuestionList(pageCount + 1));
    }
	}, [questionList])

	useEffect(() => {
		setPageCount(1);
    dispatch(getQuestionList(pageCount));
  }, []);

	console.log(questionList);

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
					data={questionList}
					bottomHitThreshold={50}
					dataLoading={isListLoading}
					onNextPageRequested={handleNextPageRequest}
					hasMoreData={moreDataAvailable}
				/>
			</Grid>
    </QuestionScreenWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  questionList: questionState.data(state),
  isListLoading: questionState.loading(state),
  nextPageLink: questionState.nextPageLink(state),
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);