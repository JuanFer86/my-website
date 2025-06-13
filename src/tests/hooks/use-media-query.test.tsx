import useMediaQuery from "../../hooks/use-media-query";
import { render } from "@testing-library/react";

const TestComponent = () => {
  const isMobile = useMediaQuery("(max-width: 430px)");
  return <p>{isMobile ? "Mobile" : "Desktop"}</p>;
};

const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
};

describe("hook: useMediaQuery", () => {
  // mock to match media

  test("should return true if the max dimension achieve", () => {
    mockMatchMedia(true);
    const component = render(<TestComponent />);
    component.getByText("Mobile");
  });

  test("should return false if the max dimension is not achieve", () => {
    mockMatchMedia(false);
    const component = render(<TestComponent />);
    component.getByText("Desktop");
  });
});
