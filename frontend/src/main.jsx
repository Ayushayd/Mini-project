import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import { useState } from 'react'
import LoggedIn from './LoggedIn'

export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated ] = useState(false);

  return(
    <Context.Provider 
    value={{
      isAuthenticated, setIsAuthenticated, user, setUser
      }}>
      <LoggedIn />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)