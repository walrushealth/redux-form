// @flow
import isPromise from 'is-promise'
import type { SubmitFunction } from './types'
import type { Props } from './createReduxForm'
import SubmissionError from './SubmissionError'
import SubmissionFailureError from './SubmissionFailureError'
import type { List } from 'immutable'

const isSubmissionError = error => error && error.name === SubmissionError.name
const isSubmissionFailureError = error =>
  error && error.name === SubmissionFailureError.name

const mergeErrors = ({ asyncErrors, syncErrors }) =>
  asyncErrors && typeof asyncErrors.merge === 'function'
    ? asyncErrors.merge(syncErrors).toJS()
    : { ...asyncErrors, ...syncErrors }

let isImmutableList
try {
  // ImmutableJS isList implementation if available
  // eslint-disable-next-line import/no-extraneous-dependencies
  const { List } = require('immutable')
  isImmutableList = List.isList
} catch (err) {
  isImmutableList = (maybeList: any) => false
}

// fields may be an Immutable List which cannot be spread
// convert the fields to an array if necessary
const makeFieldsArray = (fields: string[] | List<string>) =>
  isImmutableList(fields) ? ((fields: any): List<string>).toArray() : fields

const executeSubmit = (
  submit: SubmitFunction,
  fields: string[] | List<string>,
  props: Props
) => {
  const {
    dispatch,
    submitAsSideEffect,
    onSubmitFail,
    onSubmitSuccess,
    startSubmit,
    stopSubmit,
    setSubmitFailed,
    setSubmitSucceeded,
    values
  } = props

  fields = makeFieldsArray(fields)

  let result
  try {
    result = submit(values, dispatch, props)
  } catch (submitError) {
    let error
    if (isSubmissionError(submitError)) {
      error = submitError.errors
    } else if (isSubmissionFailureError(submitError)) {
      error = submitError.message
    }

    stopSubmit(error)
    setSubmitFailed(...fields)
    if (onSubmitFail) {
      onSubmitFail(error, dispatch, submitError, props)
    }
    if (error || onSubmitFail) {
      // if you've provided an onSubmitFail callback, don't re-throw the error
      return error
    } else {
      throw submitError
    }
  }
  if (submitAsSideEffect) {
    if (result) {
      dispatch(result)
    }
  } else {
    if (isPromise(result)) {
      startSubmit()
      return result.then(
        submitResult => {
          stopSubmit()
          setSubmitSucceeded()
          if (onSubmitSuccess) {
            onSubmitSuccess(submitResult, dispatch, props)
          }
          return submitResult
        },
        submitError => {
          let error
          if (isSubmissionError(submitError)) {
            error = submitError.errors
          } else if (isSubmissionFailureError(submitError)) {
            error = submitError.message
          }

          stopSubmit(error)
          setSubmitFailed(...fields)
          if (onSubmitFail) {
            onSubmitFail(error, dispatch, submitError, props)
          }
          if (error || onSubmitFail) {
            // if you've provided an onSubmitFail callback, don't re-throw the error
            return error
          } else {
            throw submitError
          }
        }
      )
    } else {
      setSubmitSucceeded()
      if (onSubmitSuccess) {
        onSubmitSuccess(result, dispatch, props)
      }
    }
  }

  return result
}

const handleSubmit = (
  submit: SubmitFunction,
  props: Props,
  valid: boolean,
  asyncValidate: Function,
  fields: string[] | List<string>
) => {
  const {
    dispatch,
    onSubmitFail,
    setSubmitFailed,
    syncErrors,
    asyncErrors,
    touch,
    persistentSubmitErrors
  } = props

  fields = makeFieldsArray(fields)

  touch(...fields) // mark all fields as touched

  if (valid || persistentSubmitErrors) {
    const asyncValidateResult = asyncValidate && asyncValidate()
    if (asyncValidateResult) {
      return asyncValidateResult
        .then(asyncErrors => {
          if (asyncErrors) {
            throw asyncErrors
          }
          return executeSubmit(submit, fields, props)
        })
        .catch(asyncErrors => {
          setSubmitFailed(...fields)
          if (onSubmitFail) {
            onSubmitFail(asyncErrors, dispatch, null, props)
          }
          return Promise.reject(asyncErrors)
        })
    } else {
      return executeSubmit(submit, fields, props)
    }
  } else {
    setSubmitFailed(...fields)
    const errors = mergeErrors({ asyncErrors, syncErrors })
    if (onSubmitFail) {
      onSubmitFail(errors, dispatch, null, props)
    }
    return errors
  }
}

export default handleSubmit
