import React from 'react'
const id = '4f9aabe5-1dda-413e-b01e-3174c48e4762'

export default class CodeFund extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { template } = this.props
    return (
      <div>
        <div
          id="codefund_ad"
          className="benevolent-sponsor"
          style={{ minHeight: '200px' }}
        />
        <script
          src={`https://codefund.io/scripts/${id}/embed.js?template=${template ||
            'centered'}&theme=dark`}
        />
      </div>
    )
  }
}
