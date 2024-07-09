import image from '../../../assets/img/footer-img.svg';
import semechka2 from '../../../assets/img/semechka2.svg';
import semechka from '../../../assets/img/semechka3.svg';
import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__main-wrapper'>
          <div className='footer__wrapper'>
            <div className='footer__left'>
              <div className='footer__text'>
                Не знаю как это работает, но Тёрка подбирает того человека,
                который нужен тебе именно сейчас. Важно в нём это разглядеть.
              </div>
            </div>

            <div className='footer__image-wrapper'>
              <Image
                priority
                src={image}
                alt='image'
                className='footer__image'
              />
              <div className='footer__semechka-wrapper first'>
                <Image
                  priority
                  src={semechka2}
                  alt='image'
                  className='footer__semechka first'
                />
              </div>
              <div className='footer__semechka-wrapper second'>
                <Image
                  priority
                  src={semechka}
                  alt='image'
                  className='footer__semechka second'
                />
              </div>
            </div>

            <div className='footer__right'>
              <div className='footer__text'>
                Наверное, Тёрку делают колдуны и ведьмы!
              </div>
            </div>
          </div>
          <div className='footer__bottom-wrapper'>
            <p className='footer__copyright'>(С) Тёрка, 2020-2024</p>
            <a href='tel:+79520559846'>
              <p className='footer__number'>+7 952 055 98 46 </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
