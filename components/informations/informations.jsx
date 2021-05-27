import React, { useContext } from 'react'
import context from '../../context/context'
import './informations-styles.scss'

const Informations = () => {
    const { state } = useContext(context)
    return (
        <section>
            <article className="ip-address">
                <h4>IP ADDRESS</h4>
                <h2>{state.ip}</h2>
            </article>

            <article className="location">
                <h4>LOCATION</h4>
                <h2>{`${state.city}, ${state.region}, ${state.postalCode}`}</h2>
            </article>

            <article className="timezone">
                <h4>TIMEZONE</h4>
                <h2>{state.timezone}</h2>
            </article>

            <article className="isp">
                <h4>ISP</h4>
                <h2>{state.isp}</h2>
            </article>
        </section>
    )
}

export default Informations
