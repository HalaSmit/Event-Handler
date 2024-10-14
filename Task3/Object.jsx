import React, { useState } from 'react'

export default function Object() {

    const [state,setState] = useState({

        persone1: {
            name: 'Smit',
            gen: 'Male',
            age: 22
        },

        persone2: {
            name: 'Smit2',
            gen: 'Male',
            age: 23
        }

    });
    return (
        <div>
            <h1>My Profile</h1>
            <p>Name = {state.persone1.name}</p>
            <p>Gender = {state.persone1.gen}</p>
            <p>Age = {state.persone1.age}</p>

        </div>
    )
}
