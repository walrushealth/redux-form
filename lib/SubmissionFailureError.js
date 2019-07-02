'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports['default'] = void 0

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _es6Error = _interopRequireDefault(require('es6-error'))

// SubmissionFailureError does not extend functionality. It is defined as a
// mechanism to determine error type in `handleSumit`
var SubmissionFailureError =
  /*#__PURE__*/
  (function(_ExtendableError) {
    ;(0, _inheritsLoose2['default'])(SubmissionFailureError, _ExtendableError)

    function SubmissionFailureError() {
      return _ExtendableError.apply(this, arguments) || this
    }

    return SubmissionFailureError
  })(_es6Error['default'])

var _default = SubmissionFailureError
exports['default'] = _default
