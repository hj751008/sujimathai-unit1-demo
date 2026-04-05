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

export const proofLimits = [
  "not broad classroom validation",
  "not finalized mastery scoring",
  "not full multi-unit product claim",
];

export const expansionRules = [
  "source-backed content",
  "validate-content pass",
  "shared runtime replay and handoff verification",
  "conservative prerequisite and policy docs",
];

export const proofLenses = [
  {
    title: "Confirmed Now",
    body: "runtime-complete Unit 1 slice with transcript replay and structured operator evidence",
  },
  {
    title: "Not Claimed Yet",
    body: "broad classroom validation, final mastery scoring, and full multi-unit product promise",
  },
  {
    title: "Next Gate",
    body: "later units only attach after the same source-backed validation and runtime replay check",
  },
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
  { value: "4", label: "live routes" },
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

export const unitOneCapabilities = [
  "identify concept confusion before procedural expansion",
  "reopen blocker-first practice instead of forcing forward movement",
  "carry prime factorization into transfer tasks such as gcd and lcm",
  "preserve structured operator evidence for review and comparison",
];

export const unitOneFlows = [
  {
    title: "Pilot A",
    body: "concept check to verification habit",
  },
  {
    title: "Pilot B",
    body: "S5 transfer with blocker-first reopen",
  },
  {
    title: "Pilot C",
    body: "gcd/lcm transfer and reorder",
  },
];

export const unitOneSurfaceChecks = [
  "Unit 1 scope is visible before any broader curriculum claim.",
  "A visible Unit 1 flow page now shows session start, observation form, and one-turn update.",
  "Proof page separates confirmed facts from current limits.",
  "The public demo keeps a clear path from landing to evidence.",
];

export const closingSignals = [
  "Visible proof-first landing",
  "Replayable tutoring path",
  "Conservative expansion rule",
];

export const unitOneVisibleFlow = {
  start: {
    action: "plan_new_session",
    targetSkillId: "U1-S3",
    currentLessonStepId: "STEP-U1-S2-ENTRY-BRIDGE",
    title: "Entry Bridge With 24",
    openingLine:
      "Let's just find one easy way into the problem instead of solving everything at once.",
    firstTutorQuestion: "What is the easiest divisor you can test first?",
    nextLessonStepId: "STEP-U1-S3-REWRITE-CLEANLY",
    remainingStepCount: 2,
  },
  observation: {
    lessonStepId: "STEP-U1-S2-ENTRY-BRIDGE",
    learnerResponsePrompt:
      "Write the learner's first move for entering the factorization of 24.",
    tutorNotePrompt:
      "Note whether the learner used the idea that 24 is even to choose a starting divisor.",
    fields: ["starts_with_two", "mentions_evenness"],
    learnerResponse: "24 is even, so I should start by dividing by 2 first.",
    tutorNote: "Learner chose 2 as the first easy divisor for 24.",
  },
  turn: {
    nextAction: "continue_active_session",
    decision: "completed",
    sessionStatus: "in_progress",
    completedStepIds: ["STEP-U1-S2-ENTRY-BRIDGE"],
    currentLessonStepId: "STEP-U1-S3-REWRITE-CLEANLY",
    firstTutorQuestion: "Which factors should still remain in the final line?",
    remainingStepCount: 1,
  },
  handoff: {
    action: "plan_new_session",
    targetSkillId: "U1-S5A",
    currentStepSkillId: "U1-S3",
    currentLessonStepId: "STEP-U1-S3-REWRITE-CLEANLY",
    title: "Rewrite the Final Factorization Cleanly",
    openingLine:
      "Your split-work is close; now let's turn it into one clean final factorization.",
    firstTutorQuestion: "Which factors should still remain in the final line?",
    nextLessonStepId: "STEP-U1-S5A-DIVISOR-COUNT-TRANSFER",
    remainingStepCount: 2,
    plannedFromSkillId: "U1-S5A",
    recommendedNextSkillIds: ["U1-S3", "U1-S5A"],
  },
};

export const unitOneFlowStages = [
  {
    label: "01",
    title: "Session Start",
    body: "learner record에서 실제 guided session을 열고 첫 질문을 고정한다.",
  },
  {
    label: "02",
    title: "Observation Form",
    body: "현재 step에 맞는 prompt와 field set이 자동으로 붙는다.",
  },
  {
    label: "03",
    title: "One Turn Result",
    body: "한 번의 관찰 입력 뒤 다음 step guide가 실제로 바뀐다.",
  },
  {
    label: "04",
    title: "Blocker-First Handoff",
    body: "완료 transcript 뒤에는 다음 transfer task 전에 blocker step이 다시 열린다.",
  },
];
