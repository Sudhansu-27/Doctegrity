import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeCircle, BiTestTube, BiMessageAdd, BiHomeHeart, BiBriefcase, BiUser, BiPowerOff, BiUserCircle, BiCreditCard, BiBell } from 'react-icons/bi';
// import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { FiChevronDown } from 'react-icons/fi';
import { Link , NavLink } from 'react-router-dom';

const Dash = () => {
  const [show, setShow] = useState(true)
  const [display, setDisplay] = useState(true)
  // const showSidebar =() => setSidebar(!sidebar)

  // const menuIconClick = () => {
  //   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);


  return (
    <>
     

        <div className='navbar'>
          {/* <i className='bx bx home-circle'></i> */}
          <div className='left'>
            {show ?
              <div className='left1'>
                <span className='logo'>
                  <img src="/img3.svg" className="image3" alt="" />
                </span>
              </div> :
              <div className='left3'>
                <span className='logoo'>
                  <img src="/img6.svg" className="image6" alt="" />
                </span>
              </div>
            }

            <div className="left2">
              <button type="button" className="btnn" id="vertical-menu-btn">
                <GiHamburgerMenu onClick={() => setShow(!show)} />
              </button>
            </div>

          </div>



          <div className='right'>

            <div className='right1'>
              <header>
                <nav>
                  <div className="lang-menu"> <input type="checkbox" name="" id="chkbx" hidden />
                    <label htmlFor="chkbx">
                      <div className='selected-lang-div'>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z" alt="Doctegrity" height="16" className="mr-1" />
                        <div className="selected-lang">English</div>
                      </div>
                    </label>
                    <ul className='langoption'>
                      <li>
                        <a href="" className="en lann">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z" alt="Doctegrity" height="16" className="mr-1" />
                          {/* <span className="align-middle">English</span> */}
                          <p> English</p>
                        </a>

                      </li>
                      <li>
                        <a href="#" className="de lann">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAUIBgQBAv/EACkQAAIBAgQFBAMBAAAAAAAAAAECAwAEBQYREhUWVZTRExRRUiIxQXH/xAAaAQACAwEBAAAAAAAAAAAAAAAABgEDBwQC/8QAKREAAgEDAgUDBQEAAAAAAAAAAQIDAAQRIVQFEhMUkhWRkwYWNFNxgf/aAAwDAQACEQMRAD8AyzSSSMWZ2ZmbVmJJJJ/przc32aq04BgXRrDtk8V8PguW4Y5JrrDcNggiR3eR7eMKqqNST+NZfH9WxSukcdhKzuQqgMNSa2b1+ID8Z/epO3N9mo3N9mqlbC7yLiF/Lh8WHwRS+pshe5w4QpK2u3buK/idw0Aan/AMC6NYdsniui6+omsigueHSLzZ5SJFIOP5Xo8dVTyvZyqcA4bTQ/0VJe5vs1G5vs1VpwDAujWHbJ4o4BgXRrDtk8VyfeFvspPIVHr8W3f3qS9zfZq9WSSNgyuysraqwJBBH9FVnwDAujWHbJ4o4BgXRrDtk8UfeFvspPIUevRbZ/enFYLMM/D0ZbLD8QtPd3UbX07e3kUxsCm5VjaRwGAGm5K3tZWe1fFbO4w9cCTCgzBzcL6Tes4kDEuI2JJPyaW+ENbIl7JcdPRY+UO4U5LjUAnXFLkcqxTwBwSjNhsAkf7iluRsTytMbuC6ksPd2uIMDLd7bZxbFQFKkiMFtQdRWlshavcXN9Dhl5BLcNtmmlkt2icwnaoURO5BA+wFZmfIqJbotpiVuXnhMd0TAwOpZ9HTQjcdH0/KtLbPuugnLiWuxHT32sReZQw2hthLf5rTJxm74XcWkkNrFbo8VmoEglQu7FkY5xy5Oh0ql2w5m7h5WmkcEBHVUQEkDBNOKKKKQKsooooooqT+aMx9cv8AuH80c0Zj65f9w/mubEY40v75ERVVbiVVAGgAB/Qrl2r8Cto7S120PxrT6IoSAehH4LTPmjMfXL/uH80c0Zj65f8AcP5pZtX4FG1fgUdpa7aH41qejD+mPwWmfNGY+uX/AHD+aOaMx9cv+4fzSzavwKNq/Ao7S120PxrR0Yf0x+C0z5ozH1y/7h/NHNGY+uX/AHD+aWbV+BXVh0cb39ijorK1xErAjUEE/o0dna7aH41qDFCBnoR+C1//2Q==" alt="Doctegrity" className="mr-1" height="12" />
                          <p>Spanish</p>
                        </a>
                      </li>
                      <li>
                        <a href="" className="fr lann">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcCBQH/xAAlEAABAgILAQEAAAAAAAAAAAABAAIDUQUREhYXVFWjpNLiITL/xAAYAQEBAQEBAAAAAAAAAAAAAAAABwEDBf/EACURAAACCQUBAQAAAAAAAAAAAAABAgMEBREVVKPRFBZVkpTSUf/aAAwDAQACEQMRAD8AiL4sWI98SJFe57nEucSSST9JJK8tOmV3bs03kdyH2S7NN5Hch9l31bLVKe5D1JA/eEb/ADLMDhWnTKWnTK7t2abyO5D7Jdmm8juQ+yaxlqlPcgkD94Rv8yzA4Vp0ylp0yu7dmm8juQ+yXZpvI7kPsmsZapT3IJA/eEb/ADLMDhWnTK9ZFiw3siQ4r2va4FrgSCCPoIIXcuzTeR3IfZLs03kdyH2TVstUp7kEgfvCN/mWYFWRVjC8a5xfaYXjXOL7UunzqqraeBft0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkVpFt/wC3iRSoSU5SRgZlER+Iwi3UJJUJLIBEYRbqEkqEkgERhFuoSRn7YJlaSMTIv0wiP//Z" alt="Doctegrity" className="mr-1" height="12" />
                          <p>German</p>
                        </a>
                      </li>
                      <li>
                        <a href="" className="ar lann">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAgCBwEDBAX/xAAjEAACAQMEAgMBAAAAAAAAAAABAgADBzYEEXSxUbISIUQW/8QAFwEBAQEBAAAAAAAAAAAAAAAABwYFCP/EACcRAAIAAgkEAwAAAAAAAAAAAAABAgMEBQYHETM0dII1NrHBEiEx/9oADAMBAAIRAxEAPwD1mdmYu7sWLbkk7kkyO58yMJzKT5ZtqSf6at9/gre6xi4ulqcmrcCr7rGLjRYXoS3Ez0atDyeTCLPdnKl+/wAVLtozEWa7OVrwqPbShrPTc4RGu77he1m+UVlufMyrupDK5UqdwQdiCJiEnh2aT+mjuhCEFzi4s21OTVuBV91jFxdLU5NW4FX3WMXGiwnQluJno1aFk8mEWa7OVrwqPbRmYs12crXhUe2lDWem5wiNd33C9rN8orKEISeHc7oT0NaiJrdWiIFUVXAAGwABmj4r4EGYocG1icWliWpyatwKvusYuLvazJq3Cq+yxiozWF6EtxM9GrQsnkyMWa7OVrwqPbRm4tF18qXhUu2lDWem5wiNd33A9rN8oq6E27DxOnRIj63So6AqatMEEbg7mTw6RR/GFvD8WJ//2Q==" alt="Doctegrity" className="mr-1" height="12" />
                          <p>Italian</p>
                        </a>
                      </li>

                      <li>
                        <a href="" className="ar lann">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMGBwQI/8QAIxAAAgACCwEAAAAAAAAAAAAAAAECBAcRFhdRVFajpNPiA//EABoBAQACAwEAAAAAAAAAAAAAAAABBgIEBwj/xAAmEQAAAwUJAQEAAAAAAAAAAAAAAQIDBhZUowQRExRSVZPR0hIx/9oADAMBAAIRAxEAPwD3UDLL6qM9S8Oa6xfVRnqXhzXWbeQt0k341dDDERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIeBgXOySz+16Fkln9r0WmLHfn6TXyLBAD27TXY+xTAXOySz+16Fkln9r0Isd+fpNfIQA9u012PsUwFzsks/tehZJZ/a9CLHfn6TXyEAPbtNdj7FMBc7JLP7XoWSWf2vQix35+k18hAD27TXY+xcwd07BBBOzUEECUK+v0SSVSVTOapYHGR6SSv6Iju/SIxECWpYCpYATeIgS1LAVLABeIgS1LA6ZKCCOdlYI4E4X9fmmmq062BCl/KTO78K8f//Z" alt="Doctegrity" className="mr-1" height="12" />
                          <p>Russian</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>

            <div className='right2'>

              <div className="bell">
                <label htmlFor="chkbx1">
                  <div className='iconbell'>
                    <BiBell />
                  </div>
                </label><input type="checkbox" name="" id="chkbx1" hidden />
                <div className='belldiv'>
                  <div className='bellheader'>
                    <div className='bh1'>
                      <h5>Notifications</h5>
                    </div>

                    <div className='bh2'>
                      <a href="">View All</a>
                    </div>
                  </div>

                  <div className='bellbody'>
                    Body Content to be added here
                  </div>

                  <div className='bellfooter'>
                    <div className='ft1'>
                      <a href="">View all</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className='right3'>
              <div className="logout">
                <label htmlFor="chkbx2">
                  <div className='icon'>
                    <img src="/img4.svg" className="image4" alt="" />
                    <div className="name">Sks</div>
                  </div>
                </label><input type="checkbox" name="" id="chkbx2" hidden />
                <div className='userr'>
                  <div className='userr1'>
                    <div className='u1'>

                      <Link to="/profile" className='a'>
                        <i className="prof">
                          <BiUser />
                        </i>
                        Profile</Link>
                    </div>
                  </div>

                  <div className='userr2'>
                    <div className='u2'>

                      <Link to="#" className='a'>
                        <i className="prof">
                          <BiPowerOff />
                        </i>
                        Logout</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='barrr'>
          {show ?
            <div className='sidebar'>
              <div id='sidebar-menu' className="mm-active">
                <ul className="sidebar2" id="side-menu">
                  {/* <li className="menu-title d-none">Menu </li> */}
                  <li>
                    <NavLink to="/dashboard" className='a'>
                      {/* <a href="/dashboard"> */}

                      <i className='icons'>
                        <BiHomeCircle />
                      </i>

                      <span>Dashboard</span>
                    </NavLink>
                  </li>

                  <li className="mm-active">
                    <NavLink to="/healthrecords">
                      {/* <a href="/healthrecords" className="active"> */}

                      <i className='icons'>
                        <BiTestTube />
                      </i>

                      <span>Health Records</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/messageadoctor" className='a'>
                      {/* <a href="/messageadoctor"> */}
                      <i className='icons'>
                        <BiMessageAdd />
                      </i>

                      <span>Message A doctor</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/behaviouralhealth" className='a'>
                      <i className='icons'>
                        <BiHomeHeart />
                      </i>

                      <span>Behavioral Health</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className='a'>
                      <i className='icons'>
                        <BiBriefcase />
                      </i>

                      <span>Consultation</span>
                      <button type="button" className="btnn1" id="vertical-menu-btn">
                        <FiChevronDown onClick={() => setDisplay(!display)} />
                      </button>
                    </NavLink>
                  {display?<div>

                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <NavLink to="/schedulecenter" className='a'>Schedule a Consultation</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className='a'>My Consultations</NavLink>
                      </li>
                    </ul>
                    </div>:null}
                  </li>

                  <li>
                    <Link to="/profile" className='a'>
                      <i className='icons'>
                        <BiUserCircle />
                      </i>

                      <span>Profile</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/discountcard" className='a'>
                      <i className='icons'>
                        <BiCreditCard />
                      </i>

                      <span>Discount Card</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div> :
            <div className='sidebarr'>
              <div id='sidebar-menu' className="mm-active">
                <ul className="sidebar2" id="side-menu">
                  {/* <li className="menu-title d-none">Menu </li> */}
                  <li>
                    <Link to="/dashboard" className='a'>
                      {/* <a href="/dashboard"> */}

                      <i className='iconss'>
                        <BiHomeCircle />
                      </i>
                      <span className="tooltip">Dashboard</span>
                      {/* <span>Dashboard</span> */}
                    </Link>

                  </li>

                  <li className="mm-active">
                    <Link to="/healthrecords" className='active'>
                      {/* <a href="/healthrecords" className="active"> */}

                      <i className='iconss'>
                        <BiTestTube />
                      </i>
                      <span className="tooltip">Health Records</span>
                      {/* <span>Health Records</span> */}
                    </Link>

                  </li>

                  <li>
                    <Link to="#" className='a'>
                      <i className='iconss'>
                        <BiMessageAdd />
                      </i>
                      <span className="tooltip">Message A doctor</span>
                      {/* <span>Message A doctor</span> */}
                    </Link>

                  </li>

                  <li>
                    <Link to="/behaviouralhealth" className='a'>
                      <i className='iconss'>
                        <BiHomeHeart />
                      </i>
                      <span className="tooltip">Behavioral Health</span>
                      {/* <span>Behavioral Health</span> */}
                    </Link>

                  </li>

                  <li>
                    <Link to="#" className='a'>
                      <i className='iconss' >
                        <BiBriefcase />
                      </i>
                      <span className="tooltip">Consultation</span>
                      {/* <span>Consultation</span> */}
                    </Link>

                    {/* <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="/member/schedule-center"></a>
                      </li>
                      <li>
                        <a href="/member/my-consultations"></a>
                      </li>
                    </ul> */}
                  </li>

                  <li>
                    <Link to="#" className='a'>
                      <i className='iconss'>
                        <BiUserCircle />
                      </i>
                      <span className="tooltip">Profile</span>
                      {/* <span>Profile</span> */}
                    </Link>

                  </li>

                  <li>
                    <Link to="#" className='a'>
                      <i className='iconss'>
                        <BiCreditCard />
                      </i>
                      <span className="tooltip">Discount Card</span>
                      {/* <span>Discount Card</span> */}
                    </Link>

                  </li>
                </ul>
              </div>

            </div>
          }

          {/* <div className='sidebar2'>

          </div> */}
        </div>

      

    </>
  )
}

export default Dash;