/** @type {import('next').NextConfig} */
const nextConfig = {
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
