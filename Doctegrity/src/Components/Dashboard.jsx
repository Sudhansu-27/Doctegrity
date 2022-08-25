import React from 'react'
// import Layout from "../Components/Layout"
import { TbPhysotherapist } from 'react-icons/tb';
import { RiHealthBookLine } from 'react-icons/ri';
import { GiFamilyTree } from 'react-icons/gi';
import { MdOutlineAddIcCall } from 'react-icons/md';
import Dash from '../Components/Dash'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Dash from '../Components/Dash'


const Dashboard = () => {

    return (
        <>
            <Dash />
            <div className='whole'>
                <div className='dash'>


                    <div class="dashb">

                        <div className='dashh'>
                            <div className='dashb1'>
                                <div className='db1'>
                                    <strong> Welcome Dashboard </strong>
                                    <hr />
                                    <p>Welcome to your personalized health portal</p>
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
                                <div className='dashb3aa'>
                                    <strong className='aa'>911</strong>
                                </div>
                            </div>
                            <div className='dashb3b'>
                            </div>
                        </div>
                    </div>

                    <div className="db2" >
                        <span>No Upcoming Appointments </span>
                    </div>


                    <div className='botton'>
                        <div className='botton1'>
                            <div className='bb1'>
                                <a href="">
                                    <i className="bb">
                                        <MdOutlineAddIcCall />
                                        <br></br>
                                    </i>
                                    <p>Speak to a Doctor</p>   </a>
                            </div>
                        </div>
                        <div className='botton1'>
                            <div className='bb1'>
                                <a href="">
                                    <i className="bb">
                                        <TbPhysotherapist />
                                        <br></br>
                                    </i>
                                    <p>Speak to a Therapists</p>   </a>
                            </div>

                        </div>
                        <div className='botton1'>
                            <div className='bb1'>
                                <a href="">
                                    <i className="bb">
                                        <RiHealthBookLine />
                                        <br></br>
                                    </i>
                                    <p>Health Profile</p>   </a>
                            </div>
                        </div>
                        <div className='botton1'>
                            <div className='bb1'>
                                <a href="">
                                    <i className="bb">
                                        <GiFamilyTree />
                                        <br></br>
                                    </i>
                                    <p>Add a family member</p>   </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard