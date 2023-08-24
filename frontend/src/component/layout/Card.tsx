// Card.tsx
import React from 'react';

interface CardProps {
  room: {
    id: number;
    room: number;
    status: string;
    type: string;
  };
}

const Card: React.FC<CardProps> = ({ room }) => {

  function clickButton(){
      console.log(room.room);
      console.log(room.status);
      console.log(room.type);
  }


  return (
    <button onClick={()=> clickButton()} className={`
    ${room.status === 'open' ? 'bg-green-400': 'bg-red-400' }
    flex flex-col rounded-2xl items-center justify-center`}>
      <h1>Room : {room.room}</h1>
      <p>Status: {room.status}</p>
      <p>Type: {room.type}</p>
    </button>
  );
};

export default Card;
