import { Route, Navigate } from 'react-router-dom';
import Write from '@pages/Write/Write';
import {
  Porduct,
  Name,
  Category,
  State,
  Photo,
  Explain,
  Result,
  Auction,
  AuctionType,
  Price,
  TradeType,
} from '@component/NewInformation';
export default (
  <Route path="write/*" element={<Write />}>
    <Route path="product/*" element={<Porduct />}>
      <Route path="name" element={<Name />}></Route>
      <Route path="category" element={<Category />}></Route>
      <Route path="state" element={<State />}></Route>
      <Route path="photo" element={<Photo />}></Route>
      <Route path="explain" element={<Explain />}></Route>
      <Route path="*" element={<Navigate to="./name"></Navigate>}></Route>
    </Route>
    <Route path="auction/*" element={<Auction />}>
      <Route path="type" element={<AuctionType />}></Route>
      <Route path="price" element={<Price />}></Route>
      <Route path="trade-type" element={<TradeType />}></Route>
      <Route path="*" element={<Navigate to="../product/name"></Navigate>}></Route>
    </Route>
    <Route path="result" element={<Result />} />
    <Route path="*" element={<Navigate to="./product/name"></Navigate>}></Route>
  </Route>
);
