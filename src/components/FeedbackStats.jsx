import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    // calculate average
    let average = (feedback.reduce((acc, cur) => {
        return (acc + cur.rating)
    }, 0) / feedback.length).toFixed(1)

    console.log(average)

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats