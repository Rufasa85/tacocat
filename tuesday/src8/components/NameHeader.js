import React from 'react'

export default function NameHeader(props) {
    const style = {
        background:props.color
    }
    return (
        <div>
            <h1 style={style}>{props.name} says hi from {props.location}</h1>
        </div>
    )
}
