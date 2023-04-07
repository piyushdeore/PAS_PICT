import React from 'react';

import { motion } from 'framer-motion';

const TaskCard = ({ title, description }) => {
  return (
    <motion.div
      className="task-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="task-card-header">
        <h3>{title}</h3>
      </div>
      <div className="task-card-body">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default TaskCard;


// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
