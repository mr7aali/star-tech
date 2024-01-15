

import store from '@/redux/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux';





const MyApp = ({ Component, pageProps }) => {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    getLayout(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    )
  )

}

export default MyApp;


