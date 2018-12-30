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

  componentDidMount() {
    const { template } = this.props
    const script = document.createElement('script')
    script.src = `https://codefund.app/properties/${id}/funder.js?template=${template}`
    document.body.appendChild(script)
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
      </div>
    )
  }
}

CodeFund.defaultProps = {
  template: 'default'
}
