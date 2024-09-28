import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShoppingListProvider from './context/ShoppingListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingListProvider>
      <App />
    </ShoppingListProvider>
  </StrictMode>,
)
