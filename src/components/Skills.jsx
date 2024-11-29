import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { skills } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import PropTypes from 'prop-types';


const SkillCard = ({ skill }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: skill.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={skill.icon} 
        alt={skill.title} 
        className="w-[60%] h-[60%] object-contain"
         />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{skill.title}</h3>
    </div>
    <ul className='mt-5 list-none flex flex-col gap-2'>
      {skill.points && skill.points.map((point, index) => (
        <li key={`skill-point-${index}`} className="flex items-center">
          <img src={point} alt={`icon-${index}`} className="w-8 h-8 object-contain mr-3" />
          <span className="text-white-100 text-[16px] pl-1">
            {point.split('/').pop().split('.')[0].toUpperCase()}
          </span>
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

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
