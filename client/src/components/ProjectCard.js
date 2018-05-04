import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProjectCard = props => {
  return (
    <Card className="ProjectCard">
      <CardBody>
        <CardTitle>{props.project.name}</CardTitle>
        <CardSubtitle>Completed: {String(props.project.completed)}</CardSubtitle>
        <CardText>{props.project.description}</CardText>
        <Button color="primary">Actions</Button>
      </CardBody>
    </Card>
  )
}

export default ProjectCard;