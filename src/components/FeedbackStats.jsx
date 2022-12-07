import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback, isLoading} = useContext(FeedbackContext)

    // calculate average
    let average = (feedback.reduce((acc, cur) => {
        return (acc + cur.rating)
    }, 0) / feedback.length).toFixed(1)

    return (
        <div className="feedback-stats">
            <h4>
                {isLoading ? 0: feedback.length} Reviews
            </h4>
            <h4>Average rating: {
                isLoading ? 0 : isNaN(average) ? 0 : average
            }</h4>
        </div>
    )
}

export default FeedbackStats