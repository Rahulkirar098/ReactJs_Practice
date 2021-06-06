import React, { useState } from 'react'

export const UseStateArray = () => {

    const data = [
        {
            id: 0, name: "rahulkirar", age: 26
        },
        {
            id: 0, name: "ayushchorasiya", age: 21
        },
        {
            id: 0, name: "rajchorasiya", age: 22
        }
    ]
    
    const [value, setValue] = useState(data)

    const handleclear = () => {
        value === data ? setValue([]) : setValue(data)
    }
    return (
        <>
            {
                value.map((item) => <h1 style={{ border: '2px solid red' }} key={item.id} >Name: {item.name}, Age: {item.age}</h1>)
            }
            <button onClick={handleclear}>Clear</button>
        </>
    )
}


