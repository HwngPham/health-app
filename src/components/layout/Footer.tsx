import { FooterItem } from "./FooterItem";

export const Footer = () => (
  <footer className="w-full h-32 fixed bottom-0 bg-dark-500">
    <ul className="h-full flex px-60 justify-between items-center">
      <FooterItem>会員登録</FooterItem>
      <FooterItem>運営会社</FooterItem>
      <FooterItem>利用規約</FooterItem>
      <FooterItem>個人情報の取扱について</FooterItem>
      <FooterItem>特定商取引法に基づく表記</FooterItem>
    </ul>
  </footer>
);
