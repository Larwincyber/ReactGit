import React , {useEffect , useState} from 'react';
import axios from 'axios';

export default function Axios() {
    const[list,setList] = useState([])
    useEffect(()=>
    {
        axios.get('http://localhost:3001/posts')
        .then(res=>{
            setList(res.data)
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const handlePost=()=>{
        axios.post(`http://localhost:3001/posts`,{
            title:"New Post"
        })
        .then(res=>{alert('New post posted successfully')})
        .catch(err=>{console.log(err)})
    }
    const handleUpdate=(id)=>{
        axios.put(`http://localhost:3001/posts/${id}`,{
            title:"Post is updated"
        })
        .then(res=>{alert('Updated successfully')})
        .catch(err=>{console.log(err)})
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/posts/${id}`)
            .then(res=>{alert('Deleted successfully')})
            .catch(err=>{console.log(err)})
    }
    
    
    return (
        <div>
        <button onClick={handlePost}>Add a new post</button>
        {list.map(post=>(
            <div key = {post.id}>
                <p>{post.title}</p>
                <button onClick={()=>{handleUpdate(post.id)}}>Update</button>
                <button onClick={()=>{handleDelete(post.id)}}>Delete</button>
            </div>
        ))}
    </div>
  )
}

