import styled from "styled-components";

export const QuestionScreenWrapper = styled.div`
	display: flex;
  justify-content: center;
  width: 100%;

  @media(max-width: 920px) {
    .questions-title {
      align-items: center;
      width: 24.5rem;
      padding: 0;
    }
  }
`;

export default QuestionScreenWrapper;
