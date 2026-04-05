import Link from "next/link";

import {
  capabilityPillars,
  closingSignals,
  demoSteps,
  heroStats,
  proofFacts,
  sequenceMoments,
} from "@/components/content";

export default function HomePage() {
  return (
    <main className="page-stack">
      <section className="hero-poster hero-poster-v2">
        <div className="hero-copy">
          <p className="eyebrow">Unit 1 Tutor Flow Demo</p>
          <h1>소인수분해를 설명하는 게 아니라, 실제 tutoring flow를 보여준다</h1>
          <p className="lead">
            첫 Vercel 결과물은 전체 커리큘럼을 약속하지 않는다. 대신 Unit 1에서
            replay, handoff, next-step planning이 실제로 이어지는 장면만 또렷하게
            보여준다.
          </p>
          <div className="cta-row">
            <Link href="/unit1" className="cta-primary">
              Unit 1 데모 보기
            </Link>
            <Link href="/unit1/proof" className="cta-secondary">
              검증 근거 보기
            </Link>
          </div>
          <div className="hero-stats" aria-label="Demo snapshot metrics">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage">
          <div className="stage-glow" aria-hidden="true" />
          <div className="stage-panel">
            <p className="eyebrow">Proof First Surface</p>
            <h2>현재 landing이 보여주는 한 가지</h2>
            <ol className="sequence-list">
              {sequenceMoments.map((moment, index) => (
                <li key={moment}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{moment}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="triptych triptych-premium">
        {capabilityPillars.map((pillar) => (
          <article key={pillar.title}>
            <p className="eyebrow">What Is Real Today</p>
            <h2>{pillar.title}</h2>
            <p>{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="story-grid story-grid-expanded">
        <article className="story-panel emphasis story-panel-large">
          <p className="eyebrow">Why Unit 1 First</p>
          <h2>가장 강하게 검증된 slice부터 public surface로 꺼낸다</h2>
          <p>
            현재 저장소에서 Unit 1은 가장 앞서 있다. 그래서 첫 결과물은 전체
            제품 약속보다, 하나의 tutoring loop가 실제로 작동한다는 사실을 먼저
            보이게 만든다.
          </p>
        </article>
        <article className="story-panel story-panel-steps">
          <p className="eyebrow">Demo Path</p>
          <ol className="step-list step-list-strong">
            {demoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="proof-band proof-band-v2">
        <div>
          <p className="eyebrow">Proof Snapshot</p>
          <h2>현재 기준에서 확인된 사실만 앞에 둔다</h2>
        </div>
        <ul className="fact-list fact-list-strong">
          {proofFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <section className="limits-band limits-band-v2">
        <div>
          <p className="eyebrow">Honest Limits</p>
          <h2>이 landing은 과장보다 범위 통제를 선택한다</h2>
        </div>
        <div className="limits-copy">
          <p>현재는 Unit 1이 첫 결과물이다.</p>
          <p>Unit 2와 Unit 3는 같은 validation gate를 통과한 뒤 붙는다.</p>
          <p>최종 mastery scoring과 broad classroom validation은 아직 아니다.</p>
        </div>
      </section>

      <section className="closing-band">
        <div className="closing-copy">
          <p className="eyebrow">Next Click</p>
          <h2>지금 보여줄 것은 두 단계면 충분하다</h2>
          <p>
            먼저 Unit 1 flow를 보고, 바로 proof 페이지에서 지금 주장 가능한 범위를
            확인하면 된다.
          </p>
        </div>
        <div className="closing-actions">
          <div className="closing-tags" aria-label="Closing proof signals">
            {closingSignals.map((signal) => (
              <span key={signal} className="closing-tag">
                {signal}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <Link href="/unit1" className="cta-primary">
              Unit 1 flow 열기
            </Link>
            <Link href="/unit1/proof" className="cta-secondary">
              proof scope 확인
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
