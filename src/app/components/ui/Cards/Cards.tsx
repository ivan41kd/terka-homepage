import Image from 'next/image';
import next from '../../../assets/ui/next.svg';
import card1 from '../../../assets/img/image-sidim.svg';
import card2 from '../../../assets/img/image-lejim.svg';
export const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__wrapper'>
        <div className='cards__card'>
          <div className='cards__card-wrapper'>
            <div className='cards__text-wrapper'>
              <h2 className='cards__title'>Встречи 1 на 1</h2>
              <p className='cards__description'>
                В нашем городе очень много интересных и талантливых людей, наша
                задача — познакомить тебя с каждым из них.
              </p>
            </div>
            <div className='cards__image-wrapper'>
              <Image
                priority
                src={card1}
                alt='card1'
                className='cards__image'
              />
            </div>
          </div>
          <svg
            width='80.000000'
            height='80.000000'
            viewBox='0 0 80 80'
            fill='none'
            className='cards__next'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs />
            <g id='fill' transform='translate(40, 40)'>
              <circle className='cards__fill' r='0.1' />
            </g>
            <circle
              id='Ellipse 6'
              cx='40.000000'
              cy='40.000000'
              r='39.285713'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='1.428571'
            />
            <line
              id='Line 1'
              x1='21.890625'
              y1='39.979004'
              x2='57.605469'
              y2='39.979004'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='2.857142'
            />
            <path
              id='Vector'
              d='M42.39 23.06L58.1 38.78L58.1 41.21L42.39 56.93'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='2.857142'
            />
          </svg>
        </div>
        <div className='cards__card'>
          <div className='cards__card-wrapper'>
            <div className='cards__text-wrapper'>
              <h2 className='cards__title'>Мероприятия города</h2>
              <p className='cards__description'>
                Участвуй в открытых и эксклюзивных мероприятиях Калининграда.{' '}
                <br></br>Или создавай свои!
              </p>
            </div>
            <div className='cards__image-wrapper'>
              <Image
                priority
                src={card2}
                alt='card1'
                className='cards__image'
              />
            </div>
          </div>
          <svg
            width='80.000000'
            height='80.000000'
            viewBox='0 0 80 80'
            fill='none'
            className='cards__next'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs />
            <g id='fill' transform='translate(40, 40)'>
              <circle className='cards__fill' r='0.1' />
            </g>
            <circle
              id='Ellipse 6'
              cx='40.000000'
              cy='40.000000'
              r='39.285713'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='1.428571'
            />
            <line
              id='Line 1'
              x1='21.890625'
              y1='39.979004'
              x2='57.605469'
              y2='39.979004'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='2.857142'
            />
            <path
              id='Vector'
              d='M42.39 23.06L58.1 38.78L58.1 41.21L42.39 56.93'
              stroke='#303030'
              stroke-opacity='1.000000'
              stroke-width='2.857142'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
