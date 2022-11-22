import React from 'react'
import { useState } from 'react'


function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of a feedback")

    const handleClick = () => {
        setRating((prev) => {
            return prev+1
        })
        setText("Test")
    }

    return (
        <div className='card'>
            <div className='num-display'>{rating}</div>
            <div className='text-display'>{text}</div>
            <button onClick={handleClick}>click...</button>
        </div>
    )
}

export default FeedbackItem