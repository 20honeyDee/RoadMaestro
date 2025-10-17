
const laws = [
    {
      id: 1,
      title: 'REPUBLIC ACT NO. 4136 - "LAND TRANSPORTATION AND TRAFFIC CODE"',
      description:
        "This law, also known as the Land Transportation and Traffic Code, regulates various aspects of land transportation in the Philippines. It covers provisions related to driver's licenses, registration and operation of motor vehicles, traffic rules and regulations, vehicle inspections, and penalties for violations. It aims to ensure road safety, efficient traffic management, and orderly transportation systems.",
    },
    {
      id: 2,
      title: 'REPUBLIC ACT NO. 8749 - "PHILIPPINE CLEAN AIR ACT OF 1999"',
      description:
        "The Philippine Clean Air Act of 1999 is an environmental law that aims to protect and improve the quality of the country's air. It sets standards and regulations for controlling air pollution from stationary and mobile sources, including motor vehicles. The law mandates emission standards for vehicles, promotes the use of clean fuels and technologies, and establishes mechanisms for monitoring and enforcing air quality standards.",
    },
    {
      id: 3,
      title: 'REPUBLIC ACT NO. 8750 - "SEAT BELTS USE ACT OF 1999"',
      description:
        "The Seat Belts Use Act of 1999 requires the mandatory use of seat belts by all occupants of motor vehicles in the Philippines. The law mandates the installation and proper use of seat belts for drivers and passengers to enhance road safety and minimize the risk of injuries in the event of accidents.",
    },
    {
      id: 4,
      title: 'REPUBLIC ACT NO. 8794 - "MOTOR VEHICLE USER\'S CHARGE LAW"',
      description:
        "The Motor Vehicle User's Charge Law imposes fees on motor vehicle users to generate funds for road maintenance, improvement, and transportation-related programs. The collected charges are used for the development, repair, and maintenance of highways, bridges, and other infrastructure projects aimed at enhancing the country's transportation system.",
    },
    {
      id: 5,
      title: 'REPUBLIC ACT NO. 10054 - "MOTORCYCLE HELMET ACT OF 2009"',
      description:
        "The Motorcycle Helmet Act of 2009 mandates the use of standard protective helmets by motorcycle riders and passengers in the Philippines. It requires all motorcycle riders to wear helmets that comply with approved safety standards to reduce the risk of head injuries and promote road safety.",
    },
    {
      id: 6,
      title: 'REPUBLIC ACT NO. 10586 - "ANTI-DRUNK AND DRUGGED DRIVING ACT OF 2013"',
      description:
        "The Anti-Drunk and Drugged Driving Act of 2013 addresses the issue of driving under the influence of alcohol or dangerous drugs. The law imposes penalties on drivers found to be operating a vehicle while intoxicated or impaired, with the aim of reducing accidents and promoting road safety.",
    },
    {
      id: 7,
      title: 'REPUBLIC ACT NO. 10666 - "CHILDREN\'S SAFETY ON MOTORCYCLES ACT OF 2015"',
      description:
        "The Children's Safety on Motorcycles Act of 2015 prohibits the transport of children below a certain age as passengers on motorcycles, except in certain circumstances. The law aims to ensure the safety and welfare of children and prevent accidents or injuries resulting from unsafe motorcycle practices.",
    },
    {
      id: 8,
      title: 'REPUBLIC ACT NO. 10913 - "ANTI-DISTRACTED DRIVING ACT"',
      description:
        "The Anti-Distracted Driving Act regulates and penalizes the use of mobile phones and electronic devices while operating a motor vehicle. It prohibits drivers from using mobile devices, except for hands-free functions, to minimize distractions and promote safer driving.",
    },
    {
      id: 9,
      title: 'REPUBLIC ACT NO. 10916 - "ROAD SPEED LIMITER ACT OF 2016"',
      description:
        "The Road Speed Limiter Act of 2016 requires the installation of speed limiters in public utility vehicles (PUVs) to regulate and control their maximum speeds. The law aims to enhance road safety by preventing overspeeding and reducing the likelihood of accidents caused by excessive speeds.",
    },
    {
      id: 10,
      title: 'REPUBLIC ACT NO. 10930 - "ISSUANCE OF DRIVER\'S LICENSE"',
      description:
        "The Issuance of Driver's License Act streamlines and simplifies the process of obtaining a driver's license in the Philippines. It allows the validity period of professional and non-professional driver's licenses to be extended up to ten years, subject to certain conditions, in order to reduce administrative burdens and enhance the efficiency of license issuance.",
    },
  ]
