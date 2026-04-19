import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agent IDs for Singapore · Ady Mehta",
  description:
    "Reflections from an ERA fellowship on Agent ID research, intuition-building, and framing credentials for stakeholders.",
};

export default function AgentIdsForSingaporePost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Agent IDs for Singapore
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <p>
          I came into the ERA not knowing what to expect. It was my first AI
          Safety research fellowship; it was a bit surreal to have gotten in,
          given that these things seemed so far away even just 5 months ago.
        </p>
        <p>
          The vibe at ERA was professional in a way I hadn&apos;t quite been
          around before. There weren&apos;t many other undergrads, which was
          cool because people were coming in with previous experience in
          managing their own projects. I certainly felt like a lost little
          nomad in the space.
        </p>
        <p>
          I was fresh off organizing OASIS. This was a 3-day conference in
          Constellation, an AI Safety building in Berkeley, for other AI Safety
          university group organizers. What stuck with me in this process was
          the feeling of seeing something coming to fruition. It was wonderful
          and joyous to see an impact manifest right there, and feeling the
          sense of shared camaraderie and empowerment was something that made me
          happy. I wanted to elicit a similar human angle to research, if space
          allowed.
        </p>
        <p>
          So I entered ERA with this naive and vague direction of wanting
          field-building to be the backdrop to the research. I wanted to build
          something that could reach people. And I wanted to avoid writing a
          research paper that no one would actually read. One salient way of
          seeing this through seemed to be taking something existing and turning
          it into something people could interact with in a sense that was
          deeper than just reading words.
        </p>
        <p>
          Something that I found was an Agent ID project. The premise was to
          create a standardized identity protocol for Agents before we let them
          run around on the web. How could we know if they were safe? How could
          the site know? We wanted to treat agent IDs as a set of identifiers
          and metadata that AI agents should include in their interactions with
          other entities.
        </p>
        <p>
          However, as I started with the project, I was met with a bunch of
          hobble jobble. This was research that was previously done, but I
          couldn&apos;t make sense of it yet
        </p>
        <p>
          First off, this was complex. To reorient, think about the impact of
          the Agent ID I tried creating this restructured diagram. Hopefully,
          it was able to communicate the point of an Agent ID
        </p>
        <div className="h-12 sm:h-16" aria-hidden />
        <p>
          To this end, the first thing I did was create a clickable planning
          tool for myself. This was a supply chain that was hard to hold in my
          head. But after the process and end goal were established, it made
          sense to try building an intuition for why this project even mattered
          in the first place.
        </p>
        <p>
          But after sharing this with Sam (my project mentor, who has carried
          more of this project than I have and is the reason any of the good
          design instincts are where they are), he reframed it as a transition
          step between a static diagram and a proof of concept.
        </p>
        <p>
          After this, we tried to understand if other people trying to wrap
          their heads around the project could be in a similar position. In
          some ways, my understanding could be a representative sample of how
          Singapore AISI might approach this. They were also smart, had a lot of
          context, but perhaps had not built their intuition for Agent IDs from
          first principles yet, because it was hard to get them to understand.
        </p>
        <p>
          So, we re-evaluated the nature of the project and figured we&apos;d
          spend the project on building something that would make the case for
          why the credential mattered in the first place.
        </p>
        <p>
          First, we thought that less information in an Agent ID could make
          incident response harder, but in a gradual, calming way. As we build
          the prototype, we found that certain missing sections could make trust
          VERY hard. If the deployer didn&apos;t sign the ID, it&apos;d be easy
          to detect the response, but it&apos;d still be hard to find out who
          was accountable.
        </p>
        <p>
          As we internalized this concept, we also came to internalize that the
          agent ID instance was a carrier, not an author. It was something that
          held a place for the provider to sign for the model and for its own
          claims, while a certifier signs for safety, or a deployer signs for
          deployment. This helped us to reframe what an agent could and cannot
          &quot;prove.&quot;
        </p>
        <p>
          Now that we&apos;ve built our own intuition of what role each
          contributor in the agent ID had, we wanted to think from the
          stakeholders&apos; perspective. Would they care more about what the
          credential contained or what the service lost when a given section of
          ID was removed?
        </p>
        <p>Part 2 to be written soon</p>
      </div>
    </article>
  );
}
