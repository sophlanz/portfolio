import Navbar from '../components/navbar'
import { useState } from 'react';
export default function Contact() {
    const[name,setName]= useState<string>('');
    const[email,setEmail]=useState<string>('');
    const[message,setMessage]=useState<string>('');
    const[statusMessage,setStatusMessage]=useState<string>();
    const handleSubmit = async (e:React.SyntheticEvent)=> {
            e.preventDefault();
            //verify credentials
            let isValidForm = handleValidation();
            if(isValidForm){
            //send data to the sendgrid api
            await fetch("/api/sendgrid", {
              body: JSON.stringify({
                email: email,
                name: name,
                message: message,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            })
            .then((response)=> {
                console.log(response);
                setStatusMessage('The message has been successfully sent!')
            })
            .catch((error)=> {
                console.log(error);
                setStatusMessage('The message failed to send.')
                return;
            })
          
        }
          console.log(name, email, message);
    }
    const handleValidation = ()=> {
       type Errors={
        name?:boolean,
        email?:boolean,
        message?:boolean
       }
       let valid=true
       let errors:Errors ={}
        if(!name.length) {
           errors['name']=true;
           valid=false
        }
        if(!message.length){
            errors['message']=true
            valid=false
        }
        if(!email.length){
            errors['email']=true;
            valid=false;
        }
        if(valid===false){
            let keys=Object.keys(errors);
            alert(`please fill-out the following:${keys}`);
        }
     
        return valid;

    }
    return (
        <>
        <Navbar/>
        <h1 className="contactGreeting"><span style={{fontFamily:"Telegraf-UltraLight"}}>Do</span><span style={{fontFamily:"Telegraf-Regular"}}>n&apos;t Be </span><span style={{fontFamily:"Telegraf-UltraBold"}}>Shy. Say Hi!</span> </h1>
        <div className="contactContainer">
            <form className="contact" onSubmit={(e)=> handleSubmit(e)}>
                <label htmlFor="name">Hello Sophia, I&apos;m
                    <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>
                </label>
                <label htmlFor="email">Here is my fancy e-mail
                    <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                </label>
                <label htmlFor="message">I would love to connect about 
                    <input type="text" name="message"  onChange={(e)=> setMessage(e.target.value)}/>
                </label>
                <p>{statusMessage}</p>
                <button type="submit">Send</button>
            </form>
            
        </div>
       
        </>
    )
}