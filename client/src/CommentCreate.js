import React,{useState} from 'react'
import axios from 'axios'

const CommentCreate = ({postId}) => {

    const [Comment, setComment] = useState('')

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit= async (e) => {
        e.preventDefault()
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content : Comment
        })
        setComment('')
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
            <div className="mt-6 flex gap-x-5 items-center ">
                <label >Comment</label>
                <input className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" value={Comment}  type="text" onChange={handleChange} />
            <button className="items-center border-solid border-emerald-500  rounded-full border-2 p-2 hover:border-blue-400 hover:bg-blue-300 ">Submit</button>
            </div> 
        </form>
    </div>
  )
}

export default CommentCreate
