import PersonDetail from "../../components/contents/PersonDetail";
import { useState, useEffect } from "react";
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
  const [like, setLike] = useState(false);
  const [numOfLikes, setNumOfLikes] = useState(person.liked);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const data = { id: person.id, liked: numOfLikes };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    console.log(requestOptions);
    fetch(
      "https://test-task-api-optimo.herokuapp.com/employee/" + person.id,
      { mode: "no-cors" },
      requestOptions
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
  }, []);

  const handleLike = () => {
    setNumOfLikes(numOfLikes + 1);
    setLike(true);
  };
  console.log(numOfLikes);

  console.log(person);
  return (
    <PersonDetail
      handleLike={handleLike}
      avatar={"logo.png"}
      id={person.id}
      name={person.name}
      position={person.description}
      location={person.location_id}
      likes={person.liked || numOfLikes}
      bio={"descripsjdbvj jsdbfjbsdfj jsdbfjsbd"}
    />
  );
}
export default PersonDetails;
