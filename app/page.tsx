import Link from "next/link";

import { demoSteps, proofFacts } from "@/components/content";

export default function HomePage() {
  return (
    <main className="page-stack">
      <section className="hero-poster">
        <div className="hero-copy">
          <p className="eyebrow">Unit 1 Tutor Flow Demo</p>
          <h1>소인수분해를 실제 tutoring flow로 보여주는 첫 결과물</h1>
          <p className="lead">
            문서만 정리한 프로젝트가 아니라, Unit 1에서 replay, handoff,
            next-step planning이 실제로 이어지는 결과를 보여준다.
          </p>
          <div className="cta-row">
            <Link href="/unit1" className="cta-primary">
              Unit 1 데모 보기
            </Link>
            <Link href="/unit1/proof" className="cta-secondary">
              검증 근거 보기
            </Link>
          </div>
        </div>
        <div className="hero-proof">
          <span className="proof-chip">Unit 1 first</span>
          <span className="proof-chip">runtime-complete</span>
          <span className="proof-chip">pilot-compared</span>
        </div>
      </section>

      <section className="triptych">
        <article>
          <p className="eyebrow">What Is Real Today</p>
          <h2>Transcript Replay</h2>
          <p>검증된 Unit 1 흐름을 같은 구조로 다시 재생할 수 있다.</p>
        </article>
        <article>
          <p className="eyebrow">What Is Real Today</p>
          <h2>Blocker-First Handoff</h2>
          <p>완료 후 다음 guided session이 보수적으로 다시 계획된다.</p>
        </article>
        <article>
          <p className="eyebrow">What Is Real Today</p>
          <h2>One-Turn Tutor Loop</h2>
          <p>한 번의 관찰 입력으로 다음 action이 실제로 바뀐다.</p>
        </article>
      </section>

      <section className="story-grid">
        <article className="story-panel emphasis">
          <p className="eyebrow">Why Unit 1 First</p>
          <h2>가장 강하게 검증된 slice부터 보여준다</h2>
          <p>
            현재 저장소에서 Unit 1은 가장 앞서 있다. 그래서 첫 Vercel 결과물은
            전체 커리큘럼이 아니라, 하나의 tutoring loop가 실제로 작동하는지
            보여주는 데 집중한다.
          </p>
        </article>
        <article className="story-panel">
          <p className="eyebrow">Demo Path</p>
          <ol className="step-list">
            {demoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="proof-band">
        <div>
          <p className="eyebrow">Proof Snapshot</p>
          <h2>현재 기준에서 확인된 사실만 말한다</h2>
        </div>
        <ul className="fact-list">
          {proofFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <section className="limits-band">
        <div>
          <p className="eyebrow">Honest Limits</p>
          <h2>이 페이지는 전체 제품 출시를 뜻하지 않는다</h2>
        </div>
        <div className="limits-copy">
          <p>현재는 Unit 1이 첫 결과물이다.</p>
          <p>Unit 2와 Unit 3는 같은 validation gate를 통과한 뒤 붙는다.</p>
          <p>최종 mastery scoring과 broad classroom validation은 아직 아니다.</p>
        </div>
      </section>
    </main>
  );
}
