import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProjectCard = props => {
  return (
    <div>
    <Card>
      <CardBody>
        <CardTitle>{props.project.name}</CardTitle>
        <CardSubtitle>Completed: {props.project.completed}</CardSubtitle>
        <CardText>{props.project.description}</CardText>
        <Button>Actions</Button>
      </CardBody>
    </Card>
  </div>
  )
}