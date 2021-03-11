import Hamburger from "./WidgetComponents/Menus/HamburgerMenu/Hamburger";

const widgets = [
  {
    title: "Hamburger Menu",
    id: "widget-menu-01",
    element: <Hamburger />,
    description: `A simple, "handcrafted" hamburger menu. 2 states, no frills.`,
    hideOverflowX: true,
  },
  {
    title: "Menu 2",
    id: "widget-menu-02",
    element: <div>Test test test Menu 2</div>,
    description: "This is our second test element",
  },
  {
    title: "Menu 3",
    id: "widget-menu-03",
    element: <div>Test test test Menu 3</div>,
    description: "This is our third test element",
  },
];

export default widgets;
