import React, { useState } from 'react'

export const Spread = () => {

    const [value, setValue] = useState({
        id: 0, name: "rahulkirar", age: 26
    })

    const handleclear = () => {
        setValue({ ...value, name: 'ayush Chorasiya' })
    }
    return (
        <div style={{ border: '5px solid green',height:'80vh', display: 'flex',justifyContent:'center',alignItems:'center' }}>
           <div>
           <h1>Name: {value.name}, Age: {value.age}</h1>
            <br />
            <br />
            <button onClick={handleclear}>Clear</button>
           </div>
        </div>
    )
}


