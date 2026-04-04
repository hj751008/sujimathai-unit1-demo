import Link from "next/link";

import {
  unitOneCapabilities,
  unitOneFlows,
  unitOneSkills,
  unitOneSurfaceChecks,
} from "@/components/content";

export default function UnitOnePage() {
  return (
    <main className="page-stack">
      <section className="section-card section-card-hero unit-hero-grid">
        <div className="unit-hero-copy">
          <p className="eyebrow">Unit 1</p>
          <h1>소인수분해 tutoring flow</h1>
          <p className="lead">
            수 하나를 기본 블록으로 나누고, 그 결과를 다시 사용하는 transfer
            task까지 이어지는 흐름을 다룬다.
          </p>
          <div className="cta-row">
            <Link href="/unit1/proof" className="cta-primary">
              검증 근거 보기
            </Link>
            <Link href="/" className="cta-secondary">
              홈으로
            </Link>
          </div>
        </div>

        <div className="unit-side-panel">
          <p className="eyebrow">Surface Check</p>
          <ul className="check-list">
            {unitOneSurfaceChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="triptych single-column-mobile">
        {unitOneSkills.map((skill) => {
          const [title, body] = skill.split(":");
          return (
            <article key={skill}>
              <p className="eyebrow">Skill Scope</p>
              <h2>{title}</h2>
              <p>{body?.trim() ?? skill}</p>
            </article>
          );
        })}
      </section>

      <section className="story-grid story-grid-expanded">
        <article className="story-panel emphasis story-panel-large">
          <p className="eyebrow">What The Tutor Can Do</p>
          <h2>Unit 1에서 확인된 tutor capability</h2>
          <ul className="fact-list compact-list fact-list-strong">
            {unitOneCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="story-panel story-panel-steps">
          <p className="eyebrow">Demo Flows</p>
          <div className="flow-stack">
            {unitOneFlows.map((flow) => (
              <div key={flow.title} className="flow-card">
                <strong>{flow.title}</strong>
                <p>{flow.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
