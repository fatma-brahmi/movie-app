import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function AddModal(props) {
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(1)
  const [add, setAdd] = useState({
    Title: "",
    Year: "",
    Poster: "",
    rating:0
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const ratingChanged = (newRating) => {
    setAdd({...add ,rating :  newRating})
  };
  
  
  

  

  return (
    <div>
      <div className="add">
        
        <Button className="add" variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
      </div>

      <Modal centered={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label>Title:</label>
              <input type="text" onChange={handleChange} name="Title" />
            </div>
            <div>
              <label>Image:</label>
              <input type="text" onChange={handleChange} name="Poster" />
            </div>

            <div>
              <label>Year:</label>
              <input type="text" onChange={handleChange} name="Year" />
            </div>
          </div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              props.addMovie(add);
              handleClose();
            }}
            variant="primary"
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
