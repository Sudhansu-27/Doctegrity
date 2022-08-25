import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Dash from '../Components/Dash'
import Personalinfo from "../Components/Personalinfo"
import Dependents from "../Components/Dependents"

const Profile = () => {
  const[personalinfo , setPersonalinfo] = useState(true)
  const[dependent , setDependent] = useState(false)

  return (
    <>
      <Dash />
      <div className="whole">
        <div className='dash'>

          <div class="dashb">
            <div className='dashh'>
              <div className='dashb1'>
                <div className='db1'>
                  <strong> Account Details </strong>
                  <hr />

                  <p>Manage Your Account</p>
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

          <div>
            <p className='p9'>To ensure that your consultation experience goes as smoothly as possible, please update your account information periodically.</p>
          </div>
          <div className='btonnn2'>
            <button className='yes1' onClick={() => setPersonalinfo(!personalinfo)}>Personal Info</button>
            <button className='no1' onClick={() => setDependent(!dependent)}>Dependents</button>
            <button className='yes2'>Pharmacy</button>
            <button className='no2'>Password Management</button>
          </div>
          <div className='pi'>
          {personalinfo ?
            <Personalinfo /> : null}
          {dependent ?
            <Dependents /> : null}
          </div>

        </div>



      </div>
    </>
  )
}

export default Profile