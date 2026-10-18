// 스타터팩 타이틀 로고 — 별 중심 Y2K 스티커 벡터. 실행: node star.js <출력폴더>
// 글자는 전부 직접 그린 도형(폰트 미사용) → 굿즈 인쇄 시 라이선스 문제 없음
const sharp = require('C:/Users/dlwng/WSE/node_modules/sharp');
const fs = require('fs');
const OUT = process.argv[2] || '.';
const f = (n) => Math.round(n * 100) / 100;
const pstr = (pts) => pts.map((p) => f(p[0]) + ',' + f(p[1])).join(' ');

// ---------- 글리프 (중심선, 0~100 박스, square cap) ----------
const G = {
  S: [[[94, 13], [28, 13], [13, 28], [13, 50], [87, 50], [87, 72], [72, 87], [6, 87]]],
  T: [[[6, 13], [94, 13]], [[50, 13], [50, 87]]],
  A: [[[13, 87], [13, 34], [34, 13], [87, 13], [87, 87]], [[13, 58], [87, 58]]],
  R: [[[13, 87], [13, 13], [72, 13], [87, 28], [87, 38], [74, 52], [13, 52]], [[52, 52], [87, 87]]],
  E: [[[90, 13], [13, 13], [13, 87], [90, 87]], [[13, 50], [74, 50]]],
  P: [[[13, 87], [13, 13], [72, 13], [87, 28], [87, 38], [74, 52], [13, 52]]],
  C: [[[76, 13], [34, 13], [13, 34], [13, 66], [34, 87], [76, 87]]],
  K: [[[13, 13], [13, 87]], [[87, 13], [38, 50], [87, 87]]],
};
const BLADE = {
  S0: [[30, 0], [30, 26], [-10, 26], [-90, 0]],
  R6: [[60, 60], [90, 82], [170, 100], [70, 100]],
  K3: [[66, 70], [96, 92], [170, 100], [80, 100]],
};
const W = 26, ADV = 114, SY = 1.25, SKEW = 0.22;
let LID = 0;
const lines = [], polys = [], stripes = [];
function word(text, ox, oy, sc) {
  const sk = ([x, y]) => [x + (oy + 100 * SY * sc - y) * SKEW, y];
  [...text].forEach((ch, i) => {
    const id = LID++;
    const tx = (p) => sk([ox + (i * ADV + p[0]) * sc, oy + p[1] * sc * SY]);
    for (const l of G[ch]) lines.push({ pts: l.map(tx), w: W * sc, id });
    if (BLADE[ch + i]) polys.push({ pts: BLADE[ch + i].map(tx), id });
  });
  // 크롬 줄무늬: 글자 아래쪽 가로줄 (위→아래로 점점 굵어짐)
  const x0 = ox - 40 * sc, x1 = ox + (text.length * ADV + 40) * sc;
  [[66, 2], [74, 3], [81, 4.5]].forEach(([y, w]) => stripes.push({ pts: [sk([x0, oy + y * sc * SY]), sk([x1, oy + y * sc * SY])], w: w * sc }));
}
word('STARTER', -470, 0, 1);
word('PACK', -150, 150, 1.12);

// ---------- 엔벨로프: 위는 처지고 아래는 솟게(가볍게) ----------
const TOP = 0, BOT = 150 + 125 * 1.12, XL = -520, XR = 470, SAG = 22, RISE = 16;
function env([x, y]) {
  const u = Math.min(1, Math.max(0, (x - XL) / (XR - XL))), v = (y - TOP) / (BOT - TOP), s = Math.sin(Math.PI * u);
  return [x, y + SAG * s * (1 - v) - RISE * s * v];
}
function dens(pts, closed) {
  const o = [], n = pts.length;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const a = pts[i], b = pts[(i + 1) % n], k = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 6));
    for (let j = 0; j < k; j++) o.push([a[0] + (b[0] - a[0]) * j / k, a[1] + (b[1] - a[1]) * j / k]);
  }
  if (!closed) o.push(pts[n - 1]);
  return o;
}
const warp = (pts, closed) => dens(pts, closed).map(env);
const TL = lines.map((l) => ({ ...l, d: warp(l.pts) })), TP = polys.map((p) => ({ ...p, d: warp(p.pts, true) })), TS = stripes.map((s) => ({ ...s, d: warp(s.pts) }));

