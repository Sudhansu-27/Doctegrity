import React from 'react'
import Dash from '../Components/Dash'
import { GiVideoConference } from 'react-icons/gi';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiMessageEdit } from 'react-icons/bi';

const Schedulecenter = () => {
  return (
    <>
    <Dash />
    <div className='whole'>
            <div className='dash'>


                <div class="dashb">

                    <div className='dashh'>
                        <div className='dashb1'>
                            <div className='db1'>
                                <strong> Schedule Center </strong>
                                <hr />
                                <p>Schedule a Consultation</p>
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

                <div className='textt'>
                What type of 
                <strong> diagonstic consultation </strong>
                 do you need?
                </div>
                <div className='bottonn'>
                        <div className='botton0'>
                            <div className='bbb1'>
                                <a href="">
                                    <i className="bbb">
                                        <GiVideoConference />
                                        <br></br>
                                    </i>
                                    <p>By Video</p>
                                </a>
                            </div>
                        </div>
                        <div className='botton0'>
                            <div className='bbb1'>
                                <a href="">
                                    <i className="bbb">
                                        <FaPhoneAlt />
                                        <br></br>
                                    </i>
                                    <p>By Phone</p>
                                </a>
                            </div>

                        </div>
                        <div className='botton0'>
                            <div className='bbb1'>
                                <a href="">
                                    <i className="bbb">
                                        <BiMessageEdit />
                                        <br></br>
                                    </i>
                                    <p>Message a doctor</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </>
  )
}

export default Schedulecenter