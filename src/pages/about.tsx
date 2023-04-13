import Navbar from '../components/navbar'
export default function About() {
    return (
        <>
        <Navbar/>
        <div className="aboutContainer">
            <section className="quoteContainer">
                <h1>"The most common way people give up their power is by thinking they don&apos;t have any." </h1>
                <h2>- Alice Walker</h2>
            </section>
            <section className="aboutMe">
                <h1>Sophia</h1>
                <p>
                 From<span style={{fontStyle:'italic'}}> English Teacher </span> to <span style={{fontStyle:'italic'}}> React/Next.JS developer, </span> I&apos;m 
                 a <span style={{color:'#2217f1',fontFamily:"Telegraf-UltraBold"}}> self-starter </span> and <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> life-long learner </span>.
                 I have full-stack experience, but my heart is a sucker for the <span style={{color:'#2217f1',fontFamily:"Telegraf-UltraBold"}}> frontend </span>. I&apos;m  <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}} >user </span> and
                <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> product </span> obsessed, and am motivated by 
                 creating  high-quality  <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> user-experiences </span>. I find being tasked with a problem I do not know how to solve right-off-the-bat to be
                 thrilling, and  <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> I thrive off of learning </span> and implementing the technologies required to <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}>solve</span> it. When I'm not programming or practicing DSA
                 I enjoy learning <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> languages </span>, spending time in <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> nature </span>, and cooking  <span style={{color:'#2217f1', fontFamily:"Telegraf-UltraBold"}}> Thai food </span>. 
                </p>
            </section>
        </div>
        </>
    )
}