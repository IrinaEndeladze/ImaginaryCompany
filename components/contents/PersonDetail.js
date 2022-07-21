import classes from "./PersonDetail.module.css";

function PersonDetails(props) {
  return (
    <div className={classes.detailContainer}>
      <img src={props.avatar} alt="firs person" />
      <div className={classes.personInfo}>
        <p>
          <span>Name:</span> {props.name}
        </p>
        <p>
          <span>Job Position: </span>
          {props.position}
        </p>
        <p>
          <span>Location: </span>
          {props.location}
        </p>
        <p>
          <span>Number of Likes: </span> {props.likes}
        </p>
        <p>
          <span>Bio: </span> {props.bio}
        </p>
      </div>
    </div>
  );
}
export default PersonDetails;
