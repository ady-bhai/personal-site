import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Consider AI safety grantmaking, even early in your career · Ady Mehta",
  description:
    "Senior judgment, operator-shaped paths, and what juniors can do without setting portfolio priorities.",
};

export default function ConsiderAiSafetyGrantmakingEarlyCareerPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Consider transitioning into AI safety grantmaking, even if you&apos;re
        early in your career
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold pt-2">Senior transitions</h2>
        <p>
          If you have good judgment about AI risk, comfort with ambiguity, and
          the ability to evaluate organizations and people, you can shape the
          trajectory of millions of dollars.
        </p>
        <p>
          Julian continues that senior grantmakers do more than evaluate a stack
          of inbound proposals: they have to proactively generate new grants—for
          example by headhunting founders or designing new funding
          programs—provide strategic advice to grantees, write memos that shape
          funding strategy, and generally serve as connective tissue in the
          ecosystem.
        </p>
        <p>
          This work depends on a better model of failure than most people have
          early in their careers. The value of time spent in research, policy,
          operations, or organization-building is learning how projects are
          created, failures are avoided, and budgets are scoped. You learn what
          ideas will survive and which types of people push through. That
          experience accumulates into a sense of how value is generated—and, with
          time, into judgment.
        </p>
        <p>
          That judgment matters more if new AI safety capital enters the field
          quickly. A large influx of money will increase the value of people who
          can turn partial strategic views into real, fundable opportunities.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Founder talent</h2>
        <p>
          There is also a strong role for people who are earlier to grantmaking
          but already strong at execution. The best candidates here are often
          founder-shaped or operator-shaped. They may be former founders, early
          employees, chiefs of staff, research managers, or policy
          researchers. They do not lack capability; instead they may only lack
          field-specific taste.
        </p>
        <p>
          If you are this archetype, you have the superpower of speaking with the
          relevant people, working out the nature of the project, estimating a
          first-year budget or defining its first milestones. You surface the
          first bottlenecks and provide the data to pressure-test the theory of
          change.
        </p>
        <p>
          This also improves founder selection; a strong operator is usually
          better than a pure analyst at spotting false positives. They can tell
          when there is not clear ownership of projects, when a timeline is
          unrealistic, or when having more hands on deck is the bottleneck.
        </p>
        <p>
          For some people, this is also a path into founding. Working closely
          with a strong allocator exposes them to many unsolved problems and
          many failed or partial attempts to solve them. Over time that is one
          way to build the taste required to start something strong yourself.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Junior training</h2>
        <p>
          It&apos;s easy to read all of this and come away thinking: yes, this
          matters, but it&apos;s obviously a job for someone with more experience
          and better strategic instincts than I have right now.
        </p>
        <p>
          A junior person doesn&apos;t need to set the priorities themselves; what
          they can do is enable a small number of high-judgment people to search
          a wider space, test more ideas, and move faster. This is a very
          different bar, and a much more reachable one.
        </p>
        <p>
          In some cases, they can also become the early operators or founders
          who execute on those opportunities. This experience compounds toward
          growing their taste—toward complementing the senior talent&apos;s taste
          instead of substituting it.
        </p>
      </div>
    </article>
  );
}
