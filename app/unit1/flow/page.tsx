import Link from "next/link";

import { unitOneFlowStages, unitOneVisibleFlow } from "@/components/content";

const flow = unitOneVisibleFlow;

export default function UnitOneFlowPage() {
  return (
    <main className="page-stack">
      <section className="section-card section-card-hero flow-hero-grid">
        <div className="unit-hero-copy">
          <p className="eyebrow">Visible Unit 1 Flow</p>
          <h1>문서가 아니라 실제 tutoring flow를 보여준다</h1>
          <p className="lead">
            이 페이지는 main repo의 실제 Unit 1 runtime 출력에서 뽑은 흐름을
            바탕으로, session start에서 one-turn update와 blocker-first handoff까지
            한 번에 보여준다.
          </p>
          <div className="cta-row">
            <Link href="/unit1/proof" className="cta-primary">
              proof와 같이 보기
            </Link>
            <Link href="/unit1" className="cta-secondary">
              Unit 1 개요로
            </Link>
          </div>
        </div>

        <div className="flow-hero-panel">
          <p className="eyebrow">Runtime Path</p>
          <div className="flow-hero-list">
            {unitOneFlowStages.map((stage) => (
              <article key={stage.label} className="flow-hero-item">
                <span>{stage.label}</span>
                <div>
                  <strong>{stage.title}</strong>
                  <p>{stage.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flow-stage-grid">
        <article className="flow-stage-card">
          <p className="eyebrow">01 Session Start</p>
          <h2>{flow.start.title}</h2>
          <p className="flow-line">{flow.start.openingLine}</p>
          <div className="flow-meta">
            <span>{flow.start.action}</span>
            <span>{flow.start.targetSkillId}</span>
            <span>{flow.start.currentLessonStepId}</span>
          </div>
          <div className="flow-question-block">
            <strong>First tutor question</strong>
            <p>{flow.start.firstTutorQuestion}</p>
          </div>
          <dl className="flow-kv">
            <div>
              <dt>Next lesson step</dt>
              <dd>{flow.start.nextLessonStepId}</dd>
            </div>
            <div>
              <dt>Remaining step count</dt>
              <dd>{String(flow.start.remainingStepCount)}</dd>
            </div>
          </dl>
        </article>

        <article className="flow-stage-card">
          <p className="eyebrow">02 Observation Form</p>
          <h2>{flow.observation.lessonStepId}</h2>
          <div className="flow-question-block">
            <strong>Learner response prompt</strong>
            <p>{flow.observation.learnerResponsePrompt}</p>
          </div>
          <div className="flow-question-block">
            <strong>Tutor note prompt</strong>
            <p>{flow.observation.tutorNotePrompt}</p>
          </div>
          <div className="flow-chip-row">
            {flow.observation.fields.map((field) => (
              <span key={field} className="flow-chip">
                {field}
              </span>
            ))}
          </div>
          <div className="response-card">
            <strong>Learner response</strong>
            <p>{flow.observation.learnerResponse}</p>
          </div>
          <div className="response-card response-card-note">
            <strong>Tutor note</strong>
            <p>{flow.observation.tutorNote}</p>
          </div>
        </article>
      </section>

      <section className="flow-stage-grid">
        <article className="flow-stage-card flow-stage-card-strong">
          <p className="eyebrow">03 One Turn Outcome</p>
          <h2>{flow.turn.currentLessonStepId}</h2>
          <div className="flow-meta">
            <span>{flow.turn.nextAction}</span>
            <span>{flow.turn.decision}</span>
            <span>{flow.turn.sessionStatus}</span>
          </div>
          <div className="flow-question-block">
            <strong>Next tutor question</strong>
            <p>{flow.turn.firstTutorQuestion}</p>
          </div>
          <dl className="flow-kv">
            <div>
              <dt>Completed step ids</dt>
              <dd>{flow.turn.completedStepIds.join(", ")}</dd>
            </div>
            <div>
              <dt>Remaining step count</dt>
              <dd>{String(flow.turn.remainingStepCount)}</dd>
            </div>
          </dl>
        </article>

        <article className="flow-stage-card handoff-card">
          <p className="eyebrow">04 Completed Transcript Handoff</p>
          <h2>{flow.handoff.title}</h2>
          <p className="flow-line">{flow.handoff.openingLine}</p>
          <div className="flow-meta">
            <span>{flow.handoff.action}</span>
            <span>{flow.handoff.plannedFromSkillId}</span>
            <span>{flow.handoff.currentStepSkillId}</span>
          </div>
          <div className="flow-question-block">
            <strong>Blocker-first reopen question</strong>
            <p>{flow.handoff.firstTutorQuestion}</p>
          </div>
          <dl className="flow-kv">
            <div>
              <dt>Current lesson step</dt>
              <dd>{flow.handoff.currentLessonStepId}</dd>
            </div>
            <div>
              <dt>Next transfer step</dt>
              <dd>{flow.handoff.nextLessonStepId}</dd>
            </div>
            <div>
              <dt>Recommended next skill ids</dt>
              <dd>{flow.handoff.recommendedNextSkillIds.join(", ")}</dd>
            </div>
            <div>
              <dt>Remaining step count</dt>
              <dd>{String(flow.handoff.remainingStepCount)}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="closing-band">
        <div className="closing-copy">
          <p className="eyebrow">What This Changes</p>
          <h2>이제 Unit 1은 설명 페이지가 아니라 작동 장면으로 판단할 수 있다</h2>
          <p>
            이 surface를 보면 Unit 1이 실제로 어디까지 작동하는지, 그리고 나머지
            단원을 어떤 방식으로 붙여야 하는지 더 직접적으로 판단할 수 있다.
          </p>
        </div>
        <div className="cta-row">
          <Link href="/unit1/proof" className="cta-primary">
            proof 비교하기
          </Link>
          <Link href="/" className="cta-secondary">
            홈으로
          </Link>
        </div>
      </section>
    </main>
  );
}
