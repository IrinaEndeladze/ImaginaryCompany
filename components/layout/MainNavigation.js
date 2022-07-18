import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>Imaginary Company</div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home Page</a>
              </Link>
            </li>
            <li>
              <Link href="/personsPage">
                <a>Persons Page</a>
              </Link>
            </li>
            <li>
              <Link href="/feedback">
                <a>Add Feedback</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer className={classes.footer}>hello</footer>
    </>
  );
}

export default MainNavigation;
