import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Mohsin Ali",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars.githubusercontent.com/u/55783948?v=4",
          url: "https://developer-portfolio-mohsin.vercel.app",
          keywords: [
            "Mohsin",
            "Mohsin Ali",
            "@mohsinnaqvipro",
            "mohsinnaqvipro",
            "Portfolio",
            "Mohsin Portfolio ",
            "Mohsin Ali Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
