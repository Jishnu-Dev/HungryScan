import '@/styles/globals.css'

import { BaseProvider, LightTheme } from 'baseui'

import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '@/utils/styletrone'

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  )
}
