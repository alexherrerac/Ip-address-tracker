import axios from 'axios'
import React, { useContext } from 'react'
import Context from '../../context/context'
import './input-styles.scss'

const Input = () => {
    const { setState } = useContext(Context)

    const getData = async (ipAddress) => {
        const apiUrl = `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_9Tpp85nngTjzfoaDORe0x2XJHjMh7&ipAddress=${ipAddress}`
        const response = await axios.get(apiUrl)
        const { ip, isp, location } = await response.data
        setState({
            ip: ip,
            city: location.city,
            region: location.region,
            postalCode: location.postalCode,
            lat: location.lat, 
            lng: location.lng,
            timezone: location.timezone,
            isp: isp
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = document.getElementById("input").value;
        getData(inputValue);
    }

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
