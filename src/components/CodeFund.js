import React from 'react'
const id = '4f9aabe5-1dda-413e-b01e-3174c48e4762'

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
    script.src = `https://codefund.io/scripts/${id}/embed.js?template=${template}&theme=dark`
    document.body.appendChild(script)
  }

  render() {
    const { template } = this.props
    const height = heights[template] || 150
    return (
      <div>
        <div
          id="codefund_ad"
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
