import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RetingSelect from "./RetingSelect";
function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [reting, setReting] = useState(10);
  const [btnDisable, setBntDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBntDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBntDisable(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
        const newFeedback ={
            text,
            reting,
        }
        handleAdd(newFeedback)
        setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RetingSelect select={(reting) => setReting(reting)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
