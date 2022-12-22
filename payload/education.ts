import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한국방송통신대학교',
      subTitle: '컴퓨터과학과',
      startedAt: '2020-03',
      // endedAt: '2010-02',
    },
    {
      title: 'SIAT (Smart IT Advanced Training)',
      subTitle: 'Software 개발자 과정',
      startedAt: '2021-01',
      endedAt: '2021-06',
    },
    {
      title: '신구대학교',
      subTitle: '세무회계과',
      startedAt: '2012-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
