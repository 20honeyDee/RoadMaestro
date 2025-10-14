// import React from 'react'
import red from '../assets/images/TrafficLights_Images/red.jpg'
import yellow from '../assets/images/TrafficLights_Images/yellow.jpg'
import green from '../assets/images/TrafficLights_Images/green.jpg'
import braking from '../assets/images/TrafficLights_Images/braking.jpg'
import fundamentalbg from '../assets/images/background.png'
import '../assets/Css/TrafficLights.css'


const TrafficLights = () => {
  return (
    <div className='bg-home'>
      <div
        style={{
          backgroundImage: `url(${fundamentalbg})`,
          width: '100vw',
          minHeight: '100vh',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: '0 auto 5rem auto',
          backdropFilter: 'blur(10px)',
        }}
      >

        <div className='trafficLights absolute inset-0 bg-white/5 backdrop-blur-sm overflow-y-scroll pb-5'>
            <div className='flex flex-col items-center justify-center'>
                
                {/* TRAFFIC LIGHTS CONTENT */}
                <h1 className='text-white text-center mt-10 text-xl'>TRAFFIC LIGHTS</h1>
                
                <div className='text-justify leading-5'>
                    <img src={red} alt="Red Light" />
                    <p>
                        <span>RED SIGNAL </span>
                        means you must bring your vehicle to a stop at a clearly marked line. You may proceed unless you are instructed to do so by an authorized Traffic Officer.
                    </p>
                    <p>
                        <span>FLASHING RED SIGNAL </span>
                        means bring your vehicle to a stop and proceed only when it is safe to do so.
                    </p>
                </div>
                <div className='text-justify leading-5'>
                    <img src={yellow} alt="Yellow Light" />
                    <p>
                        <span>YELLOW / AMBER SIGNAL </span>
                        indicates that the red signal is about to appear. Prepare to stop.
                    </p>
                    <p>
                        <span>FLASHING YELLOW BEACON </span>
                        When a flashing yellow signal is incorporated with an overhead beacon or a beacon located directly above a warning sign, it warns you to proceed with caution.                </p>
                    <p>
                        <span>YELLOW ARROW </span>
                        In some traffic signal, a yellow arrow appear after a green arrow. When the yellow arrow appears, it means the red or solid green signal is about to appear. Therefore, stop the vehicle safely. If it cannot be done, proceed with caution.
                    </p>
                </div>
                <div className='text-justify leading-5'>
                    <img src={green} alt="Green Light" />
                    <p>
                        <span>GREEN SIGNAL </span>
                        A green signal means you can proceed, provided you yield to pedestrian and other road-users lawfully using the intersection.
                    </p>
                    <p>
                        When making a turn on a green signal, remember that the pedestrian crossing on the green signal have the right of way. Be sure that you do not block the traffic.
                    </p>
                    <p>When a flashing left or right green arrow together with a green signal is used, it permits the vehicle facing that signal to turn left, turn right or go through while opposing traffic faces a red signal.</p>
                </div>

                {/* PROPER BRAKING CONTENT */}
                <div className="properBraking text-justify leading-5">
                    <h1 className='text-white text-center text-xl'>PROPER BRAKING AND <br />FOLLOWING THE TWO OR THREE SECOND RULE</h1>

                    <img src={braking} alt="Proper Braking" />

                    <p>
                        <h2 className='text-center'>PROPER BRAKING </h2>
                        Do not tail gait. When there is needless traffic in your lane, staying too close to the car in front of you offers no opportunity for maneuvering.<br/><br/>

                        When pursuing a car, keep a safe space between you and it. This will give you enough room, time to think, and, if required, space to stop safely.<br/><br/>

                        Motorcycles should be given the same space as any other vehicle. All other vehicles on the road must share the same complete length and breadth as motorcycles.

                    </p>
                    
                    <p>
                        <h2>Braking Distance </h2>
                        The distance travelled from the time you start to activate the brakes until you bring the vehicle to a stop. The vehicle running at 100 kph in an ideal condition can travel 60 meters when applying a full brake.
                    </p>

                    <p>
                        <h2>Perception and Reaction Distance </h2>
                        Allow extra braking distance. It takes a split second for your reflexes to respond and brain to react from the time you see a potential hazard. A vehicle running at 100 kph has a perception distance of 20 meters.
                    </p>

                    <p>
                        <h2>Total Stopping Distance </h2>
                        Take consideration of your perception distance, reaction distance, and braking distance based on your speed to come into a total stopping distance. A vehicle running at 100 kph has a total stopping distance of 80 meters on a full brake.
                    </p>
                    <p>
                        <h2>Follow the two or three second rule… </h2>
                        It is very important to avoid following another car too closely, as it gives you less time to react if the driver in front of you decides to brake or turn suddenly. For safety, drivers are advised to maintain a distance of two or three seconds of the car in front. The rule varies on the weight/mass of the vehicle given the same speed. The higher the mass, the longer the time.<br/><br/>
                        The distance is measured in time rather than meter (or other units of measurement) as it can be difficult to judge distances while driving and what counts as a safe distance varies depending on speed.
                    </p>
                </div>
            </div>
            
        </div>

        

        </div>
    </div>
  )
}

export default TrafficLights