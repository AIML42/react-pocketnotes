
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import ScreenWidthProvider from './provider/ScreenWidthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ScreenWidthProvider/>
      <App />
  </Provider>

)