const penalties = [
    {
      id: 11,
      title: "Reckless Driving (Republic Act No. 4136, Section 48)",
      fine: "Fine: PHP 1,000 to PHP 10,000",
      penalty: "Penalty: Suspension of driver's license for a minimum of three months to one year",
      description:
        "Reckless driving refers to the act of operating a vehicle with a willful disregard for the safety of persons and property. It includes aggressive driving, overspeeding, and other dangerous behaviors on the road. Violators may face fines and have their driver's license suspended for a specific period as determined by authorities.",
    },
    {
      id: 12,
      title: "Driving Under the Influence of Alcohol or Dangerous Drugs (Republic Act No. 4136, Section 56)",
      fine: "Fine: PHP 20,000 to PHP 80,000",
      penalty: "Penalty: Revocation of driver's license",
      description:
        "Driving under the influence (DUI) involves operating a vehicle while impaired by alcohol or drugs. It poses significant risks to the driver, passengers, and other road users. Offenders may be fined and have their driver's license revoked, preventing them from legally driving for an extended period.",
    },
    {
      id: 13,
      title: "Overloading (Republic Act No. 4136, Section 29)",
      fine: "Fine: PHP 1,000 for the first 2,000 kilograms, plus PHP 200 for every 500 kilograms in excess",
      penalty: "Penalty: Impounding of the vehicle until the excess load is removed",
      description:
        "Overloading refers to carrying more weight or load than the maximum capacity specified for a vehicle. It can lead to reduced vehicle stability, increased braking distance, and other safety risks. Violators may face fines based on the weight exceeded and have their vehicle impounded until the excess load is removed.",
    },
    {
      id: 14,
      title: "Speeding (Republic Act No. 4136, Section 35)",
      fine: "Fine: ₱1,000 (1st), ₱2,000 (2nd), ₱3,000 (3rd)",
      penalty: "Penalty: Suspension of driver's license for one month (third offense)",
      description:
        "Speeding involves driving a vehicle above the posted speed limits or at speeds that are unsafe for road conditions. It endangers the safety of the driver, passengers, and other road users.",
    },
    {
      id: 15,
      title: "Failure to Wear Seatbelts (Republic Act No. 8750, Section 46)",
      fine: "Fine: ₱1,000 (1st), ₱2,000 (2nd), ₱5,000 (3rd+)",
      description:
        "Failure to wear seatbelts is a violation requiring both drivers and passengers to wear seat belts while inside a vehicle. Seat belts significantly reduce the risk of injury or death during accidents.",
    },
    {
      id: 16,
      title: "Using Mobile Phones while Driving (Republic Act No. 10913, Section 41)",
      fine: "Fine: ₱5,000 (1st), ₱10,000 (2nd), ₱15,000 (3rd)",
      penalty: "Penalty: License suspension for 3 months (third offense)",
      description:
        "Using mobile phones or electronic devices while driving is prohibited for safety reasons. It distracts drivers and diverts their attention from the road.",
    },
    {
      id: 17,
      title: "Violation of Traffic Signs and Signals (Republic Act No. 4136, Section 35)",
      fine: "Fine: ₱1,000 (1st), ₱2,000 (2nd), ₱3,000 (3rd)",
      penalty: "Penalty: License suspension for one month (third offense)",
      description:
        "Disregarding or violating traffic signs and signals poses risks to road safety and can lead to accidents.",
    },
    {
      id: 18,
      title: "Failure to Wear a Helmet while Riding a Motorcycle (Republic Act No. 10054)",
      fine: "Fine: ₱1,500 (1st), ₱3,000 (2nd), ₱5,000 (3rd), ₱10,000+ (4th+)",
      penalty: "Penalty: Confiscation of driver's license (4th offense)",
      description:
        "The Motorcycle Helmet Act mandates riders and passengers to wear standard protective helmets. This reduces the risk of head injuries during accidents.",
    },
    {
      id: 19,
      title: "Violation of the Anti-Drunk and Drugged Driving Act (Republic Act No. 10586)",
      fine: "Fine: ₱20,000–₱80,000 (1st), ₱30,000–₱120,000 (2nd), ₱80,000–₱200,000 + imprisonment (3rd)",
      description:
        "The Anti-Drunk and Drugged Driving Act prohibits driving under the influence of alcohol or drugs. Violators face substantial fines and possible imprisonment for repeated offenses.",
    },
  ]

export default { laws, penalties };