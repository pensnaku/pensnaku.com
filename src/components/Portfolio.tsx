import { JSX } from 'react';
import './style.css';

interface PortfolioInterface {
  title?: string;
  images: string[];
  description?: JSX.Element;
  orientation?: 'ltr' | 'rtl';
}

export function PortfolioCarousel(data: PortfolioInterface) {
  const getRandomImage = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];
  return (
    <>
      <div className='bg-midnight-shadow min-w-full max-h-150 h-auto flex items-center justify-center py-5 rounded-md'>
        <div className='max-h-full w-full px-5'>
          <img
            src={getRandomImage(data.images)}
            className='object-contain max-h-96 h-auto mx-auto rounded-lg'
          />
        </div>
      </div>
    </>
  );
}
