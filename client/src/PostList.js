import React,{useState , useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
const [posts, setPosts] = useState([])

const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts')
    const responseData = Object.values(res.data)
    setPosts(responseData)
}


useEffect(() => { 
    fetchPosts()
}, [])


  return (
    <div>
        <h1 className='text-3xl font-semibold m-10'>Posts</h1>
      {posts.map(post => {
            return (
                <div className='flex items-center justify-between border-b-2 p-5'>
                    <h3 className='text-2xl font-semibold' key={post.id} >{post.title} </h3>
                    <CommentList   comments={post.comments}/>
                    <CommentCreate  postId={post.id} />
                </div>
            )
      })}
    </div>
  )
}

export default PostList
