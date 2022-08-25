import React from 'react'
import Dash from './Dash'
import { BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Behaviouralhealth = () => {
    return (
        <>
            <Dash />
            <div className="whole">
                <div className='dash'>

                    <div class="dashb">
                        <div className='dashh'>
                            <div className='dashb1'>
                                <div className='db1'>
                                    <strong> Behavioral Health </strong>
                                    <hr />

                                    <p>We are here to help</p>
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

                    <div className='bhhh'>
                        <div className='bh10'>
                            <div className='bh11'>
                                <h5>TELETHERAPY BENEFIT</h5>
                                <p>Most people experience some personal or family distress in the course of their lives. Professional assistance helps to ensure successful management of personal challenges. Teletherapy Benefit is a convenient first step in getting such support.</p>
                                <img src="/img8.png" class="image8" alt="" />
                                <p className='pp'>Teletherapy Benefit provides confidential, unlimited telephonic consultation, counseling and referral services for members including:</p>
                                <ul>
                                    <li>24/7 availability to Licenced Mental Health Therapists</li>
                                    <li>No co-pay or consult fee</li>
                                    <li>Immediate crisis support</li>
                                    <li>Comprehensive problem assessment and resolution</li>
                                    <li>Supportive counseling and subsequent sessions</li>
                                    <li>Ancillary Benefits: Financial, Legal, Advocacy and more</li>
                                    <li>100% follow up with original counselor</li>
                                    <li>Custom referral (if needed) to medical, behavioral health plans or local community resources</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bh20">
                            <div className='bh21'>
                                <h5>COMMON REASON</h5>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Stress and Anxiety</td>
                                            </tr>
                                        </tbody>

                                        <tbody>
                                            <tr>
                                                <td class="uppercase">COVID support</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Smoking Cessation</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Major Illness</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Depression</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Workplace issue</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Substance Abuse</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Parenting / Elderly care</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Death of Loved One</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Financial and Legal Consults</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Relationship issues</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Other Reasons of Concern</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td class="uppercase">Pet care resources</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='bh30'>
                            <div className="bh31">
                                <h5>LET'S GET STARTED</h5>
                                <div className='ppp'>
                                    <p className='p2'>Hi there. Is this a life-threatening emergency?</p>
                                    <div className='btonn'>
                                        <button className='yes'>Yes</button>
                                        <button className='no'>No</button>
                                    </div>

                                    <p className='p3'>What state are you currently in?</p>
                                    <div className='ipt'>
                                        <input type="text" className='inpt' />
                                    </div>
                                    <p className='p4'>Ok. What is the reason for your call today?</p>

                                    <div>
                                        <select class="custom">
                                            <option> Select a reason</option>
                                            <option> Stress and anxiety</option>
                                            <option> Smoking Cessation</option>
                                            <option> Depression</option><option> Substance abuse</option>
                                            <option> Death of a loved one</option>
                                            <option> Relationship issues</option>
                                            <option> Parenting issues</option>
                                            <option> Traumatic accident</option>
                                            <option> Major illness</option>
                                            <option> Workplace issues</option>
                                            <option> Change &amp;amp; transition</option>
                                            <option> Financial stress</option>
                                            <option> Other reason that causes concern</option>
                                        </select>
                                    </div>

                                    <p className='p5'>Click to call our Counselor Service</p>
                                    <div className='phncl'>
                                        <button className='btttn'>
                                            <div className='buttonnn'>
                                            <BsTelephoneFill />
                                            <p className='p6'>Call Counselor</p>
                                            </div>
                                        </button>
                                    </div>

                                    <p class="p7">
                                        or dial at your convenience <br />
                                        <Link to="tel:1-844-200-8975" className='lnk'>1-844-368-2088</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Behaviouralhealth