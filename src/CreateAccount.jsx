import React,{useState} from 'react'
import Input from './Input'
import './App.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth} from './utils/firebase'

const CreateAccount = (props)=>{
        const [contact, setContact] = useState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        })

    const {displayName, email, password, confirmPassword } = contact

    console.log(contact);
       
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) => {
        event.preventDefault();

        if (password !== confirmPassword)
        {
            alert('Password do not match!')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName})
        }
        catch(error){
            console.log('error in creating user', error.message);
        }

    }
 
    return <div className= 'header-div'>
        <Input 
       name= 'displayName'
       type= 'text'
       placeholder ='name'
       onChange = {handleChange}
       value = {contact.displayName}
       />

       <br />

       <Input 
       name= 'email'
       //CHANGE TO EMAIL ONCE I FIGURE OUT WHAT IS CHANGING ITS STYLE!!!!
       type= 'text'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>
       <Input 
       name='confirmPassword'
       type= 'password'
       placeholder ='confirm password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />

       <br></br>

       <button onClick = {handleSubmit}>
        Sign Up 
        </button>

  
    </div>
}

export default CreateAccount