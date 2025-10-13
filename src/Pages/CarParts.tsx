// import React from 'react';
import Card from '../components/Card';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import '../assets/Css/Fundamental.css';
import fundamentalImg from '../assets/Objects/Fundamental';
import Button from '../components/Button';
import fundamentalbg from '../assets/images/background.png';

const Fundamental = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-home">
      <div
        style={{
          backgroundImage: `url(${fundamentalbg})`,
          width: '100vw',
          minHeight: '100vh',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: '0 auto',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs min-h-screen overflow-y-auto">
          <div className="text-center pb-10 lg:w-[80vw] lg:m-auto">
            <h1 className="mt-5 font-bold underline text-white md:text-lg lg:text-2xl" data-aos="fade-left">
              Fundamentals of Driving
            </h1>

            <TypeAnimation
              sequence={[
                `Master the road before you take the wheel — learn the fundamentals with RoadMaestro`,
                1000,
              ]}
              wrapper="span"
              speed={70}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              className="font-semibold my-5 mx-5 text-white text-xs md:text-md lg:text-lg"
            />

            <p className="text-center text-white font-bold text-2xl underline underline-offset-5" data-aos="zoom-in">
              Car Parts
            </p>

            <div className="card-body flex flex-wrap items-center justify-center my-5" data-aos="fade-up">
              {fundamentalImg.map((item, index) => (
                <Card
                  key={index}
                  title={item.title ?? ''}
                  description={item.Description ?? ''}
                  imageUrl={item.img}
                  linkUrl="/"
                />
              ))}
            </div>

            <Button
              label="Next"
              variant="secondary"
              onClick={() => navigate('/fundamental/blowbaga')}
              className="mb-5 hover:transform hover:scale-105"
            />
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamental;
