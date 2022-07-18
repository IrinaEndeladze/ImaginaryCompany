import FeedbackForm from "../../components/contents/FeedbackForm";

function Feedback() {
  function addFeedbackHandler(enterFeedbackData) {
    console.log(enterFeedbackData);
  }
  return <FeedbackForm onAddFeedback={addFeedbackHandler} />;
}
export default Feedback;
