import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
    return (
        <div>
            <Header/>
            <div className="container">
                <FeedbackItem></FeedbackItem>
            </div>
        </div>
    )
}

export default App