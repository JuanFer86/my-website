import { fireEvent, render, screen } from "@testing-library/react";
import PersonIcon from "../../../assets/icon-components/person.icon";
import SkillIcon from "../../../assets/icon-components/skill.icon";
import WorkHistoryIcon from "../../../assets/icon-components/work-history.icon";
import NavBar from "../../../components/navbar/NavBar";
import { Context } from "../../../context";
import type { mockType } from "../content/Content.test";

describe("<NavBar />", () => {
  const props = {
    items: [
      {
        title: "Profile",

        icon: <PersonIcon color="#142f55" />,
      },
      {
        title: "Experience",

        icon: <WorkHistoryIcon color="#142f55" />,
      },
      {
        title: "Skills",

        icon: <SkillIcon color="#142f55" />,
      },
    ],
  };

  const mockDispatch = jest.fn();

  const mockContext = {
    viewSelected: { view: 0, direction: "bottom" },
    dispatchtViewSelected: mockDispatch,
    hasManyViews: 3,
  };

  const component = (mockContextValue: mockType = mockContext) =>
    render(
      <Context.Provider value={mockContextValue}>
        <NavBar {...props} />
      </Context.Provider>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    component().getByRole("list");
    component().getAllByRole("listitem");
    component().getAllByRole("navigation");
  });

  test("should changle toggle menu icon", () => {
    const toggleDiv = component().container.querySelector("li > div");

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    fireEvent.click(toggleDiv as Element);

    expect(toggleDiv?.innerHTML).toMatch("svg");
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  test("should change view to click a title view", async () => {
    const container = component().container;
    const toggleDiv = container.querySelector("li > div");

    fireEvent.click(toggleDiv as Element);

    const listItems = container.querySelectorAll("li");

    fireEvent.click(listItems[2] as Element);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "set_view",
      payload: 1,
    });
  });
});
