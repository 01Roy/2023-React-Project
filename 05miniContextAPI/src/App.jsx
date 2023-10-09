
import './App.css'
import Login from './Componet/Login'
import Profile from './Componet/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
