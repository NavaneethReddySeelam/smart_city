import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css/animate.min.css';
import groceries from '../assets/img/groceries.png';
import beverages from '../assets/img/beverages.png';
import hospital from '../assets/img/hospital.png';
import education from '../assets/img/education.png';
import rent from '../assets/img/rent.png';
import bike from '../assets/img/bike.png';
import emergency from '../assets/img/emergency.png';
import guide from '../assets/img/guide.png'

export default function LandingPage() {
  return (
    <>
 {/* <div className="animate__animated animate__zoomIn"> */}

      {/* </div> */}
      <div className='cards animate__animated animate__zoomIn animate__slow'>
      <NavLink to='emergency-contacts' className='card'>
      <img src={emergency} alt="emergency" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h1>Emergency Contacts</h1>
          <p>In the case of emergency contact us</p>
          </div>
        </NavLink>
        <NavLink to='book-canoe' className='card'>
        <img src={bike} alt="bike" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h1>Book Ride</h1>
          <p>Book a ride for Pickup and Drop</p>
          </div>
        </NavLink>
        <NavLink to='request-pickup' className='card'>
        <img src={rent} alt="rent" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h2> Rental </h2>
          <p>Request Bike/Car for rent</p></div>
        </NavLink>
        <NavLink to='feature-request' className='card'>
        <img src={guide} alt="guide" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h1>Tourism</h1>
          <p>Tourism spots in Hyderabad city</p>
          </div>
        </NavLink>  
        <NavLink to="groceries" className='card'>
          <img src={groceries} alt="Groceries" className='card-img animate__animated  animate__swing  animate__slower' />
          <div className='card-info'>
            <h2>Groceries</h2>
            <p>Buy groceries from the nearest store</p>
          </div>
        </NavLink>
        <NavLink to="beverages" className='card'>
          <img src={beverages} alt="Beverages" className='card-img animate__animated  animate__swing  animate__slower' />
          <div className='card-info'>
            <h2>Food Order</h2>
            <p> Order your favorite Food from our store</p>
          </div>
        </NavLink>
        <NavLink to='organize-schedule-exercise' className='card'>
        <img src={education} alt="Education" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h1>Educational Institutions</h1>
          <p>Educational institutes in Hyderabad city</p>
          </div>
        </NavLink>
        <NavLink to='organize-event' className='card'>
        <img src={hospital} alt="Hospitals" className='card-img animate__animated  animate__shakeX  animate__slow' />
        <div className='card-info'>
          <h1>Hospitals</h1>
          <p>Hospitals in Hyderabad city</p>
          </div>
        </NavLink>            
      </div>
    </>
  )
}
