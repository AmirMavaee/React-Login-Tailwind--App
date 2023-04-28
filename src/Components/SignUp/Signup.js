import React,{useState,useEffect} from 'react';
import {validate} from "../../Validattion/validate"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "../Toast"
import "./Signup.css"
import {Link} from "react-router-dom"


function Signup() {
    document.body.style.backgroundColor = "#f0f0f0"

    const [data , setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccept:false,

        isLogin:false
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    const focusHandler =(event)=>[
        setTouched({
            ...touched , [event.target.name] : true
        })
    ]

    useEffect(()=>{
        setErrors(validate(data,"SignUp"))
    },[data , touched])

    const changeHandler =(event)=>{
        if(event.target.type !== "checkbox"){
            setData({
                ...data,[event.target.name] : event.target.value
            })             
        }
        else{
            setData({
                ...data,[event.target.name] : event.target.checked
            });
        }
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("success","You Sign in Seccessfully");
        }
        else{
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccept:true
            })
            notify("error" ,"Invalid Data");
        }
    }




    return (
        <div className="h-screen w-full flex justify-center items-center">
            <p>{data.err}</p>
            <div className='Signup-container bg-white mx-auto w-2/6 flex flex-col justify-center items-start py-10 px-20 rounded-xl'>
                <div className='mb-10'>
                    <h1 className="text-4xl font-bold text-blue-600">Sign Up</h1>
                </div>
                <div className='w-full'>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Name</label>
                            <input className={errors.name && touched.name ? "border-style w-full" : "w-full"} type="text" name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                            <span className={errors.name && touched.name && "errorText"}>{touched.name && errors.name}</span>
                        </div>
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

                        <div className='flex flex-col'>
                                <label className='text-blue-600 mb-3'>Confirm Password</label>
                                <input className={errors.confirmPassword && touched.confirmPassword ? "border-style w-full" : "w-full"} type="text" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                                <span className={errors.confirmPassword && touched.confirmPassword && "errorText"}>{touched.confirmPassword && errors.confirmPassword}</span>
                            </div>

                        <div className='flex flex-col'>
                            <div className='flex'>
                                <label className='pr-10'>I accept terms of privacy policy</label>
                                <input className='mt-1 outline-0' type="checkbox" name='isAccept' value={data.isAccept} onChange={changeHandler} onFocus={focusHandler}/>
                            </div>
                            <span className={errors.isAccept && touched.isAccept && "errorText"}>{touched.isAccept && errors.isAccept}</span>
                        </div>
                       
                        <div className="w-full flex justify-between">
                            <Link to='/login' className='outline-0 text-blue-600 font-medium'>login</Link>
                            <button type="submit" className='outline-0 font-medium bg-blue-600 text-white p-2 rounded-lg'>Sign Up</button>
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>

    );
}

export default Signup;