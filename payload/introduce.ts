import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '현재 하나금융티아이에서 OpenAPI 개발/운영 업무를 맡고 있습니다. Java 기반 소스로 하나은행, 하나캐피탈 등 그룹 내 6개 관계사와 협업하고 있습니다. 단위테스트부터 배포까지 진행하며, 프로젝트 유지보수 및 서버 관리도 담당하고 있습니다.',
    '개발과 동시에 운영을 접해 비즈니스 측면의 커뮤니케이션 또한 경험하게되어, 단순히 동작하는 소스보다는 효율적인 코딩을 지향하고 있습니다. 이를 실현하기 위해 구축부터 유지보수까지 관리 및 확장성에 용이한 개발을 하기 위해 노력하고 있습니다. ',
  ],
  // sign: 'Love poem',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
