// import React from 'react'
import fundamentalbg from '../assets/images/background.png'
import LawCard from '../components/Laws'
import LawData from '../assets/Objects/LawsAndFines'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const LawsAndFines = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-home">

        <div
        style={{
          backgroundImage: `url(${fundamentalbg})`,
          width: '100vw',
          minHeight: '100vh',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: 'auto',
          backdropFilter: 'blur(10px)',
        }}
      >

        <div className='absolute inset-0 bg-white/5 backdrop-blur-sm h-[calc(100vh-40px)] pb-3 overflow-y-auto'>

            <h1 className='text-white text-center text-xl my-5 md:text-2xl'>LAWS AND FINES</h1>

            <div className="LawsAndFinesWrapper w-[80vw] m-auto">
              <p className='text-white font-bold font-montserrat'>LAW VIOLATIONS</p>
              <div className='my-5'>
                  <div className='md:grid md:grid-cols-2 m-auto'>
                    {LawData.laws.map((item) => (
                      <LawCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                      />
                    ))}
                  </div>
              </div>

              {/* FINES AND PENALTIES */}
              <p className='text-white font-bold font-montserrat'>FINES AND PENALTIES</p>
              <div className='my-5'>
                  <div className='md:grid md:grid-cols-2 m-auto'>
                    {LawData.penalties.map((item) => (
                      <LawCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        fine={item.fine}
                        penalty={item.penalty}
                      />
                    ))}
                  </div>
              </div>

            </div>

            {/* GO TO QUIZ BUTTON OR GO BACK TO HOME BUTTON */}
            <div className='my-5 flex items-center justify-center gap-5'>
              <Button
                label='Home'
                variant='outline'
                onClick={() => navigate("/fundamentals")}
                className="hover:transform hover:scale-110 transition duration-200 ease-in-out"
              />
              <Button
                label='Take Quiz'
                variant='primary'
                onClick={() => navigate("/fundamentals/quiz")}
                className="hover:transform hover:scale-110 transition duration-200 ease-in-out"
              />
            </div>

        </div>

      </div>
    </div>
  )
}

export default LawsAndFines