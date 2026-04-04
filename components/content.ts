export const site = {
  name: "Suji Math AI Unit 1 Demo",
  description:
    "소인수분해 Unit 1 tutoring flow를 실제 결과물처럼 보여주는 Vercel landing demo",
  basePath: "/",
};

export const proofFacts = [
  "Unit 1 is documented as runtime-complete for transcript-backed regression coverage.",
  "The current tutoring loop already supports transcript replay, blocker-first handoff, and one-turn tutor simulation.",
  "Local operator UI evidence and pilot-log comparison exist, but broad classroom validation is still out of scope.",
];

export const unitOneSkills = [
  "U1-S1 to U1-S4: concept check, entry bridge, rewrite, verification",
  "U1-S5A to U1-S5D: transfer tasks built on prime factorization",
];

export const demoSteps = [
  "검증된 transcript replay",
  "다음 guided session handoff 확인",
  "한 번의 tutor turn 제출",
  "필요하면 raw operator log 저장",
];

export const heroStats = [
  { value: "1", label: "first public slice" },
  { value: "3", label: "live routes" },
  { value: "Now", label: "proof-first scope" },
];

export const capabilityPillars = [
  {
    title: "Transcript Replay",
    body: "검증된 Unit 1 흐름을 같은 구조로 다시 재생할 수 있다.",
  },
  {
    title: "Blocker-First Handoff",
    body: "완료 뒤 다음 guided session을 보수적으로 다시 계획한다.",
  },
  {
    title: "One-Turn Tutor Loop",
    body: "한 번의 관찰 입력으로 다음 action이 실제로 바뀐다.",
  },
];

export const sequenceMoments = [
  "Learner record loads with the current Unit 1 state.",
  "Replay confirms the same tutoring path can be reconstructed.",
  "The next blocker-first session is planned before expansion.",
  "Operator evidence remains structured enough to inspect and compare.",
];
