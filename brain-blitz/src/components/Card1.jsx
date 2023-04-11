import { React, useState } from 'react';
import phantom from '../img/phantom.jpeg'
import shaker from '../img/earthshaker.jpeg'
import invoker from '../img/invoker.jpeg'
import pudge from '../img/pudge.jpeg'
import lancer from '../img/lancer.jpeg'
import crystal from '../img/crystal.jpeg'
import spirit from '../img/spirit.jpeg'
import antimage from '../img/anitmage.jpeg'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Brainbiltz.css'
import '../Card.css';


// field represnts the card

export default function Card1(props) {
    const [isClicked, setIsClicked] = useState(false)
    const [photo, setPhoto] = useState("")
    const [card, setCard] = useState((props) => {
        const values = ["1", "2", "3", "4", "5", "6", "7", "8"];

        // Generate a set of unique values
        const uniqueValues = new Set();
        while (uniqueValues.size < 1) {
            uniqueValues.add(values[Math.floor(Math.random() * values.length)]);
            // console.log(uniqueValues)
            return uniqueValues
        }

    })
    const cardValue = card.values().next().value;

    const handleClick = (props) => {
        setIsClicked(true)
        if (cardValue === "1") {
            setPhoto(phantom)
        } else if (cardValue === "3") {
            setPhoto(antimage)
        } else if (cardValue === "5") {
            setPhoto(pudge)
        } else if (cardValue === "7") {
            setPhoto(invoker)
        } else {
            setPhoto(lancer)
        }
        console.log(card.values().next().value)

    }
    // console.log(phantom)


    return (

        <Card onClick={() => { handleClick() }} style={{ width: '10rem', height: '10rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body >
                <Card.Title></Card.Title>
                <Card.Text>
                </Card.Text>
                {/* <Button variant="primary" style={{ justifyContent: 'center' }} >Find Me</Button> */}
            </Card.Body>
        </Card >








    )
}
