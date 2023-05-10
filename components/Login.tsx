import React, { useState } from 'react'
import Page1 from './Signup/Page1'
import Page2 from './Signup/Page2'
import Page3 from './Signup/Page3'
import Page4 from './Signup/Page4'

import Pagel1 from './Logins/Pagel1'
import Pagel2 from './Logins/Pagel2'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API_SERVER } from '@/config'

interface Props{
    mess: number,
    set: any
}
function Login({mess, set}: Props) {
  const [msg, setMsg] = useState<string>(mess == 1 ? 'Join Twitter today' : (mess == 2 ? 'Sign in to Twitter' : ''));
  const [index, setIndex] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    date: '',
    img: '',
    password: ''});

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [image, setImage] = useState<any>('');

  const ValidateLogin = async() =>{
    await axios.get(`${API_SERVER}apitwt/users/login/${username}/${password}`)
    .then(res=>{
      Cookies.set("name", res.data[0].name);
      Cookies.set("password", res.data[0].password);
      window.location.reload()
    })
    .catch(err=>console.log(err))
    
  }

  const signup = [
    ()=>(
      <Page1 set={set} index={index} setIndex={setIndex} msg={msg}  />
    ),
    ()=>(
      <Page2 set={set} index={index}  formData={formData} setFormData={setFormData} setIndex={setIndex} />
    ),
    ()=>(
      <Page3 set={set} fm={formData} setImage={setImage} index={index} setIndex={setIndex} setFormData={setFormData} />
    ),
    ()=>(
      <Page4 set={set} image={image} fm={formData} setFormData={setFormData} />
    )
  ];
  const Logins = [
    ()=>(
      <Pagel1 msg={msg} setIndex={setIndex} index={index} username={username} setUsername={setUsername} set={set} />
    ),
    ()=>(
      <Pagel2 set={set} password={password} setPassword={setPassword} validate={ValidateLogin} />
    )
    ]

  return (
    <div className='h-[auto] w-full bg-[#00000000] border-2 border-white backdrop-blur-[2px] rounded-md py-1 pb-5 px-3'>
      {
        mess == 1 ?
        <div>
          {Logins[index]()}
        </div>
        :
        <div>
          {signup[index]()}
        </div>
      }
    </div>
  )
}

export default Login