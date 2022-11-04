import { Outlet } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  data: {
    name: "",
    category: "",
  },
});

const Information = () => (
  <StateMachineProvider>
    <Outlet />
  </StateMachineProvider>
);

export default Information;
