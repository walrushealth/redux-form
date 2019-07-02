'use strict'

exports.__esModule = true
exports['default'] = void 0

var createGetFormFailure = function createGetFormFailure(_ref) {
  var getIn = _ref.getIn
  return function(form, getFormState) {
    return function(state) {
      var nonNullGetFormState =
        getFormState ||
        function(state) {
          return getIn(state, 'form')
        }

      return getIn(nonNullGetFormState(state), form + '.failure')
    }
  }
}

var _default = createGetFormFailure
exports['default'] = _default
