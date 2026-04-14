import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Export Controls Actually Buy AI Safety · Ady Mehta",
  description:
    "A closer look at the x-risk case for export controls, and why durable governance over compute matters more than simple denial.",
};

export default function ExportControlsAISafetyPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        What Export Controls Actually Buy AI Safety
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          The AI safety case for export controls often gets compressed into a neat
          three-step story. Restrict advanced chips to China, delay Chinese
          frontier capabilities, keep development more legible, and buy time to
          make AI safer.
        </p>
        <p>
          There is something real in that story. U.S. controls appear to have
          imposed friction on China&apos;s access to advanced compute. Public
          reporting has suggested Huawei&apos;s 2025 Ascend production capacity
          remained below China&apos;s overall demand, and Tencent reportedly said
          U.S. restrictions constrained its AI spending plans. If the question is
          whether controls can create some delay, the answer is probably yes.
        </p>
        <p>
          But the stronger claim is harder to defend: that the delay is large,
          durable, and meaningful for existential-risk reduction. Once you look
          closely, the simple U.S.-ahead, China-behind framing starts to break
          down.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Delay exists, but leakage does too
        </h2>
        <p>
          Export controls do not operate in a sealed world. Smuggling, diversion,
          and remote access all weaken the picture of straightforward denial. One
          2025 estimate put likely chip smuggling in 2024 above 100,000 GPUs,
          with a median estimate around 140,000. U.S. guidance has also
          acknowledged that PRC-linked actors pursue advanced chips not only
          through transshipment, but also through foreign data centers and cloud
          providers.
        </p>
        <p>
          That matters because the x-risk value of export controls does not come
          from symbolic toughness. It comes from whether they can reliably slow
          dangerous capability development at the margin. If firms can still reach
          frontier compute through offshore cloud access or diverted hardware,
          then the right description is not that controls stop access. It is that
          they create costly, partial delay.
        </p>
        <p>
          Partial delay may still be valuable. But its value depends on what
          happens next.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          The real x-risk case has three links
        </h2>
        <p>
          Working backward, the AI safety argument for export controls has three
          links.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Controls must create real delay in compute or manufacturing capacity.
          </li>
          <li>
            They must keep frontier development inside a smaller and more
            governable set of firms, fabs, clouds, and data centers.
          </li>
          <li>
            The time bought must be converted into actual safety or governance
            gains.
          </li>
        </ol>
        <p>
          The first link seems plausible but limited. The second and third links
          are where most of the serious policy work begins. A delay only matters
          for x-risk if it preserves chokepoints that can be monitored,
          conditioned, and governed.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Governance matters more than denial
        </h2>
        <p>
          This is the part the safety conversation sometimes underemphasizes. The
          most important feature of export controls may not be denying access
          absolutely. It may be making access conditional and monitorable.
        </p>
        <p>
          Once cloud loopholes and post-sale diversion become central, the policy
          problem changes shape. The relevant tools start to look less like
          embargoes and more like governance infrastructure: know-your-customer
          rules for compute access, third-party audits of training runs, location
          verification for chips, restrictions on unauthorized remote access, and
          mandatory diversion reporting.
        </p>
        <p>
          In that sense, recent policy movement is notable. Rules on advanced-chip
          exports have increasingly included KYC requirements, remote access
          controls, and independent verification. Proposed laws extending export
          authority to cloud access point in the same direction. These are not
          merely denial mechanisms. They are early attempts to govern the
          remaining chokepoints.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Why the simple story can backfire
        </h2>
        <p>
          There is another reason to be cautious about triumphalist narratives.
          Controls can erode themselves. If they mainly encourage localization of
          a Chinese domestic stack while the U.S. races ahead without stronger
          safeguards, then the x-risk case gets weaker, not stronger.
        </p>
        <p>
          Reporting in 2025 already suggested Chinese vendors were gaining
          substantial share in China&apos;s AI accelerator server market, while
          domestic firms were coordinating more aggressively to reduce dependence
          on foreign technology. If controls accelerate self-sufficiency without
          building durable governance around the compute that remains accessible,
          then they may buy less than enthusiasts hope.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          The best case is preserving chokepoints
        </h2>
        <p>
          The strongest x-risk case for export controls, then, is narrower and
          more defensible than the usual slogan. It is not that export controls
          let the U.S. permanently stay ahead of China. It is that they can
          preserve chokepoints over chips, cloud access, and semiconductor
          manufacturing long enough to impose monitoring, audits, and safety
          conditions on the actors who still have access.
        </p>
        <p>
          That is also why manufacturing-side controls matter. If servicing,
          maintenance, and allied backfilling leave semiconductor chokepoints
          porous, previous rounds of restrictions become easier to route around.
          Durable delay depends on closing those loopholes, not just announcing
          tougher rules.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Conclusion</h2>
        <p>
          Export controls probably do create delay. The more important question is
          what kind of delay they create, and whether that delay is governable.
          For AI safety, the point is not to deny access in absolute terms. It is
          to keep frontier compute inside systems where access can be tracked,
          conditioned, and, where necessary, refused.
        </p>
        <p>
          Put differently: the lesson is not embargo harder. It is to govern the
          compute that still exists. If export controls are going to matter for
          x-risk, it will be because they help build a world in which advanced
          compute is legible, auditable, and subject to real constraints, rather
          than because they briefly moved a geopolitical scoreboard.
        </p>
      </div>
    </article>
  );
}
