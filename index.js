//IMPORTS
//React Imports 
import React from 'react';
import ReactDOM from 'react-dom';

//Bootstrap Carp Import and List Items 
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";

//Custom CSS Import 
import './Style.CSS';

//Employee Card Image 
import CardImage from '.Image/Workpicture.PNG';

// We define the user object with its properties
const user = {
  name: "Samantha",
  surname: "De freitas",
  dateOfBirth: "21-06-1990",
  country: "South Africa",
  email: "samanthadefreitas01@gmail.com",
  telephone: 27747051836,
  company: "Amazon",
  profilePicture: CardImage,
  interests: ["jogging", "swimming", "golf", "books"],
};

// we map over the intestests array and grab each element and put it in the ListGroupItem
const listOfInterests = user.interests.map((interest) => {
  return <ListGroupItem key={interest}>{interest}</ListGroupItem>;
});

/* We destructure the values of the properties and store them in the respective variables to be able to user them in the react Element below without typing user every time */
const {
  name,
  surname,
  dateOfBirth,
  country,
  email,
  telephone,
  company,
  profilePicture,
} = user;

// Definition of the react element to be rendered in the root of the HTML (the div with id: "root")
const reactElement = (
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossOrigin="anonymous"
    />
    <header>
      <h1>Employee Card</h1>
    </header>

    <Card bg="light" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={profilePicture} />
      <Card.Body>
        <Card.Title>
          {name} {surname}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{telephone}</Card.Subtitle>
        <Card.Text>
          Born on {dateOfBirth}, Works at {company} and Lives in {country}.{" "}
        </Card.Text>
        <h5 className="cardListHeading">Hobbies and Interests: </h5>
      </Card.Body>
      <ListGroup variant="flush" className="list-group-flush">
        {listOfInterests}
      </ListGroup>
    </Card>
  </div>
);

