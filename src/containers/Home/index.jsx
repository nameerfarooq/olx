import React from 'react'
import { Button, Row, Col, Container, Nav, Navbar, NavDropdown, FormControl, Form, InputGroup } from 'react-bootstrap';
import OlxLogo from '../../images/olx-logo.png';
import MainImg from '../../images/OlxMainImg.PNG'
import mobImg from '../../images/mobile.jpg';
import promotionPic from '../../images/promotionPic.PNG';
import olxPoster from '../../images/olxPoster.PNG';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';
import instagram from '../../images/instagram.svg';
import buttons from '../../images/buttons.PNG';
import './home.css'
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons';
// import { button } from 'bootstrap'
import { facebook_login , post } from '../../store/action'






class Home extends React.Component {
  render() {
    console.log("redux data===>", this.props)
    let data_entry = { name: "ushna karim" }

    // CREATE UI HERE


    return (
      <div>



        {/* // N A V B A R */}

        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home"><img src={OlxLogo} width="50px" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">



            <div class="flexcontainer">
              <div className="firstInput">

                <Icon.Search width="1.5em" height="1.5em" />
                <input placeholder="Karachi" type="text" className="firstInputIn" />
                <Icon.ChevronDown width="1.5em" height="1.5em" />
              </div>
              <div className="secondInput">
                <input className="secondInputIn" type="text" placeholder="Find Cars, Mobile Phones and much more.." />
                <Icon.Search width="1.5em" height="1.5em" />
              </div>
              <div >
                <button className="loginButton"><u>Login</u></button>
              </div>
              <div >
                <button className="sellButton" onClick={()=> this.props.facebook_login(this.props.history)}>
                  <Icon.Plus width="1.5em" height="1.5em" />SELL
              </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>

        {/* // ALL CATEGORIES SECTION  */}

        <div className="allCategoryDiv" >
          <strong className="allCategoryDivTitle">ALL CATEGORIES<Icon.ChevronDown width="1.5em" height="1.5em" /></strong> <p>
            <a href="">Mobile Phones</a>
            <a href="">Cars</a>
            <a href="">Motorcycles</a>
            <a href="">Houses</a>
            <a href="">TV-Video-Audio</a>
            <a href="">Tablets</a>
            <a href="">Lands and Plots</a> </p>
        </div>

        {/* image */}

        <img src={MainImg} className="MainImg" />


        {/* adds title */}

        <h5 className="AddTitle">Fresh recommendations</h5>

        {/* adds */}

        <div className="addsDiv">



          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>


          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>



          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          <div className="add">
            <Icon.SuitHeart  className="AddIcon"/>
            <img src={mobImg} className="addpic" />
            <h6 className="addTitle">
            17,200
            </h6>
            <p className="adddescription">infinix hot s</p>

            <div className="locationtime">
              <span className="addlocation">
                karachi
              </span>
              <span className="addtime">nov 23</span>

            </div>
          </div>




          










        </div>


{/* promotion poster */}

<div className="promotion">
<img className="promotionImg" src={promotionPic} alt="poster" />
</div>


<div className="promotion">
<img className="promotionImg" src={olxPoster} alt="poster" />
</div>


{/* footer */}
<div className="footer">


<div className="foot">
<h5 className="foothead">POPULAR CATEGORIES</h5>
<p className="foottail">Cars</p>
<p className="foottail">Flats for rent</p>
<p className="foottail">Jobs</p>
<p className="foottail">Mobile Phone</p>


</div>
<div className="foot">
<h5 className="foothead">Trending searches</h5>
<p className="foottail">Bikes</p>
<p className="foottail">Watches</p>
<p className="foottail">Books</p>
<p className="foottail">Dogs</p>


</div>
<div className="foot">
<h5 className="foothead">About us</h5>
<p className="foottail">About OLX group</p>
<p className="foottail">OLX Blog</p>
<p className="foottail">Contact Us</p>
<p className="foottail">OLX for Bussiness</p>


</div>
<div className="foot">
<h5 className="foothead">OLX</h5>
<p className="foottail">Help</p>
<p className="foottail">Site map</p>
<p className="foottail">Legal and Privacy Information</p>
<p className="foottail">Mobile Phone</p>


</div>
<div className="foot">
<h5 className="foothead">follow us</h5>
<p>
<img className="socialIcons" src={facebook} />
<img className="socialIcons" src={twitter} />
<img className="socialIcons" src={youtube} />
<img className="socialIcons" src={instagram} />
</p>
<p>
  <img src={buttons} />
</p>


</div>

<div className="foot0">
  <span className="foot1">
      Other countries  India - South Africa - Indonesia
  </span>
  <span className="foot2">
      clone OLX developed by Muhammad nameer
  </span >
</div>










</div>










      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps=(dispatch)=>({

  facebook_login : (history) => dispatch(facebook_login(history))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
