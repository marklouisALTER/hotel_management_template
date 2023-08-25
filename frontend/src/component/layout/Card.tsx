import React, {useState} from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  room: {
    id: number;
    room: number;
    status: string;
    type: string;
  };
}

const Card: React.FC<CardProps> = ({ room }) => {
  const navigate = useNavigate();
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  function clickButton() {
    navigate(`/guess-information/${room.id}`);
  }
  function hoverHandler(){
    setMouseEnter(true);
  }

  function mouseLeave(){
    setMouseEnter(false);
  }

  return (
    <button
      onClick={() => clickButton()}
      onMouseEnter={hoverHandler}
      onMouseLeave={mouseLeave}
      className={`${
        room.status === 'open' ? 'bg-green-600 hover:bg-green-800' : room.status === 'occupied' ? 'bg-red-600 hover:bg-red-800'
        : room.status === 'not ready' ? 'bg-orange-500 hover:bg-orange-800' : 'Error'
      } flex flex-col h-[7rem] rounded-2xl items-center justify-center shadow-md hover:shadow-gray-500 transition-all delay-50 ease-in-out`}
    >
      <div className='flex flex-col'>
      <div className='flex flex-cols items-center gap-2'>
        <AiTwotoneHome className='text-3xl text-white' />
        <div>
          <h1 className='font-bold text-white'>Room</h1>
          <p className='text-primary text-white'># {room.room}</p>
        </div>
      </div>
      
      {mouseEnter && <p className='text-white'>{`${room.status}`}</p>}
      </div>
      
    </button>
  );
};

export default Card;
