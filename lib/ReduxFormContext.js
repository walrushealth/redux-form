'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.withReduxForm = exports.ReduxFormContext = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var React = _interopRequireWildcard(require('react'))

var ReduxFormContext = React.createContext(null)
exports.ReduxFormContext = ReduxFormContext

var withReduxForm = function withReduxForm(Component) {
  var Hoc =
    /*#__PURE__*/
    (function(_React$Component) {
      ;(0, _inheritsLoose2['default'])(Hoc, _React$Component)

      function Hoc() {
        return _React$Component.apply(this, arguments) || this
      }

      var _proto = Hoc.prototype

      _proto.render = function render() {
        var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          rest = (0, _objectWithoutPropertiesLoose2['default'])(_this$props, [
            'forwardedRef'
          ])
        return React.createElement(ReduxFormContext.Consumer, {
          children: function children(_reduxForm) {
            return React.createElement(
              Component,
              (0, _extends2['default'])(
                {
                  _reduxForm: _reduxForm,
                  ref: forwardedRef
                },
                rest
              )
            )
          }
        })
      }

      return Hoc
    })(React.Component)

  var ref = React.forwardRef(function(props, ref) {
    return React.createElement(
      Hoc,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    )
  })
  ref.displayName = Component.displayName || Component.name || 'Component'
  return ref
}

exports.withReduxForm = withReduxForm