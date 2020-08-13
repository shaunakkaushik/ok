import React,{Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{

    constructor(props){
        super(props);

        this.state={
           isNavOpen: false
    }
    }
    
    render(){
        return(
            <div>
                <Navbar dark expand="sm">
                   <div className="container">
                   <NavbarToggler />
                       <NavbarBrand >At your doorstep</NavbarBrand>
                       <Collapse isOpen={this.state.isNavOpen} navbar>
                           <Nav navbar className="ml-auto">
                               <NavItem>
                                   <NavLink style={{color: 'white', textDecoration: 'none', margin: '7px'}} activeStyle={{color: 'white', textDecoration: 'underline', margin: '7px'}} className="nav-link" to="/proregister">Register as a professional</NavLink>
                               </NavItem>
                                   <NavItem>
                                   <NavLink style={{color: 'white', textDecoration: 'none' , border: '2px solid', margin: '7px'}} activeStyle={{color: 'white', border: '2px solid', margin: '7px'}} className="nav-link" to="/proregister">Login</NavLink>
                               </NavItem>
                                   <NavItem>
                                   <NavLink style={{color: 'white', textDecoration: 'none' , margin: '7px'}} activeStyle={{color: 'white', textDecoration: 'underline', margin: '7px'}} className="nav-link" to="/proregister">Sign Up</NavLink>
                               </NavItem>
                               </Nav>
                       </Collapse>
                   </div>
                </Navbar> 
            </div>
        );
    }
}

export default Header;