import { useEffect } from 'react';

import { useMatch, useNavigate, Outlet } from 'react-router-dom';

import { useItemInfoStore } from '@stores/itemInfoStore';

const Information = () => {
  const navigate = useNavigate();

  const itemInfoStore = useItemInfoStore((state) => state);
  const {
    isNameComplite,
    isCategoryComplite,
    isStateComplite,
    isPhotoComplite,
    isExplanComplite,
    isTypeComplite,
    isPriceComplite,
    isTradeTypeComplite,
  } = itemInfoStore;

  const tab1By1Match = useMatch('/write/product/name') != null;
  const tab1By2Match = useMatch('/write/product/category') != null;
  const tab1By3Match = useMatch('/write/product/state') != null;
  const tab1By4Match = useMatch('/write/product/photo') != null;
  const tab1By5Match = useMatch('/write/product/explan') != null;
  const tab2By1Match = useMatch('/write/auction/type') != null;
  const tab2By2Match = useMatch('/write/auction/price') != null;
  const tab2By3Match = useMatch('/write/auction/trade-type') != null;

  useEffect(() => {
    switch (true) {
      case tab2By3Match:
        if (isTradeTypeComplite()) {
          navigate('/write/auction/trade-type');
          break;
        }
      case tab2By2Match:
        if (isPriceComplite()) {
          navigate('/write/auction/price');
          break;
        }
      case tab2By1Match:
        if (isTypeComplite()) {
          navigate('/write/auction/type');
          break;
        }
      case tab1By5Match:
        if (isExplanComplite()) {
          navigate('/write/product/explan');
          break;
        }
      case tab1By4Match:
        if (isPhotoComplite()) {
          navigate('/write/product/photo');
          break;
        }
      case tab1By3Match:
        if (isStateComplite()) {
          navigate('/write/product/state');
          break;
        }
      case tab1By2Match:
        if (isCategoryComplite()) {
          navigate('/write/product/category');
          break;
        }
      case tab1By1Match:
        if (isNameComplite()) {
          navigate('/write/product/name');
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
