import { proofFacts } from "@/components/content";

export default function UnitOneProofPage() {
  return (
    <main className="page-stack">
      <section className="section-card hero-compact">
        <p className="eyebrow">Unit 1 Proof</p>
        <h1>현재 저장소가 직접 확인한 것과 아직 아닌 것</h1>
        <p className="lead">
          이 페이지는 데모를 과장하지 않기 위해, 확인된 사실과 현재 한계를 분리해
          보여준다.
        </p>
      </section>

      <section className="story-grid">
        <article className="story-panel emphasis">
          <p className="eyebrow">Confirmed Facts</p>
          <ul className="fact-list">
            {proofFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </article>
        <article className="story-panel">
          <p className="eyebrow">Current Limits</p>
          <ul className="fact-list">
            <li>not broad classroom validation</li>
            <li>not finalized mastery scoring</li>
            <li>not full multi-unit product claim</li>
          </ul>
        </article>
      </section>

      <section className="proof-band">
        <div>
          <p className="eyebrow">Expansion Rule</p>
          <h2>다음 unit은 같은 validation gate를 통과해야 붙는다</h2>
        </div>
        <ul className="fact-list">
          <li>source-backed content</li>
          <li>validate-content pass</li>
          <li>shared runtime replay and handoff verification</li>
          <li>conservative prerequisite and policy docs</li>
        </ul>
      </section>
    </main>
  );
}
