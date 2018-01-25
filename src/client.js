import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (typeof window !== 'undefined') {
  // what a hack!! :-)
  const content = document.getElementById('content')
  window.initReact = props =>
    ReactDOM.hydrate(
      <App {...props}>
        <div dangerouslySetInnerHTML={{ __html: content.innerHTML }} />
      </App>,
      content
    )
}
