import React, { useState } from 'react'

export const UseState = () => {

    const [value, setValue] = useState("Rahul")
    const [num, setNum] = useState(0)

    const Clickhanddle = () => {
        (value === "Rahul") ? setValue("Rahul kirar") : setValue("Rahul");
    }
    const ClickNum = () => { setNum(num + 1) }
    const Clickminus = () => { setNum(num - 1) }

    return (
        <div>
            <h1>Click here for your FullName</h1>
            <h1>{value}</h1>
            <button onClick={Clickhanddle}>Click</button>
            <br />
            <h1>{num}</h1>
            <h1>
                <button onClick={ClickNum}> +</button>
                <button onClick={Clickminus}> -</button>
            </h1>
        </div>
    )
}


