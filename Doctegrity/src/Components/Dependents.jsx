import React, { useState } from 'react'
import { IoIosHelpCircle } from 'react-icons/io';
// import PhoneInput from "react-phone-input-2";
import CountrySelect from "react-bootstrap-country-select";
import "react-phone-input-2/lib/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Dependents = () => {
  const [phone, setPhone] = useState("");
  const [value, setValue] = React.useState(null);
  const [val, setVal] = useState()
  return (
    <>
      <div>
        <div class="row">
          <h5 className='h555'>Manage Dependents</h5>
          <p className='p11'>Here you can add and edit your dependent information.</p>
          <div className='btonnn2'>
            
            <button className='noo1'>Dependents</button>
            
          </div>
          <p className='p11'>You may add up to 7 dependents. Your spouse and any dependents over 18 years of age will receive a registration email and must register to use the system. Your spouse will have access to all of your dependents records who are under the age of 18 but will not have access to your records or any dependents records who are over the age of 18.</p>
          <h5 className='h555'>Viewing records for</h5>
          <p className='p11'>* Dependent is over 18 and must manage their own records.</p>
          <div className='btonnn'>
            <button className='noo'>Asdasd Asdasd</button>
            <button className='nooo'>Test Test</button>
          </div>
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
                <div className=' phnipt'>
                  <PhoneInput className='pnn'
                    placeholder="Enter phone number"
                    country={"in"}
                    value={val}
                    onChange={setVal} />
                </div>

              </div>
            </div>

            <div class="r3">
              <div class="r31">
                <label for="gender" class="p10">
                  Secondary phone
                </label>
                <div className=' phnipt2'>
                  <PhoneInput className='pnn'
                    placeholder="Enter phone number"
                    country={"in"}
                    value={val}
                    onChange={setVal} />
                </div>
              </div>
            </div>
          </div>
          <div className='add1'>

            <div class="r3">
              <div class="r31">
                <label for="gender" class="p10">
                  Status
                </label>
                <select name="status" required="" className='gender'>
                  <option value="">Inactive</option>
                  <option value="">Active</option>
                </select>
              </div>
            </div>

            <div class="r3">
              <div class="r31">
                <label for="gender" class="p10">
                  Relationship
                </label>
                <select name="relation" required="" className='gender'>
                  <option value="Spouse">Other</option>
                  <option value="Child">Male</option>
                  <option value="Other">Female</option>
                </select>
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

          <div className='add2'>


            <div class="r8">


              <label for="Timezone" class="p10">Select Timezone</label>
              <textarea name="pincode" placeholder="Pincode" class="fo2">India</textarea>


            </div>
            <div class="col-md-4">
              <label for="validationCustom03" class="p10">Height</label>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input name="height" placeholder="Height" id="hm" type="number" class="form-control is-touched is-dirty av-valid form-control" value="12" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select name="heightMetric" errormessage="Select Metric" id="hm" class="dct-custom-select-box is-touched is-dirty av-valid form-control">
                      <option value="1">INCH</option>
                      <option value="2">CM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <label for="validationCustom03" class="p10">weight</label>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input name="weight" placeholder="Weight" type="number" id="hm" class="form-control is-untouched is-pristine av-valid form-control" value="12" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select name="weightMetric" errormessage="Select Metric" id="hm" class="dct-custom-select-box is-untouched is-pristine av-valid form-control">
                      <option value="1">LB</option>
                      <option value="2">KG</option>
                    </select>
                  </div>
                </div>
              </div>
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

export default Dependents