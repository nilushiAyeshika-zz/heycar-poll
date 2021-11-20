import styled from "styled-components";

import { appTheme  } from "../../../theme/Theme";

const QuestionDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50rem);
  overflow-y: auto;

  .ques-card {
    &:nth-child(2n) {
      background-color: ${appTheme.colors.GRID_ROW_BG};
    }
`;

export default QuestionDetailsWrapper;