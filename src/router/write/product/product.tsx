import { Route } from "react-router-dom";
import Write from "@pages/Write/Write";
import Step1 from "@component/NewInformation/InformationName";
import Step2 from "@component/NewInformation/InformationCategory";
import Result from "@component/NewInformation/InformationResult";
export default (
  <Route path="product/*" element={<Step1 />}>
    <Route path="name" element={<Step1 />}></Route>
    <Route path="category" element={<Step2 />}></Route>
  </Route>
);
