import { Navbar } from "../components/nav";
export default function About(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="aboutContainer">
        <section className="aboutMe">
          <h1>Sophia</h1>
          <p>
            I&apos;m Sophia,<span> new-grad full-stack software engineer</span>,
            highly skilled in both frontend and backend development. I pride
            myself in writing code that is{" "}
            <span>
              loosely coupled, highly scalable, and highly maintainable
            </span>
            . Strong foundations in <span>CS fundamentals</span> with
            demonstrated <span>leetcode skills</span>. Searching for a role with
            a technically progressive large-scale company that has a{" "}
            <span>global team </span>
            due to my experience in the <span>European and Asian markets</span>.
            Over the last year I have built hands-on projects which have
            included e-commerce, language learning with AI, and CV creation. I'm
            looking for a role where I will be able to{" "}
            <span>assume ownership </span>of the product, and guide feature
            production.
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
