import React from "react";
import { navSections } from "../../utils/constants";

const Nav = ({ user }) => {
  return (
    <nav className="flex flex-col justify-between items-end px-2 py-4">
      <div>
        <img src="x.png" alt="" />

        {navSections.map((item, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
          >
            {item.icon}
            <span className="whitespace-nowrap max-md:hidden">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div>
        {user === undefined ? (
          <p>loader</p>
        ) : (
          <div>
            <div></div>

            <button className="bg-zinc-700">Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
