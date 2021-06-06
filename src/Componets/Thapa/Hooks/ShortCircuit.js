import React from 'react'

export const ShortCircuit = () => {

    const value = ''
    const values = 'rahul'

    const asd = ""
    const asdf = "Yoooo"

    return (
        <div>
            <h1>{value || "kirar"}</h1>
            <h1>{values || "kirar"}</h1>
            <h1>{asd || "yup"}</h1>
            <h1>{asdf || "yup"}</h1>
            <h1>{values && "kirar"}</h1>
            <h1>{'Rahul' && "kirar"}</h1>

        </div>
    )
}


