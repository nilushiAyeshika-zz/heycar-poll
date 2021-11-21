import styled from 'styled-components'

export const QuestionDetailsScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1300px) {
    .question-inner-wrapper {
      width: 100%;
      padding: 0 4rem;
    }
  }

  @media (max-width: 920px) {
    .questions-title {
      align-items: center;
      width: 31.5rem;
      padding: 0;
    }
  }
`

export default QuestionDetailsScreenWrapper
