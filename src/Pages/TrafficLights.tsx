// import React from 'react'
import red from '../assets/images/TrafficLights_Images/red.jpg'
import yellow from '../assets/images/TrafficLights_Images/yellow.jpg'
import green from '../assets/images/TrafficLights_Images/green.jpg'
import braking from '../assets/images/TrafficLights_Images/braking.jpg'
import fundamentalbg from '../assets/images/background.png'
import '../assets/Css/TrafficLights.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const TrafficLights = () => {

    const navigate = useNavigate();

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
          margin: 'auto',
          backdropFilter: 'blur(10px)',
        }}
      >

        <div className='absolute inset-0 bg-white/5 backdrop-blur-sm overflow-y-scroll h-[calc(100vh-50px)]'>
            
            <div className='wrapper py-3 w-[80vw] m-auto'>
                <h1 className='text-white text-center text-lg md:text-xl' data-aos="fade-up">TRAFFIC LIGHTS</h1>
                {/* TRAFFIC LIGHTS CONTENT */} 
                <div className='trafficLights' data-aos="fade-right">
                    <div className='text-justify leading-5'>
                        <img src={red} alt="Red Light" />
                        <span>
                            
                                <p>RED SIGNAL </p>
                                Means you must bring your vehicle to a stop at a clearly marked line. You may proceed unless you are instructed to do so by an authorized Traffic Officer.
                            
                            
                                <p>FLASHING RED SIGNAL </p>
                                Means bring your vehicle to a stop and proceed only when it is safe to do so.
                            
                        </span>
                        
                    </div>
                    <div className='text-justify leading-5'>
                        <img src={yellow} alt="Yellow Light" />
                        <span>
                                <p>YELLOW / AMBER SIGNAL </p>
                                Indicates that the red signal is about to appear. Prepare to stop.
                            
                            
                                <p>FLASHING YELLOW BEACON </p>
                                When a flashing yellow signal is incorporated with an overhead beacon or a beacon located directly above a warning sign, it warns you to proceed with caution.
                            
                                <p>YELLOW ARROW </p>
                                In some traffic signal, a yellow arrow appear after a green arrow. When the yellow arrow appears, it means the red or solid green signal is about to appear. Therefore, stop the vehicle safely. If it cannot be done, proceed with caution.
                        </span>
                        
                    </div>
                    <div className='text-justify leading-5'>
                        <img src={green} alt="Green Light" />
                        <span>
                            
                                <p>GREEN SIGNAL </p>
                                A green signal means you can proceed, provided you yield to pedestrian and other road-users lawfully using the intersection.<br/><br/>
                        
                                When making a turn on a green signal, remember that the pedestrian crossing on the green signal have the right of way. Be sure that you do not block the traffic. <br/><br/>
                            
                                When a flashing left or right green arrow together with a green signal is used, it permits the vehicle facing that signal to turn left, turn right or go through while opposing traffic faces a red signal.
                        </span>
                    </div>
                </div>

                {/* PROPER BRAKING CONTENT */}
                <div className="properBraking text-justify leading-5">
                    <h1 className='text-center text-lg md:text-xl'>PROPER BRAKING AND <br />FOLLOWING THE TWO OR THREE SECOND RULE</h1>

                    <img src={braking} alt="Proper Braking" />

                    <span>
                        <p>PROPER BRAKING </p>
                        Do not tail gait. When there is needless traffic in your lane, staying too close to the car in front of you offers no opportunity for maneuvering.

                        When pursuing a car, keep a safe space between you and it. This will give you enough room, time to think, and, if required, space to stop safely.

                        Motorcycles should be given the same space as any other vehicle. All other vehicles on the road must share the same complete length and breadth as motorcycles.

                        <p>Braking Distance </p>
                        The distance travelled from the time you start to activate the brakes until you bring the vehicle to a stop. The vehicle running at 100 kph in an ideal condition can travel 60 meters when applying a full brake.
                    

                    
                        <p>Perception and Reaction Distance </p>
                        Allow extra braking distance. It takes a split second for your reflexes to respond and brain to react from the time you see a potential hazard. A vehicle running at 100 kph has a perception distance of 20 meters.
                    

                    
                        <p>Total Stopping Distance </p>
                        Take consideration of your perception distance, reaction distance, and braking distance based on your speed to come into a total stopping distance. A vehicle running at 100 kph has a total stopping distance of 80 meters on a full brake.
                    
                    
                        <p>Follow the two or three second rule… </p>
                        It is very important to avoid following another car too closely, as it gives you less time to react if the driver in front of you decides to brake or turn suddenly. For safety, drivers are advised to maintain a distance of two or three seconds of the car in front. The rule varies on the weight/mass of the vehicle given the same speed. The higher the mass, the longer the time.
                        The distance is measured in time rather than meter (or other units of measurement) as it can be difficult to judge distances while driving and what counts as a safe distance varies depending on speed.
                    </span>
                </div>

                {/* SPEED RESTRICTIONS TABLE */}
                <div className='speedResTable mt-5 text-white'>
                    <h1 className='text-center text-lg md:text-xl'>SPEED RESTRICTION TABLE</h1>
                    <table className="text-sm border border-gray-400 text-left w-[100%] my-3 md:w-[80%] m-auto md:text-md lg:text-lg">
                        <thead className="bg-gray-200 text-black">
                            <tr>
                                <th className="p-2">ROAD TYPE / AREA</th>
                                <th className="p-2">SPEED LIMIT</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className="text-white hover:bg-gray-50 hover:text-black">
                                <td className="border p-2">Expressways</td>
                                <td className="border p-2">100 km/h</td>
                            </tr>
                            <tr className="text-white hover:bg-gray-50 hover:text-black">
                                <td className="border p-2">National Highways</td>
                                <td className="border p-2">80 km/h</td>
                            </tr>
                            <tr className="text-white hover:bg-gray-50 hover:text-black">
                                <td className="border p-2">Provincial Roads</td>
                                <td className="border p-2">60 km/h</td>
                            </tr>
                            <tr className="text-white hover:bg-gray-50 hover:text-black">
                                <td className="border p-2">City/Municipal Roads</td>
                                <td className="border p-2">30 - 40 km/h</td>
                            </tr>
                            <tr className="text-white hover:bg-gray-50 hover:text-black">
                                <td className="border p-2">Residential Areas</td>
                                <td className="border p-2">20 - 30 km/h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

                {/* EXCEPTION TO SPEED RESTRICTION */}
                <div className='exception text-white'>
                    <h1 className='text-center text-lg md:text-xl'>EXCEPTION TO SPEED RESTRICTION</h1>
                    <ul className='text-justify lg:text-lg'>
                        <li>1. A physician or his driver when the former responds to emergency calls;</li>
                        <li>2. The driver of a hospital ambulance on the way to and from the place of accident or other emergency;</li>
                        <li>3. Any driver bringing a wounded or sick person for emergency treatment to a hospital, clinic, or any other similar place;</li>
                        <li>4. The driver of a motor vehicle belonging to the Armed Forces while in use for official purposes in times of riot, insurrection or invasion;</li>
                        <li>5. A police patrol vehicle in pursuit of a criminal;</li>
                        <li>6. A law-enforcement officer who is trying to overtake a violator of traffic laws; and</li>
                        <li>7. A fire truck in response to a fire incident.</li>
                    </ul>
                </div>

                <div className='flex items-center justify-center mt-5'>
                    <Button
                    label='Go Home'
                    variant='outline'
                    onClick={() => navigate("/fundamentals")} 
                    className='font-bold'
                />
                </div>
                

            </div>
            
        </div>

        </div>
    </div>
  )
}

export default TrafficLights