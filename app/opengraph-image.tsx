import { ImageResponse } from "next/og";

export const alt = "Matheus Keitaro Finanças — Calculadoras e orçamento doméstico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f7f6f0", padding: "65px 75px", color: "#243b2b" }}>
      <div style={{ display: "flex", fontSize: 23, letterSpacing: 2 }}>MATHEUS KEITARO FINANÇAS</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.1, letterSpacing: -3 }}><span>Seu dinheiro. Suas escolhas.</span><span style={{ color: "#71804e" }}>Mais clareza.</span></div>
      <div style={{ display: "flex", fontSize: 25, paddingTop: 28, borderTop: "1px solid #b5c0a8" }}>Calculadoras financeiras · Aplicativo de orçamento doméstico</div>
    </div>, size,
  );
}
