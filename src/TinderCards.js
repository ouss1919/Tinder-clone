import React, {useEffect, useState} from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from './axios'
function TinderCards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/card')
            setPeople(req.data)
        }

        fetchData();
    }, [])
    const swiped = (direction, nametoDelete) => {
        console.log("removing: " + nametoDelete);
        //setLastDirection(direction);
    }

    const outOffFrame = (name) =>{
        console.log(name + "left the screen");
    }
    return (
        <div className="tinderCards">
                <div className="tindercards__cardcontainer">
                    {people.map(person => ( 
                        <TinderCard 
                        className = "swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOffFrame(person.name)}
                        >
                            <div style={{backgroundImage: `url(${person.imageUrl})`}}
                            className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                     ))}
                </div>
        </div>
    )
}

export default TinderCards
