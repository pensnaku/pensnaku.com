import './App.css';

import linkIcon from './assets/images/link-icon.svg';
import juli0 from './assets/images/juli-0.png';
import juli1 from './assets/images/juli-1.png';
import juli2 from './assets/images/juli-2.png';
import artishome1 from './assets/images/art-is-home-1.png';
import artishome2 from './assets/images/art-is-home-2.png';
import artishome3 from './assets/images/art-is-home-3.png';
import eyowo1 from './assets/images/eyowo-1.png';
import eyowo2 from './assets/images/eyowo-2.png';
import eyowo3 from './assets/images/eyowo-3.png';
import printpartners1 from './assets/images/print-partners-1.png';
import printpartners2 from './assets/images/print-partners-2.png';
import printpartners3 from './assets/images/print-partners-3.png';
import printpartners4 from './assets/images/print-partners-4.png';

import menuClose from './assets/images/menu-closed.svg';
import menuOpen from './assets/images/menu-open.svg';

import { PortfolioCarousel } from './components/Portfolio';
import { ContactLinks } from './components/ContactLinks';
import { Divider } from './components/Divider';
import { Skills } from './components/Skills';
import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const navigateAndClose = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();
    closeMenu();
    setTimeout(() => {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };
  return (
    <div className='max-w-[1800px] mx-auto px-5 lg:px-40 font-quicksand text-midnight-shadow'>
      {isOpen && (
        <div className='fixed md:hidden inset-0 bg-[#0000007a] bg-opacity-50 flex justify-center items-center p-5 z-20'>
          <div className='bg-white p-5 rounded-lg shadow-lg w-full h-11/12'>
            <img
              src={menuOpen}
              alt='Close menu'
              onClick={closeMenu}
              className='w-7 h-7 ml-auto'
            />
            <div className='flex flex-col h-2/4 justify-between'>
              <a
                href='#skills'
                className='relative cursor-pointer group text-[18px] border-b-[0.1px] border-b-silver-mist py-5'
                onClick={(e) => navigateAndClose(e, '#skills')}
              >
                Skills
                <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
              </a>
              <a
                href='#about'
                className='relative cursor-pointer group text-[18px] border-b-[0.2px] border-b-silver-mist py-5'
                onClick={(e) => navigateAndClose(e, '#about')}
              >
                About
                <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
              </a>

              <a
                href='#portfolio'
                className='relative cursor-pointer group text-[18px] border-b-[0.2px] border-b-silver-mist py-5'
                onClick={(e) => navigateAndClose(e, '#portfolio')}
              >
                Portfolio
                <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
              </a>

              <a
                href='#contact'
                className='relative cursor-pointer group text-[18px] border-b-[0.2px] border-b-silver-mist py-5'
                onClick={(e) => navigateAndClose(e, '#contact')}
              >
                Contact
                <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className='h-svh flex flex-col justify-between'>
        <div className='md:hidden mt-5 ml-auto' onClick={openMenu}>
          {!isOpen ? (
            <img src={menuClose} alt='Open the menu' className='w-6 h-6' />
          ) : null}
        </div>

        <div className='md:flex py-5 hidden'>
          <div className='font-medium lg:block'>
            Based in <br />
            Rotterdam, Netherlands
          </div>
          <div className='flex w-1/3 ml-auto flex-row justify-between font-medium'>
            <a href='#skills' className='relative cursor-pointer group'>
              Skills
              <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#about' className='relative cursor-pointer group'>
              About
              <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='#portfolio' className='relative cursor-pointer group'>
              Portfolio
              <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='#contact' className='relative cursor-pointer group'>
              Contact
              <span className='absolute left-0 bottom-5 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>
        </div>
        <div>
          <div className='flex animate-fade-in'>
            <span className='text-midnight-shadow! text-8xl w-full text-center md:text-name md:text-left font-quicksand font-bold'>
              EEDEE
            </span>
          </div>

          <div className='flex animate-fade-in [animation-delay:500ms]'>
            <span className='text-midnight-shadow! text-8xl w-full text-center ml-auto md:text-name md:text-right font-quicksand font-bold'>
              NAKU
            </span>
          </div>
        </div>
        <div className='text-lg lg:text-2xl md:w-2/3 lg:w-1/2 py-10 lg:mr-auto'>
          <p>
            Senior software engineer passionate about building great software
            and guiding others through mentoring
          </p>
        </div>
      </div>
      <div className='my-40' id='skills'>
        <div className='text-4xl lg:text-6xl font-quicksand font-bold text-midnight-shadow!'>
          Skills
        </div>
        <Divider />
        <Skills />
      </div>
      <div className='my-30 md:my-60 lg:my-80' id='about'>
        <div className='text-4xl lg:text-6xl font-quicksand font-bold text-midnight-shadow!'>
          About me
        </div>
        <Divider />
        <div className='flex flex-col lg:flex-row md:flex-row'>
          <div className='lg:flex-1 pr-5 md:pr-20 lg:pr-80 flex flex-col min-h-full justify-between'>
            <p className='text-lg lg:sub-header mb-10 lg:mb-0'>
              Experienced software engineer focused on building scalable,
              high-performance systems. I thrive on collaboration, mentoring,
              and delivering impactful projects that drive success.
            </p>
            <ContactLinks work={true} socials={false} />
          </div>
          <div className='lg:flex-2 text-lg mt-10 md:mt-0 lg:mt-0'>
            <p>
              For the past decade, I've been dedicated to building intelligent
              and scalable solutions that drive meaningful business results
            </p>
            <br />
            <p>
              My expertise lies in system architecture and performance
              optimization, ensuring technology aligns seamlessly with strategic
              business objectives. Additionally, I founded{' '}
              <a
                href='https://vervana.io'
                className='relative cursor-pointer group text-lush-lime!'
              >
                Vervana
                <span className='absolute mt-1 left-0 bottom-0 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
              </a>{' '}
              to provide practical technical solutions to businesses and
              individuals
            </p>
            <br />
            <p>
              I also enjoy mentoring junior engineers and find it rewarding to
              help them grow and see them shine while building awesome projects
            </p>
            <br />
            <p>
              When I'm not working, you'll most likely find me on the volleyball
              court enjoying the game and staying active.
            </p>
          </div>
        </div>
      </div>
      <div className='my-40 md:my-60 lg:my-80' id='portfolio'>
        <div className='text-4xl lg:text-6xl font-quicksand font-bold text-midnight-shadow!'>
          Portfolio
        </div>
        <Divider />
        <div className='lg:flex flex-row  mb-25 md:mb-55'>
          <div className='lg:flex lg:flex-col flex-3 md:pr-20 text-lg lg:justify-between'>
            <div>
              <div className='sub-header lg:mb-3 header-text'>juli Inc</div>
              juli.co is an AI-powered mobile app designed to revolutionize
              chronic condition management. By seamlessly tracking symptoms,
              lifestyle factors, and data from connected devices, juli.co
              delivers personalized insights, empowering users to understand
              their unique health patterns and identify triggers. <br />
              <br />I played a key role in developing juli's robust backend and
              streamlining its DevOps infrastructure. Additionally, I provided
              significant support to the React Native application, notably
              leading the effort to achieve SOC 2 compliant tech stack
            </div>
            <a
              href='https://juli.co'
              target='_blank'
              className='relative w-10 h-10 p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={linkIcon}
                alt='Link to juli'
                className='relative transition-all duration-500 z-10 w-5 h-5'
              />
            </a>
          </div>
          <div className='lg:flex-2'>
            <PortfolioCarousel
              images={[juli0, juli1, juli2]}
              title='juli Inc'
            />
          </div>
        </div>
        <div className='lg:flex lg:flex-row mb-25 md:mb-55'>
          <div className='lg:flex lg:flex-col flex-3 lg:pl-20 text-lg justify-between order-2'>
            <div>
              <div className='sub-header mb-3 header-text'>Eyowo</div>
              Eyowo is a digital financial platform dedicated to expanding
              financial inclusion, particularly in Nigeria. By leveraging mobile
              technology, Eyowo provides accessible services like money
              transfers, bill payments, and savings options, even without
              internet access.
              <br />
              <br /> As a core backend engineer at Eyowo, I drove the
              development of critical backend systems ensuring security,
              robustness and scalable performance.
            </div>
            <a
              href='https://eyowo.com'
              target='_blank'
              className='relative w-10 h-10 p-2 rounded-xl mr-5 overflow-hidden group'
            >
              <span className='absolute inset-0 bg-lush-lime h-0 group-hover:h-full transition-all duration-400 origin-bottom z-0'></span>
              <img
                src={linkIcon}
                alt='Link to Eyowo'
                className='relative transition-all duration-500 z-10 w-5 h-5'
              />
            </a>
          </div>
          <div className='lg:flex-2 lg:order-1'>
            <PortfolioCarousel
              images={[eyowo1, eyowo2, eyowo3]}
              title='Eyowo'
            />
          </div>
        </div>
        <div className='lg:flex lg:flex-row mb-25 md:mb-55'>
          <div className='lg:flex lg:flex-col flex-3 lg:pr-20 text-lg justify-between'>
            <div>
              <div className='sub-header mb-3 header-text'>PrintPartners</div>
              PrintPartners simplifies the print-on-demand process, helping
              businesses to easily create and sell custom apparel and
              merchandise. With the user-friendly platform, you can design
              unique products, integrate seamlessly with your online store, and
              they handle the printing and fulfillment <br />
              <br />I built the end-to-end system at PrintPartners, from a
              no-code frontend editor enabling users to design merchandise to
              the backend that processed and rendered those designs into
              high-quality, printable images.
            </div>
            <a
              href='https://printpartners.com'
              target='_blank'
              className='p-2 w-10 h-10 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
            >
              <img
                src={linkIcon}
                alt='Link to printpartners'
                className='w-5 h-5'
              />
            </a>
          </div>
          <div className='flex-2'>
            <PortfolioCarousel
              images={[
                printpartners1,
                printpartners2,
                printpartners3,
                printpartners4,
              ]}
              title='juli Inc'
            />
          </div>
        </div>
        <div className='lg:flex lg:flex-row mb-55'>
          <div className='lg:flex lg:flex-col flex-3 lg:pl-20 text-lg justify-between order-2'>
            <div>
              <div className='sub-header mb-3 header-text'>ArtIsHome</div>
              ArtIsHome connects artists with communities, fostering creative
              engagement through accessible online platforms and real-world
              initiatives. They provide resources and opportunities for artists
              to showcase their work, collaborate, and build sustainable
              careers, while simultaneously enriching communities with diverse
              artistic experiences.
              <br />
              <br />
              As a volunteer software engineer for ArtIsHome, I'm tasked with
              supporting their mission by maintaining and optimizing the tech
              stack.
            </div>
            <a
              href='https://artishome.org'
              target='_blank'
              className='p-2 w-10 h-10 rounded-xl mr-5 hover:bg-lush-lime transition-colors duration-800'
            >
              <img
                src={linkIcon}
                alt='Link to art is home'
                className='w-5 h-5'
              />
            </a>
          </div>
          <div className='flex-2 order-1'>
            <PortfolioCarousel
              images={[artishome1, artishome2, artishome3]}
              title='Art is Home'
            />
          </div>
        </div>
      </div>
      <div className='mt-40 pb-10' id='contact'>
        <Divider />
        <div className='text-2xl md:text-3xl lg:text-6xl font-quicksand font-bold md:flex lg:flex justify-between'>
          <div>
            <span className='header-text'>Let's Connect!</span>
            <div className='mt-5 text-xl font-medium'>
              Have a question or an idea? Let’s chat
            </div>
          </div>
          <div className='ml-auto flex-row font-medium sub-header mt lg:mt-0'>
            <a
              href='mailto:hello@pensnaku.com'
              className='relative cursor-pointer group'
            >
              hello@pensnaku.com
              <span className='absolute mt-1 left-0 bottom-0 w-0 h-[2.5px] bg-lush-lime transition-all duration-300 group-hover:w-full'></span>
            </a>
            <div className='mt-5 lg:mt-5'>
              <ContactLinks work={false} socials={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
