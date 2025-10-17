// import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/Css/FundamentalsPage.css'


const FundamentalsPage = () => {

  const navigate = useNavigate();

  return (
    <div className="wrapper">
        
        <div className='FundamentalHomePage'>
          <div className="pages" onClick={() => navigate("/fundamentals/car_parts")}>
            <h1>FUNDAMENTALS OF DRIVING</h1>
          </div>

          <div className="pages" onClick={() => navigate("/fundamentals/roadsigns")}>
            <h1>ROAD SIGNS</h1>
          </div>

          <div className="pages" onClick={() => navigate("/fundamentals/laws_and_fines")}>
            <h1>LAWS AND FINES</h1>
          </div>
          
        </div>

    </div>
  )
}

export default FundamentalsPage