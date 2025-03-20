import useKakaoMap from '@/hooks/useKakaoMap';

export default function Location() {
  useKakaoMap('map', {
    level: 2,
  });

  return <div id="map" className="w-full h-96"></div>;
}
