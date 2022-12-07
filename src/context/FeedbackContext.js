import React from "react";
import { createContext, useState, useEffect } from "react";

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
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // deletes feedback from the list
    const deleteFeedback = async (id) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    // add feedback to list
    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item)=>item.id === id ? {...item, ...data}: item))
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