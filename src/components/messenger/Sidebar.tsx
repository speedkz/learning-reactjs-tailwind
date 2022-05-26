import React from "react";
import {
  Home,
  MessageSquare,
  PieChart,
  Search,
  Calendar,
  Icon,
} from "react-feather";
import { NavLink } from "react-router-dom";

const ICON_SIZE = 32;

const links = [
  {
    element: Home,
    to: "/",
  },
  {
    element: MessageSquare,
    to: "/messenger",
  },
  {
    element: PieChart,
    to: "/",
  },
  {
    element: Search,
    to: "/",
  },
  {
    element: Calendar,
    to: "/",
  },
];

const IconItem = ({ icon, className }: { icon: Icon; className: string }) => {
  const props = { size: ICON_SIZE };
  return React.createElement(icon, { ...props, ...{ className } });
};
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-8 p-4 items-center shadow-xl">
      <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-violet-500 text-white font-bold text-3xl">
        Q
      </div>
      {links.map((link, i) => (
        <NavLink key={i} to={link.to}>
          {({ isActive }) => (
            <IconItem
              icon={link.element}
              className={isActive ? "text-violet-500" : ""}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
