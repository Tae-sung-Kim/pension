import { useEffect } from 'react';

const useKakaoMap = (containerId: string, options: { level: number }) => {
  useEffect(() => {
    const existingScript = document.getElementById('kakao-map-script');

    const initMap = () => {
      const container = document.getElementById(containerId) as HTMLElement;

      // 기본값 설정
      let lat = 37.6849369431445;
      let lng = 127.371090261144;

      // 카카오 지도 API를 사용한 주소 → 좌표 변환 예시
      const geocoder = new window.kakao.maps.services.Geocoder();

      //펜션 주소
      geocoder.addressSearch(
        import.meta.env.VITE_PENSION_ADDRESS,
        (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            lat = Number(result[0].y);
            lng = Number(result[0].x);
          }
        }
      );

      const initOptions = {
        center: new window.kakao.maps.LatLng(lat, lng), // 서울 좌표
        level: options.level,
      };
      const map = new window.kakao.maps.Map(container, initOptions);
      new window.kakao.maps.Marker({ map, position: initOptions.center });
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_MAP_API_KEY
      }&libraries=services,clusterer,drawing&autoload=false`;

      script.onload = () => {
        window.kakao.maps.load(() => {
          initMap();
        });
      };
      document.body.appendChild(script);
    } else {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          initMap();
        });
      }
    }
  }, [containerId, options]);
};

export default useKakaoMap;
