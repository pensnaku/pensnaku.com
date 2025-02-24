import './App.css';
import GithubIcon from './assets/images/github.svg';
import GitlabIcon from './assets/images/gitlab.svg';
import InstagramIcon from './assets/images/instagram.svg';
import LinkedInIcon from './assets/images/linkedin.svg';
import XIcon from './assets/images/x.svg';

function App() {
  return (
    <div className='px-40 font-quicksand text-midnight-shadow'>
      <div className='h-screen flex flex-col justify-between'>
        <div className='flex py-5'>
          <div className='flex w-1/2 ml-auto flex-row justify-between'>
            <span>about</span>
            <span>experience</span>
            <span>projects</span>
            <span>contact</span>
          </div>
        </div>
        <div>
          <div className='flex'>
            <span className='text-midnight-shadow text-name font-quicksand font-bold'>
              EEDEE
            </span>
          </div>
          <div className='flex'>
            <span className=' text-midnight-shadow ml-auto text-name font-quicksand font-bold'>
              NAKU
            </span>
          </div>
        </div>
        <div className='text-2xl w-1/2 py-10'>
          Senior software engineer passionate about building great software and
          guiding others through mentoring
        </div>
      </div>
      <div className='my-60'>
        <div>
          <div className='text-6xl font-quicksand font-bold'>ABOUT ME</div>
          <div className='flex items-center my-4'>
            <div className='flex-1 h-[1px] bg-gray-300'></div>
            <span className='px-4 text-gray-500 font-quicksand'> § </span>
            <div className='flex-1 h-[1px] bg-gray-300'></div>
          </div>
          <div className='flex flex-row mt-10'>
            <div className='flex-3 pr-50 flex flex-col min-h-full justify-between'>
              <p className='font-semibold text-2xl leading-10'>
                Experienced software engineer focused on building scalable,
                high-performance systems. I thrive on collaboration, mentoring,
                and delivering impactful projects that drive success.
              </p>
              <div className='flex flex-row'>
                <a
                  href='https://www.linkedin.com/in/pensnaku/'
                  target='_blank'
                  className='w-10 h-10 p-2 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
                >
                  <img src={LinkedInIcon} alt='LinkedIn Icon' />
                </a>
                <a
                  href='https://github.com/pensnaku'
                  target='_blank'
                  className='w-10 h-10 p-2 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
                >
                  <img src={GithubIcon} alt='Github Icon' />
                </a>
                <a
                  href='https://gitlab.com/eedee-'
                  target='_blank'
                  className='w-10 h-10 p-2 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
                >
                  <img src={GitlabIcon} alt='GitLab Icon' />
                </a>
                <a
                  href='https://x.com/pensnaku'
                  target='_blank'
                  className='w-10 h-10 p-2 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
                >
                  <img src={XIcon} alt='X Icon' />
                </a>
                <a
                  href='https://www.instagram.com/pensnaku/'
                  target='_blank'
                  className='w-10 h-10 p-2 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
                >
                  <img src={InstagramIcon} alt='Instagram Icon' />
                </a>
              </div>
            </div>
            <div className='flex-2 text-lg'>
              <p>
                With 10 years of experience, I specialize in building efficient,
                scalable backend solutions that drive business success. I focus
                on system architecture, performance optimization, and ensuring
                seamless integration with business operations
              </p>
              <br />
              <p>
                Collaboration is a big part of how I work, whether it's
                mentoring junior engineers or collaborating with
                cross-functional teams. I take pride in contributing to projects
                that make a meaningful impact and help organizations scale
                effectively
              </p>
              <br />
              <p>
                When I'm not working, you'll likely find me on the volleyball
                court, enjoying the game and staying active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
