import Navbar from '../components/navbar'
import { useState } from 'react';
export default function Contact() {
    const[name,setName]= useState<string>();
    const[email,setEmail]=useState<string>();
    const[message,setMessage]=useState<string>();
    return (
        <>
        <Navbar/>
        <div className="contactContainer">
            <h1 className="contactGreeting"><span style={{fontFamily:"Telegraf-UltraLight"}}>Do</span><span style={{fontFamily:"Telegraf-Regular"}}>n&apos;t Be </span><span style={{fontFamily:"Telegraf-UltraBold"}}>Shy. Say Hi!</span> </h1>
            <form className="contact">
                <label htmlFor="name">Hello Sophia, I&apos;m
                    <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>
                </label>
                <label htmlFor="email">Here is my fancy e-mail
                    <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                </label>
                <label htmlFor="message">I would love to connect about 
                    <input type="text" name="message"  onChange={(e)=> setMessage(e.target.value)}/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
       
        </>
    )
}