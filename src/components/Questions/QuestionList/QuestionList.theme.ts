import styled from "styled-components";

const QuestionListWrapper = styled.div`
	display: flex;
  height: calc(100vh - 16.5rem);
  overflow-y: auto;
  width: 100%;
  justify-content: center;
  padding: 2rem 0;
  flex-wrap: wrap;

  .question-card {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .card-list-inner {
    display: flex;
    width: 122.2rem;
    flex-wrap: wrap;
  }

  @media(max-width: 1300px) {
    .question-card {
      &:nth-child(3n) {
        margin-right: 1.5rem;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    .card-list-inner{
      width: 81.2rem;
    }
  }

  @media(max-width: 920px) {
    .question-card {
      margin-right: 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    .card-list-inner {
      width: 40.6rem;
    }
  }

  @media(max-width: 460px) {
    .question-inner-wrapper {
      width: 100%;
      padding: 0 2rem;
    }

    .card-list-inner{
      width: 100%;
      padding: 0 2rem;
    }
  }
`;

export default QuestionListWrapper;