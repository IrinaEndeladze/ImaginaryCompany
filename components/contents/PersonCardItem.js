import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./PersonCardItem.module.css";

function PersonCardItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card style={props.className} data={props.data} liked={props.likes}>
        <div className={classes.image}>
          <img src="logo.png" alt={"Not Found"} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.jobPosition}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.likes} like</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PersonCardItem;
