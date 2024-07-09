import Image from 'next/image';
import { Cards } from './components/ui/Cards/Cards';
import { IconList } from './components/ui/IconList/IconList';
import { Footer } from './components/ui/Footer/Footer';
import space from './assets/img/space.svg';

export default function Home() {
  return (
    <>
      <div className='home'>
        <video autoPlay loop muted playsInline className='video'>
          <source src='/space-bg.mp4' type='video/mp4' />
        </video>
        <Image priority src={space} alt='space' className='body-bg' />
        <main className='main'>
          <div className='container main'>
            <div className='main__wrapper'>
              <IconList />
              <Cards />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
