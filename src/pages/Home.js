import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Details from '../components/Details/Details'

export default function Home() {
    return (
        <div className="home">
            <Sidebar></Sidebar>
            <Details></Details>
        </div>
    )
}
