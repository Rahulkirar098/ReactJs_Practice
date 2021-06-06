import React, { useState } from 'react'
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    form: {
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black'
    },
    input: {
        textAlign: 'center',
        color: 'red',
        padding: '5px'
    },
    button: {
        padding: '5px',
        textAlign: 'center',
        width: '90%',
        background: 'black',
        color: 'white'
    }
})

export const Form = () => {
    
    const classes = useStyle()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [getdata, setData] = useState([])

    const handelclick = (e) => {
        e.preventDefault();
        setName('')
        setPassword('')
        const newdata = {name:name,password:password}

        setData([...getdata,newdata]);
        console.log(getdata)
    }

    return (
        <div className={classes.form}>
            <div>
                <div>
                    <h1>Form By Hooks</h1>
                    <input placeholder="Name" className={classes.input} value={name} onChange={(e) => { setName(e.target.value) }} />
                    <br />
                    <br />
                    <input placeholder="Password" className={classes.input} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <br />
                    <br />
                    <button className={classes.button} onClick={handelclick}>Click</button>
                </div>
                <div>
                {
                    getdata.map((item,index)=>{
                        return(
                            <>
                            <h1>{item.name}</h1>
                            <h1>{item.password}</h1>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}


