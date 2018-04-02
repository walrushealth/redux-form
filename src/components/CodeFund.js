import React from 'react'
const id = '4f9aabe5-1dda-413e-b01e-3174c48e4762'
const CodeFund = ({ template }) => (
  <div>
    <div id="codefund_ad" className="benevolent-sponsor" />
    <script
      src={`https://codefund.io/scripts/${id}/embed.js?template=${template ||
        'centered'}&theme=dark`}
    />
  </div>
)

export default CodeFund
