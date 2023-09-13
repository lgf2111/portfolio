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
        My aspiration is the become a Software Engineer at one of the renowned
        FAANG companies in Silicon Valley. While I acknowledge that it's a
        long-term goal, I'm committed to taking deliberate steps to turn this
        dream into reality.
        <br />
        <br />
        My fascination with the digital world ignited from a young age. During
        my primary school years, I eagerly joined the ICT club, which exposed me
        to a wide array of digital skills, including Game Design, Photography,
        Videography, and Video Editing.
        <br />
        <br />
        Upon enrolling at Nanyang Polytechnic, I had my first encounter with
        coding. Despite being a completely new concept to me, I experienced an
        instant and profound connection with it—akin to love at first sight.
        <br />
        <br />
        Initially, I was uncertain about my future career path within the IT
        industry. While I was certain about my desire to work in this field, I
        had yet to determine a specific role. Under the influence of my friends,
        I made the choice to pursue a diploma in Cybersecurity instead of
        Information Technology. As I delved into Cybersecurity studies, I came
        to the realization that my true passion lies in becoming a Software
        Engineer, rather than a Cybersecurity Expert. Hence, I am now dedicated
        to working towards my goal of becoming a Software Engineer in the
        future.
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
