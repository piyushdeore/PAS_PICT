import React, { useState } from 'react';

const initialColumns = [
  {
    id: 'column-1',
    title: 'To Do',
    cards: [
      { id: 'card-1', title: 'Task 1' },
      { id: 'card-2', title: 'Task 2' },
      { id: 'card-3', title: 'Task 3' },
    ],
  },
  {
    id: 'column-2',
    title: 'In Progress',
    cards: [],
  },
  {
    id: 'column-3',
    title: 'Done',
    cards: [],
  },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [draggingCard, setDraggingCard] = useState(null);

  const handleDragStart = (e, card) => {
    setDraggingCard(card);
  };

  const handleDragEnter = (e, column) => {
    e.preventDefault();
    const updatedColumns = [...columns];
    const targetColumnIndex = updatedColumns.findIndex((c) => c.id === column.id);
    const targetColumn = updatedColumns[targetColumnIndex];
    targetColumn.cards.push(draggingCard);
    const sourceColumnIndex = updatedColumns.findIndex((c) => c.cards.includes(draggingCard));
    const sourceColumn = updatedColumns[sourceColumnIndex];
    sourceColumn.cards = sourceColumn.cards.filter((c) => c.id !== draggingCard.id);
    setColumns(updatedColumns);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex' }}>
      {columns.map((column) => (
        <div
          key={column.id}
          style={{
            flex: 1,
            margin: '8px',
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: '#f8f8f8',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onDragEnter={(e) => handleDragEnter(e, column)}
          onDragOver={handleDragOver}
        >
          <h3>{column.title}</h3>
          {column.cards.map((card) => (
            <div
              key={card.id}
              style={{
                padding: '8px',
                margin: '8px 0',
                borderRadius: '4px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
              draggable
              onDragStart={(e) => handleDragStart(e, card)}
            >
              {card.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
