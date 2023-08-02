import { useLocation } from "wouter";
import { DropdownItem } from "./DropdownItem";

export interface DropdownListProps {
  setMenuOpen: (isMenuOpen: boolean) => void;
}

export const DropdownList = ({ setMenuOpen }: DropdownListProps) => {
  const [_, navigate] = useLocation();

  const navigateTo = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <ul className="fixed right-60 top-16">
      <DropdownItem onClick={() => navigateTo("/records")}>
        自分の記録
      </DropdownItem>
      <DropdownItem>体重グラフ</DropdownItem>
      <DropdownItem>目標</DropdownItem>
      <DropdownItem>選択中のコース</DropdownItem>
      <DropdownItem onClick={() => navigateTo("/columns")}>
        コラム一覧
      </DropdownItem>
      <DropdownItem>設定</DropdownItem>
    </ul>
  );
};
