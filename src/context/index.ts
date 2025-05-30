import { createContext, type Dispatch } from "react";
import type {
  ActionViewSelected,
  StateViewSelected,
} from "../reducers/viewSelectedReducer";

export type ContextType = {
  viewSelected: StateViewSelected;
  dispatchtViewSelected: Dispatch<ActionViewSelected>;
  hasManyViews: number;
};

// Creamos el contexto
export const Context = createContext<ContextType>({} as ContextType);
