import home2 from '../img/home2.png';
import { clock, diaphragm, money, teamwork } from '../img/icon';

const ServicesSection = () => {
  return (
    <section className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='card'>
          <div className='icon'>
            <img src={diaphragm} alt='icon' />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='card'>
          <div className='icon'>
            <img src={money} alt='icon' />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <img src={home2} alt='' />
      </div>
    </section>
  );
};

export default ServicesSection;
