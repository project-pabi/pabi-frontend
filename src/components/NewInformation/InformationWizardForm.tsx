/* eslint-disable no-fallthrough*/
import { useEffect } from 'react';

import { useMatch, useNavigate, Outlet } from 'react-router-dom';

import { useItemInfoStore } from '@stores/itemInfoStore';

const Information = () => {
  const navigate = useNavigate();

  const itemInfoStore = useItemInfoStore((state) => state);
  const {
    setPhoto,
    isNameComplete,
    isCategoryComplete,
    isStateComplete,
    isPhotoComplete,
    isExplainComplete,
    isTypeComplete,
    isPriceComplete,
    isTradeTypeComplete,
  } = itemInfoStore;

  const tab1By1Match = useMatch('/write/product/name') != null;
  const tab1By2Match = useMatch('/write/product/category') != null;
  const tab1By3Match = useMatch('/write/product/state') != null;
  const tab1By4Match = useMatch('/write/product/photo') != null;
  const tab1By5Match = useMatch('/write/product/explain') != null;
  const tab2By1Match = useMatch('/write/auction/type') != null;
  const tab2By2Match = useMatch('/write/auction/price') != null;
  const tab2By3Match = useMatch('/write/auction/trade-type') != null;

  useEffect(() => {
    setPhoto(null)
    switch (true) {
      case tab2By3Match:
        if (isTradeTypeComplete()) {
          navigate('/write/auction/trade-type');
          break;
        }
      case tab2By2Match:
        if (isPriceComplete()) {
          navigate('/write/auction/trade-type');
          break;
        }
      case tab2By1Match:
        if (isTypeComplete()) {
          navigate('/write/auction/price');
          break;
        }
      case tab1By5Match:
        if (isExplainComplete()) {
          navigate('/write/auction/type');
          break;
        }
      case tab1By4Match:
        if (isPhotoComplete()) {
          navigate('/write/product/explain');
          break;
        }
      case tab1By3Match:
        if (isStateComplete()) {
          navigate('/write/product/photo');
          break;
        }
      case tab1By2Match:
        if (isCategoryComplete()) {
          navigate('/write/product/state');
          break;
        }
      case tab1By1Match:
        if (isNameComplete()) {
          navigate('/write/product/category');
          break;
        }
      default:
        navigate('/write/product/name');
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Information;
