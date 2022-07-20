import { useState, useEffect } from "react";
import classes from "./PersonDetail.module.css";

function PersonDetails(props) {
  const [like, setLike] = useState(false);
  // const [numOfLikes, setNumOfLikes] = useState(props.likes);
  // const [errorMessage, setErrorMessage] = useState(null);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: "React Hooks PUT Request Example" }),
  //   };
  //   fetch(
  //     "https://test-task-api-optimo.herokuapp.com/employee/" + props.id,
  //     { mode: "no-cors" },
  //     requestOptions
  //   )
  //     .then(async (response) => {
  //       const data = await response.json();
  //       if (!response.ok) {
  //         const error = (data && data.message) || response.status;
  //         return Promise.reject(error);
  //       }
  //       setNumOfLikes(data.likes);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error);
  //       console.error("There was an error!", error);
  //     });
  // }, []);

  // const handleLike = () => {
  //   setNumOfLikes(numOfLikes + 1);
  //   setLike(true);
  // };
  // console.log(numOfLikes);
  return (
    <div className={classes.detailContainer}>
      <img src={props.avatar} alt="firs person" />
      <div className={classes.personInfo}>
        <p> Name: {props.name}</p>
        <p>Job Position: {props.position}</p>
        <address>Location: {props.location}</address>
        <p>Number of Likes: {props.likes}</p>
        <p>Bio: {props.bio}</p>
      </div>
      <div className={classes.likeButon}>
        <button onClick={props.handleLike}>{like ? "Unlike" : "Like"}</button>
      </div>
    </div>
  );
}
export default PersonDetails;
