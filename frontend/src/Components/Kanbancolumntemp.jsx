import React, { useState } from 'react';
import TaskCard from './TaskCard';


const KanbanColumn = ({ title, tasks }) => {
    return (
      <div className="kanban-column">
        <h2>{title}</h2>
        {tasks.map((task, index) => (
          <TaskCard key={index} title={task.title} description={task.description} />
        ))}
      </div>
    );
  };
  
  export default KanbanColumn;
  