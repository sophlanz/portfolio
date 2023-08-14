import { Navbar } from "../components/nav";
export default function About(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="aboutContainer">
        <section className="aboutMe">
          <h1>Sophia</h1>
          <p>
            I&apos;m Sophia,<span> software engineer</span>,
            <span> self-starter</span>, and<span> life-long learner</span>. I
            have built projects across the stack, but my heart is a sucker for
            the <span> frontend</span>. I&apos;m <span>user </span> and
            <span> product </span> obsessed, and am motivated by creating
            high-quality <span> user-experiences</span>. I find being tasked
            with a problem I do not know how to solve right-off-the-bat to be
            thrilling, and <span> I thrive off of learning </span> and
            implementing the technologies required to <span>solve</span> it.
            When I&apos;m not building a new app or leetcoding I enjoy learning{" "}
            <span> languages</span>, spending time in <span> nature</span>, and
            cooking <span> Thai food </span>.
          </p>
        </section>
        <section className="quoteContainer">
          <h1>
            &quot;The most common way people give up their power is by thinking
            they don&apos;t have any.&quot;{" "}
          </h1>
          <h2>- Alice Walker</h2>
        </section>
      </div>
    </>
  );
}
