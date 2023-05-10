import React from 'react'
import { CloseOutlined } from '@mui/icons-material'
import axios from 'axios'
import Cookies from 'js-cookie';
import {API_SERVER} from '../../config';

function Page4({set, fm, setFormData, image}: any) {
    const onChangePassword = (e: any) =>{
        setFormData({...fm, password: e.target.value})
    }
    const addUser = (e: any) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", fm.name);
        formData.append("email", fm.email);
        formData.append("tel", fm.tel);
        formData.append("password", fm.password);
        formData.append("imagen", image);

        // realizar la solicitud POST con axios
        axios.post(`${API_SERVER}apitwt/users`, formData, {
        headers: {
            "Content-Type": "multipart/form-data" // asegurarse de establecer el encabezado correcto
        }
        }).then((res) => {
          console.log(res);
          set('');
          Cookies.set("name", fm.name);
          Cookies.set("password", fm.password);
          Cookies.set("perf", image);
        }).catch((err) => {
          console.log(err);
        });
        window.location.reload()
    }
  return (
    <>
        <div className='header flex justify-between w-[40%] items-center text-white'>
            <button onClick={()=>set(0)} className='hover:bg-[#ffffff28] p-1 rounded-full'>
                <CloseOutlined />  
            </button>  
            <h2 className='text-2xl font-bold'>step 3 of 3</h2>    
        </div>
        <div className='mt-8 mx-auto w-[70%]'>
            <h2 className='text-white text-2xl font-bold mb-11'>Finally</h2>
            <form action="" onSubmit={addUser}>
              <input value={fm.password} type="password" onChange={onChangePassword} className='shadow p-5 appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Password' /> 
              <footer className='mt-14 relative h-[100%]  w-full'>
              <button disabled={!fm.password} className='bg-green-600 rounded-full w-full text-white py-4'>Finish</button>
            </footer>
            </form>
        </div>
    </>
  )
}

export default Page4