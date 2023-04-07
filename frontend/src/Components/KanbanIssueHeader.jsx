import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function KanbanIssueHeader(props) {

  const [data,setData] = useState({})
  const [modal,setModal] = useState(false)
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')


  const handleSubmit = (event)=>{
    event.preventDefault();
    if(title.length>0 && desc.length>0){
      props.addCard(title, desc, props.index, () => {
        setModal(false);
      });
    }
    setModal(false)
  }
  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between',padding:'0px 10px',borderBottom:'1px',borderBottomStyle:'solid',borderBottomColor:'rgb(183, 183, 183)'}}>
        <div style={{width:'50%',display:'flex',alignItems:'center'}}>
            <span style={{fontWeight:'bold'}} > &gt; </span>
            <span>{props.columnName}</span>
        </div>
        <div style={{width:'20%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            {props.numberOfTasks}
          </div>
          <div>
            <IconButton onClick={()=> setModal(true)} >
              <AddBoxIcon style={{color:'gray'}}/>
            </IconButton>
          </div>
        </div>
        <Modal show={modal} fullscreen={false} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add the card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form style={{ padding: "20px", width: "100%" }}>
              <Form.Group
                onChange={(event) => {
                  setTitle(event.target.value)
                }}
                className="mb-3"
                style={{}}
                controlId="ControlTitle"
              >
                <Form.Label>
                  Title<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="Title"
                  type="text"
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="ControlDescription"
              >
                <Form.Label>
                  Description<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <textarea
                  onChange={(event)=>{
                    setDesc(event.target.value)
                  }}
                  className="form-control"
                  rows={5}
                  placeholder="Description"
                />
              </Form.Group>
              <Button onClick={handleSubmit} type="submit">
                Add Card
              </Button>
            </Form>

            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}
