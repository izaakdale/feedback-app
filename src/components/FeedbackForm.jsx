import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackForm() {
    const {addFeedback, feedbackEditState, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEditState.edit === true) {
            setBtnDisabled(false)
            setRating(feedbackEditState.item.rating)
            setText(feedbackEditState.item.text)
        }
    }, [feedbackEditState])

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (input) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== 0 && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('must be at least 10 chars')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(input.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEditState.edit === true) {
                updateFeedback(feedbackEditState.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText("")
        }
    }
    
    return (
        <Card>
            <form onSubmit={handleSubmit} action="">
                <h2>How would you rate the service?</h2>
                <RatingSelect select={setRating} selected={rating}/>
                <div className='input-group'>
                    <input onChange={handleTextChange} value={text} type="text" placeholder='write some kind words...'/>
                    <Button type="submit" isDisabled={btnDisabled}>send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}
