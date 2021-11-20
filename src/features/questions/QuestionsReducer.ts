import {
  GET_QUESTION_LIST,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_LIST_ERROR,
  QuestionsDispatchTypes,
} from './QuestionsActions.types';
import { IQuestionDefaultState } from './QuestionsReducer.types';

const defaultState: IQuestionDefaultState = {
  loading: false,
  data: [],
}

const overviewReducer = (
  state: IQuestionDefaultState = defaultState,
  action: QuestionsDispatchTypes
): IQuestionDefaultState => {
  switch (action.type) {
    case GET_QUESTION_LIST:
      return {
        ...state,
        loading: true,
      }
    case GET_QUESTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case GET_QUESTION_LIST_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default overviewReducer
