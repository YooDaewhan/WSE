import Header from "../components/Header";
import Footer from "../components/Footer";
import EquinoxShop from "./EquinoxShop";
import "./shop.css";
export const metadata = { title: "SHOP — WSE 금속 배지", description: "좋아하는 세계를, 나의 일상에. 새벽조 · 이퀴녹스 · 스타터팩 · 레스큐팩 · 스팀팩 금속 배지 컬렉션을 만나보세요." };
export default function ShopPage() { return <div className="wse-site eqs-shop"><Header /><EquinoxShop /><Footer /></div>; }
