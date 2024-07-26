import AddPost from "./components/add-post/AddPost"
import AllPosts from "./components/all-posts/AllPosts"
import Details from "./components/details/Details"
import Header from "./components/header/Header"
import HomeSection from "./components/homeSection/HomeSection"

function App() {


  return (
    <>
      <main className="roboto-regular">
        <Header />
        <HomeSection />
        <AllPosts />
        <Details/>
        <AddPost/>
      </main>
    </>
  )
}

export default App
