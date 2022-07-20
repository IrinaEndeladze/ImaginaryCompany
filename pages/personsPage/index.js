import React, { useState, useEffect } from "react";
import Head from "next/head";
import JobDropDown from "../../components/contents/JobDropDown";
import LocationDropDown from "../../components/contents/LocationDropDown";
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
  const [locationFilterData, setLocationFilterData] = useState(employee);
  const [filter, setFilter] = useState(false);
  const [locationFilter, setLocationFilter] = useState(false);
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  const jobHandleChange = (event) => {
    if (event.target.value == 0) {
      setFilterData(employee);
      setFilter(false);
      return;
    }
    setFilterData(
      locationFilter
        ? locationFilterData.filter(
            (item) => item.job_id === event.target.value
          )
        : employee.filter((item) => item.job_id === event.target.value)
    );

    setFilter(true);
    setLocationFilter(false);
  };

  const LocationHandleChange = (event) => {
    if (event.target.value == 0) {
      setLocationFilterData(employee);
      setFilter(false);

      return;
    }
    setLocationFilterData(
      filter
        ? filterData.filter((item) => item.location_id === event.target.value)
        : employee.filter((item) => item.location_id === event.target.value)
    );
    setFilter(true);
    setLocationFilter(true);
  };

  useEffect(() => {
    setJob(filterData.map((item) => item.job_id));
    setLocation(locationFilterData.map((item) => item.location_id));
  }, [filterData, locationFilterData]);

  console.log(employee);
  return (
    <div>
      <Head>
        <title>Person Page</title>
      </Head>
      <div>
        <JobDropDown job={job} jobHandleChange={jobHandleChange} />
        <LocationDropDown
          location={location}
          LocationHandleChange={LocationHandleChange}
        />
      </div>
      <PersonsList
        persons={
          filter ? (locationFilter ? locationFilterData : filterData) : employee
        }
      />
    </div>
  );
}

export default PersonsPage;
