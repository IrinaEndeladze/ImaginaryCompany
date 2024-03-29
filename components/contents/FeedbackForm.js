import { useRef } from "react";
import classes from "./FeedbackForm.module.css";

function FeedbackForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const feedbackData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    props.onAddFeedback(feedbackData);
  }

  return (
    <div className={classes.feedbackContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            ref={nameInputRef}
            name="name"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            required
            id="emailAddress"
            ref={emailInputRef}
            name="email"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            rows="5"
            name="message"
            ref={messageInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
