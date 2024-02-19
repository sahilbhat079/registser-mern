import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    axios.defaults.withCredentials=true;
    const navigate=useNavigate();

    function handlesubmit(e){
        e.preventDefault();
        console.log({name,email,password});
        axios.post('registser-mern-api.vercel.app/login',{email,password} ).then((res)=>{
            console.log(res)
            if(res.data=='success')
            navigate( "/home");

        }).catch((err)=>{
            console.log(err)
        })

    }







  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
    <div className='bg-white p-3 rounded w-25'>
      <h2>Login</h2>

      {/* //form */}
      <form onSubmit={handlesubmit}> 
      {/* //email/? */}

      <div className='mb-3'>
  <label htmlFor='email'>
    <strong>Email</strong>
  </label>
  <input  type='text' name="email" placeholder='Your name' autoComplete='off' className='form-control rounded-0'  onChange={(e)=>setemail(e.target.value)}>
  </input>
      </div>

{/* //password*/}
      <div className='mb-3'>
  <label htmlFor='email'>
    <strong>password</strong>
  </label>
  <input  type='passwor[d' name="password" placeholder='Your name' autoComplete='off' className='form-control rounded-0'  onChange={(e)=>setPassword(e.target.value)}>
  </input>
      </div>

<button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
      </form>
<p>
  don't have account
</p>
<Link to='/register' className='btn btn-default border w-100 bg-light rounded-0  text-decoration-none '>register</Link>

r
    </div>

   </div>
  )
}
