import PersonDetail from "../../components/contents/PersonDetail";

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
  console.log(person);
  return (
    <PersonDetail
      avatar={person.image}
      name={person.name}
      position={person.description}
      location={person.location_id}
      likes={person.liked}
      bio={"descripsjdbvj jsdbfjbsdfj jsdbfjsbd"}
    />
  );
}
export default PersonDetails;
