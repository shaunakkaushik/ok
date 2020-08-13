import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
    render(){
        return(
           <div className="footer">
               <div className="container">
                   <div className="enclose">
                       <div id="gen">
                      <Link to="/contact">Contact Us</Link>
                      <Link to="/contact"> About Us</Link>
                      <Link to="/contact"> FAQs</Link>
                      <Link to="/contact"> Privacy Policy</Link>
                       </div>
                       <hr col="12" />
                       <div id="gen">
                           <a href=""><i className="fa fa-facebook"></i></a>
                           <a href=""><i className="fa fa-instagram"></i></a>
                           <a href=""><i className="fa fa-twitter"></i></a>
                           <a href=""><i className="fa fa-envelope"></i></a>
                       </div>
                       <hr col="12" />
                       <div id="gen">
                       © Shaun Developers
                       </div>
                    </div>
               </div>
           </div>
        );
    }
}

export default Footer;