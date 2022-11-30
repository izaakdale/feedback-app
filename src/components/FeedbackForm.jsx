import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

export default function FeedbackForm({handleAdd}) {
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
            handleAdd(newFeedback)
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
