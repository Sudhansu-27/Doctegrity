import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
// import './App.css';

const Loginpage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === 's@d.com' || password === 's@d.com'){
            navigate('/dashboard')
        }
    }

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
                                    WELCOME 
                                    <strong> BACK</strong>
                                    </h4>
                                <p>Sign in to continue to 
                                    <strong> Doctegrity </strong>
                                    </p><br></br>
                            </div>

                            <div className='bottombar'>
                                <form className='p-3 mt-3'>
                                    <div className="emaill">
                                        <span className="far fa-user" />
                                        <h5 className='maill'>Email</h5>
                                        <input type="email" name="email" id="pwd" placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="password">
                                        <span className="fas fa-key" />
                                        <h5 className='maill'>Password</h5>
                                        <input type="password" name="password" id="pwd" placeholder="Password"
                                          onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='btnn'>
                                    <button className="btn mt-3" onClick={handleSubmit}>Login</button>
                                    </div>
                                    
                                    <div className="text-center fs-6">
                                        <div className='pd'>
                                            <Link to={"/forgetpassword"}>Forgot Password ?</Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Loginpage