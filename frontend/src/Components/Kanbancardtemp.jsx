import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export default function Kanbancardtemp({item,index,columnColor}) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          className='card' style={{ width: '100%', borderRadius: '5px',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px', border: '1px', borderStyle: 'solid', borderColor: 'rgb(200, 200, 200)', marginBottom: '5px', flexShrink: 0, height: '120px',backgroundColor:'#f1f3fd',display:'flex' }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            <div style={{height:'100%',width:'5%',backgroundColor:`${columnColor}`,borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}}>

            </div>
        </div>
      )}
    </Draggable>
  )
}
