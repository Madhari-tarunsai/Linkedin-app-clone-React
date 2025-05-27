import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../../FireBase/FireBase';

const Myposting = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const loggeduser = JSON.parse(localStorage.getItem("loggInRecruiter"));
  const loggedUserName=loggeduser.user.displayName

  useEffect(() => {
    const getchingData = async () => {
      const docref = doc(database, "recruiters", loggedUserName);
      const getDocRef = await getDoc(docref);

      if (getDocRef.exists()) {
        const data = getDocRef.data();
        setMyJobs(data.jobs || []);
        setloading(false);
      }
    };

    getchingData();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  const handlerDelete=async(choosedJobIndex)=>{
    let jobFilter=myJobs.filter((job,index)=>index!=choosedJobIndex)
    console.log(jobFilter)
    // alert(`job delete sucessfully ${loggedUserName}`)
    // setMyJobs(jobFilter)
    const docref=doc(database,"recruiters",loggedUserName)
    await updateDoc(docref,{
      jobs:jobFilter
    })
    alert(`job delete sucessfully ${loggedUserName}`)
    setMyJobs(jobFilter)
    
  }

  return (
    <>
      <style>{`
        .job-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          justify-items: start; /* align cards to the left */
        }

        .job-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fff;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          width: 100%;
        }

        .job-card:hover {
          transform: scale(1.03);
        }

        .job-title {
          font-size: 1.2rem;
          color: #333;
        }

        .job-role {
          color: #007bff;
          font-weight: bold;
          margin: 8px 0;
        }

        .job-desc {
          font-size: 0.95rem;
          color: #666;
        }

        .loading {
          text-align: center;
          margin-top: 50px;
          font-size: 18px;
        }

        @media (max-width: 992px) {
          .job-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .job-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>

      <div className="job-container">
        {myJobs.length > 0 ? (
          myJobs.map((myJob, jobIndex) => (
            <div className="job-card" key={jobIndex}>
              <h3 className="job-title">{myJob.company}</h3>
              <p className="job-role">{myJob.role}</p>
              <p className="job-desc">{myJob.jd}</p>
              <div style={{display:'flex',gap:'30px'}}>
                <span style={{border:"2px solid black",padding:'5',borderRadius:'4px', backgroundColor:'wheat'}}>Edit</span>
                <span style={{border:"2px solid black",padding:'5',borderRadius:'4px', backgroundColor:'red',color:'white'}} onClick={()=>handlerDelete(jobIndex)}>Delete</span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: "center" }}>No jobs posted yet.</p>
        )}
      </div>
    </>
  );
};

export default Myposting;
