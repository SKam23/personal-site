import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/segmentation-fault/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/SKam23',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/steven.kammm/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://twitter.com/S_Kammm',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:stevenkam@cmu.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
