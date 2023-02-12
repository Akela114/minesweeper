import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Fragment>
    <Helmet>
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
        rel='stylesheet'
      />
    </Helmet>
    <GlobalStyle />
    <App />
  </Fragment>,
)
