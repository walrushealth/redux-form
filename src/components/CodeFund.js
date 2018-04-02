import React from 'react'
import styled from 'styled-components'

export default class Sponsor extends React.Component {
  render() {
    return (
      <div>
        <StyledDiv id="codefund_ad" className="benevolent-sponsor" />
        <script src="https://codefund.io/scripts/4f9aabe5-1dda-413e-b01e-3174c48e4762/embed.js?template=centered&theme=dark" />
      </div>
    )
  }
}

const StyledDiv = styled.div`
  .cf-wrapper {
    max-width: 330px;
    display: block;
    padding: 15px;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    font-family: system, 'Helvetica Neue', Helvetica, Arial;
  }
  .cf-header {
    font-size: 12px;
    color: #678;
    display: block;
    margin-bottom: 8px;
  }

  .cf-header:before {
    content: '—';
    margin: 0 0.5em;
    opacity: 0.5;
  }

  .cf-header:after {
    content: '—';
    margin: 0 0.5em;
    opacity: 0.5;
  }

  .cf-text {
    color: #fff;
    text-decoration: none;
  }
  .cf-powered-by {
    margin-top: 5px;
    font-size: 11px;
    display: block;
    color: #678;
    text-decoration: none;
  }
`
