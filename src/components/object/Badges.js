import React, { Component } from 'react'

class Badges extends Component {

    state = {
        badge: [
            {
                id: 1,
                title: 'Be the best',
                description: 'Bądź największym twardzielem z pośród wszystkich',
                WhoCanGiveThisBadge: [],
                howMouchCanBeThisBadge: 1,
            },
            {
                id: 2,
                title: 'king of gym',
                description: 'jesteś mistrzem tej siłowni',
                WhoCanGiveThisBadge: [],
                howMouchCanBeThisBadge: 10,
            },
            {
                id: 3,
                title: 'The talented',
                description: 'Ten typ nie boi się żadnych wyzwań',
                WhoCanGiveThisBadge: [],
                howMouchCanBeThisBadge: 20,
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Badges</h1>
                <ul>
                    {
                        this.state.badge.map(
                            badge => (
                                <li key={badge.id}>
                                    <div>
                                        <p>Badge - <b>{badge.title}</b>: <br></br> {badge.description}</p>
                                    </div>
                                    {}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Badges