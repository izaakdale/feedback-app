import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from './context/FeedbackContext'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                    <Link to='/'><Header/></Link>
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm/>
                                    <FeedbackStats/>
                                    <FeedbackList/>  
                                </>
                            }
                            ></Route>
                            <Route exact path='/about' element={<AboutPage/>} />
                            <Route exact path='/post/:id' element={<Post/>}/>
                        </Routes>
                    </div> 
                    
            </Router>
        </FeedbackProvider>
    )
}

export default App