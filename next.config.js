/** @type {import('next').NextConfig} */
const nextConfig = {
  // 서버(/srv/wse)에는 .next/standalone만 올려서 node server.js로 실행
  output: "standalone",
  // 같은 와이파이의 폰으로 dev 서버(172.30.1.x)에 붙을 때 JS가 막히지 않게
  allowedDevOrigins: ["172.30.1.*"],
  turbopack: {
    root: __dirname,
  },
  /* 캐릭터 서술 텍스트(content.html)는 빌드 시 읽습니다.
     현재 모든 캐릭터 페이지가 정적 프리렌더되지만,
     혹시 동적으로 바뀌어도 파일이 함께 배포되도록 명시합니다. */
  outputFileTracingIncludes: {
    "/services/**": ["./app/services/**/content.html"],
  },
}

module.exports = nextConfig
