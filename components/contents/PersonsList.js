import PersonCardItem from "./PersonCardItem";
import classes from "./PersonsList.module.css";

function PersonsList(props) {
  const data = props.persons.sort((a, b) => b.liked - a.liked);

  return (
    <ul className={classes.list}>
      {data.map((item, index) => (
        <PersonCardItem
          key={item.id}
          id={item.id}
          name={item.name}
          jobPosition={item.description}
          image={"logo.png"}
          likes={item.liked}
          data={props.persons}
          className={classes.mostLiked}
          index={index}
        />
      ))}
    </ul>
  );
}

export default PersonsList;
