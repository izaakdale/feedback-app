import React from "react";
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEditState, setFeedbackEditState] = useState({
        item: {},
        edit: false,
    })
    useEffect(()=>{
        fetchFeedback()
    }, [])

    // fetch feedback data
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

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
            isLoading,
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