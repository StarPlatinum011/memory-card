import {v4 as uuidv4} from 'uuid';

import bale from '../assets/bale.jpg'
import beckham from '../assets/beckham.jpg'
import benzema from '../assets/benz.jpg'
import cannavaro from '../assets/cannavaro.jpg'
import casillas from '../assets/casillas.jpg'
import stefano from '../assets/di-stefano.jpg'
import figo from '../assets/figo.jpg'
import guti from '../assets/guti.jpg'
import isco from '../assets/isco.jpg'
import ramos from '../assets/ramos.jpg'
import ronaldo from '../assets/ronaldo.jpg'

const Players = [
    {
        id: uuidv4(),
        name: "Gareth Bale",
        src: bale,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "David Beckham",
        src: beckham,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Karim Benzema",
        src: benzema,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Favio Cannavaro",
        src: cannavaro,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Iker Casillas",
        src: casillas,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Alferdo Di Stefano",
        src: stefano,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Luis Figo",
        src: figo ,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Guti Hernandez",
        src: guti,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Isco Alarcon",
        src: isco,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Sergio Ramos",
        src: ramos,
        isClicked: false
    },
    {
        id: uuidv4(),
        name: "Cristiano Ronaldo",
        src: ronaldo,
        isClicked: false
    }
]

 export default {Players};


