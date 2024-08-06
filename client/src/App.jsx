
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'

import AddPost from "./components/add-post/AddPost"
import AllPosts from "./components/all-posts/AllPosts"
import Details from "./components/details/Details"
import Header from "./components/header/Header"
import ProfileSection from "./components/profileSection/ProfilePage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Logout from './components/logout/Logout'
import EditPost from './components/editPost/EditPost'


function App() {
  

 

 

  return (
    <AuthContextProvider >
    <>
      <Header className="roboto-regular" />
      <main className="roboto-regular">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/catalog' element={<AllPosts/>} />
          <Route path='/profile' element={<ProfileSection/>} />
          <Route path='/catalog/:postId' element={<Details/>} />
          <Route path='/catalog/:postId/edit' element={<EditPost/>} />
          <Route path='/create' element={<AddPost/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </main>
      <Footer/>
    </>
    </AuthContextProvider>
  )
}

export default App
