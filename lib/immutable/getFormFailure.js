'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports['default'] = void 0

var _getFormFailure = _interopRequireDefault(
  require('../selectors/getFormFailure')
)

var _immutable = _interopRequireDefault(require('../structure/immutable'))

var _default = (0, _getFormFailure['default'])(_immutable['default'])

exports['default'] = _default
