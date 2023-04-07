import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";


export default function KanbanCard(props) {

  const [modal,setModal] = useState(false)


  return (
    <div
      draggable
      onDragEnd={()=> props.handleDragEnd(props.boardId,props.card.id)}
      onDragEnter={()=> props.handleDragEnter(props.boardId,props.card.id)}
      className='card' style={{ width: '100%', borderRadius: '5px',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px', border: '1px', borderStyle: 'solid', borderColor: 'rgb(200, 200, 200)', marginBottom: '5px', flexShrink: 0,backgroundColor:'#f1f3fd',display:'flex',flexDirection:'row',overflowX:'hidden',overflowY:'hidden' }}
      onClick={(Event)=> setModal(true)}
      >
        <div style={{width:'5%',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',backgroundColor:`${props.columnColor}`}}></div>
        <div style={{width:'95%',padding:'10px',display:'flex',flexDirection:'column'}}>
          <p><b>{props.card.title}</b></p>
          <div style={{display:'flex',marginBottom:'10px'}}>
          {
            props.card.labels.map((label,index)=>(
              <div key={index} style={{marginRight:'5divx',borderRadius:'20px',backgroundColor:`${label.color}`,padding:'0px 5px',color:'white',fontSize:'13px'}}>
                {label.title}
              </div>
            ))
          }
          </div>
          <span style={{whiteSpace:'nowrap',overflow:'hidden'}}>{props.card.description}</span>
        </div>
        <Modal show={modal} fullscreen={false} onHide={() => {
          setTimeout(() => setModal(false), 0);
        }} >
          <Modal.Header closeButton>
            <Modal.Title>Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form style={{ padding: "20px", width: "100%" }}>
              <Form.Group
                
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
                  placeholder={props.card.title}
                  disabled
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
                  className="form-control"
                  rows={5}
                  placeholder={props.card.description}
                  disabled
                />
              </Form.Group>
            </Form>

            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}
