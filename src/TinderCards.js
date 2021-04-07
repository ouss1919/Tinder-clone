import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name : "Elon Musk",
            url : "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name : "Jeff Bezoz",
            url : "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
        }
    ])
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
                            <div style={{backgroundImage: `url(${person.url})`}}
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
