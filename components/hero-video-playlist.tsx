"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import styles from "./hero-video-playlist.module.css";

const videos = [1, 2, 3, 4].map(number => `/videos/orcamento-family-hero-${number}.mp4`);
type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

export default function HeroVideoPlaylist({ poster }: { poster: string }) {
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const updatePreference = () => setAllowed(!motion.matches && !connection?.saveData && !["slow-2g", "2g"].includes(connection?.effectiveType ?? ""));
    // Start decorative media after the initial page resources have loaded.
    const schedule = () => { timer = setTimeout(updatePreference, 800); };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    motion.addEventListener("change", updatePreference);
    connection?.addEventListener("change", updatePreference);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", schedule);
      motion.removeEventListener("change", updatePreference);
      connection?.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    let intersects = false;
    const updateVisibility = () => setVisible(intersects && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersects = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.1 });
    if (container.current) observer.observe(container.current);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let cancelled = false;
    if (visible && !paused) {
      element.play().catch((error: DOMException) => {
        if (cancelled || error.name === "AbortError") return;
        setPaused(true);
      });
    } else element.pause();
    return () => { cancelled = true; element.pause(); };
  }, [allowed, visible, paused, index, failed]);

  return <div ref={container} className={styles.media}>
    <div className={styles.visual} aria-hidden="true">
      <Image src={poster} alt="" fill sizes="100vw" className={styles.poster} />
      {allowed && !failed && <video
        ref={video}
        key={index}
        muted
        playsInline
        preload="none"
        tabIndex={-1}
        className={styles.video}
        onEnded={() => setIndex(current => (current + 1) % videos.length)}
        onError={() => setFailed(true)}
      ><source src={videos[index]} type="video/mp4" /></video>}
    </div>
    {allowed && !failed && <button type="button" className={styles.control} onClick={() => setPaused(current => !current)} aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}>
      {paused ? <Play size={13} /> : <Pause size={13} />}
      <span>{paused ? "Reproduzir fundo" : "Pausar fundo"}</span>
    </button>}
  </div>;
}
