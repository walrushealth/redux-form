import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose'
import ExtendableError from 'es6-error' // SubmissionFailureError does not extend functionality. It is defined as a
// mechanism to determine error type in `handleSumit`

var SubmissionFailureError =
  /*#__PURE__*/
  (function(_ExtendableError) {
    _inheritsLoose(SubmissionFailureError, _ExtendableError)

    function SubmissionFailureError() {
      return _ExtendableError.apply(this, arguments) || this
    }

    return SubmissionFailureError
  })(ExtendableError)

export default SubmissionFailureError
