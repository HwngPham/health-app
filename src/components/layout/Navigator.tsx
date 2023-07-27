import { useState } from "react";
import { IconChallenge } from "../icons/IconChallenge";
import { IconInfo } from "../icons/IconInfo";
import { IconLogo } from "../icons/IconLogo";
import { IconMemo } from "../icons/IconMemo";
import { IconMenu } from "../icons/IconMenu";
import { MenuItem } from "./MenuItem";
import { IconClose } from "../icons/IconClose";
import { DropdownList } from "../dropdown/DropdownList";

export const Navigator = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navigator h-16 bg-dark-500 fixed w-full top-0">
      <div className="navigator-container px-60 flex h-full items-center justify-between">
        <div className="logo h-10 pt-1">
          <IconLogo />
        </div>
        <ul className="nav-items flex gap-6">
          <MenuItem label="自分の記録">
            <IconMemo />
          </MenuItem>
          <MenuItem label="チャレンジ">
            <IconChallenge />
          </MenuItem>
          <MenuItem label="お知らせ">
            <IconInfo />
          </MenuItem>
          <MenuItem>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </MenuItem>
        </ul>

        {isMenuOpen && <DropdownList />}
      </div>
    </nav>
  );
};
