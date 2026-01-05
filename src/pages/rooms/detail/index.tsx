import { useParams } from 'react-router-dom';
export default function RoomsDetailPage() {
  const { id } = useParams();
  console.log(id);
  return <div>객실 상세 - ID: {id}</div>;
}
