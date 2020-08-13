import React, { Component } from 'react';
import { Jumbotron, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Home(props){
       return(
         <React.Fragment>
         <Header />
         <Jumbotron id="homejumbo">
           <div className="container">
              <div className="row">
                <div className="col-12" id="homejumbotitle">
                  AT YOUR DOORSTEP
                </div>
              </div>
              <div className="row">
                 <div className="col-12" id="hometag">
                   Ask for help!
                 </div>
              </div>
           </div>
         </Jumbotron>
         <Dropdown>
           <DropdownToggle variant="success">
             Location
           </DropdownToggle>
           <DropdownMenu>
             <DropdownItem>Ratu Road</DropdownItem>
             <DropdownItem>Piska More</DropdownItem>
             <DropdownItem>Harmu  </DropdownItem>
           </DropdownMenu>
         </Dropdown>
         <Footer />
         </React.Fragment>
       );
}

export default Home;