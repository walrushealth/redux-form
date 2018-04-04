import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './components/App'

const render = ({ component, title, path, version, breadcrumbs }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>Redux Form${title && ` - ${title}`}</title>
    <link href="https://unpkg.com/redux-form-website-template/dist/bundle.css"
      media="screen, projection" rel="stylesheet" type="text/css"/>
    <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
          media="screen, projection" rel="stylesheet" type="text/css"/>
    <link href="/carbon.css" media="screen, projection" rel="stylesheet" type="text/css"/>
    <meta itemprop="name" content="Redux Form"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Redux Form"/>
    <meta property="og:site_name" content="Redux Form"/>
    <meta property="og:description" content="The best way to manage your form state in Redux."/>
    <meta property="og:image" content="logo.png"/>
    <meta property="twitter:site" content="@erikras"/>
    <meta property="twitter:creator" content="@erikras"/>
    <style type="text/css">
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
  <div id="content">
    ${ReactDOM.renderToStaticMarkup(
      <App {...{ version, path, breadcrumbs }}>{component}</App>
    )}
  </div>
  <script src="https://unpkg.com/react@15.6.1/dist/react.min.js" integrity="sha384-u/3By6KAUETM5AnedAbB9xV0qLxlsRyVBi8mEekTeqD468SBVx2FXEm+1lf85M7c" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js" integrity="sha384-GfT+iyYg21YqdPMH/FWlWLugDiK/neASGRCN8yWPB2Hlam+uP7J0lIgPcbCeHoVG" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/redux-form-doc-version-checker/dist/doc-check.umd.min.js"></script>
  <script src="https://unpkg.com/redux-form-website-template/dist/bundle.js"></script>
  <script>
    (function(){
      if(typeof _bsa !== 'undefined' && _bsa) {
        _bsa.init('default', 'CKYDV5QM', 'placement:reduxformcom', {
          target: '.bsa-cpc',
          align: 'horizontal',
          disable_css: 'true'
        })
      }
    })()
  </script>
  <script>initReact(${JSON.stringify({ version, path, breadcrumbs })})</script>
  <script>
    (function(i,s,o,g,r,a,m){i[ 'GoogleAnalyticsObject' ] = r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-69298417-1', 'auto');
    ga('send', 'pageview');
  </script>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
  </body>
  </html>`

export default render
