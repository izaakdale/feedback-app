import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from './context/FeedbackContext'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackProvider>
            <Router>
                    <Link to='/'>
                        <Header/>
                    </Link>
                    <div className="container">

                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback}/>
                                    <FeedbackStats/>
                                    <FeedbackList handleDelete={(id) => deleteFeedback(id)}/>  
                                </>
                            }
                            ></Route>
                            <Route exact path='/about' element={<AboutPage/>} />
                            <Route exact path='/post/:id' element={<Post/>}/>
                        </Routes>
                    <AboutIconLink/> 
                    </div> 
                    
            </Router>
        </FeedbackProvider>
    )
}

export default App