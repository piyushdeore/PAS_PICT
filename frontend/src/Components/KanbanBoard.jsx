import React, { useEffect, useState } from 'react'
import KanbanColumn from './KanbanColumn'
import { v4 as uuidv4 } from 'uuid';



export default function KanbanBoard() {

    const [priority,setPriority] = useState([1,2,3,4,5,6,7]);
    const [open,setOpen] = useState([1,2,3,4,5,6,7]);
    const [closed,setClosed] = useState([1,2,3,4,5,6,7]);

    const [boards,setBoards] = useState([
      {
        id:uuidv4(),
        title:'Open',
        columnColor:"red",
        cards:[
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          
        ]
      },
      {
        id:uuidv4(),
        title:'In-progress',
        columnColor:"blue",
        cards:[
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'priority',
                color:'red',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'medium',
                color:'orange',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          
        ]
      },
      {
        id:uuidv4(),
        title:'Closed',
        columnColor:"green",
        cards:[
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'completed',
                color:'green',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'completed',
                color:'green',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'completed',
                color:'green',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'completed',
                color:'green',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
          {
            id:uuidv4(),
            title:'Test login issue',
            labels:[
              {
                title:'completed',
                color:'green',
              }
            ],
            description:'some long description need to be given to each of the issue'
          },
        ]
      }
    ])

    const [targetCard, setTargetCard] = useState({
      bid: "",
      cid: "",
    });
    
    const addCard = (title,desc,index,callback) => {
      let temp_data = [...boards];
      temp_data[index].cards.push({
        id:uuidv4(),
        title:title,
      })
      // console.log("data",data)
      // setBoards(temp_data[index]);
      setBoards(temp_data)
      // console.log("boards",boards)
    }

    
    useEffect(()=>{

      // console.log(boards)
    },[boards]);

    const handleDragEnter = (bid,cid)=>{
      if (targetCard.cid === cid) return;
        setTargetCard({
          bid,
          cid,
        });
    }

    const handleDragEnd = (bid,cid) =>{
      let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
      s_boardIndex = boards.findIndex((item) => item.id === bid);
      if (s_boardIndex < 0) return;
  
      s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
        (item) => item.id === cid
      );
      if (s_cardIndex < 0) return;
  
      t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
      if (t_boardIndex < 0) return;
  
      t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
        (item) => item.id === targetCard.cid
      );
      if (t_cardIndex < 0) return;
  
      const tempBoards = [...boards];
      const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
      if(t_boardIndex==2){
        sourceCard.labels = [
          {
            title:'completed',
            color:'green',
          }
        ]
      }
      tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
      tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
      setBoards(tempBoards);
  
      setTargetCard({
        bid: "",
        cid: "",
      });
    }

    return (
      <div style={{width:'100%',height:'100%',padding:'20px',display:'flex',flexWrap:'wrap'}}>

      {
        boards.map((board,index)=>(
          <KanbanColumn key={board.id} setBoards={setBoards} index={index} board={board} handleDragEnter={handleDragEnter} handleDragEnd={handleDragEnd} addCard={addCard} />
        ))
      }

      </div>

    )
}

// import React from 'react'

// export default function KanbanBoard() {
//   return (
//     <div>KanbanBoard</div>
//   )
// }

