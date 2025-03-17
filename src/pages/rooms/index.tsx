// 임시 데이터
import roomsData from '@/data/rooms.json';
import { useParams } from 'react-router-dom';

export default function Rooms() {
  const { id } = useParams();
  return (
    <div>
      객실 정보
      {roomsData
        .filter((f) => f.id === id)
        .map((d) => {
          return <div key={d.id}>{d.name}</div>;
        })}
    </div>
  );
}
