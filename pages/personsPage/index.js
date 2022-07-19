import React, { useState, useEffect } from "react";
import JobDropDown from "../../components/contents/JobDropDown";
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
  const [filterData, setFilterData] = useState(employee);
  const [filter, setFilter] = useState(false);

  const [job, setJob] = useState("");

  const handleChange = (event) => {
    const filtered = employee.filter(
      (item) => item.job_id === event.target.value
    );
    filter ? setFilterData(filtered) : setFilterData(employee);
    setFilter(true);
  };

  useEffect(() => {
    setJob(filterData.map((item) => item.job_id));
  }, [filterData]);

  return (
    <div>
      <JobDropDown
        setFilter={setFilter}
        job={job}
        handleChange={handleChange}
      />
      <PersonsList persons={filter ? filterData : employee} />
    </div>
  );
}

export default PersonsPage;
