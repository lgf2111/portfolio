import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          data-options={JSON.stringify({
            max: 45,
            scale: 1,
            speed: 450,
          })}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Are you finding the right person to design, build and upkeep your
        website? If that's the case, your search ends here.
        <br />
        <br />
        Hi, I'm Jeff, currently pursuing a diploma in Cybersecurity at Nanyang
        Polytechnic. Alongside my studies, I engage in personal coding projects
        during my leisure hours, typically aimed at resolving online challenges
        I encounter.
        <br />
        <br />
        My dream is to be able to work as a Software Engineer in one of the
        FAANG companies one day, at Silicon Valley. Although it is still too
        early to pursue this dream, I am making my steps to bring my dream
        closer to me.
        <br />
        <br />
        Since young, I had always been fascinated about the online world. Since
        primary school, I had joined ICT club, and it taught me about Game
        Design, Photography, Videography and Video Editing.
        <br />
        <br />
        After enrolling into Nanyang Polytechnic, that is the first time I get
        to touch with coding, and although coding is a very new thing to me, I
        immediately fell in love with it, like love at first sight.
        <br />
        <br />
        At first I still do not know what job should I pursue in the future, I
        just know that I want to work in IT industry. Under my friends influence
        I had got myself into pursuing diploma in Cybersecurity rather than
        Information Technology, after studying for Cybersecurity, although I
        still am, I had decided that being a Cybersecurity Expert, I want to be
        a Software Engineer in the future, and therefore here am, striving
        forward to become a Software Engineer in the future.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
