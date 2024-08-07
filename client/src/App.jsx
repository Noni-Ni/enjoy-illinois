
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
import PrivateGuard from './components/common/PrivateGuard'
import GuestGuard from './components/common/GuestGueard'
import AllYourPosts from './components/allYourPosts/AllYourPosts'


function App() {
  
  return (
    <AuthContextProvider >
    <>
      <Header className="roboto-regular" />
      <main className="roboto-regular">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/catalog' element={<AllPosts/>} />
          <Route path='/catalog/:postId' element={<Details/>} />
          
          <Route element={<PrivateGuard/>} >
            <Route path='/profile' element={<ProfileSection/>} />
            <Route path='/catalog/:postId/edit' element={<EditPost/>} />
            <Route path='/catalog/yours' element={<AllYourPosts/>} />
            <Route path='/create' element={<AddPost/>} />
            <Route path='/logout' element={<Logout/>} />
          </Route>
          
          <Route element={<GuestGuard/>} >
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Route>
        </Routes>
      </main>
      <Footer/>
    </>
    </AuthContextProvider>
  )
}

export default App
