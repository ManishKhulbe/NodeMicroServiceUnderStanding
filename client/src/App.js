import React from 'react'
import PostCreate from './PostCreate'
import './index.css'
import PostList from './PostList'

const App = () => {
  return (
    <div>
        <div>
      <h1 className='text-3xl font-bold underline' >CreatePost</h1>
        <PostCreate />
        <PostList/>
        </div>
    </div>
  )
}

export default App
