import React from 'react'
import cookies from 'js-cookie'

const key = '$$$$$$$$'

function load() {
  const fromCookie = cookies.getJSON(key)
  return fromCookie
    ? Promise.resolve(fromCookie)
    : new Promise(resolve => {
        fetch(
          'https://raw.githubusercontent.com/erikras/redux-form/master/docs/sponsor.json'
        ).then(response => {
          response.json().then(data => {
            resolve(data)
            cookies.set(key, data, {
              expires: 0.04 /* 1 hour */,
              path: '/'
            })
          })
        })
      })
}

export default class Sponsor extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    load().then(({ id, copy }) => {
      this.setState({
        loaded: true,
        id,
        copy
      })
    })
  }

  render() {
    const { loaded, id, copy } = this.state
    return loaded ? (
      <div className="benevolent-sponsor">
        <div className="this-month">This month Redux Form is sponsored by</div>
        <img
          src={`https://codesponsor.io/t/l/${id}/pixel.png`}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0
          }}
          alt="pixel"
          width="1"
          height="1"
        />
        <a
          target="_blank"
          href={`https://codesponsor.io/t/c/${id}/`}
          dangerouslySetInnerHTML={{ __html: copy }}
        />
      </div>
    ) : (
      <div />
    )
  }
}
