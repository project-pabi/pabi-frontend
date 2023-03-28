import {Dispatch, SetStateAction, useEffect, useState, useRef, useImperativeHandle, forwardRef} from "react";
import {Coordinate} from "@stores/itemInfoStore";

declare global {
  interface Window {
    kakao: {
      maps: {
        Map: any,
        services: any,
        Marker: any,
        LatLng: any,
        ZoomControl: any,
        addControl: any,
        event: any,
        ControlPosition: any
      }
    };
  }
}

interface Props {
  setAddress: Dispatch<SetStateAction<string>>,
  coordinate?: Coordinate,
  setCoordinate: Dispatch<SetStateAction<Coordinate | undefined>>,
}

const {kakao} = window;

const Map = forwardRef(({setAddress, coordinate, setCoordinate}: Props, ref) => {
  useImperativeHandle(ref, () => ({
    search
  }));


  const [map, setMap] = useState<any>();

  const marker = new kakao.maps.Marker({})
  const geocoder = new kakao.maps.services.Geocoder()
  const ps = new kakao.maps.services.Places()

  function searchAddr(addr: string): Promise<any> {
    return new Promise((resolve, reject) => {
      geocoder.addressSearch(addr, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          resolve(result)
        } else {
          reject(result)
        }
      });
    })
  }

  function searchKeyword(keyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      ps.keywordSearch(keyword, (data: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          resolve(data)
        } else {
          reject(data)
        }
      });
    })
  }

  async function search(addr: string) {
    console.log(addr)
    let result;

    try {
      result = await searchAddr(addr);
    } catch (err) {
      result = await searchKeyword(addr);
    }

    if (result) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      map?.setCenter(coords);
    }
  }

  useEffect(() => {

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    const defaultLocation = new window.kakao.maps.LatLng(
        coordinate?.latitude ?? 37.56681969974239,
        coordinate?.longitude ?? 126.97866357916406
    )

    const map = new kakao.maps.Map(container, {
      center: defaultLocation,
      level: 3
    });

    function success(location: { coords: { latitude: number; longitude: number; }; }) {
      const latitude = location.coords.latitude;   // 위도
      const longitude = location.coords.longitude; // 경도
      map.panTo(new kakao.maps.LatLng(latitude, longitude))
    }

    function fail() {
      map.panTo(defaultLocation)
    }

    function clickEvent(mouseEvent: any) {
      const latLng = mouseEvent.latLng;
      map.setCenter(latLng);
      marker.setPosition(latLng);
      marker.setMap(map);
      setCoordinate({latitude: latLng.getLat(), longitude: latLng.getLng()})
      geocoder.coord2Address(latLng.getLng(), latLng.getLat(), (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address ? result[0].road_address.address_name : '';
          setAddress(detailAddr)
        }
      });
    }

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    kakao.maps.event.addListener(map, 'click', clickEvent);

    if (coordinate) {
      marker.setPosition(defaultLocation);
      marker.setMap(map);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    } else {
      fail()
    }


    setMap(map)

  }, [])

  return (
      <div id="map" className="h-full w-full rounded-2"></div>
  );
});
export default Map;
