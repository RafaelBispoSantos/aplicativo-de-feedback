import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import FeedbackList from "./componets/FeedbackList";
import FeedbackStats from "./componets/FeedbackStats";
import FeedbackForm from "./componets/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutIconLink from "./componets/AboutIconLink";
import AboutPage from "./pages/AboutPage";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
          exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  );
}
export default App;
