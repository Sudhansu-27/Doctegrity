import React from 'react'

const Forgetpassword = () => {
    return (
        <div className='maindiv'>

            <div className='div_1'>

                <div className='heading'>
                    <img src="/img2.svg" class="image1" alt="" />
                </div>
                <div className='login'>

                    <div className='image'>
                        <img src="/img1.jpg" class="image2" alt="" />
                    </div>
                    <div className='signin'>

                        <div className='topbar'>
                            <h4 className='dct-auth-header'>
                                FORGOT
                                <strong> PASSWORD</strong>
                            </h4>
                            <p>
                                Please enter your email below to receive a link that will allow you to reset your password.
                                {/* <strong> Doctegrity </strong> */}
                            </p><br></br>
                        </div>

                        <div className='bottombar'>
                            <form className='p-3 mt-3'>
                                <div className="emaill">
                                    <span className="far fa-user" />
                                    <h5 className='maill'>Email</h5>
                                    <input type="email" name="email" id="pwd" placeholder="Email" />
                                </div>
                               
                                <div className='btnn'>
                                    <button className="btn mt-3">Reset</button>
                                </div>

                                {/* <div className="text-center fs-6">
                                    <div className='pd'>
                                        <Link to={"/forgetpassword"}>Forgot Password ?</Link>
                                    </div>

                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Forgetpassword