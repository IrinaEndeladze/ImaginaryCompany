import PersonDetail from "../../components/contents/PersonDetail";
import { useState } from "react";
import Head from "next/head";
import classes from "./id.module.css";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee"
  );
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee/" + id
  );

  const data = await res.json();
  return {
    props: { person: data },
  };
};

function PersonDetails({ person }) {
  const [numOfLikes, setNumOfLikes] = useState(person.liked);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateLike = async () => {
    const response = await fetch(
      "https://test-task-api-optimo.herokuapp.com/employee/" + person.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...person, liked: numOfLikes }),
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setNumOfLikes(data.liked);
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error("There was an error!", error);
      });
  };

  const handleLike = () => {
    setNumOfLikes(numOfLikes + 1);
    updateLike();
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>Person Detail Page</title>
      </Head>
      <PersonDetail
        handleLike={handleLike}
        avatar={"logo.png"}
        id={person.id}
        name={person.name}
        position={person.description}
        location={person.location_id}
        likes={numOfLikes}
        bio={"descripsjdbvj jsdbfjbsdfj jsdbfjsbd"}
      />
      <div className={classes.likeButton}>
        <button onClick={handleLike}>like</button>
      </div>
    </div>
  );
}
export default PersonDetails;
