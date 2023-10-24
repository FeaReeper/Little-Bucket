import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BucketForm from "./BucketForm";
import { userContext } from "../context/UserContext";
import Nav from "./Nav";

const DisplayBucketList = () => {
  const [ buckets, setBuckets ] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { currentUser } = useContext(userContext);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allBuckets")
      .then((res) => {
        console.log(res.data);
        setBuckets(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loaded]);

  return (
    <div className="container text-center w-100 mx-auto p-3 ">
      <div className="d-flex justify-content-between ">
        <Link style={{color: 'white', textDecoration: 'none'}} className="d-flex align-items-center" to={"/dashboard"}>Dashboard</Link>
        <Nav />
      </div>
      <div className="d-flex">
        <div className="m-5 col">
          <BucketForm loaded={loaded} setLoaded={setLoaded} />
        </div>
        <div className="col m-5">
          <div>
            <h2 style={{ color: "#1499ef" }}>All Bucket Items</h2>
          </div>
          {buckets.map((bucket) => {
            if (bucket.userId == currentUser._id)
              return (
                <div key={bucket._id} className="m-5">
                  <div>
                    <h3>Title: {bucket.title}</h3>
                  </div>
                  <Link to={`/bucket/${bucket._id}`} style={{textDecoration: 'none'}}>View Details</Link>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayBucketList;
