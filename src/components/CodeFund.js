import React from 'react'
const id = '141'

const heights = {
  'image-only': 211,
  default: 130
}

export default class CodeFund extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { template } = this.props
    const height = heights[template] || 150
    return (
      <div>
        <div
          id="codefund"
          className={`benevolent-sponsor template-${template}`}
          style={{ minHeight: height + 'px' }}
        />
        <script
          src={`https://codefund.app/properties/${id}/funder.js?template=${template}`}
          async="async"
        />
      </div>
    )
  }
}

CodeFund.defaultProps = {
  template: 'default'
}
