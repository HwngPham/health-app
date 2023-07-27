import { DropdownItem } from "./DropdownItem";

export const DropdownList = () => (
  <ul className="fixed right-60 top-16">
    <DropdownItem>自分の記録</DropdownItem>
    <DropdownItem>体重グラフ</DropdownItem>
    <DropdownItem>目標</DropdownItem>
    <DropdownItem>選択中のコース</DropdownItem>
    <DropdownItem>コラム一覧</DropdownItem>
    <DropdownItem>設定</DropdownItem>
  </ul>
);
