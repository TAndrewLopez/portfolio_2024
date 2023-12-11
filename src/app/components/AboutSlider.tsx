import Card from "./Card";
import SocialsList from "./SocialsList";

type Props = {
  toggleSlider: () => void;
};

const AboutCard = ({ toggleSlider }: Props) => {
  return (
    <Card
      title="About Dev"
      closeAction={toggleSlider}
      content={
        <div className="relative text-white flex flex-col gap-5 px-12">
          <p>
            Hello, my name is Andrew and I&rsquo;m Fullstack Developer from the
            Tri-state area.
          </p>
          <p>
            As a dynamic and adaptive software developer, I thrive in the face
            of new challenges and excel in navigating unexplored territories. My
            journey through diverse startup environments has equipped me with
            the prowess to maneuver through uncertain scenarios, making me
            comfortable in the ambiguous realms of innovation.
          </p>
          <p>
            Driven by an insatiable passion for continuous learning, I immerse
            myself in research, delving into the intricacies of subjects that
            captivate me. I&rsquo;m motivated by the possibilities and relish
            unraveling the complexities of high-leveling functionalities.
          </p>
          <p>
            Beyond my technical skills, my strengths in leadership,
            collaboration, and critical thinking foster a seamless role as a
            team player and problem-solver.
          </p>
          <p>
            Eager to embrace fresh challenges, I am poised to contribute my
            expertise to a forward-thinking and innovative individual or
            organization, elevating projects and propelling success.
          </p>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-3/4 h-0.5 bg-white"></span>
        </div>
      }
      footerLeft={
        <button
          onClick={() =>
            window.open("https://calendly.com/t-andrewlopez", "_blank")
          }
          className="w-full text-left hover:text-sky-500">
          Calendy
        </button>
      }
      footerRight={<SocialsList />}
      footerLeftTitle="Schedule an appointment"
      footerRightTitle="Socials"
    />
  );
};

export default AboutCard;
