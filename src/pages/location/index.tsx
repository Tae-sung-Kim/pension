import useKakaoMap from '@/hooks/useKakaoMap';

export default function Location() {
  useKakaoMap('map', {
    level: 2,
  });

  return <div id="map" className="w-full h-96"></div>;
}

// 기상청 API로 실시간 날씨 정보
// 한국관광공사 API로 주변 관광지 정보
// 카카오/네이버 지도 API로 위치 및 길찾기 정보
// ai를 활용해서 뭔가 할 수 있는게 있을까
