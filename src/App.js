import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import FeedbackList from "./componets/FeedbackList";
import FeedbackStats from "./componets/FeedbackStats";
import FeedbackForm from "./componets/FeedbackForm";
import AboutIconLink from "./componets/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
 
 
 
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
