import { API_SERVER } from '@/config';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState, Dispatch, SetStateAction } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface twt{
    name: string,
    content: string,
    id: number,
    setOpenMsg: Dispatch<SetStateAction<boolean>>
}

export default function Comments({name, content, id, setOpenMsg}: twt) {
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
            setOpenMsg(false);
        })
        .catch((err: any)=>{
            console.log(err);
            
        })
    }

  return (
    <div className='bg-gray-800 rounded-md p-3'>
        <section>
            <div className='title flex justify-between'>
                <h2 className='text-white'>@{name}</h2>
                <button className='text-gray-600 hover:text-green-500' onClick={()=>setOpenMsg(false)}><CloseOutlinedIcon /></button>
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
