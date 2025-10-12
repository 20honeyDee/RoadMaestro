import React from 'react'
import Card from '../components/Card'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import '../assets/Css/Fundamental.css'



// import Images 
import fundamentalbg from '../assets/images/background.png'
import accelerator from '../assets/images/Fundamental_Images/accelerator.jpg'


const Fundamental = () => {
    
    const navigate = useNavigate();
    
    return (
        <div className='h-[100vh] bg-home'>

            <div style={{
                backgroundImage: `url(${fundamentalbg})`,
                width: '100vw', 
                height: '100vh', 
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                margin: '0 auto',
                // backgroundColor: 'white',
                backdropFilter: 'blur(10px)'
                }} >
                
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xs h-[100vh] overflow-y-scroll">

                    <div className='text-center'>
                        <h1 className='mt-5 font-bold underline text-white
                        md:text-lg'>Fundamentals of Driving</h1>
                        
                        
                        <TypeAnimation
                            sequence={[
                                // 'Fundamentals of driving is essential before you even start a car.',
                                // 1000, 
                                `Master the road before you take the wheel — learn the fundamentals with RoadMaestro`,
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className='font-semibold my-5 mx-5 text-white text-xs md:text-md lg:text-lg'
                        />

                        <p className='text-center text-white font-bold text-2xl underline underline-offset-5'> Car Parts  </p>
                        
                        <div className="card-body flex flex-wrap items-center justify-center">
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />

                            <Card 
                                imageUrl={accelerator}
                                title="Accelerator" 
                                description="An accelerator is a program that supports early-stage, growth-driven companies through education, mentorship, and financing. Startups enter accelerators for a fixed period of time, and as part of a cohort of companies. The accelerator experience is a process of intense, rapid, and immersive education aimed at accelerating the life cycle of young innovative companies, compressing years’ worth of learning-by-doing into just a few months." 
                                linkUrl='/'
                            />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Fundamental