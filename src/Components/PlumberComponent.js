import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

function RenderCard({plumber}){
        return(
            <Card>
                <CardImg src={plumber.image} />
                <CardBody>
                    <CardTitle>{plumber.name}</CardTitle>
                    <CardText>{plumber.location}, {plumber.phonenum}</CardText>
                </CardBody>
            </Card>
        );
}


const Plumbers = (props) =>{
    const plumbers = props.plumbers.map((plumber) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={plumber.id}>
                <RenderCard plumber={plumber} />
            </div>
        );
    });

    return(
        <div className="container">
            {plumbers}
        </div>
    );
    
   
}

export default Plumbers;