import Image from 'next/image';
import { Cards } from './components/ui/Cards/Cards';
import { IconList } from './components/ui/IconList/IconList';
import { Footer } from './components/ui/Footer/Footer';

export default function Home() {
  return (
    <>
      <video autoPlay loop muted className='video'>
        <source src='/space-bg.mp4' type='video/mp4' />
      </video>
      <main className='main'>
        <div className='container'>
          <div className='main__wrapper'>
            <IconList />
            <Cards />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
