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

  getQuestionDetails = async (id: number) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `https://polls.apiblueprint.org/questions/${id}`,
      method: 'get',
    };

    return axios.request(config as IConfig);
  }

  saveQuestionVotes =
    async (question_id: number, choice_id: number, url: string, choice: string) => {
      const config = {
        headers: ApiHelper.createHeader(),
        url: `https://polls.apiblueprint.org/questions/${question_id}/choices/${choice_id}`,
        method: 'post',
        data: { 
          url,
          votes: 1,
          choice
        },
      };

    return axios.request(config as IConfig);
  }
}

export default new QuestionAPI();