// Imports
import _2way_hazard from '../images/RoadSigns_Images/2way hazard.png';
import _2way from '../images/RoadSigns_Images/2way.png';
import all_traffic_left from '../images/RoadSigns_Images/all_traffic_left.png';
import cattle_crossing from '../images/RoadSigns_Images/cattle crossing.png';
import child_cross_ahead from '../images/RoadSigns_Images/child cross ahead.png';
import give_way from '../images/RoadSigns_Images/give_way.png';
import hazard_right from '../images/RoadSigns_Images/hazard right.png';
import hump from '../images/RoadSigns_Images/hump.png';
import keep_left from '../images/RoadSigns_Images/keep_left.png';
import no_bikes from '../images/RoadSigns_Images/no bikes.png';
import no_entry from '../images/RoadSigns_Images/no entry.png';
import no_park_anytime from '../images/RoadSigns_Images/no park anytime.png';
import no_peds_cross from '../images/RoadSigns_Images/no peds cross.png';
import no_right_turn from '../images/RoadSigns_Images/no right turn.png';
import no_uturn from '../images/RoadSigns_Images/no uturn.png';
import one_way_right from '../images/RoadSigns_Images/one_way_right.png';
import winding_left from '../images/RoadSigns_Images/winding left.png';

const QuizData = [
  {
    id: 1,
    question:
      "What is the main purpose of Republic Act No. 4136, also known as the Land Transportation and Traffic Code?",
    options: [
      "To regulate public utility vehicle fares",
      "To establish traffic and transportation regulations for road safety",
      "To impose taxes on imported vehicles",
      "To manage air quality in urban areas",
    ],
    answer:
      "To establish traffic and transportation regulations for road safety",
  },
  {
    id: 2,
    question:
      "Republic Act No. 8749, or the Philippine Clean Air Act of 1999, primarily aims to:",
    options: [
      "Regulate vehicle registration",
      "Ensure air quality by controlling pollution from vehicles and industries",
      "Enforce traffic rules and road signage",
      "Promote carpooling and public transport",
    ],
    answer:
      "Ensure air quality by controlling pollution from vehicles and industries",
  },
  {
    id: 3,
    question:
      "What does the Republic Act No. 8750, the Seat Belts Use Act of 1999, require?",
    options: [
      "Only drivers must wear seat belts",
      "All vehicle occupants must wear seat belts",
      "Seat belts are optional for front passengers",
      "Seat belts are only required on highways",
    ],
    answer: "All vehicle occupants must wear seat belts",
  },
  {
    id: 4,
    question:
      "Republic Act No. 8794, or the Motor Vehicle User’s Charge Law, is enacted to:",
    options: [
      "Collect fees for road maintenance and improvement",
      "Increase toll fees for expressways",
      "Regulate fuel pricing",
      "Provide free driving lessons",
    ],
    answer: "Collect fees for road maintenance and improvement",
  },
  {
    id: 5,
    question:
      "Under Republic Act No. 10054, also known as the Motorcycle Helmet Act of 2009, motorcycle riders are required to:",
    options: [
      "Wear helmets only when driving at night",
      "Wear standard protective helmets that meet safety standards",
      "Carry helmets but not necessarily wear them",
      "Wear helmets only on highways",
    ],
    answer: "Wear standard protective helmets that meet safety standards",
  },
  {
    id: 6,
    question:
      "Republic Act No. 10586, the Anti-Drunk and Drugged Driving Act of 2013, penalizes drivers who:",
    options: [
      "Drive without a license",
      "Drive under the influence of alcohol or drugs",
      "Drive without seat belts",
      "Drive over the speed limit",
    ],
    answer: "Drive under the influence of alcohol or drugs",
  },
  {
    id: 7,
    question:
      "The Children’s Safety on Motorcycles Act (Republic Act No. 10666) prohibits:",
    options: [
      "Children from driving motorcycles",
      "Transporting children below a certain age on motorcycles in unsafe conditions",
      "Motorcycle use during school hours",
      "Motorcycle modifications for minors",
    ],
    answer:
      "Transporting children below a certain age on motorcycles in unsafe conditions",
  },
  {
    id: 8,
    question:
      "What activity is prohibited by the Anti-Distracted Driving Act (Republic Act No. 10913)?",
    options: [
      "Using mobile phones or electronic devices while driving",
      "Listening to loud music while driving",
      "Eating or drinking while driving",
      "Talking to passengers while driving",
    ],
    answer: "Using mobile phones or electronic devices while driving",
  },
  {
    id: 9,
    question:
      "The Road Speed Limiter Act of 2016 (Republic Act No. 10916) requires speed limiters to be installed in:",
    options: [
      "Private cars",
      "Public utility vehicles (PUVs)",
      "Motorcycles",
      "Delivery trucks only",
    ],
    answer: "Public utility vehicles (PUVs)",
  },
  {
    id: 10,
    question:
      "Republic Act No. 10930 extends the validity period of driver’s licenses up to:",
    options: ["3 years", "5 years", "10 years", "12 years"],
    answer: "10 years",
  },
  {
    id: 11,
    question:
      "Under Republic Act No. 4136, reckless driving can result in what penalty?",
    options: [
      "Imprisonment for 1 month",
      "Revocation of vehicle registration",
      "Suspension of driver’s license for 3 months to 1 year",
      "Confiscation of vehicle",
    ],
    answer: "Suspension of driver’s license for 3 months to 1 year",
  },
  {
    id: 12,
    question:
      "What is the fine for Driving Under the Influence of Alcohol or Dangerous Drugs (R.A. 4136, Sec. 56)?",
    options: [
      "₱5,000–₱10,000",
      "₱10,000–₱20,000",
      "₱20,000–₱80,000",
      "₱80,000–₱120,000",
    ],
    answer: "₱20,000–₱80,000",
  },
  {
    id: 13,
    question:
      "According to Republic Act No. 4136, what happens when a vehicle is found overloaded?",
    options: [
      "The driver’s license is suspended",
      "The vehicle is impounded until the excess load is removed",
      "The driver is fined ₱10,000 immediately",
      "The vehicle registration is revoked",
    ],
    answer: "The vehicle is impounded until the excess load is removed",
  },
  {
    id: 14,
    question:
      "For speeding violations under Republic Act No. 4136, the fine for the third offense is:",
    options: ["₱1,000", "₱2,000", "₱3,000", "₱5,000"],
    answer: "₱3,000",
  },
  {
    id: 15,
    question:
      "Failure to wear seat belts under Republic Act No. 8750 results in what fine for the first offense?",
    options: ["₱500", "₱1,000", "₱2,000", "₱5,000"],
    answer: "₱1,000",
  },
  {
    id: 16,
    question:
      "Under the Anti-Distracted Driving Act, how much is the fine for the first offense?",
    options: ["₱1,000", "₱3,000", "₱5,000", "₱10,000"],
    answer: "₱5,000",
  },
  {
    id: 17,
    question:
      "Violation of traffic signs and signals under Republic Act No. 4136 can lead to what penalty for the third offense?",
    options: [
      "Suspension of license for one month",
      "Revocation of license",
      "₱10,000 fine",
      "Vehicle impoundment",
    ],
    answer: "Suspension of license for one month",
  },
  {
    id: 18,
    question:
      "Under Republic Act No. 10054, failure to wear a helmet for the fourth offense results in:",
    options: [
      "₱5,000 fine",
      "₱10,000 fine and confiscation of driver’s license",
      "₱15,000 fine",
      "Community service",
    ],
    answer: "₱10,000 fine and confiscation of driver’s license",
  },
  {
    id: 19,
    question:
      "The Anti-Drunk and Drugged Driving Act (Republic Act No. 10586) imposes imprisonment for which offense?",
    options: ["First", "Second", "Third", "All of the above"],
    answer: "Third",
  },
  {
    id: 20,
    question: "What is the primary function of a car's air conditioner (AC)?",
    options: [
      "To circulate fuel in the engine",
      "To cool and dehumidify the vehicle’s interior",
      "To increase the speed of the vehicle",
      "To warm the engine quickly",
    ],
    answer: "To cool and dehumidify the vehicle’s interior",
  },
  {
    id: 21,
    question: "What does the accelerator pedal control?",
    options: [
      "Vehicle steering",
      "Engine speed and power output",
      "Air conditioning temperature",
      "Brake system pressure",
    ],
    answer: "Engine speed and power output",
  },
  {
    id: 22,
    question: "The clutch allows the driver to:",
    options: [
      "Stop the engine completely",
      "Engage and disengage engine power to the transmission",
      "Change the direction of the wheels",
      "Control air flow inside the car",
    ],
    answer: "Engage and disengage engine power to the transmission",
  },
  {
    id: 23,
    question: "What does the transmission do?",
    options: [
      "Transfers power from the engine to the wheels",
      "Stores rotational energy",
      "Controls air pressure in the tires",
      "Manages air flow to the engine",
    ],
    answer: "Transfers power from the engine to the wheels",
  },
  {
    id: 24,
    question: "The gear shift lever is used to:",
    options: [
      "Adjust the seat position",
      "Change gears in a manual transmission",
      "Control air vents",
      "Operate windshield wipers",
    ],
    answer: "Change gears in a manual transmission",
  },
  {
    id: 25,
    question: "The steering wheel allows the driver to:",
    options: [
      "Control the vehicle’s direction",
      "Change gears automatically",
      "Regulate air conditioning",
      "Monitor fuel levels",
    ],
    answer: "Control the vehicle’s direction",
  },
  {
    id: 26,
    question: "Why is it important to keep your car battery clean and free of corrosion?",
    options: [
      "It prevents overheating of the engine.",
      "It ensures proper electrical connection and longer battery life.",
      "It makes the car run faster.",
      "It reduces fuel consumption.",
    ],
    answer: "It ensures proper electrical connection and longer battery life.",
  },
  {
    id: 27,
    question: "What should you do when approaching a flashing red traffic signal?",
    options: [
      "Proceed immediately without stopping.",
      "Slow down but continue driving.",
      "Stop completely and proceed only when it is safe.",
      "Turn off your headlights and proceed cautiously.",
    ],
    answer: "Stop completely and proceed only when it is safe.",
  },
  {
    id: 28,
    question: "What does a yellow or amber traffic signal indicate?",
    options: [
      "Proceed faster to avoid the red light.",
      "The red signal is about to appear, so prepare to stop.",
      "Stop immediately without checking surroundings.",
      "It is safe to turn right.",
    ],
    answer: "The red signal is about to appear, so prepare to stop.",
  },
  {
    id: 29,
    question: "What does the 'two or three second rule' help drivers maintain?",
    options: [
      "A safe following distance from the vehicle ahead.",
      "The correct tire pressure.",
      "The proper braking force.",
      "The appropriate lane discipline.",
    ],
    answer: "A safe following distance from the vehicle ahead.",
  },
  {
    id: 30,
    question: "What is the total stopping distance of a vehicle running at 100 kph under ideal conditions?",
    options: [
      "20 meters",
      "60 meters",
      "80 meters",
      "100 meters",
    ],
    answer: "80 meters",
  },
  {
    id: 31,
    question: "What is the maximum speed limit allowed on expressways in the Philippines?",
    options: [
      "60 km/h",
      "80 km/h",
      "100 km/h",
      "120 km/h",
    ],
    answer: "100 km/h",
  },
  {
    id: 32,
    question: "When are vehicles exempted from following normal speed limits?",
    options: [
      "When traffic is light.",
      "During racing events.",
      "When responding to emergencies such as ambulances, fire trucks, or police in pursuit.",
      "When driving at night.",
    ],
    answer: "When responding to emergencies such as ambulances, fire trucks, or police in pursuit.",
  },
  {
    id: 33,
    img: no_entry,
    question: "What is the name of this sign?",
    options: ["No Entry", "No Parking", "No Stopping", "No U-Turn"],
    answer: "No Entry"
  },
  {
    id: 34,
    img: no_bikes,
    question: "What is the name of this sign?",
    options: ["No Motorcycles", "No Bicycles", "Bike Lane", "Keep Right"],
    answer: "No Bicycles"
  },
  {
    id: 35,
    img: no_uturn,
    question: "What is the name of this sign?",
    options: ["No Left Turn", "No U-Turn", "No Entry", "No Right Turn"],
    answer: "No U-Turn"
  },
  {
    id: 36,
    img: no_park_anytime,
    question: "What is the name of this sign?",
    options: ["No Parking Anytime", "No Stopping", "No Waiting", "No Turn"],
    answer: "No Parking Anytime"
  },
  {
    id: 37,
    img: no_peds_cross,
    question: "What is the name of this sign?",
    options: ["No Pedestrian Crossing", "No Entry", "No Loading Zone", "Children Crossing"],
    answer: "No Pedestrian Crossing"
  },
  {
    id: 38,
    img: no_right_turn,
    question: "What is the name of this sign?",
    options: ["No Left Turn", "No U-Turn", "No Right Turn", "One Way Right"],
    answer: "No Right Turn"
  },
  {
    id: 39,
    question: "What do Prohibitory Signs generally indicate?",
    options: [
      "They give directions that must be followed.",
      "They warn drivers of potential hazards.",
      "They prohibit certain actions or vehicles.",
      "They indicate road work ahead."
    ],
    answer: "They prohibit certain actions or vehicles."
  },
  {
    id: 40,
    img: keep_left,
    question: "What is the name of this sign?",
    options: ["Keep Left", "Keep Right", "Turn Left", "Left Lane Ends"],
    answer: "Keep Left"
  },
  {
    id: 41,
    img: one_way_right,
    question: "What is the name of this sign?",
    options: ["One Way Right", "Keep Right", "Turn Right Only", "No Entry"],
    answer: "One Way Right"
  },
  {
    id: 42,
    img: all_traffic_left,
    question: "What is the name of this sign?",
    options: ["All Traffic Turn Left", "Keep Left", "Left Turn Only", "No Left Turn"],
    answer: "All Traffic Turn Left"
  },
  {
    id: 43,
    question: "What do Mandatory Signs indicate?",
    options: [
      "They require drivers to follow specific directions.",
      "They provide general information only.",
      "They show prohibited actions.",
      "They warn of hazards ahead."
    ],
    answer: "They require drivers to follow specific directions."
  },
  {
    id: 44,
    img: winding_left,
    question: "What is the name of this sign?",
    options: ["Winding Road Left", "Curve Left", "Sharp Turn", "Hazard Left"],
    answer: "Winding Road Left"
  },
  {
    id: 45,
    img: hazard_right,
    question: "What is the name of this sign?",
    options: ["Hazard Right", "Merge Right", "Right Lane Ends", "Curve Right"],
    answer: "Hazard Right"
  },
  {
    id: 46,
    img: give_way,
    question: "What is the name of this sign?",
    options: ["Give Way", "Stop", "Yield to Pedestrians", "Slow Down"],
    answer: "Give Way"
  },
  {
    id: 47,
    img: hump,
    question: "What is the name of this sign?",
    options: ["Hump Ahead", "Slippery Road", "Uneven Road", "Rough Surface"],
    answer: "Hump Ahead"
  },
  {
    id: 48,
    question: "What do Warning Signs usually indicate?",
    options: [
      "They provide road directions.",
      "They warn drivers of potential hazards or changes ahead.",
      "They restrict vehicle movements.",
      "They indicate stopping zones."
    ],
    answer: "They warn drivers of potential hazards or changes ahead."
  },
  {
    id: 49,
    img: cattle_crossing,
    question: "What is the name of this sign?",
    options: ["Cattle Crossing", "Animal Zone", "Farm Area", "Deer Crossing"],
    answer: "Cattle Crossing"
  },
  {
    id: 50,
    img: child_cross_ahead,
    question: "What is the name of this sign?",
    options: ["Children Crossing Ahead", "School Zone", "Playground Area", "No Pedestrian Zone"],
    answer: "Children Crossing Ahead"
  },

];

export default QuizData;