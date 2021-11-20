import axios from 'axios';

import ApiHelper from "../helpers/ApiHelper";

import { IConfig } from "./Question.types";

class QuestionAPI {
  getQuestions = async () => {
  // export const getQuestionList = async (keyword, limit, offset, orderBy = 'CreatedDate') => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_SERVICES}/questions`,
      method: 'get',
      // params: { keyword, limit, offset, orderBy },
    };

    return axios.request(config as IConfig);
  }
}

export default new QuestionAPI();