import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import Grid from '../../components/Layout/Grid/Grid.component'
import QuestionList from '../../components/Questions/QuestionList/QuestionList'
import Text from '../../components/Core/Text/Text.component'
import IconTitle from '../../components/Shared/IconTitle/IconTitle.component'
import { getQuestionList } from '../../features/Questions/actions'
import { selectors as questionState } from '../../features/Questions/reducer'
import Button from '../../components/Core/Button/Button.component'
import AddNewQuestion from '../../components/Questions/AddNewQuestion/AddNewQuestion.component'
import QuestionAPIService from '../../services/Questions'

import { IAddNewFormValues } from './QuestionScreen.types'

import { QuestionScreenWrapper, customModalStyles, AddNewWrapper } from './QuestionScreen.theme'

const QuestionScreen: React.FC = (props: any) => {
  const { questionList, isListLoading, nextPageLink } = props

  const dispatch = useDispatch()

  const [pageCount, setPageCount] = useState(1)
  const [isAddNewOpen, setIsAddNewOpen] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const moreDataAvailable = nextPageLink?.includes('next')
  const initialValues: IAddNewFormValues = { question: '', choices: [''] }

  const handleNextPageRequest = useCallback(() => {
    if (!isListLoading && moreDataAvailable) {
      setPageCount(pageCount + 1)
      dispatch(getQuestionList(pageCount + 1))
    }
  }, [questionList])

  const handleOpenAddNewModal = useCallback(() => {
    setIsAddNewOpen(true)
  }, [isAddNewOpen])

  const handleCloseAddNewModal = useCallback(() => {
    setIsAddNewOpen(false)
  }, [isAddNewOpen])

  const handleSubmit = useCallback(async (values, actions) => {
    actions.setSubmitting(false)
    setButtonDisabled(true)

    const apiData = await QuestionAPIService.addNewQuestion(values.question, values.choices)

    if (apiData) {
      dispatch(getQuestionList(1))
      toast.success('Question added successfully', { autoClose: 1500 })
    }

    setButtonDisabled(false)
    setIsAddNewOpen(false)
  }, [])

  const schema = Yup.object().shape({
    question: Yup.string().trim().required('Required Field'),
    choices: Yup.array().of(Yup.string().trim().required('Required Field')),
  })

  useEffect(() => {
    setPageCount(1)
    dispatch(getQuestionList(pageCount))
  }, [])

  // Add new question form
  const renderFormContent = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      validationSchema={schema}
    >
      {({ values }: any) => (
        <Form>
          <Grid direction="column">
            <label htmlFor="question" className="formik-label">
              Question:
            </label>
            <Field id="question" name="question" placeholder="Question" className="formik-field" />
            <ErrorMessage name="question" component="div" className="formik-error-label" />
          </Grid>
          <FieldArray name="choices">
            {({ remove, push }) => (
              <Grid direction="column">
                {values.choices.length > 0 &&
                  values.choices.map((choice: string, index: number) => (
                    <Grid key={index} direction="column">
                      <Grid direction="column" margin="2rem 0 0 0">
                        <label htmlFor={`choices.${index}`} className="formik-label">
                          Choice {index + 1}:
                        </label>
                        <Grid alignItems="center">
                          <Field
                            name={`choices.${index}`}
                            placeholder="Choice Name"
                            className="formik-field"
                          />
                          {index > 0 && (
                            <Button
                              onClick={() => remove(index)}
                              width="2rem"
                              startIcon={<FontAwesomeIcon icon={faTimes} />}
                              backgroundColor="button-secondary"
                              hoverColor="button-secondary-hover"
                              className="remove-button"
                            />
                          )}
                        </Grid>
                        <ErrorMessage
                          name={`choices.${index}`}
                          component="div"
                          className="formik-error-label"
                        />
                      </Grid>
                    </Grid>
                  ))}
                <Button
                  width="14rem"
                  height="3.5rem"
                  margin="2rem 0 0 0"
                  className="add-choice-button"
                  onClick={() => push('')}
                  disabled={values.choices.length === 4}
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
                  backgroundColor="button-secondary"
                  hoverColor="button-secondary-hover"
                >
                  <Text size="m" color="typo-white">
                    Add Choice
                  </Text>
                </Button>
                <Text className="info-message" size="xs" margin="1rem 0 2rem 0">
                  You can add only maximum 04 choices
                </Text>
              </Grid>
            )}
          </FieldArray>
          <Grid justifyContent="flex-end">
            <Button
              type="submit"
              width="15rem"
              height="4.5rem"
              margin="4rem 0 0 0"
              disabled={buttonDisabled}
            >
              <Text size="m" color="typo-white">
                Add
              </Text>
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )

  return (
    <QuestionScreenWrapper>
      <Grid
        alignItems="center"
        margin="4rem 0"
        padding="0 5rem"
        direction="column"
        className="question-screen-wrapper"
      >
        <Grid>
          <IconTitle
            margin="0 0 4rem 0"
            icon={<FontAwesomeIcon icon={faRocket} />}
            className="questions-title"
          >
            <Text size="xl">Questions</Text>
          </IconTitle>
          <Button
            onClick={handleOpenAddNewModal}
            width="20rem"
            height="4.5rem"
            className="vote-button"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            <Text size="m" color="typo-white">
              Add New
            </Text>
          </Button>
        </Grid>
        <QuestionList
          data={questionList}
          bottomHitThreshold={50}
          dataLoading={isListLoading}
          onNextPageRequested={handleNextPageRequest}
          hasMoreData={moreDataAvailable}
        />
      </Grid>
      {isAddNewOpen && (
        <AddNewQuestion
          modalIsOpen={isAddNewOpen}
          closeModal={handleCloseAddNewModal}
          style={customModalStyles}
        >
          <AddNewWrapper>
            <Text size="l" margin="0 0 3rem 0">
              Add New Question
            </Text>
            <Button
              onClick={handleCloseAddNewModal}
              width="2rem"
              className="close-button"
              startIcon={<FontAwesomeIcon icon={faTimes} />}
            />
            {renderFormContent()}
          </AddNewWrapper>
        </AddNewQuestion>
      )}
    </QuestionScreenWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  questionList: questionState.data(state),
  isListLoading: questionState.loading(state),
  nextPageLink: questionState.nextPageLink(state),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
