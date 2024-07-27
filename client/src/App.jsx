import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AddPost from "./components/add-post/AddPost"
import AllPosts from "./components/all-posts/AllPosts"
import Details from "./components/details/Details"
import Header from "./components/header/Header"
import HomeSection from "./components/homeSection/HomeSection"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { AuthContext } from './contexts/authContext'


function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken)
    setAuthState(state);
  }

  const contextData = {
    _id: authState._id,
    username: authState.username,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
    <>
      <Header />
      <main className="roboto-regular">
        <Routes>
          <Route path='/' element={<HomeSection/>} />
          <Route path='/catalog' element={<AllPosts/>} />
          <Route path='/catalog/:postId' element={<Details/>} />
          <Route path='/create' element={<AddPost/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </main>
    </>
    </AuthContext.Provider>
  )
}

export default App
