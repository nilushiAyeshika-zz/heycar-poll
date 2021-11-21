// const ApiHelper = Object.freeze({
//   GET_QUESTION_LIST_API: `${process.env.REACT_APP_SERVICES}/questions`,
//   // GET_CAMPAIGN_LIST_API: `${process.env.REACT_APP_SERVICES}/campaign`,
// })

class ApiHelper {
  createHeader = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  })
}

export default new ApiHelper()
