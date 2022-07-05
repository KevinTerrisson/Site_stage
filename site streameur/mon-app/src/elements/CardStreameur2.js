import React from "react";
import {Card , Button , Col , Container} from 'react-bootstrap';

function CardS2(props){
    if(!props.matches.data){
        return null;
    }

    let showMatches = props.matches.data
    if(props.filter){
        showMatches = props.matches.data.filter(match => match.attributes.categories.data.find((category) => category.attributes.categorie==props.filter))
    }
    
    return showMatches.map((match, key) =>
        <Col key={key} style={{ padding: "0%", display: "block" }}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {/*mettre les carte des streameur*/} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
    );
}
export default CardS2;