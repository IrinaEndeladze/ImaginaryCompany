import classes from "./Card.module.css";

function Card(props) {
  const mostLiked = props.data.map((item) => item.liked);

  return (
    <div className={props.liked >= mostLiked[2] ? props.style : classes.card}>
      {props.children}
    </div>
  );
}

export default Card;
