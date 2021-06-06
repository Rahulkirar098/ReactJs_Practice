import React, { useState } from 'react'

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    },
    input: {
        textAlign: 'center',
        color: 'red',
        padding: '5px',
        width: '400px'
    },
    button: {
        padding: '5px',
        textAlign: 'center',
        background: 'black',
        color: 'white',
        width: '400px'
    }
}

export const TodoApp = () => {
    const [name, setName] = useState('')
    const [show, setShow] = useState([])

    const handelclick = (e) => {
        e.preventDefault();
        setShow([...show, name])
        setName("")
    }

    return (
        <div style={styles.main}>
            <div style={styles.secondery}>
                <form onSubmit={(e) => handelclick(e)}>
                    <input placeholder="Name" style={styles.input} value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    <br />
                    <br />
                    <button style={styles.button} type="submit" >
                        Click</button>
                </form>
                {
                    show.map((item) => {
                        return(
                            <h1 style={{textAlign:'center'}}>{item}<button>delete</button></h1>
                        )
                    })
                }
            </div>
        </div>
    )
}


