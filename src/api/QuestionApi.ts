import axios from 'axios';

import ApiHelper from "../helpers/ApiHelper";

import { IConfig } from "./Question.types";

class QuestionAPI {
  getQuestions = async (page = 1) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: 'https://polls.apiblueprint.org/questions',
      // url: 'https://private-anon-1afab8059f-pollsapi.apiary-mock.com/questions',
      // url: `${process.env.REACT_APP_SERVICES}/questions`,
      method: 'get',
      params: { page },
    };

    return axios.request(config as IConfig);
  }
}

export default new QuestionAPI();