// ---------- 별 / 스우시 / 반짝이 ----------
const SC = [-185, 30], SR = 320, SROT = -Math.PI / 2 - 0.22;
const starPts = [...Array(10)].map((_, i) => { const r = i % 2 ? SR * 0.44 : SR, a = SROT + i * Math.PI / 5; return [SC[0] + r * Math.cos(a), SC[1] + r * Math.sin(a)]; });
const starD = 'M' + pstr(starPts).split(' ').join('L') + 'Z';
// 망점: 별 오른쪽 아래로 갈수록 커짐
function halftone() {
  let s = ''; const step = 17;
  for (let y = SC[1] - SR; y < SC[1] + SR; y += step) for (let x = SC[0] - SR; x < SC[0] + SR; x += step) {
    const xx = x + ((Math.round((y - SC[1]) / step) % 2) ? step / 2 : 0);
    const t = ((xx - SC[0]) * 0.55 + (y - SC[1]) * 0.85) / SR; // -1 ~ 1
    const r = Math.max(0, (t + 0.15) * 10.5);
    if (r > 0.6) s += `<circle cx="${f(xx)}" cy="${f(y)}" r="${f(Math.min(r, step * 0.62))}"/>`;
  }
  return s;
}
// 초승달 궤도: 왼쪽 위에서 시작해 아래를 돌아 오른쪽 위 반짝이로 끝남
function swooshPts() {
  const C = [-20, 150], RX = 620, RY = 215, ROT = -0.14, out = [], inn = [], N = 160;
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = Math.PI * (1.08 - t * 1.2), w = 62 * Math.pow(Math.sin(Math.PI * t), 1.3);
    const ex = RX * Math.cos(a), ey = RY * Math.sin(a), k = 1 - w / Math.hypot(ex, ey * 2.2);
    const rot = ([x, y]) => [C[0] + x * Math.cos(ROT) - y * Math.sin(ROT), C[1] + x * Math.sin(ROT) + y * Math.cos(ROT)];
    out.push(rot([ex, ey])); inn.push(rot([ex * k, ey * k - w * 0.6]));
  }
  return [...out, ...inn.reverse()];
}
const SW = swooshPts(), swTip = SW[160];
const sparkle = (cx, cy, rx, ry, pinch = 0.1) => {
  const pts = [[0, -ry], [rx, 0], [0, ry], [-rx, 0]];
  let d = `M${f(cx)},${f(cy - ry)}`;
  for (let i = 1; i <= 4; i++) { const [x, y] = pts[i % 4], [px, py] = pts[i - 1]; d += `Q${f(cx + (px + x) * pinch)},${f(cy + (py + y) * pinch)} ${f(cx + x)},${f(cy + y)}`; }
  return d + 'Z';
};
const SPARK = [
  sparkle(swTip[0] + 10, swTip[1] - 6, 70, 92, 0.05),
  sparkle(-560, -150, 44, 58, 0.08), sparkle(-500, -90, 18, 24, 0.08),
  sparkle(395, -95, 34, 46, 0.08), sparkle(470, 300, 20, 26, 0.08), sparkle(-610, 230, 22, 30, 0.08),
];

// ---------- 모노라인 한글 ----------
const HAN = {
  '스': [[[8, 38], [30, 4], [52, 38]], [[2, 54], [58, 54]]],
  '타': [[[34, 4], [6, 4], [6, 56], [34, 56]], [[6, 30], [30, 30]], [[48, 0], [48, 60]], [[48, 30], [60, 30]]],
  '터': [[[34, 4], [6, 4], [6, 56], [34, 56]], [[6, 30], [30, 30]], [[58, 0], [58, 60]], [[44, 30], [58, 30]]],
  '팩': [[[2, 4], [36, 4]], [[11, 4], [11, 30]], [[27, 4], [27, 30]], [[2, 30], [36, 30]], [[46, 0], [46, 38]], [[46, 19], [54, 19]], [[66, 0], [66, 38]], [[6, 48], [66, 48], [66, 62]]],
};
function hangul(text, cx, cy, sc, track) {
  const ws = [...text].map((c) => (c === '팩' ? 70 : 60)), tw = ws.reduce((a, b) => a + b) + track * (ws.length - 1);
  let x = -tw / 2; const out = [];
  [...text].forEach((c, i) => { for (const l of HAN[c]) out.push(l.map(([px, py]) => [cx + (x + px) * sc, cy + (py - 31) * sc])); x += ws[i] + track; });
  return out;
}

