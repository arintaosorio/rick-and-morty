import React from "react";
import { Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


interface ComponentProps {
  name: string;
  location: string;
  image: string;
  episodes: string[];


}



export default function (props: ComponentProps) {
  const { name = "", location = "", episodes = [], image, } = props;  


  return (
  
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> <strong> Last known location: </strong> {location}</Card.Text>
        <Card.Text> <strong> Number of Episodes: </strong> {episodes.length}</Card.Text>
        
       
      </Card.Body>
    </Card>

  );
}
