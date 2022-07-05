import React from "react";
import {Card , Button , Col } from 'react-bootstrap';

function CardS1(props){
    if(!props.matches.data){
        return null;
    }

    let showMatches = props.matches.data
    if(props.filter){
        showMatches = props.matches.data.filter(match => match.attributes.categories.data.find((category) => category.attributes.categorie==props.filter))
    }
    
    return showMatches.map((match, key) =>
        <Col key={key} style={{ padding: "0%", display: "block" }}>
            <Card className="text-center" >
                    <Card.Text>
                        {match.attributes.name}
                    </Card.Text>
                    <Button variant="primary" style={{ borderRadius: '3rem' }}>Go somewhere</Button>
            <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Col>
    );
}
export default CardS1;