import React, { useState } from 'react'
import { IoIosHelpCircle } from 'react-icons/io';
import PhoneInput from "react-phone-input-2";
import CountrySelect from "react-bootstrap-country-select";
import "react-phone-input-2/lib/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
const Personalinfo = () => {
    const [phone, setPhone] = useState("");
    const [value, setValue] = React.useState(null);
    return (
        <>
            <div>
                <div class="row">
                    <h5 className='h555'>Personal Information</h5>
                    <p className='p11'>Have you moved recently? Changed your telephone number? This is where you can update your personal information. Be sure to review and confirm that all changes are accurate before hitting "Save".</p>
                    <div className='r1r2'>


                        <div class="r1">
                            <div class="r21">
                                <p class="p10">
                                    First Name
                                    <IoIosHelpCircle />
                                </p>
                                <p className='p11'>Sks</p>
                            </div>
                            <div class="r21">
                                <p class="p10">
                                    Date of Birth
                                    <IoIosHelpCircle />
                                </p>
                                <p className='p11'>12/12/1200</p>
                            </div>
                        </div>
                        <div class="r2">
                            <div class="r21">
                                <p class="p10">
                                    Last Name
                                    <IoIosHelpCircle />
                                </p>
                                <p className='p11'>War</p>
                            </div>
                            <div class="r3">
                                <div class="r31">
                                    <label for="gender" class="p10">
                                        Gender
                                    </label>
                                    <select name="gender" required="" className='gender'>
                                        <option value="unknown">Other</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r4">
                        <div class="r3">
                            <div className='r31'>
                                <label class="p10">Primary Phone</label>
                                <div className=' react-tel-input '>
                                    <PhoneInput className=' react-tel-input '
                                        country={"in"}
                                        enableSearch={true}
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                    />
                                </div>

                            </div>
                        </div>

                        <div class="r3">
                            <div class="r31">
                                <label for="gender" class="p10">
                                    Email
                                </label>
                                <input name="email"
                                    placeholder="Email"
                                    required=""
                                    id="email"
                                    type="text"
                                    className='gender'
                                    value="s@d.com" />
                            </div>
                        </div>
                    </div>
                    <div className='add1'>

                        <div class="r8">

                            <label for="address" class="p10">Address</label>
                            <textarea name="address" placeholder="Address" required="" class="fo1">3456/8679 , Rasulgarh</textarea>

                        </div>

                        <div class="r8">


                            <label for="addressTwo" class="p10">Address Line 2</label>
                            <textarea name="addressTwo" placeholder="Address Line 2" class="fo1">Bhubaneswar</textarea>


                        </div>
                    </div>

                    <div className='add1'>

                        <div class="r8">

                            <label for="address" class="p10">City</label>
                            <textarea name="city" placeholder="City" required="" class="fo1">Bhubaneswar</textarea>

                        </div>

                        <div class="r12">

                            <CountrySelect
                                value={value}
                                onChange={setValue}
                            />
                            {/* <label for="addressTwo" class="p10">Address Line 2</label>
                            <textarea name="addressTwo" placeholder="Address Line 2" class="fo1">Bhubaneswar</textarea> */}


                        </div>
                    </div>

                    <div className='add1'>

                        <div class="r8">

                            <label for="address" class="p10">State</label>
                            <textarea name="State" placeholder="State" required="" class="fo1">Odisha</textarea>

                        </div>

                        <div class="r8">


                            <label for="addressTwo" class="p10">Postal Code</label>
                            <textarea name="pincode" placeholder="Pincode" class="fo1">751025</textarea>


                        </div>


                    </div>

                    <div className='add1'>


                        <div class="r8">


                            <label for="Timezone" class="p10">Select Timezone</label>
                            <textarea name="pincode" placeholder="Pincode" class="fo1">India</textarea>

                        </div>
                    </div>
                </div>
            <div className='button123'>
            <button className='button1234'>Save</button>
            </div>
            </div>
        </>

    )
}

export default Personalinfo