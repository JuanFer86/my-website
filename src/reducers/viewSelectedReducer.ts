export type StateViewSelected = { view: number; direction: string };

export type ActionViewSelected =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set_view"; payload: number }
  | { type: "reset" };

export const initialState: StateViewSelected = { view: 0, direction: "bottom" };

export function reducer(
  state: StateViewSelected,
  action: ActionViewSelected
): StateViewSelected {
  switch (action.type) {
    case "increment":
      return { view: state.view + 1, direction: "bottom" };
    case "decrement":
      return { view: state.view - 1, direction: "top" };
    case "set_view":
      return {
        view: action.payload,
        direction: action.payload < state.view ? "bottom" : "top",
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
