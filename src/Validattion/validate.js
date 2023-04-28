export const validate = (data,type) =>{
    const errors ={}

    if(type === "SignUp"){
        if(!data.name.trim()){
            errors.name ="UserName Required"
        }else{
            delete errors.name
        }
    
        if(data.confirmPassword !== data.password){
            errors.confirmPassword ="Password do not Match"
        }else if(!data.confirmPassword){
            errors.confirmPassword = "confirm the password"
        }
    
        if(data.isAccept){
            delete errors.isAccept
        }else{
            errors.isAccept = "accept our regulations"
        }
    }

    if(!data.email){
        errors.email ="Email Required"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "Email Addres Is Invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password ="Password Required"
    }else if(data.password.length < 6){
        errors.password ="need to be 6 character or more"
    }else{
        delete errors.password
    }


    return errors
}