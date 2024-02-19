import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
    import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const [name, setName] = useState('');
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    axios.defaults.withCredentials=true;
    const navigate=useNavigate();

    function handlesubmit(e){
        e.preventDefault();
        console.log({name,email,password});
        axios.post('https://registser-mern-api.vercel.app/register',{name,email,password} ).then((res)=>{
            console.log(res)
            navigate( "/login");

        }).catch((err)=>{
            console.log(err)
        })

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
    <div className='bg-white p-3 rounded w-25'>
      <h2>Register</h2>

      {/* //form */}
      <form onSubmit={handlesubmit}> 
      <div className='mb-3'>
  <label htmlFor='email'>
    <strong>Name</strong>
  </label>
  <input  type='text' name="name" placeholder='Your name' autoComplete='off' className='form-control rounded-0'  onChange={(e)=>setName(e.target.value)}>
  </input>
      </div>

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

<button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
      </form>
<p>
  Already have account
</p>
<Link to='/login' className='btn btn-default border w-100 bg-light rounded-0  text-decoration-none '>login</Link>


    </div>

   </div>
  )
}
