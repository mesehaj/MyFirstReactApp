import React from 'react';

import Container from 'react-bootstrap/Container';
import { Cards } from '../card/card.component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//import './card-list.Styles.css'


export const CardList = props => {   
  
  const mystyle= {
    marginTop: "20px"
  };
    return <Container><Row md={4} style= {mystyle}> { props.monsters.map
      (
        monster => 
        (
          cols(monster, mystyle)
        )
      )
   }
   </Row></Container>
}

function cols(mx,s){
    return <Col style= {s} xs={6}><Cards key= {mx.id} monster= {mx}/></Col>
}

