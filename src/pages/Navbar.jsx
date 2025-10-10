import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isHeroesOpen, setIsHeroesOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Legacy", to: "/legacy" },
    { name: "Battle Arena", to: "/battle" },
    {
      name: "Heroes",
      submenu: [
        {
          name: "Heroes I",
          to: "https://mightandmagic.fandom.com/wiki/Heroes_of_Might_and_Magic",
        },
        {
          name: "Heroes II",
          to: "https://mightandmagic.fandom.com/wiki/Heroes_of_Might_and_Magic_II:_The_Succession_Wars",
        },
        {
          name: "Heroes III",
          to: "https://mightandmagic.fandom.com/wiki/Heroes_of_Might_and_Magic_III:_The_Restoration_of_Erathia",
        },
        {
          name: "Heroes IV",
          to: "https://mightandmagic.fandom.com/wiki/Heroes_of_Might_and_Magic_IV",
        },
        {
          name: "Heroes V",
          to: "https://mightandmagic.fandom.com/wiki/Heroes_of_Might_and_Magic_V",
        },
        {
          name: "Heroes VI",
          to: "https://mightandmagic.fandom.com/wiki/Might_%26_Magic:_Heroes_VI",
        },
        {
          name: "Heroes VII",
          to: "https://mightandmagic.fandom.com/wiki/Might_%26_Magic:_Heroes_VII",
        },
      ],
    },
    {
      name: "Era of Chaos",
      to: "https://eraofchaos.fandom.com/wiki/Era_Of_Chaos_Wiki",
      external: true,
    },
    {
      name: "List of M&M games",
      to: "https://mightandmagic.fandom.com/wiki/List_of_Might_and_Magic_games",
      external: true,
    },
    {
      name: "About Me",
      to: "/author",
    },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 text-black font-bold shadow-lg border-b-4 border-yellow-500 relative">
      <ul className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 py-4">
        {links.map((link) => (
          <li key={link.name} className="relative group">
            {link.submenu ? (
              <div
                onMouseEnter={() => setIsHeroesOpen(true)}
                onMouseLeave={() => setIsHeroesOpen(false)}
                className="relative"
              >
                <button className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 inline-block">
                  {link.name} ▾
                </button>
                {isHeroesOpen && (
                  <ul className="absolute left-0 w-48 bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg z-10">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <a
                          href={sublink.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-yellow-300 transition-all duration-200"
                        >
                          {sublink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : link.external ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 inline-block"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 inline-block ${
                    isActive
                      ? "bg-yellow-300 text-black border-2 border-yellow-400 shadow-inner"
                      : "hover:bg-yellow-500 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
