import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Feedback item 1",
            rating: 7,
        },        
        {
            id: 2,
            text: "Feedback item 2",
            rating: 5,
        },        
        {
            id: 3,
            text: "Feedback item 3",
            rating: 8,
        },
    ])

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <FeedbackContext.Provider
          value={{
            feedback,
            deleteFeedback,
            addFeedback,
          }}
        >
          {children}
        </FeedbackContext.Provider>
      )
}

export default FeedbackContext