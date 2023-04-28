import React,{useState,useEffect} from 'react';
import {validate} from "../../Validattion/validate"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "../Toast"
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
    document.body.style.backgroundColor = "#f0f0f0"

    const [data , setData] = useState({
        email:"",
        password:"",
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    const focusHandler =(event)=>[
        setTouched({
            ...touched , [event.target.name] : true
        })
    ]

    useEffect(()=>{
        setErrors(validate(data,"LogIn"))
    },[data , touched])

    const changeHandler =(event)=>{
        setData({
            ...data,[event.target.name] : event.target.value
        });
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("success","You Log in Seccessfully");
        }
        else{
            setTouched({
                email:true,
                password:true,
            })
            notify("error","Invalid Data");
        }
    }


    return (
        <div className="h-screen w-full flex justify-center items-center">
            <p>{data.err}</p>
            <div className='Login-container bg-white mx-auto w-2/6 flex flex-col justify-center items-start py-10 px-20 rounded-xl'>
                <div className='mb-10'>
                    <h1 className="text-4xl font-bold text-blue-600">Login</h1>
                </div>
                <div className='w-full'>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Email</label>
                            <input className={errors.email && touched.email ? "border-style w-full" : "w-full"} type="email" name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                            <span className={errors.email && touched.email && "errorText"}>{touched.email && errors.email}</span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Password</label>
                            <input className={errors.password && touched.password ? "border-style w-full" : "w-full"} type="text" name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                            <span className={errors.password && touched.password && "errorText"}>{touched.password && errors.password}</span>
                        </div>
                       
                        <div className="w-full flex justify-between">
                            <button type="submit" className='outline-0 font-medium bg-blue-600 text-white p-2 rounded-lg'>Login</button>
                            <Link to='/signup' className='outline-0 text-blue-600 font-medium '>Sign Up</Link>
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>

    );
}

export default Login;