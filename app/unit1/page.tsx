import Link from "next/link";

import { unitOneSkills } from "@/components/content";

export default function UnitOnePage() {
  return (
    <main className="page-stack">
      <section className="section-card hero-compact">
        <p className="eyebrow">Unit 1</p>
        <h1>소인수분해 tutoring flow</h1>
        <p className="lead">
          수 하나를 기본 블록으로 나누고, 그 결과를 다시 사용하는 transfer task까지
          이어지는 흐름을 다룬다.
        </p>
        <div className="cta-row">
          <Link href="/unit1/proof" className="cta-primary">
            검증 근거 보기
          </Link>
          <Link href="/" className="cta-secondary">
            홈으로
          </Link>
        </div>
      </section>

      <section className="triptych single-column-mobile">
        {unitOneSkills.map((skill) => (
          <article key={skill}>
            <p className="eyebrow">Skill Scope</p>
            <h2>{skill.split(":")[0]}</h2>
            <p>{skill.split(":")[1]?.trim() ?? skill}</p>
          </article>
        ))}
      </section>

      <section className="story-grid">
        <article className="story-panel emphasis">
          <p className="eyebrow">What The Tutor Can Do</p>
          <ul className="fact-list compact-list">
            <li>identify concept confusion</li>
            <li>reopen blocker-first practice</li>
            <li>move from factorization to transfer tasks</li>
            <li>keep operator evidence in a structured flow</li>
          </ul>
        </article>
        <article className="story-panel">
          <p className="eyebrow">Demo Flows</p>
          <ul className="fact-list compact-list">
            <li>Pilot A: concept check to verification habit</li>
            <li>Pilot B: S5 transfer with blocker-first reopen</li>
            <li>Pilot C: gcd/lcm transfer and reorder</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
