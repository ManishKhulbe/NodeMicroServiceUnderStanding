import React , {useState} from 'react'
import axios from 'axios'

const PostCreate = () => {

    const [title, setTitle] = useState('')


    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/posts', {
            title
        })
        setTitle('')
    }


  return (
    <div>
      <form className='flex' onSubmit={handleSubmit}>
        <div className="mt-6 flex gap-x-5 items-center ">
            <label >Title</label>
            <input className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"  type="text" value={title} onChange={handleChange} />
        <button className="items-center border-solid border-emerald-500  rounded-full border-2 p-2 hover:border-blue-400 hover:bg-blue-300 ">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default PostCreate
