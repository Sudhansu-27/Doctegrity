import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dash from '../Components/Dash'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const Healthrecords = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Dash />
      <div className="whole">
        <div className='dash'>

          <div class="dashb">
            <div className='dashh'>
              <div className='dashb1'>
                <div className='db1'>
                  <strong> Healthrecords </strong>
                  <hr />

                  <p>Secure electronic health records</p>
                </div>


              </div>

              <div className='dashb2'>
                <img src="/img5.jpg" class="image5" alt="" />
              </div>
            </div>
            <div className='dashb3'>
              <div className='dashb3a'>
                <span > In a life threatening emergency please call
                </span>
              </div>
              <div className='dashb3b'>

              </div>
            </div>
          </div>

          <div className='hr1'>
            <h5>Welcome to My Health Center !</h5>
            <p>To ensure that you receive the most informed care possible, we encourage you to keep your online health history up to date.</p>

            <span className='hrr1' onClick={() => { setReadMore(!readMore) }}>readmore</span>
            {readMore ? <div>
              Some of the information listed below may have been provided by your health plan. Please review your history regularly and add any new or missing information. Click Add to add an item to an area. </div> : null
            }
          </div>

          <div className='hr1'>
            <h5>Viewing records for</h5>
            <span> <sup class="star">*</sup> Dependent is over 18 and must manage their own records. </span>

          </div>

          <div className='btonnn'>
            <button className='yess'>Sks War</button>
            <button className='noo'>Asdasd Asdasd</button>
            <button className='nooo'>Test Test</button>
          </div>

          <div className='container10'>
            <div className='cont11'>
              <button className='btttn2'>
                <div className='buttonnn2'>
                  <FaCloudDownloadAlt />
                  <p className='p8'>Download</p>
                </div>
              </button>
            </div>
          </div>

          <div className='cont21'>
            <div className="cont27">
              <span className='cont23'>
              <MdAccountCircle/>
              </span>
            </div>
            <div className='cont22'>
              <h6 className='cont25'>Personal Information</h6>
              <p className='cont26'>Update Your Personal Information(e.g. height, weight, blood type, etc.)</p>
            </div>

            <div className='cont24'>
              <FiEdit/>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default Healthrecords