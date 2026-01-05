import { Link, Outlet } from 'react-router-dom';
import sampleRooms from '../../data/rooms.json';

export default function RoomsPage() {
  return (
    <div>
      <div>객실 정보</div>

      {/* 객실 리스트 */}
      <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
        {sampleRooms.map((room) => (
          <Link
            key={room.id}
            to={`/rooms/${room.id}`}
            style={{
              display: 'block',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h3>{room.name}</h3>
            <p>{room.thumbnail}</p>
          </Link>
        ))}
      </div>
      {/* 중첩된 라우트가 여기에 렌더링됩니다 */}
      <Outlet />
    </div>
  );
}
