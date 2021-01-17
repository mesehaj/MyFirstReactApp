import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import './card.Styles.css'

export const Cards = props => {
    return <Card className="card-container">
    <Card.Body> 
        <Image src={`https://robohash.org/${props.monster.id + 6}?set=set2`} thumbnail/>
        <Card.Title><h2>{props.monster.name}</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.monster.email}</Card.Subtitle>
    </Card.Body>
</Card>
}