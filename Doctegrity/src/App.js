import logo from './logo.svg';
import './App.css';
import Loginpage from './Components/Loginpage'
import Forgetpassword from './Components/Forgetpassword'
import Dashboard from './Components/Dashboard';
import Messageadoctor from './Components/Messageadoctor';
import Discountcard from './Components/Discountcard';
import Behaviouralhealth from './Components/Behaviouralhealth'
import Healthrecords from './Components/Healthrecords';
import Schedulecenter from './Components/Schedulecenter';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Messageadoctor from './Components/Messageadoctor'


function App() {
  return (
    <div className="App">



      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
          {/* <Route path='/dash' element={<Dash/>}/> */}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/discountcard' element={<Discountcard/>} />
          <Route path='/healthrecords' element={<Healthrecords/>} />
          <Route path='/behaviouralhealth' element={<Behaviouralhealth />} />
          <Route path='/schedulecenter' element={<Schedulecenter />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/messageadoctor' element={<Messageadoctor />} />
        </Routes>
        {/* <Layout>
          <Routes>
            <Route path='/behaviouralhealth' element={<Behaviouralhealth />} />
            <Route path='/healthrecords' element={<Healthrecords />} />
            <Route path='/messageadoctor' element={<Messageadoctor />} />
            <Route path='/discountcard' element={<Discountcard />} />
          </Routes>
        </Layout> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
