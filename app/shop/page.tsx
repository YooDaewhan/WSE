import Header from "../components/Header";
import Footer from "../components/Footer";
import EquinoxShop from "./EquinoxShop";
import "./shop.css";
export const metadata = { title: "SHOP — 이퀴녹스 금속 배지", description: "좋아하는 세계를, 나의 일상에. 이퀴녹스 금속 배지 컬렉션 4종을 만나보세요." };
export default function ShopPage() { return <div className="wse-site eqs-shop"><Header /><EquinoxShop /><Footer /></div>; }
