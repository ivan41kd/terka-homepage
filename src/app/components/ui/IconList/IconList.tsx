import Image from 'next/image';
import logo from '../../../assets/icons/logo.svg';
import tg from '../../../assets/icons/tg.svg';
import Link from 'next/link';
export const IconList = () => {
  return (
    <div className='icon-list__wrapper'>
      <Link href='/'>
        <Image priority src={logo} alt='logo' />
      </Link>
      <a href='https://t.me/terkatalk' target='_blank'>
        <Image
          priority
          src={tg}
          alt='telegram'
          className='icon-list__telegram'
        />
      </a>
    </div>
  );
};
