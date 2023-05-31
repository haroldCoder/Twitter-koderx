import { API_SERVER } from '@/config';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

interface twt{
    name: string,
    content: string,
    id: number
}

export default function Comments({name, content, id}: twt) {
    const [response, setResponse] = useState<string>("");
    
    const sendComment = () =>{
        console.log(response);
        axios.post(`${API_SERVER}apitwt/comments`, {
            "response": response,
            "idtwt": id,
            "author": Cookies.get("name")
        })
        .then((res: any)=>{
            console.log(res);
            setResponse("");
        })
        .catch((err: any)=>{
            console.log(err);
            
        })
    }

  return (
    <div className='bg-gray-800 rounded-md p-3'>
        <section>
            <div className='title'>
                <h2 className='text-white'>@{name}</h2>
            </div>
            <div className='my-5 px-2 py-4 border-[1.5px] border-solid border-white rounded-md'>
                <h2 className='text-gray-400'>{content}</h2>
            </div>
        </section>
        <form onSubmit={(e)=>{e.preventDefault(); sendComment()}} className='flex flex-col'>
            <textarea name="" id="" onChange={(e)=>{setResponse(e.target.value)}} required className='rounded-full p-2 resize-none h-[auto] w-[50%]'></textarea>
            <button className='bg-green-600 hover:bg-green-500 rounded-md text-white mt-5 w-[4vw] sticky left-[100%] px-5 py-2'>
                <SendOutlinedIcon />
            </button>
        </form>
    </div>
  )
}
