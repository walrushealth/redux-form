import React from 'react'
const id = '4f9aabe5-1dda-413e-b01e-3174c48e4762'

export default class CodeFund extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    const { template } = this.props
    const script = document.createElement('script')
    script.src = `https://codefund.io/scripts/${id}/embed.js?template=${template ||
      'centered'}&theme=dark`
    document.body.appendChild(script)
  }

  render() {
    return (
      <div>
        <div
          id="codefund_ad"
          className="benevolent-sponsor"
          style={{ minHeight: '200px' }}
        />
      </div>
    )
  }
}
