import "little-state-machine";
type form = {
  name: string;
  category: string;
};
export default function updateName(state: any, payload: form) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}
