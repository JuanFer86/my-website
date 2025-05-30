import { useMemo, useReducer } from "react";
import "./App.css";
import Content from "./components/content/Content";
import NavBar from "./components/navbar/NavBar";
import { Context } from "./context";
import { views } from "./constants/views";
import { initialState, reducer } from "./reducers/viewSelectedReducer";

function App() {
  const [viewSelected, dispatchtViewSelected] = useReducer(
    reducer,
    initialState
  );
  // const [viewSelected, setViewSelected] = useState(0);

  const ComponentSelected = useMemo(
    () => views[viewSelected.view].component,
    [viewSelected]
  );

  const titles = views.flatMap((view) => (view.title ? [view.title] : []));

  return (
    <Context.Provider
      value={{
        viewSelected,
        dispatchtViewSelected,
        hasManyViews: views.length,
      }}
    >
      <div className="container">
        <section>
          <Content>{ComponentSelected}</Content>
        </section>
        <NavBar items={titles} />
      </div>
    </Context.Provider>
  );
}

export default App;
