import classes from "./HomePage.module.css";

export function HomePageContent() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        {" "}
        Everything is possible, if you never give up
      </h1>
      <img src="logo.png" alt={"logo"} width="500px" />
    </div>
  );
}
