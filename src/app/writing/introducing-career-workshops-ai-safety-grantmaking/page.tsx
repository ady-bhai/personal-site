import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing Career Workshops for AI Safety Grantmaking · Ady Mehta",
  description: "Draft post.",
};

export default function IntroducingCareerWorkshopsPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Introducing Career Workshops for AI Safety Grantmaking
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          If the field needs more grantmakers so badly, where is a junior person
          supposed to fit? It is easy to read all of this and come away with the
          sense that, yes, this is important, but also obviously a job for someone
          older, more experienced, and more “strategically sophisticated” than
          you might be.
        </p>
        <p>
          If you are just entering the field, the honest answer is that you
          probably do not yet have the strategic taste to set a grantmaking
          team&apos;s highest-level priorities. That is normal. Most people do not.
          But that is a very different claim from saying you cannot be useful.
          There is a big gap between “should not decide the whole portfolio” and
          “has nothing to contribute.”
        </p>
        <p>
          The field is especially labor-constrained in the active parts of
          grantmaking, not just in reading proposals once they arrive. The part of
          grantmaking most people picture—reading a proposal, deciding yes or
          no—is also the part most easily delegated. What cannot be delegated as
          easily is the active work: figuring out what should exist, mapping who
          is already doing related work, pressure-testing a theory of change,
          scoping a budget, and helping turn a half-formed idea into a fundable
          project.
        </p>
        <p>
          Jake Mendel at CG has said he spends the majority of his time not
          evaluating proposals but trying to get better ones into the pipeline.
          This is the work that is most acutely bottlenecked.
        </p>
        <p>
          Traditional high-stakes, professional field has solved this problem:
          medicine has residencies; law has clerkships; investment banking has
          analyst programs. Equally as much as being places that build experience,
          these are infrastructure that makes the senior professionals more
          productive. Instead of operating on a patient, the first-year surgical
          resident assists in the procedure—enabling the surgeon to operate on
          more patients.
        </p>
        <p>
          Grantmaking has no equivalent: there is no structured way for a junior
          person to enter this field, contribute meaningfully, and develop
          judgment over time. And we&apos;ve borne the consequence for this gap:
          while senior grantmakers remain overloaded, promising junior people
          might never even discover this path. The consequence for AI Safety is
          then that good opportunities are left on the table, and worst of all,
          not even because of the money.
        </p>
        <p>
          A junior person does not need to set the priorities. They need to help
          a senior person act on theirs faster. That is a very different bar, and
          a much more reachable one. Your job does not have to be coming up with
          that direction from scratch. It can be going out into the world and
          making it more concrete: talking to orgs, gathering signals, drafting
          the memo, spotting overlap, finding the right people, surfacing
          blockers, and helping move an idea from “someone should look into this”
          to something real.
        </p>
        <p>
          And the nice thing about starting there is that the learning is built
          into the work. As you do it, your taste gets better. You start to see
          which orgs are stronger than they look, which people actually follow
          through, where the field is crowded, and where it is weirdly empty. You
          also build relationships across the ecosystem almost by accident. Even
          if you later leave grantmaking, you keep the map.
        </p>
        <p>
          That is part of why we think of this as a lever, not just a job. Good
          judgment here moves more than your own output. It changes what gets
          funded, what gets built, and which problems receive real attention. But
          the path into that leverage is much less mysterious than it first
          appears. You do not start by controlling millions of dollars. You start
          by becoming useful to someone who is already trying to direct them
          well.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          What To Do Next?
        </h2>
        <p>
          So what does that actually look like in practice? The lowest-cost
          experiment I know is to do small pieces of work that look like the
          actual job before anyone gives you permission. One version is to write
          up a more formal version of your own reverse-engineering and send it to
          current grantmakers: what did I miss, what would you rank as most
          useful, where do different teams actually spend their time? Another is
          to map the current grantmaking orgs, what they each do, where their
          comparative advantages differ, and which gaps seem most real.
        </p>
        <p>
          More broadly, the design principle is simple: practice on the actual
          units of work the job consists of, just without the money. Write a
          recommendation memo on a real public proposal. Do a landscape memo on
          university groups and ask what is missing. Write an Epoch or AI 2027
          synthesis that ends with, so what should change in current grantmaking?
          Design a lean $300K fellowship budget. Draft an RFP in an underfunded
          area. These are small enough to be doable and real enough to teach you
          something.
        </p>
        <p>
          The point of these projects is not just that they help you learn. They
          also produce artifacts. That matters. A finished memo, budget, or RFP
          is something a current grantmaker can react to. It gives them a
          concrete object to critique instead of a vague expression of interest.
          It also gives you something you can own, revise, and point to later
          when you want to have a serious conversation.
        </p>
        <p>
          They are better done with other people, too. A small group can split
          interviews for a landscape memo, compare judgments on a proposal, or
          stress-test each other&apos;s budget assumptions. That gives you
          accountability, lets you meet other people interested in this path, and
          makes the whole thing feel less like private career flailing and more
          like the beginning of a real practice.
        </p>
        <p>
          From there, a few entry points open up. You can join a larger
          grantmaking or donor-advisory org and learn from the inside. You can
          become useful to independent donors who want a giving strategy that
          does not simply duplicate Coefficient or Longview. You can start
          smaller by regranting on Manifund, helping run a tactical fund, or
          supporting someone else in scoping and seeding a project. There is no
          single ladder here. The common denominator is that you become legible
          by producing good judgment in public.
        </p>
        <p>
          There are also some immediate actions that matter right now. If you
          know someone at Anthropic who is thinking seriously about giving,
          connecting them with existing advisors before the IPO is probably much
          more useful than waiting until after liquidity. If you are already a
          donor, funding grantmaking capacity itself may be one of the
          highest-leverage bets available. The field does not only need more
          capital. It needs more people who can help direct it.
        </p>
      </div>
    </article>
  );
}

