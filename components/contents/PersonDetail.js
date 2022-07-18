import classes from "./PersonDetail.module.css";

function PersonDetails(props) {
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
    </div>
  );
}
export default PersonDetails;
