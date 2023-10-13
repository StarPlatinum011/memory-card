import {v4 as uuidv4} from 'uuid';

import bale from '../assets/bale.jpg'
import benzema from '../assets/benz.jpg'
import casillas from '../assets/casillas.jpg'
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
        name: "Karim Benzema",
        src: benzema,
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

 export default Players;


