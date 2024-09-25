import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/profile"
import './App.css'
function App() {


  return (
    <UserContextProvider>
      <h1>React Lover hands up</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
