import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

const SuspenseFallback = () => <p>something went wrong</p>

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Suspense fallback={<SuspenseFallback />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </ThemeProvider>,
  document.getElementById('root')
)
