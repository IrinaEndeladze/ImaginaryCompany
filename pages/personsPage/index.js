import PersonsList from "../../components/contents/PersonsList";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://test-task-api-optimo.herokuapp.com/employee"
  );
  const data = await res.json();

  return {
    props: { employee: data },
  };
};

function PersonsPage({ employee }) {
  return <PersonsList persons={employee} />;
}

export default PersonsPage;
