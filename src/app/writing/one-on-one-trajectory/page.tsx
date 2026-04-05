import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How do we close the Junior <> Senior talent gap™? · Ady Mehta",
  description:
    "On mentorship, junior and senior talent in AI safety, a prototype, and learning from Josh Landes at BlueDot.",
};

function Divider() {
  return <hr className="my-8 sm:my-10 border-foreground/15" />;
}

export default function OneOnOneTrajectoryEssay() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        How do we close the Junior {'<>'} Senior talent gap™?
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          One researcher or mentor can clear months of confusion in twenty
          minutes. They can tell you which question is fake-hard, which papers
          are relevant, whether your instincts are pointed in the right
          direction, and, perchance, even if you were about to waste six weeks
          on the wrong thing.
        </p>
        <p>
          In fields like AI safety, where so much of the work is young and tacit
          and not yet fully written down, these conversations matter even more.
        </p>
        <p>
          For example, 20-minutes of Michael Aird will teach one more about
          career planning than six months of sporadic advice and figuring things
          out DIY will. He&apos;ll draw on his experiences founding
          organizations, working across different areas of AI safety, and
          iterations on this very advice at least 15-20 times. Likewise, for a
          senior researcher or policy person.
        </p>
        <p>
          Now, if you are a senior figure or a mentor, you are making a judgment
          about whether this person is worth context, worth time, worth maybe
          pulling a little closer. To you, most of the people asking for that
          time are strangers.
        </p>
        <p>
          A relationship with a mentor can set you on a track toward a
          fellowship, a project, or a role.
        </p>
        <p>
          To a mentor, though, the way they receive interest from junior talent
          might be cold emails saying, &ldquo;I liked your paper!&rdquo;
          It&apos;s not that the senior mentors can&apos;t use help. They&apos;re
          active researcher who probably has open-questions that need competent
          help solving. But they&apos;re busy. And they have no way to cheaply
          tell whether the person reaching out is worth 20 minutes, much less a
          collaboration.
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          More broadly, there is too much junior talent in AI safety right now.
          This is not bad. The problem comes from the senior talent. There are
          not enough mentors to absorb this junior talent. Thus, the field has
          recently recognized its capacity constraints{" "}
          <span className="text-foreground/60">(link)</span>.
        </p>
        <p>
          Fellowships are not our best solution either. They are
          hyper-competitive and turn most of the junior talent away. Between
          off-cycles and (cycles of discouragement), talent is kind of just
          overflowing and getting wasted. The question left is: how do we close
          the gap between junior and senior talent?
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          Gaurav and I began circling this problem last week. Our first framing
          of the problem was broad and, in its own way, a little romantic:
        </p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            There is a lot of junior talent in AI safety, and not enough senior
            people to absorb it.
          </li>
          <li>Fellowships are narrow and hypercompetitive.</li>
          <li>Cold outreach is low-signal.</li>
        </ol>
        <p>
          This diagnosis felt right to us; but it was still too vague to build
          from.
        </p>
        <p>
          Our first attempt at turning it into a project was a brain dump.
          We&apos;d read that the recent CG post was on being capacity-constrained.
          Did we feel this way, too? From our own experiences, we&apos;d seen that
          a strong mentor-mentee relationship could set someone on the right
          track, maybe toward a fellowship, maybe toward a project, maybe toward
          a role. I was a byproduct of one person. Gaurav is a co-director of AI
          Safety Hub, and views this happening in real life (he also gets paid
          for this).
        </p>
        <p>
          We converged on the idea that tracking a mentee&apos;s progress, as much
          as their outputs, would be cool. We&apos;d both seen high-potential
          students and tried to help them. But not being domain experts
          ourselves, it was hard to assess whether the kinds of questions someone
          asked, how they flagged uncertainty, or if they were resourceful.
        </p>
        <p>
          In the middle of this brain dump, our first idea of a solution
          appeared: what if a prospective mentee interacted with a chatbot that
          was tuned to the researcher&apos;s actual open questions?
        </p>
        <p>
          As grand and innovative as it sounds, it felt directionally correct. Why
          not create a stronger signal of a mentee&apos;s engagement with, not
          just exposure to, relevant AI safety material to a mentor?
        </p>
        <p>
          It was also, at that stage, operationally useless. We didn&apos;t know
          who the user was, nor did we know what exact decision the output would
          improve. It was, at the time, an idea we&apos;d gotten over-excited by.
          Would this be a product, a placement tool, a grant proposal? Had we
          just derived from first principles a problem that has existed for
          ages?
        </p>
        <p>
          With the beauty of Claude Code and Wispr, we set out to begin building
          our prototype. In one HTML file with no backend or database, we tried
          to test if AI tutoring could produce evidence of meaningful engagement
          and if this could serve as evidence for the moment of outreach?
        </p>
        <p>
          We designed the prototype into a split screen. Paper on the left, AI
          tutor on the right.
        </p>
        <p>
          The tutor was not supposed to feel like a generic chatbot. I had spent
          enough time with flat, over-explaining AI &ldquo;teachers&rdquo; to know
          what I hated. Instead, we took inspiration from Gemini&apos;s Guided
          Learning feature to make the process active instead of passive for the
          user. We told it to push back on vagueness, ask probing questions, and
          be intellectually demanding.
        </p>
        <p>
          We wanted the summary of this conversation to feel relevant to the
          person whose attention you were trying to earn: the mentor. We injected
          mock open questions into a system prompt and told the AI to weave those
          in after a few exchanges. More than the mentee just reading something,
          we hypothesized that bending the conversation toward the exact problems
          the researcher cared about would generate a stronger signal.
        </p>
        <p>
          The summary we received was structured into five sections: learning arc,
          strongest moments, areas of uncertainty, engagement with open questions,
          and a final recommendation. We tried our hardest to prompt the engineer
          to sycophancy and inflation of weak engagement out of the chatbot.
          Moving forward, we&apos;ll consider fine-tuning the LLM for minimizing
          the loss between generic responses and tight evaluation.
        </p>
        <p>
          As we stress-tested our prototype, we understood the scarce resource we
          wanted to solve for was credibility over flattery; a useful summary did
          not make the user look good. It was one that shows &ldquo;this person
          struggled with X but showed real insight on Y&rdquo; instead of telling
          the researcher &ldquo;this person is excellent.&rdquo;
        </p>
        <p>
          Just as we thought we were uncovering breakthroughs, we were hit with
          another uncomfortable truth.
        </p>
        <p>There was a chance our center of gravity was wrong.</p>
        <p>
          This summary existed almost as an afterthought. The prototype was, in a
          deep sense, a learning tool masked as a screening tool. It was built
          around the mentee&apos;s experience, even though the actual bottleneck
          we cared about lived on the mentor&apos;s side. This wasn&apos;t a
          fallacy not a fallacy per say; it was a massive plus if the mentee was
          being active and learning from the chat bot experience, too.
        </p>
        <p>
          In the auto-demo we built, we included a written conversation so the
          product would look good on command. In this conversation, the user was
          sharp and unusually articulate, reasoning through specific supply-chain
          bottlenecks in a Compute Governance context. They were, in effect, the
          kind of person we&apos;d hope the system would surface.
        </p>
        <p>
          This told us that the product&apos;s value proposition depended on the
          participant actually being good. This made us curious what would happen
          when the person on the other side was merely decent, or confused, or
          promising but uneven. Could this be a chance for them to upskill in the
          process itself?
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          Around that time, a second kind of input landed: external field evidence.
          John Teichman&apos;s piece from MATS had just come out, mentioning how
          fellowships were valuable in large part because they gave organizations
          longer observation windows on candidates. The most useful hiring signal
          was a direct collaboration experience with a senior person which they
          could reference.
        </p>
        <p>
          This mattered to us because it (a) told us we were not hallucinating the
          bottleneck. Indeed, the people closest to talent pipelines and hiring
          constraints agreed that there was too much promising junior talent
          relative to the amount of senior attention.
        </p>
        <p>
          But (b), more importantly, organizations were saying they wanted
          calibrated human references and extended observation. An AI-generated
          summary was obviously not that. At best, it could be a pre-filter.
          It wouldn&apos;t be something that could replace the judgment of a
          trusted mentor.
        </p>
        <p>
          This was clarifying to Gaurav and I. It made the project smaller and
          more honest.
        </p>
        <p>
          We ended our Saturday there and said our goodbyes. The last 2 months
          in Cambridge had been a ride with Gaurav. We promised to see this
          project through after I returned to California. We hugged and parted
          our ways.
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          On the plane ride to California, I couldn&apos;t stop thinking about the
          end-user. The first person that came to mind was Josh Landes. Earlier in
          the month, Josh had mentioned he had trouble matching people to the right
          organizations. RAND was an organization that often asked him for internal
          referrals, but he had low conviction about his short-list of people.
        </p>
        <p>
          Most of these were BlueDot graduates. BlueDot&apos;s a free AI Safety
          upskilling resource that&apos;s trained thousands of people through
          cohort-based courses. They&apos;re a non-profit with the heart of Khan
          Academy and the body of a lean YC startup. They&apos;re meticulous
          trackers, having built their own course infrastructure because they
          wanted more visibility into engagement than off-the-shelf tools.
        </p>
        <p>
          But the data they track for their courses is still thin: completion,
          time spent, basic participation. Most importantly, BlueDot certificates
          are completion-based more than competency-based. To this end, they have
          a particular place in the AI Safety talent pipeline: upstream of
          fellowships, upstream of many more selective opportunities. They help
          people decide whether to move deeper into the field, and sometimes help
          them get there.
        </p>
        <p>
          So, Josh, an employee at BlueDot itself, was claiming there was a clear
          gap between &ldquo;completed a BlueDot course&rdquo; and &ldquo;someone I
          would actually put forward.&rdquo; His own words were:
        </p>
        <blockquote className="border-l-4 border-[var(--accent)]/60 pl-4 my-6 space-y-3 text-foreground/95 not-italic">
          <p>
            &ldquo;i&apos;m trying to make our courses harder and force people to
            actually do more on the course and just do more in general to give us
            a better read on them. involve facilitators more as like talent scouts
            to give us like a read on them. like i want more signal.&rdquo;
          </p>
          <p>
            &ldquo;getting to high conviction on somebody is still really tricky,
            especially if you have like low touch points. like they do a
            course.&rdquo;
          </p>
          <p>
            &ldquo;it&apos;s like matching my people that I have on my long list of
            people that I&apos;ve maybe DM&apos;d with that I&apos;ve had a one one
            with that I&apos;ve asked, like, write me a memo, write me a paper,
            like do a thing that shows that you&apos;re good.&rdquo;
          </p>
          <p>
            &ldquo;i sat down this guy from RAND... i made them actually tell me
            who they were looking for. and eventually it kind of boiled down to,
            well, they need to be really good and situationally aware and kind of a
            really good analyst. and then it got kind of fuzzy and really hard to
            dig into.&rdquo;
          </p>
          <p>
            &ldquo;if i have enough confidence, i&apos;m like, i&apos;d like a
            personal intro. and then it&apos;s on them to actually make it through
            the process. if it&apos;s more like, oh, they should be aware of this
            role, i&apos;ll just send them the role.&rdquo;
          </p>
        </blockquote>
        <p>
          Sorry, Josh, for including an AI notetaker on our call. You may find this
          borderline eerie, but in my defense, it&apos;s data-driven
          decision-making.
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          Recalling him saying this was much more useful than anything I had been
          telling myself. He wanted more signal: getting to high conviction on
          someone was hard. He sat with hiring managers, tried to get them to say
          who they really wanted, and often found the answer dissolving into
          something fuzzy: really good, situationally aware, strong analyst, hard
          to define but obvious when present. And when he had enough confidence,
          he made a warm intro. What about when he didn&apos;t? Josh is a D1
          community-builder, but without being an AI Governance person, is the
          best person to evaluate the quality of a niche AI Governance memo being
          a fit for RAND?
        </p>
        <p>
          Broadly, this conversation achieved what the prototype could&apos;ve done
          by itself. It named (a) the user: Josh; (b) the decision: who gets a warm
          intro (c); the bottleneck: the gap between course completion and
          placement conviction.
        </p>
        <p>
          And most importantly, it helped us realize we did not need to integrate
          with RAND&apos;s hiring process or redesign anyone else&apos;s applicant
          tracking system. This output, for now, could just fit Josh&apos;s
          workflow. Once we saw this clearly, the project got both more detailed
          and less grand.
        </p>
        <p>
          Over the last week, I&apos;ve tried decomposing this into pieces. Some
          questions I&apos;ve been asking are:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            How do we extract enough specificity from a hiring-manager conversation
            to build a session that is not generic?
          </li>
          <li>
            Does a reading-and-discussion format actually test the things Josh
            cares about? Or does it only test whether someone can talk well about
            papers?
          </li>
          <li>Will graduates opt in and take the interaction seriously?</li>
          <li>
            What should the summary contain? Should it recommend, or just present
            evidence?
          </li>
          <li>
            Is it faster to review than the current mixture of DMs, calls, and memo
            requests?
          </li>
        </ul>
        <p>
          I also began to wonder if the bottleneck to creating this was less on the
          engineering/tooling side, and more on its trust. Could people use another
          model live to game the answers? How would we make this hard to fake? How
          much would people trust this over notes, memos, or short work tests?
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          These are questions that need answers, eventually. But today, perhaps
          the first step is not to build more software. It might be to map
          Joshua&apos;s current workflow, collect a few historical cases, and
          figure out what he currently trusts most. Is it a memo? a call?
          someone else&apos;s impression?
        </p>
        <p>
          Then, before building anything serious, perhaps we should run a handful
          of sessions manually. As Josh reads them alongside the transcripts, we
          can ask him if this changed or sped up his judgment. If the answer is
          yes, then it makes sense to build further.
        </p>
      </div>

      <Divider />

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          There is still a lot I don&apos;t know. Maybe the hiring-manager
          conversations are too vague to generate differentiated sessions, or maybe
          the summary will feel shallow. Maybe the people who opt in will have a
          selection bias (which could be good actually?). But at least the shape of
          this uncertainty is better now; it is narrower and for now, has found a
          hypothetical home in Joshua Landes&apos;s workflow.
        </p>
        <p>
          I&apos;m pleased with the Inkhaven progress today. Gaurav and I started
          with a broad complaint about mentorship in AI safety. I haven&apos;t
          shown him this blog yet, but my personal win is that this project has
          gotten smaller. Building an early prototype was super useful for finding a
          center of gravity, even if it might not be the one we (claude) coded.
        </p>
        <p>Onto the next conversation with Josh.</p>
      </div>
    </article>
  );
}
