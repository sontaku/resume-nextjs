import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring Framework',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'mariaDB',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Redis',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 2,
    },
    {
      title: 'Ajax',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git / Github',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'jMeter',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
