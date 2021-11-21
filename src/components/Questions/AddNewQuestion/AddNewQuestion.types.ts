import React from 'react'

export interface AddNewQuestionProps {
  className?: string
  modalIsOpen: boolean
  afterOpenModal?: () => any
  closeModal: () => any
  children: React.ReactNode
  style?: any
}
