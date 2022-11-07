import { Route, Navigate } from 'react-router-dom';
import Write from '@pages/Write/Write';
import Porduct from '@component/NewInformation/InformationProduct';
import Name from '@component/NewInformation/InformationName';
import Category from '@component/NewInformation/InformationCategory';
import Result from '@component/NewInformation/InformationResult';
export default (
  <Route path="write/*" element={<Write />}>
    <Route path="product/*" element={<Porduct />}>
      <Route path="name" element={<Name />}></Route>
      <Route path="category" element={<Category />}></Route>
      <Route path="*" element={<Navigate to="./name"></Navigate>}></Route>
    </Route>
    <Route path="auction/*" element={<Category />}>
      <Route path="*" element={<Navigate to="./name"></Navigate>}></Route>
    </Route>
    <Route path="result" element={<Result />} />
    <Route path="*" element={<Navigate to="./product/name"></Navigate>}></Route>
  </Route>
);
