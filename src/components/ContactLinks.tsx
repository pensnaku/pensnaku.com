import GithubIcon from '../assets/images/github.svg';
import GitlabIcon from '../assets/images/gitlab.svg';
import InstagramIcon from '../assets/images/instagram.svg';
import LinkedInIcon from '../assets/images/linkedin.svg';
import MailIcon from '../assets/images/mail.svg';
import XIcon from '../assets/images/x.svg';

export function ContactLinks(data: { work: boolean; socials: boolean }) {
  return (
    <>
      <div className='flex flex-row'>
        <a
          href='mailto:hello@pensnaku.com'
          target='_blank'
          className='relative w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 rounded-xl mr-5 overflow-hidden group'
        >
          <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
          <img
            src={MailIcon}
            alt='Email Icon'
            className='relative transition-all duration-500 z-10'
          />
        </a>
        {data.work ? (
          <>
            <a
              href='https://www.linkedin.com/in/pensnaku/'
              target='_blank'
              className='relative w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={LinkedInIcon}
                alt='LinkedIn Icon'
                className='relative transition-all duration-500 z-10'
              />
            </a>
            <a
              href='https://github.com/pensnaku'
              target='_blank'
              className='relative w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={GithubIcon}
                alt='Github Icon'
                className='relative transition-all duration-500 z-10'
              />
            </a>
            <a
              href='https://gitlab.com/eedee-'
              target='_blank'
              className='relative w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={GitlabIcon}
                alt='GitLab Icon'
                className='relative transition-all duration-500 z-10'
              />
            </a>
          </>
        ) : null}
        {data.socials ? (
          <>
            <a
              href='https://x.com/pensnaku'
              target='_blank'
              className='relative w-10 h-10 p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={XIcon}
                alt='X Icon'
                className='relative transition-all duration-500 z-10'
              />
            </a>
            <a
              href='https://www.instagram.com/pensnaku/'
              target='_blank'
              className='relative w-10 h-10 p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={InstagramIcon}
                alt='Instagram Icon'
                className='relative transition-all duration-500 z-10'
              />
            </a>
          </>
        ) : null}
      </div>
    </>
  );
}
