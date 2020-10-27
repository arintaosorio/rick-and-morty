import React from "react";
import { Card } from "react-bootstrap";

interface ComponentProps {
  name: string;
  location: string;
  image: string;
  episodes: string[];
}

export default function (props: ComponentProps) {
  const { name = "", location = "", episodes = [], image} = props;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <ul>
          {
            episodes.map(episode => <li key={episode}>{episode}</li>)
          }
        </ul>
      </Card.Body>
    </Card>
  );
}
