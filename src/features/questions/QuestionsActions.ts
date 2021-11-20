import { Dispatch } from 'redux';
import axios from 'axios';

import {
  GET_QUESTION_LIST,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_LIST_ERROR,
  QuestionsDispatchTypes,
} from './QuestionsActions.types';
import { IQuestion } from "../../components/Questions/Card/Card.types";
import ApiHelper from "../../helpers/ApiHelper";
import QuestionAPI from '../../api/QuestionApi';

export const getQuestionList = () => async (dispatch: Dispatch<QuestionsDispatchTypes>) => {
  try {
    dispatch({ type: GET_QUESTION_LIST });
    const res = await QuestionAPI.getQuestions();
    console.log(res);

    dispatch({
      type: GET_QUESTION_LIST_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: GET_QUESTION_LIST_ERROR,
    })
  }
}
