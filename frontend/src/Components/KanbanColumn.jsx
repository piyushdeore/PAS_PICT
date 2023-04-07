import React from 'react'
import KanbanCard from './KanbanCard'
import KanbanIssueHeader from './KanbanIssueHeader'

export default function KanbanColumn(props) {



  return (
    <div style={{ width: '30%', borderRadius: '10px', marginRight: '10px', border: '1px', borderStyle: 'solid', borderColor: 'rgb(200, 200, 200)' }}>
        <KanbanIssueHeader index={props.index} addCard={props.addCard} columnName={props.board.title} numberOfTasks={props.board.cards.length} />
        <style>
            {`
            ::-webkit-scrollbar {
                width: 8px;
            }

            ::-webkit-scrollbar-track {
                background-color: #EBF0FE;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #d9dbe0;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background-color: #b7b9bc;
            }
            `}
        </style>
        <div style={{ maxHeight: '500px', overflowY: 'auto', padding: '5px', display: 'flex', flexDirection: 'column', flex: '1' }}>
            {
            props.board.cards.map((card) => (
                <KanbanCard key={card.id} setBoard={props.setBoard} board={props.board} card={card} boardId={props.board.id} columnColor={props.board.columnColor} handleDragEnter={props.handleDragEnter} handleDragEnd={props.handleDragEnd} />
                // <div>Hi</div>
            ))
            }
        </div>
    </div>
  )
}
