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
        <div className="relative h-full text-white flex flex-col md:items-center font-thin md:justify-center md:text-xl gap-5 py-5 px-5">
          <p>
            Hello, my name is Andrew, and I&rsquo;m Fullstack Developer based in
            tri-state area. With a background as a former recruiter for a
            FinTech company, I had the privilege of interviewing thousands of
            individuals for various roles. However, my most memorable
            conversations were with software engineers. Engaging in numerous
            discussions about new technologies and ongoing projects with the
            team consistently reignited my passion for technology.
          </p>
          <p>
            Thriving in the face of new challenges and excelling in uncharted
            territories, I made a conscious decision to transition careers. My
            journey through several startup environments has equipped me with
            the ability to navigate uncertain scenarios- a vital skill in an
            ever-evolving field.
          </p>
          <p>
            As a developer, I&rsquo;ve freelanced on projects for small business
            owners and creative individuals, taking full responsibility for the
            entire development lifecycle. Additionally, I&rsquo;ve undertaken
            contract work for accelerator companies, collaborating within a team
            of developers to build MVPs, ensure quality in applications, and
            more.
          </p>
        </div>
      }
      footerLeft={
        <button
          onClick={() =>
            window.open("https://calendly.com/t-andrewlopez", "_blank")
          }
          className="w-full text-left hover:text-sky-500">
          Calendly
        </button>
      }
      footerRight={<SocialsList />}
      footerLeftTitle="Schedule an appointment"
      footerRightTitle="Socials"
    />
  );
};

export default AboutCard;
