import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BucketForm from "./BucketForm";
import { userContext } from "../context/UserContext";
import Nav from "./Nav";

const DisplayBucketList = () => {
  const [buckets, setBuckets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { currentUser } = useContext(userContext);
  const [searchTag, setSearchTag] = useState('')

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

  const handleChange = (e) => {
    setSearchTag(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTag){
      const filteredBuckets = buckets.filter((bucket) => searchTag === bucket.tag)
      setBuckets(filteredBuckets)
    }
    else {
      axios
      .get("http://localhost:8000/api/allBuckets")
      .then((res) => {
        console.log(res.data);
        setBuckets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    }
  };

  const sortBucketsByAge = () => {
    setBuckets([...buckets].sort((a, b) => a.age - b.age))
  }

  return (
    <div className="container text-center mx-auto p-3 ">
      <div className="d-flex justify-content-around">
        <Link
          className="d-flex align-items-center link-white-no-decor"
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Nav />
      </div>
      <div style={{height: "100vh"}} className="d-flex">
        <div className="m-5 col">
          <BucketForm loaded={loaded} setLoaded={setLoaded} />
        </div>
        <div className="col m-5">
          <div>
            <h1 className="sub-title">All Bucket Items</h1>
          </div>
          <div className="mt-4">
            <button className="btn border h-50 m-auto text-black" onClick={sortBucketsByAge}>Sort by Age</button>
            <form className='d-flex ali text-black' onSubmit={handleSearch}>
              <label htmlFor="search" className="m-auto">Search by Tag: </label>
              <input className="m-3" type="search" id="search" name="search" onChange={handleChange}/>
              <button className="btn border h-50 m-auto text-black">Search</button>
            </form>
          </div>
          <div className="overflow-auto border bg-light" style={{height: "55%"}}>
          {
          buckets.map((bucket) => {
            if (bucket.userId == currentUser._id)
              return (
                  <div key={bucket._id} className="m-4 text-black font-weight-bold">
                    <div>
                      <h3>Title: {bucket.title}</h3>
                      <p>Tag: {bucket.tag}</p>
                      <p>Age to Show: {bucket.age}</p>
                    </div>
                    <Link
                      to={`/bucket/${bucket._id}`}
                      className="btn btn-primary"
                      // style={{ textDecoration: "none"}}
                    >
                      View Details
                    </Link>
                  </div>
              );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBucketList;
