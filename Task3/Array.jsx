import React, { useState } from 'react'

export default function Array() {
    const [state, setState] = useState([
        {
            name: "Smit",
            gen: "Male",
            age: 22,
        }
    ]);

    return (
        <div>
            <h1>My Profile</h1>
            {
                state.map((arr) => (
                    <div>
                        <p>Name = {arr.name}</p>
                        <p>Gender = {arr.gen}</p>
                        <p>Age = {arr.age}</p>
                    </div>
                ))
            }

        </div>
    )
}
