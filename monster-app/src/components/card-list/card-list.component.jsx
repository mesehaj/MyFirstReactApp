import React from 'react';

import Container from 'react-bootstrap/Container';
import {Cards } from '../card/card.component'

import './card-list.Styles.css'


export const CardList = props => {
    return <Container className="card-list">
    {
        props.monsters.map(
          monster => (
          <Cards key= {monster.id} monster= {monster}/>
          )
          )
      }
  </Container>
}