import React from 'react'
import { useContext, useEffect } from "react"
import FeedbackContext from '../context/FeedbackContext'

export default function RatingSelect({select, selected}) {
    const {feedbackEditState} = useContext(FeedbackContext)

    useEffect(()=>{
        if( feedbackEditState.edit === true) {
            select(feedbackEditState.item.rating)
        }
    }, [feedbackEditState])

    const handleChange = (value) => {
        select(+value.currentTarget.value)
    }
    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
                <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
                />
                <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
            ))}
        </ul>
    )
}
