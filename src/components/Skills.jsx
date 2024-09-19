import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { skills } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const SkillCard = ({ skill }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: skill.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={skill.icon} alt={skill.title} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{skill.title}</h3>
    </div>
    <div className='mt-5 flex flex-row flex-wrap gap-4 '>
      {skill.points.map((point, index) => (
        <div key={`skill-point-${index}`} className="flex items-center">
          <img src={point} alt={`icon-${index}`} className="w-20 h-20 object-cover mr-3" />
        </div>
      ))}
    </div>
  </VerticalTimelineElement>
);

const Skill = () => {
  return (
    <section id='skills'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

const NamedSkill = SectionWrapper(Skill, "");
export default NamedSkill;
