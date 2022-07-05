import React, { Component } from "react";
import Bar from './elements/Navbar';
import CardS1 from './elements/CardAgenda';
import CardS2 from "./elements/CardStreameur2";
import Car from "./elements/carousel";
import {Row , Container , Card} from 'react-bootstrap';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            matches : [],
            filter:null,
            filter2:null
        }

    }

    changeFilter = (cat) =>{
        this.setState({filter:cat})
        if(localStorage.getItem('filter') !=null ){
            localStorage.setItem("filter" , cat)
        }
        else{
            localStorage.setItem("filter" , "")
        }
    }

    componentDidMount = async () =>{
        const response = await fetch('http://localhost:1337/api/matches?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const matches = await response.json()
        this.setState({
            matches: matches,
            filter: localStorage.getItem('filter'),
          })
    }

    render(){
        // console.log("acc",this.state.matches)
        return(
            <>
                <Container>
                    <Bar changeFilter={this.changeFilter}/>
                    <Car />
                    <Row>
            <Card className="text-center" >
            <Card.Header>team IRC</Card.Header>
            </Card>
                        <Container style={{ display: 'flex' , padding: '0%'}}>
                            <Container style={{ padding: '0%'}}>
                                <Card className="text-center" >
                                        <Card.Body>
                                            <Card.Title>AGENDA DE LA SEMAINE</Card.Title>
                                        </Card.Body>
                                    </Card>
                                <CardS1 filter ={this.state.filter} matches ={this.state.matches} />
                            </Container>
                            <Container style={{ padding: '0%'}}>
                                <Card className="text-center" >
                                        <Card.Body>
                                            <Card.Title>CARD STREAMEUR</Card.Title>
                                        </Card.Body>
                                    </Card>
                                <CardS2 filter ={this.state.filter} matches ={this.state.matches} />
                            </Container>
                        </Container>
                    </Row>
                </Container>
            </>
        );
    }
}
export default Main;