import axios from 'axios'
import React, { useContext } from 'react'
import Context from '../../context/context'
import './input-styles.scss'

const Input = () => {
    const { setState } = useContext(Context)

    return (
        <div className="input-wrap">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    id="input"
                    placeholder="Search for any IP address or domain"
                />
            </form>
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default Input
