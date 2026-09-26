"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* 그림이 있으면 그림, 없으면(404) fallback.
   하이드레이션 전에 이미 실패한 경우 onError 를 놓치므로 마운트 때 한 번 더 확인합니다. */
export default function ImgOr({
  src,
  alt = "",
  className,
  fallback,
}: {
  src: string;
  alt?: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);
  if (failed) return <>{fallback}</>;
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      draggable={false}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
