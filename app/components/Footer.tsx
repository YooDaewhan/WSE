import Link from "next/link";
export default function Footer() {
  return (
    <footer className="wse-footer">
      <Link href="/" className="wordmark">
        wse<span>✳</span>
      </Link>
      <p>
        우리의 저녁은, 이제 시작.
        <br />
        <small>WE START EVENING</small>
      </p>
      <div>
        <Link href="/services">CAST ↗</Link>
        <Link href="/news">NEWS ↗</Link>
        <Link href="/shop">SHOP ↗</Link>
        <Link href="/contact">CONNECT ↗</Link>
        <small>© {new Date().getFullYear()} WSE</small>
      </div>
    </footer>
  );
}
