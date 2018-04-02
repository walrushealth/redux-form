import React from 'react'
const id = '4f9aabe5-1dda-413e-b01e-3174c48e4762'

export default class CodeFund extends React.Component {
  constructor() {
    super()
    this.state = {
      embedScript: false
    }
  }

  componentDidMount() {
    // this allows SSR component to be overridden and not lose its DOM manipulation
    this.setState({ embedScript: true })
  }

  render() {
    const { template } = this.props
    return (
      <div>
        <div id="codefund_ad" className="benevolent-sponsor" />
        {this.state.embedScript && (
          <script
            src={`https://codefund.io/scripts/${id}/embed.js?template=${template ||
              'centered'}&theme=dark`}
          />
        )}
      </div>
    )
  }
}
