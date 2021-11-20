import styled from "styled-components";

const QuestionDetailCardWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
  min-height: 6.5rem;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  .details-choice {
    display: flex;
    width: 40%;
  }

  .details-vote-amount {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .details-percentage {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .details-vote {
    display: flex;
    width: 20%;
    justify-content: center;
  }

`;

export default QuestionDetailCardWrapper;