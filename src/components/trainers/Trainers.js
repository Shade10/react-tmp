import React, { Component } from 'react'

class Trainers extends Component {

    state = {
        trainers: [
            {
                id: 1,
                Name: 'Chuck Norris',
                description: 'Ile zrobię pompek? Zrobie je wszystkie!!',
                WchichBadgeHeCanGive: [],
                ListOfGymMembersHeTrain: [],
            },
            {
                id: 2,
                Name: 'Arnold Schwarzenegger',
                description: 'Ile zrobię pompek? Zrobie je wszystkie!!',
                WchichBadgeHeCanGive: [],
                ListOfGymMembersHeTrain: [],
            },
            {
                id: 3,
                Name: 'Predator',
                description: 'Ile zrobię pompek? Zrobie je wszystkie!!',
                WchichBadgeHeCanGive: [],
                ListOfGymMembersHeTrain: [],
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Trainers</h1>
                <ul>
                    {
                        this.state.trainers.map(
                            trainers => (
                                <li key={trainers.id}>
                                    <p>Badge - <b>{trainers.name}</b>: <br></br> {trainers.description}</p>
                                    {trainers.WchichBadgeHeCanGive}
                                    <button onClick={() => { }}>How to find trainer</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Trainers