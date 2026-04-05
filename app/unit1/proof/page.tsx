import Link from "next/link";

import { expansionRules, proofFacts, proofLenses, proofLimits } from "@/components/content";

export default function UnitOneProofPage() {
  return (
    <main className="page-stack">
      <section className="section-card section-card-hero proof-hero-grid">
        <div>
          <p className="eyebrow">Unit 1 Proof</p>
          <h1>현재 저장소가 직접 확인한 것과 아직 아닌 것</h1>
          <p className="lead">
            이 페이지는 데모를 과장하지 않기 위해, 확인된 사실과 현재 한계를
            분리해 보여준다.
          </p>
        </div>

        <div className="proof-summary-panel">
          <p className="eyebrow">Evidence Shape</p>
          <div className="proof-summary-grid">
            <div>
              <strong>Confirmed</strong>
              <span>runtime-complete slice</span>
            </div>
            <div>
              <strong>Constrained</strong>
              <span>proof-first public claim</span>
            </div>
            <div>
              <strong>Next</strong>
              <span>same validation gate for later units</span>
            </div>
          </div>
        </div>
      </section>

      <section className="story-grid story-grid-expanded">
        <article className="story-panel emphasis story-panel-large">
          <p className="eyebrow">Confirmed Facts</p>
          <h2>현재 강하게 말할 수 있는 것</h2>
          <ul className="fact-list fact-list-strong">
            {proofFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </article>
        <article className="story-panel story-panel-steps">
          <p className="eyebrow">Current Limits</p>
          <h2>아직 주장하지 않는 범위</h2>
          <ul className="fact-list compact-list">
            {proofLimits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="proof-ladder">
        {proofLenses.map((item) => (
          <article key={item.title} className="proof-ladder-card">
            <p className="eyebrow">Proof Lens</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="proof-band proof-band-v2">
        <div>
          <p className="eyebrow">Expansion Rule</p>
          <h2>다음 unit은 같은 validation gate를 통과해야 붙는다</h2>
        </div>
        <ul className="fact-list fact-list-strong">
          {expansionRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      <section className="closing-band closing-band-proof">
        <div className="closing-copy">
          <p className="eyebrow">After Proof</p>
          <h2>근거를 본 뒤에는 다시 flow로 돌아가면 된다</h2>
          <p>
            이 데모는 proof page가 끝이 아니라, 공개 surface가 어디까지 정직하게
            연결되는지 보여주는 확인 지점이다.
          </p>
        </div>
        <div className="cta-row">
          <Link href="/unit1" className="cta-primary">
            Unit 1 flow로 돌아가기
          </Link>
          <Link href="/" className="cta-secondary">
            홈으로
          </Link>
        </div>
      </section>
    </main>
  );
}
