import React, { useEffect, useState } from "react";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [expData, setExpData] = useState([]);
  useEffect(() => {
    fetch(" expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpData(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <section>
        <SearchForm />
      </section>
      {/* home card */}
      <section className="flex-1">
        <div className="my-12">
          <div className="">
            <div className="flex justify-between">
              <p className="text-xl font-bold"> Experience</p>

              <Link to="/coming-soon">
                <p>See All</p>
              </Link>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                {" "}
                {[...Array(20)].slice(0, 15).map((exp, i) => (
                  <HomeCard key={i} exp={exp}></HomeCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* exp card */}
        <div className="">
          <div className="flex justify-between">
            <p className="text-xl font-bold"> Experience</p>

            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              {" "}
              {expData.slice(0, 4).map((exp, i) => (
                <ExpCard key={i} exp={exp}></ExpCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
