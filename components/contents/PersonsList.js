import PersonCardItem from "./PersonCardItem";
import classes from "./PersonsList.module.css";

function PersonsList(props) {
  return (
    <ul className={classes.list}>
      {props.persons.map((item) => (
        <PersonCardItem
          key={item.id}
          id={item.id}
          name={item.name}
          jobPosition={item.description}
          image={item.image}
          likes={item.liked}
        />
      ))}
    </ul>
  );
}

export default PersonsList;
