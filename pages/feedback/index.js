import FeedbackForm from "../../components/contents/FeedbackForm";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Feedback() {
  const router = useRouter();

  const addFeedbackHandler = async (enterFeedbackData) => {
    const res = await fetch(
      "https://test-task-api-optimo.herokuapp.com/feedback",
      {
        method: "POST",
        body: JSON.stringify(enterFeedbackData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();
    alert("feedback succesfully sent");
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add Feedback</title>
      </Head>
      <FeedbackForm onAddFeedback={addFeedbackHandler} />
    </Fragment>
  );
}
export default Feedback;
