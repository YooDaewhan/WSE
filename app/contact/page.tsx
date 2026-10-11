"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="section-shell brand-page">
        <span className="eyebrow">CONTACT / START A CONVERSATION</span>
        <h1 className="brand-title">
          LET'S MAKE
          <br />
          <em>AN EVENING.</em>
        </h1>
        <div className="contact-grid">
          <div>
            <h2 className="text-3xl font-semibold mb-6">다음 이야기를 함께.</h2>
            <p>
              콘텐츠 협업, 브랜드 프로젝트, 캐스트 관련 제안.
              <br />
              WSE와 함께 만들고 싶은 이야기를 정리해 주세요.
            </p>
            <p className="contact-note mt-8">
              공식 문의 채널은 준비 중입니다. 아래 양식은 문의 초안을 기기에
              저장하며, WSE에 전송되지는 않습니다.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const text = `WSE 문의 초안\n\n유형: ${d.get("type")}\n이름 / 회사: ${d.get("name")}\n회신 이메일: ${d.get("email")}\n\n${d.get("message")}`;
              const url = URL.createObjectURL(
                new Blob([text], { type: "text/plain;charset=utf-8" }),
              );
              const a = document.createElement("a");
              a.href = url;
              a.download = "WSE-inquiry.txt";
              a.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
              setSaved(true);
            }}
          >
            <label>
              문의 유형
              <select name="type">
                <option>콘텐츠 / 브랜드 협업</option>
                <option>캐스트 관련 문의</option>
                <option>기타 제안</option>
              </select>
            </label>
            <label>
              이름 / 회사
              <input
                name="name"
                required
                autoComplete="organization"
                maxLength={120}
              />
            </label>
            <label>
              회신 이메일
              <input name="email" required type="email" autoComplete="email" />
            </label>
            <label>
              함께 만들고 싶은 이야기
              <textarea name="message" required maxLength={10000} />
            </label>
            <button className="pill-button" type="submit">
              문의 초안 저장<span>↓</span>
            </button>
            {saved && (
              <p role="status" className="form-status">
                문의 초안 다운로드를 시작했습니다. 실제 문의는 아직 전송되지
                않았습니다.
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
