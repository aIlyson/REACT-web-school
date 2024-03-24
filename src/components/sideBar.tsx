import React from "react";

interface SidebarProps {
  items: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside className="bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-4 bg-gray-900">
        <h2 className="text-xl font-bold">Sistema</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="my-2">
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-left py-2 px-4 rounded">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
