import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { database } from "../../../FireBase/FireBase";

const Postjobs = () => {
  const loggeduser = JSON.parse(localStorage.getItem("loggInRecruiter"));
  const [job, setjob] = useState({ company: "", jd: "", role: "" });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleJobPosting = async () => {
    try {
      const recuiterdocref = doc(database, "recruiters", loggeduser.user.displayName);
      await updateDoc(recuiterdocref, {
        jobs: arrayUnion(job)
      });

      alert("Job posted successfully");
      handleClose();
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Check console for details.");
    }
  };

  return (
    <div className="container mt-3">
      <Button variant="primary" onClick={handleClick}>
        Post Job
      </Button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form>
            <select
              id="role"
              name="role"
              required
              className="form-control mb-3"
              onChange={(e) => setjob({ ...job, role: e.target.value })}
            >
              <option value="">Choose Role</option>
              <option value="FullStuck">FullStuck</option>
              <option value="BackEnd">BackEnd</option>
              <option value="Frontend">Frontend</option>
              <option value="python + sql">python + sql</option>
            </select>

            <input
              type="text"
              name="text"
              required
              placeholder="Enter Company"
              className="form-control mb-3"
              onChange={(e) => setjob({ ...job, company: e.target.value })}
            />

            <textarea
              placeholder="Enter JD"
              required
              className="form-control"
              onChange={(e) => setjob({ ...job, jd: e.target.value })}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleJobPosting}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Postjobs;
