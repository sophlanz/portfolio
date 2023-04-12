import Navbar from '../components/navbar'
export default function Contact() {
    return (
        <>
        <Navbar/>
        <div className="contactContainer">
            <h1 className="contactGreeting"><span style={{fontFamily:"Telegraf-UltraLight"}}>Do</span><span style={{fontFamily:"Telegraf-Regular"}}>n't Be </span><span style={{fontFamily:"Telegraf-UltraBold"}}>Shy. Say Hi!</span> </h1>
            <form className="contact">
                <label htmlFor="name">Hello Sophia, I&apos;m
                    <input type="text" name="name"/>
                </label>
                <label htmlFor="email">Here is my fancy e-mail
                    <input type="text" name="email"/>
                </label>
                <label htmlFor="message">I would love to connect about 
                    <input type="text" name="message"/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
       
        </>
    )
}