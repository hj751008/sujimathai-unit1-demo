import { ImageResponse } from "next/og";

import { site } from "@/components/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f7f0dd 0%, #f1d7a8 45%, #d67f3f 100%)",
          color: "#1f1408",
          fontFamily: "sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "2px solid rgba(31, 20, 8, 0.18)",
            borderRadius: "28px",
            background: "rgba(255, 250, 239, 0.8)",
            boxShadow: "0 20px 80px rgba(78, 44, 14, 0.16)",
            padding: "44px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "730px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: 28,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#8d4f21",
                }}
              >
                <span>Unit 1 Tutor Flow Demo</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <strong
                  style={{
                    fontSize: 68,
                    lineHeight: 1.08,
                    letterSpacing: "-0.04em",
                  }}
                >
                  소인수분해 Unit 1을
                  <br />
                  proof-first 결과물로 보여준다
                </strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: 28,
                    lineHeight: 1.35,
                    color: "#4d2e14",
                  }}
                >
                  transcript replay, blocker-first handoff, next-step planning을
                  정직한 범위 안에서 공개한다.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                minWidth: "260px",
              }}
            >
              {[
                "Visible proof-first landing",
                "Replayable tutoring path",
                "Conservative expansion rule",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    borderRadius: "999px",
                    background: "rgba(244, 224, 189, 0.95)",
                    padding: "14px 18px",
                    fontSize: 22,
                    color: "#5b3414",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              {[
                ["1", "first public slice"],
                ["3", "live routes"],
                ["Now", "proof-first scope"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    minWidth: "170px",
                    borderRadius: "22px",
                    background: "#fff8ea",
                    padding: "20px 22px",
                  }}
                >
                  <strong style={{ fontSize: 38 }}>{value}</strong>
                  <span style={{ fontSize: 20, color: "#70431c" }}>{label}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "8px",
                textAlign: "right",
              }}
            >
              <span style={{ fontSize: 22, color: "#7f4a1d" }}>Live demo</span>
              <strong style={{ fontSize: 34 }}>{site.name}</strong>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
