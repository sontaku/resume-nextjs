import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '하나금융티아이',
      position: 'Software Enginner',
      startedAt: '2021-07',
      descriptions: [
        'OpenAPI 개발/운영',
        '하나그룹 API 서비스 관리',
        // 'Systems Engineering and DevOps',
      ],
      skillKeywords: [
        'Java',
        'Spring Framework',
        'Vue.js',
        'mariaDB',
        'docker',
        'Kafka',
        'Redis',
        'ELK',
        'Jenkins',
      ],
    },
    {
      title: '(주)위세아이텍',
      position: '주임',
      startedAt: '2017-05',
      endedAt: '2019-05',
      descriptions: ['연구비 관리', '급여 관리'],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
    {
      title: '세무법인 충정',
      position: '사원',
      startedAt: '2017-01',
      endedAt: '2017-03',
      descriptions: ['연말정산', '부가세 신고'],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
