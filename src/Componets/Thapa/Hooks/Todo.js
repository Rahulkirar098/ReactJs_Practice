import React from 'react'

export const Todo = () => {
    const data = [
        {
            id: 1, name: "rahul kirar", age: 26
        },
        {
            id: 2, name: "ayush chorasiya", age: 21
        },
        {
            id: 3, name: "raj chorasiya", age: 22
        }
    ]

    const [value, setValue] = React.useState(data)

    const remove = (id) => {
        const removwArray = value.filter((element) => {
            return (
                element.id !== id
            )
        })
        setValue(removwArray)
    }

    const handleclear = () => {
        setValue([])
    }
    return (
        <>
            {
                value.map((item) => {
                    return (
                        <h1 style={{ border: '2px solid red' }} key={item.id} >
                            Name: {item.name}, Age: {item.age}
                            <br />
                            <button onClick={() => remove(item.id)}>Remove</button>
                        </h1>
                    )
                })
            }
            <button onClick={handleclear}>Clear</button>
            <br />
            <br />
            <h1>In this Todo App we are use filter method to remove array</h1>
        </>
    )
}

