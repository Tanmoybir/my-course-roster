
import { useState } from 'react'
import './App.css'
import Bookmarks from './componants/Bookmarks/Bookmarks'
import Courses from './componants/Courses/Courses'
import Home from './componants/Home/Home'

function App() {
  const [bookmarks,setBookmarks] =useState([])

const handleAddBookmarks =(item) =>{
 
  const newItem =[...bookmarks,item]
  setBookmarks(newItem)
}
  return (
    <>
     <Home></Home>
     <div className="md:flex max-w-screen-xl mx-auto my-6">
     <Courses handleAddBookmarks={handleAddBookmarks}></Courses>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
