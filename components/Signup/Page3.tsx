import React,{useState} from 'react'
import { CloseOutlined } from '@mui/icons-material'
import Image from 'next/image';
import { log } from 'console';
import axios from 'axios'
import { url } from 'inspector';

function Page3({set, formData, setImage, setIndex, index}: any) {
    const [files, setFile] = useState<File | any>();
    const [imageUrl, setImageUrl] = useState<any>("");

    const submit = async(e:any) =>{
        e.preventDefault();
        setImage(files);
        setIndex(index+1)
    }
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);
            const reader = new FileReader();
                reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
    <>
        <div className='header flex justify-between w-[40%] items-center text-white'>
            <button onClick={()=>set(0)} className='hover:bg-[#ffffff28] p-1 rounded-full'>
                <CloseOutlined />  
            </button>  
            <h2 className='text-2xl font-bold'>step 2 of 3</h2>    
        </div>
        <h2 className='mt-10 text-2xl text-white font-bold'>add picture to profile</h2>
        <form onSubmit={submit} action="" className='flex flex-col w-[80%] mx-auto'>
            {imageUrl == "" ? 
                <div className="relative shadow-sm w-[60%] ml-16 h-60 rounded-full  mt-8">
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-green-500">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0"  onChange={handleFileInputChange} />
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    </div>
                </div>
                :
                <Image src={imageUrl} className='ml-20 mt-10 rounded-full' width={190} height={230} alt="perf" />
            }
            <footer className='mt-14 relative h-[100%]  w-full'>
              <button className='bg-green-600 rounded-full w-full text-white py-4'>Following</button>
            </footer>
          </form>
      </>
  )
}

export default Page3;