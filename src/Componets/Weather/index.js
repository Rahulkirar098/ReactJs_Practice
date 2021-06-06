import React, { useState } from 'react'

const styles = {
    main: {
        width: '80%',
        margin: 'auto'
    },
    inputdiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '70vh'
    },
    input: {
        width: '500px',
        height: '50px',
        border: 'none',
        background: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    button: {
        width: '250px',
        height: '40px',
        border: 'none',
        background: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize: '1rem',
        borderRadius: '20px'
    }
}

export const Weather = () => {

    const [city, setCity] = useState('')
    const [get, setGet] = useState('')
    const [temps, setTemp] = useState('')

    const handelsubmit = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=26f015e5ed8d6159ef81bcb90bf94c53`)
            .then((res) =>
                res.json()
            ).then((asd) => {
                setGet(asd)
                setTemp(asd.main)
                console.log(asd.main)
                console.log(asd)

            })
            setCity("")
    }

    return (
        <div style={styles.main}>
                <h1 style={{textAlign:'center',color:'green'}}>Weather App</h1>
            <div style={styles.inputdiv}>
                <input
                    placeholder="Enter Your City"
                    style={styles.input}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <br />
                <button style={styles.button} type="button" onClick={handelsubmit}>Submit</button>
                <br />
                <h1 style={{color:'green'}}>City : {get.name}</h1>
                <h1 style={{color:'green'}}>Temp : {temps.temp} C'</h1>
            </div>

        </div>
    )
}
