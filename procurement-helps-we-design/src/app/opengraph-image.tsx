import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          Procurement Helps
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#82ffcd",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Tender &amp; procurement support - no agency fees, just me.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Brad Richards, MCIPS
        </div>
      </div>
    ),
    { ...size },
  );
}
