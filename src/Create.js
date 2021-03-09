import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] =useState('');
    const [body,setBody] =useState('');
    const [author,setAuthor] =useState('Yoshie');
    const [pending,setPending]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setPending(true);
        fetch('https://my-json-server.typicode.com/thelastpawn009/fakejson/db', {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(blog)
        }).then(()=>{
            setPending(false);
            history.push('/');
        }
        )
        
    }   
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                <label>Blog Title : </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                />
                <label>
                    Body : 
                </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value);
                    }}
                >

                </textarea>
                <label >Author : </label>
                <select 
                    value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="Author 1">Author 1</option>
                    <option value="Author 2">Author 2</option>
                    <option value="Author 3">Author 3</option>
                </select>
                
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding....</button>}
                
                
            </form>
            
        </div>

        
     );
}
 
export default Create;
