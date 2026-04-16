import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Weights, Power, and Catastrophic Risk · Ady Mehta",
  description:
    "Open-weight models can check corporate and state concentration of power, but they also increase catastrophic misuse risk unless governments build governance institutions.",
};

export default function OpenWeightsPowerRiskPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Open Weights, Power, and Catastrophic Risk
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          Open-weight models solve one problem while worsening another. They
          reduce concentration of power in a handful of companies and governments,
          but they also increase the chance that dangerous capabilities spread to
          actors who should never have them, including in CBRN-relevant domains.
        </p>
        <p>
          The right policy response is not &quot;open everything&quot; or
          &quot;close everything.&quot; It is to build institutions that preserve
          access and competition where socially valuable, while making catastrophic
          misuse substantially harder.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Why demand for open weights may increase
        </h2>
        <p>
          As training gets more expensive, fewer organizations can fund frontier
          runs. At the same time, more companies are building products that depend
          on model access. If frontier models become selectively available or not
          available through broad API access, pressure to secure durable access to
          open models rises.
        </p>
        <p>
          Mythos-style gatekeeping dynamics make this pressure sharper. Once firms
          realize a small number of providers can unilaterally restrict access,
          they look for a fallback they can host, modify, and rely on.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          The two strongest arguments for open weights
        </h2>
        <p>
          First, open weights can check corporate power. A small oligopoly of labs
          can set terms, prices, and access conditions for increasingly general
          purpose systems. Open models create a fallback path for developers and
          researchers who would otherwise be structurally dependent on a few API
          vendors.
        </p>
        <p>
          Second, open weights can check government power. Model providers are
          subject to domestic political and regulatory pressure. If states fear
          foreign providers could restrict or disable access for geopolitical
          reasons, sovereign compute investments become more attractive. Open
          weights are appealing in that environment because access cannot be
          revoked with one policy or one terms-of-service update.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Why open weights still matter for safety
        </h2>
        <p>
          Open release can enable independent safety research when closed labs
          impose legal or technical barriers on external evaluation. External
          scrutiny is often where hidden failure modes are surfaced, and some
          near-frontier open releases have already enabled high-value independent
          assessments.
        </p>
        <p>
          In that sense, open weights are not only a market structure issue. They
          are also part of the accountability ecosystem.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          The hard downside: catastrophic misuse risk
        </h2>
        <p>
          Recent capability signals make this risk concrete. Advanced systems have
          shown very high performance on technical biological knowledge tasks, and
          internal evaluations at leading labs have reported substantial human
          performance uplift in sensitive areas.
        </p>
        <p>
          With closed models, safeguards like classifier layers, policy
          enforcement, and centralized logging can still block or detect a large
          fraction of dangerous behavior, even if imperfectly. With open weights,
          that control boundary disappears after download. Safety layers can be
          removed, local deployments can run without oversight, and models can be
          fine-tuned for exactly the capabilities society most needs to constrain.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          A practical policy frame: ABC
        </h2>
        <p>
          Governments should treat this as an institutional design challenge.
          A workable starting point is an ABC framework:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Access controls:</strong> tiered access for high-risk model
            classes, identity verification for sensitive capabilities, and clear
            restrictions on frontier-weight distribution where misuse potential is
            unusually high.
          </li>
          <li>
            <strong>Baseline accountability:</strong> standardized evaluations,
            incident reporting, provenance and watermarking norms where feasible,
            and liability structures that reward responsible release and penalize
            reckless deployment.
          </li>
          <li>
            <strong>Capacity building:</strong> public-interest compute, secure
            research environments, and funding mechanisms for open safety research
            so openness does not become synonymous with zero governance.
          </li>
        </ol>
        <p>
          The goal is to preserve legitimate benefits of open ecosystems while
          making high-consequence misuse materially harder.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          The economic constraint people skip
        </h2>
        <p>
          Open weights without a durable funding model for frontier research may
          simply lock in closed-lab capability leadership. A consortium model can
          work only if it solves training-scale financing, governance, and IP
          pooling problems that have historically broken similar efforts.
        </p>
        <p>
          In other words, if we want open alternatives to remain credible at the
          frontier, governance design must include economics, not just licensing
          ideology.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Conclusion</h2>
        <p>
          Open weights are not purely good or purely bad. They are a structural
          hedge against concentrated power and a structural amplifier of misuse
          risk. Both are true at the same time.
        </p>
        <p>
          The question is whether governments can build institutions fast enough to
          keep the upside while constraining the worst downside. If they can,
          open-weight ecosystems may remain compatible with safety. If they
          cannot, capability diffusion will outrun governance, and the costs will
          be paid by everyone.
        </p>
      </div>
    </article>
  );
}
