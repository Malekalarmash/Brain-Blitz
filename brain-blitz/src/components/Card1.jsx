import { React, useState } from 'react';
import phantom from '../img/phantom.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Brainbiltz.css'
import '../Card.css';


// field represnts the card

export default function Card1(props) {
    const [isClicked, setIsClicked] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [card, setCard] = useState((props) => {
        const values = ["1", "2", "3", "4", "5", "6", "7", "8"];

        // Generate a set of unique values
        const uniqueValues = new Set();
        while (uniqueValues.size < 1) {
            uniqueValues.add(values[Math.floor(Math.random() * values.length)]);
            console.log(uniqueValues)
            return uniqueValues
        }

        // Duplicate one of the values to create the final array
        // const duplicatedValue = Array.from(uniqueValues)[Math.floor(Math.random() * uniqueValues.size)];
        // const CardeValues = new Array(1).fill(null);
        // let index = 0;
        // while (index = 1) {
        //     const randomIndex = Math.floor(Math.random());
        //     if (CardeValues[randomIndex] === null) {
        //         CardeValues[randomIndex] = index === 1 || index === 1 ? duplicatedValue : Array.from(uniqueValues)[index];
        //         index++;
        //     }
        // }

        // return CardeValues;

    })

    const handleClick = (props) => {
        setIsClicked(true)
        setPhoto(phantom)

    }
    console.log(phantom)


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body >
                <Card.Title>{card}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary" style={{ justifyContent: 'center' }} onClick={() => { handleClick() }}>Find Me</Button>
            </Card.Body>
        </Card >



    )
}
