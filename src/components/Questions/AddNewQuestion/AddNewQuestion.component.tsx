import React, { useEffect, useCallback, useState } from "react";
import Modal from 'react-modal';

import Grid from "../../Layout/Grid/Grid.component";

import { AddNewQuestionProps } from './AddNewQuestion.types';

import { AddNewQuestionWrapper } from './AddNewQuestion.theme';

const AddNewQuestion: React.FC<AddNewQuestionProps> = (props) => {
  const {
    className,
    modalIsOpen,
    afterOpenModal,
    closeModal,
    style,
    children,
  } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={className}
      style={style}
      ariaHideApp={false}
    >
      <AddNewQuestionWrapper>
        {children}
      </AddNewQuestionWrapper>
    </Modal>
  )
}

export default AddNewQuestion;