import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/prf_pic.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '손진영',
    small: 'Eden',
  },
  contact: [
    {
      title: 'jyson19@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-9269-3850',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/sontaku',
      link: 'https://github.com/sontaku',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '연락은 메일 혹은 문자로 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
