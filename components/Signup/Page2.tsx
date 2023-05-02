import React, {useState} from 'react'
import { CloseOutlined } from '@mui/icons-material'


export default function Page2({index, setIndex, set, formData, setFormData}: any) {
    const [tel, setTel] = useState<boolean>(true);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setIndex(index+1);
        console.log(index);  
    };

    const onChangeDate = (e: any) =>{
        setFormData({...formData, date: e.target.value});
    }

    const onChangeName = (e: any) =>{
        setFormData({...formData, name: e.target.value});
    }

    const onChangePhone = (e: any) =>{
      if (/^[+\d]+$/.test(e.target.value) || e.target.value === '') {
        setFormData({...formData, tel: e.target.value});
      }
    }
    const onChangeEmail = (e: any) =>{
        setFormData({...formData, email: e.target.value});
    }

  return (
    <>
        <div className='header flex justify-between w-[40%] items-center text-white'>
          <button onClick={()=>set(0)} className='hover:bg-[#ffffff28] p-1 rounded-full'>
            <CloseOutlined />  
          </button>  
          <h2 className='text-2xl font-bold'>step 1 of 3</h2>    
        </div>
        <div className='mt-14 w-[80%] mx-auto'>
          <h2 className='text-2xl text-white'>Creat your account</h2>
          <form onSubmit={handleSubmit} className='mt-8 flex  flex-col' action="">
            <div className='space-y-10'>
              <input type="text" placeholder='Name' value={formData.name} onChange={onChangeName} className='shadow p-5 appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              <input type={tel ? 'tel' : "email"} value={tel ? formData.tel : formData.email} onChange={tel ? onChangePhone : onChangeEmail} placeholder={tel ? 'Phone' : 'Email'} className='shadow p-5 appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div onClick={()=>setTel(!tel)} className='cursor-pointer select-none flex text-green-600 justify-end' style={{margin: "12px 0"}}>{tel ? 'use mail' : 'use phone'}</div>
            <div className='foot'>
              <h2 className='text-xl font-semibold text-white'>Birthdate</h2>
              <p className='text-sm mt-2 text-gray-400'>This information will not be public. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
              <div className="flex space-x-4 mt-7 divide-gray-400">
                <input value={formData.date} min="1960-01-01" onChange={onChangeDate} className="date w-8/12 shadow p-5 appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
              </div>
            </div>

            <button disabled={!formData.name || (!formData.tel && !formData.email) || !formData.date} className={`text-black disabled:bg-gray-500 enabled:bg-green-500 text-lg font-bold rounded-full mt-10 py-4`}>Following</button>
          </form>
        </div>
      </>
  )
}
