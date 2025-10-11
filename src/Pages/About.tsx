// import React from 'react'
import '../Css/About.css'

const About = () => {
  return (
    <div>
      <div className='aboutUs h-[100vh] py-3 px-5 overflow-scroll'>

        <div className="about text-xs text-justify">
          <h1 className="text-sm underline">About Road Maestro</h1>
            <p>Welcome to Road Maestro — your interactive learning companion for mastering the fundamentals 
            of driving and vehicle knowledge. Road Maestro is an online learning system designed to help 
            users understand the basics of cars and car parts, traffic laws, and road signs in a simple, 
            engaging, and accessible way. Whether you're a student preparing for a driver's exam, an 
            aspiring car enthusiast, or someone who simply wants to refresh their road knowledge, Road 
            Maestro provides the right tools to guide you. Our platform doesn't just stop at lessons — 
            it features interactive quizzes to test your understanding and help you retain what you've 
            learned. Each topic is crafted to make learning about roads, rules, and vehicles both fun 
            and effective. Road Maestro began as a college project during the creator's third year in 
            college, born out of a passion for both technology and road safety education. What started 
            as an academic pursuit has grown into a valuable learning system that aims to make every 
            learner a more informed and responsible road user.</p>
        </div>
        <hr />

        <div className="mission text-xs text-justify">
          <h1 className="text-sm underline">Our Mission</h1>
            <p>To promote road awareness and safety through accessible digital education — empowering 
              learners to understand the rules of the road and the mechanics that drive it.</p>
        </div>
        <hr />

        <div className="vision text-xs text-justify">
          <h1 className="text-sm underline">Our Vision</h1>
            <p>To become a trusted online platform that shapes smarter, safer, and more responsible 
              drivers through engaging and interactive learning experiences.</p>
        </div>

      </div>
      <div className="credit text-xs p-2 font-semibold w-full text-center bottom-0 fixed text-shadow-lg border-t-1">
        {/* <h1 className="text-sm underline">Credit</h1> */}
          <p>Created and developed by Honey Dee T. Eslera <br />
            © Road Maestro – All Rights Reserved</p>
      </div>
    </div>
  )
}

export default About