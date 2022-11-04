import { Route } from "react-router-dom";
import Write from "@pages/Write/Write";
import Porduct from "@component/NewInformation/InformationProduct";
import Step2 from "@component/NewInformation/InformationCategory";
import Result from "@component/NewInformation/InformationResult";
export default (
  <Route path="write/*" element={<Write />}>
    <Route path="" element={<Porduct />}></Route>
    <Route path="product/*" element={<Porduct />}></Route>
    <Route path="auction/*" element={<Step2 />}></Route>
    <Route path="result" element={<Result />} />
  </Route>
);
