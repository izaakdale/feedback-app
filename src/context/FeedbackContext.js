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

    const [feedbackEditState, setFeedbackEditState] = useState({
        item: {},
        edit: false,
    })

    // update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=>item.id === id ? {...item, ...updItem}: item))
    }

    // deletes feedback from the list
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    // add feedback to list
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // sets the item which you want to update and activates edit mode
    const editFeedback = (item) => {
        setFeedbackEditState({
            item,
            edit: true,
        })
    }
    
    return (
        <FeedbackContext.Provider
          value={{
            feedback,
            feedbackEditState,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
          }}
        >
          {children}
        </FeedbackContext.Provider>
      )
}

export default FeedbackContext