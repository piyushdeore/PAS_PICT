import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../../utils/events";
import { formatDate } from '@fullcalendar/core'
import "./Calendar.css";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';


export default class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
    showModal: false,
    modalTitle: ''
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };
  
  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="demo-app">
        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={this.state.modalTitle}
                onChange={(e) => this.setState({ modalTitle: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleModalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <div style={{marginTop:'20px',padding:'20px'}} className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>

      </div>
    );
  }

  // MyModal(props) {
  //   return (
  //     <Modal show={props.show} fullscreen={false} onHide={() => props.handleHide()}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Add the card</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <div>
  //         <Form style={{ padding: "20px", width: "100%" }}>
  //           <Form.Group
  //             className="mb-3"
  //             style={{}}
  //             controlId="ControlTitle"
  //           >
  //             <Form.Label>
  //               Title<span style={{ color: "red" }}>*</span>
  //             </Form.Label>
  //             <Form.Control
  //               name="Title"
  //               type="text"
  //               placeholder="Title"
  //             />
  //           </Form.Group>
  //           <Form.Group
  //             className="mb-3"
  //             controlId="ControlDescription"
  //           >
  //             <Form.Label>
  //               Description<span style={{ color: "red" }}>*</span>
  //             </Form.Label>
  //             <textarea
  //               className="form-control"
  //               rows={5}
  //               placeholder="Description"
  //             />
  //           </Form.Group>
  //           <Button  type="submit">
  //             Add Card
  //           </Button>
  //         </Form>
  //         </div>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className="demo-app-sidebar-section">
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }

  

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    });
  };

  handleDateSelect = (selectInfo) => {
    
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    this.setState({ modalTitle: '', showModal: true, selectInfo });
  };

  handleEventClick = (clickInfo) => {
    console.log('confirm')
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}


function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
