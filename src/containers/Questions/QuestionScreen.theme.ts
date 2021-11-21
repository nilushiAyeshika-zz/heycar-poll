import styled from "styled-components";

import { appTheme } from "../../theme/Theme";

export const QuestionScreenWrapper = styled.div`
	display: flex;
  justify-content: center;
  width: 100%;

  .add-new-wrapper {
    position: relative;
  }

  @media(max-width: 920px) {
    .questions-title {
      align-items: center;
      width: 24.5rem;
      padding: 0;
    }
  }
`;

export const AddNewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .formik-label {
    margin-bottom: 1rem;
  }

  .formik-field {
    height: 4rem;
    padding: 0 1rem;
    width: 100%;
    border: 1px solid #ddd;
  }

  .add-choice-button {
    min-height: 2.5rem;
  }

  .formik-error-label {
    font-size: ${appTheme.fontSizes.FONT_SIZE_XS};
    color: ${appTheme.colors.TYPOGRAPHY_ERROR};
    margin-top: 0.2rem;
  }

  .close-button {
    height: 3rem;
    min-height: 3rem;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;

    svg {
      margin-right: 0 !important;
    }
  }

  .remove-button {
    height: 3rem;
    min-height: 3rem;
    border-radius: 100%;
    margin-left: 2rem;

    svg {
      margin-right: 0 !important;
    }
  }

  .info-message {
    font-style: italic;
  }
`;

export const customModalStyles = {
  content: {
    width: '40rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 2px 6px 1px rgba(0, 22, 99, 0.12)',
    border: 'none',
    maxHeight: 'calc(100vh - 100px)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
};