// ---------- 렌더 ----------
function build(c) {
  const O = 7, ST = 16; // O: 개별 외곽선, ST: 스티커 외곽 여백
  const pl = (d, col, w, j = 'miter', cap = 'square') => `<polyline points="${pstr(d)}" fill="none" stroke="${col}" stroke-width="${f(w)}" stroke-linejoin="${j}" stroke-linecap="${cap}" stroke-miterlimit="10"/>`;
  const pg = (d, col, ex, j = 'miter') => `<polygon points="${pstr(d)}" fill="${col}" stroke="${col}" stroke-width="${ex * 2}" stroke-linejoin="${j}" stroke-miterlimit="10"/>`;
  const pa = (d, col, ex, j = 'round') => `<path d="${d}" fill="${col}" stroke="${col}" stroke-width="${ex * 2}" stroke-linejoin="${j}"/>`;
  const text = (col, ex, dx = 0, dy = 0, j = 'round') => `<g transform="translate(${dx} ${dy})">` + TL.map((l) => pl(l.d, col, l.w + ex * 2, ex ? j : 'miter', ex ? 'round' : 'square')).join('') + TP.map((p) => pg(p.d, col, ex, ex ? j : 'miter')).join('') + '</g>';
  const PY = 395, kr = hangul('스타터팩', 0, PY, 0.82, 12);
  const pill = (col, ex) => `<rect x="${-150 - ex}" y="${PY - 40 - ex}" width="${300 + ex * 2}" height="${80 + ex * 2}" rx="${40 + ex}" fill="${col}"/>`;
  const pillG = (col, ex) => `<g transform="translate(150 0) skewX(-14)">${pill(col, ex)}</g>`;
  // 스티커 외곽(모든 요소를 합친 실루엣)
  const sil = (col, ex) => pa(starD, col, ex + O) + pg(SW, col, ex + O, 'round') + text(col, ex + O, 3, 7) + text(col, ex + O) + SPARK.map((d) => pa(d, col, ex + O)).join('') + pillG(col, ex + O);
  const body = [
    sil(c.outer, ST + 5), sil(c.edge, ST),
    // 별
    pa(starD, c.line, O, 'miter'), pa(starD, c.star, 0, 'miter'),
    `<clipPath id="sc"><path d="${starD}"/></clipPath><g clip-path="url(#sc)" fill="${c.dots}">${halftone()}</g>`,
    pa(starD, 'none', 0).replace('fill="none" stroke="none" stroke-width="0"', `fill="none" stroke="${c.line}" stroke-width="3"`),
    // 궤도
    pg(SW, c.line, O, 'round'), pg(SW, c.swoosh, 0),
    // 글자: 그림자 → 외곽 → 흰 채움 → 크롬 줄무늬
    text(c.line, O - 2, 3, 7), text(c.line, O - 2),
    ...[...new Set(TL.map((l) => l.id))].map((id) => {
      const L = TL.filter((l) => l.id === id), P = TP.filter((p) => p.id === id);
      return L.map((l) => pl(l.d, c.line, l.w + 6, 'round', 'round')).join('') + P.map((p) => pg(p.d, c.line, 3, 'round')).join('')
        + L.map((l) => pl(l.d, c.fill, l.w)).join('') + P.map((p) => pg(p.d, c.fill, 0)).join('');
    }),
    `<mask id="tm" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000">${text('#fff', 0)}</mask><g mask="url(#tm)">${TS.map((s) => pl(s.d, c.chrome, s.w, 'miter', 'butt')).join('')}</g>`,
    // 반짝이
    SPARK.map((d) => pa(d, c.line, O) + pa(d, c.spark, 0)).join(''),
    // 한글 캡슐
    pillG(c.line, O) + pillG(c.pill, 0),
    `<g transform="translate(150 0) skewX(-14)">${kr.map((l) => pl(l, c.pillText, 9)).join('')}</g>`,
  ].join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-800 -340 1600 900" width="3200" height="1800">${body}</svg>`;
}

const ways = {
  mono: { outer: '#0b0b0f', edge: '#ffffff', line: '#0b0b0f', star: '#ffffff', dots: '#0b0b0f', swoosh: '#0b0b0f', fill: '#ffffff', chrome: '#0b0b0f', spark: '#ffffff', pill: '#0b0b0f', pillText: '#ffffff' },
  color: { outer: '#141b4d', edge: '#ffffff', line: '#141b4d', star: '#ffd23f', dots: '#f7871e', swoosh: '#e5482b', fill: '#ffffff', chrome: '#2b86c9', spark: '#ffd23f', pill: '#e5482b', pillText: '#ffffff' },
};
(async () => {
  const pngs = [];
  for (const [k, c] of Object.entries(ways)) {
    const svg = build(c);
    fs.writeFileSync(`${OUT}/starter-logo-${k}.svg`, svg);
    const png = await sharp(await sharp(Buffer.from(svg), { density: 144 }).png().trim().toBuffer())
      .extend({ top: 120, bottom: 120, left: 120, right: 120, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    fs.writeFileSync(`${OUT}/starter-logo-${k}.png`, png);
    pngs.push(png);
  }
  const { width: w, height: h } = await sharp(pngs[0]).metadata();
  const bg = async (p, col) => sharp({ create: { width: w, height: h, channels: 4, background: col } }).composite([{ input: p }]).png().toBuffer();
  const cells = [await bg(pngs[0], '#e9e9ee'), await bg(pngs[1], '#e9e9ee'), await bg(pngs[0], '#18181d'), await bg(pngs[1], '#0d1230')];
  const sheet = await sharp({ create: { width: w * 2, height: h * 2, channels: 4, background: '#fff' } })
    .composite(cells.map((b, i) => ({ input: b, left: (i % 2) * w, top: Math.floor(i / 2) * h }))).png().toBuffer();
  await sharp(sheet).resize(1800).toFile(`${OUT}/starter-logo-preview.png`);
})();
