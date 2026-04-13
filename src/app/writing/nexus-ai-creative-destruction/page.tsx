import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

/** Hyperlinks extracted from the source PDF (deduplicated; https where applicable). */
const SRC = {
  stanfordCanariesPdf:
    "https://digitaleconomy.stanford.edu/wp-content/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf",
  stanfordCanariesPage:
    "https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/",
  stanfordNewsLabor:
    "https://digitaleconomy.stanford.edu/news/ai-and-labor-markets-what-we-know-and-dont-know/",
  yaleBudgetLab:
    "https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-september-cps-update",
  yalePressTechTarget:
    "https://www.techtarget.com/searchenterpriseai/feature/AIs-effect-on-jobs-not-what-expected-Yale-study-finds",
  adpResearch:
    "https://www.adpresearch.com/yes-ai-is-affecting-employment-heres-the-data/",
  allenEngels: "https://doi.org/10.1016/j.eeh.2009.04.004",
  daltonLogan: "https://doi.org/10.2307/2951599",
  cfrIndustrialization:
    "https://education.cfr.org/learn/reading/what-are-causes-and-consequences-industrialization",
  kogelPrskawetz: "https://www.jstor.org/stable/40216048",
  aghionBook: "https://www.jstor.org/stable/1147137",
  mokyrEuropean: "https://www.jstor.org/stable/40216109",
  jstor41262428: "https://www.jstor.org/stable/41262428",
  doi2593010: "https://doi.org/10.2307/2593010",
  jstor25149563: "https://www.jstor.org/stable/25149563",
  jstor3132364: "https://www.jstor.org/stable/3132364",
  wsjWhaleOil:
    "https://www.wsj.com/articles/SB10001424052702303678404579536213202032436?reflink=desktopwebshare_permalink",
  nytWhaleOil: "https://www.nytimes.com/2008/08/03/nyregion/03towns.html",
  energyWarCurrents: "https://www.energy.gov/articles/war-currents-ac-vs-dc-power",
  yaleRuralElectrification:
    "https://economics.yale.edu/sites/default/files/lewis_severnini_rural_electrification_dec2017.pdf",
  encyclopediaREA:
    "https://www.encyclopedia.com/education/news-and-education-magazines/rural-electrification-administration-1934-1941",
  strongTownsREA:
    "https://archive.strongtowns.org/journal/2013/4/25/the-rural-electrification-act.html",
  henryFordAssembly: "https://askus.thehenryford.org/K12/faq/433848",
  csisAllen: "https://www.csis.org/people/gregory-c-allen",
} as const;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="hyperlink"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export const metadata: Metadata = {
  title: "Nexus: How AI and Creative Destruction are Changing the World · Ady Mehta",
  description:
    "AI, labor markets, and what history—from the Industrial Revolution to electrification—teaches us about creative destruction.",
};

export default function NexusAICreativeDestructionPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        Aditya Mehta &amp; Ana-Maria-Elena Radu
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Nexus: How AI and Creative Destruction are Changing the World
      </h1>

      <div className="space-y-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold pt-2">Key takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Whether AI leads to shared prosperity is not preordained.
          </li>
          <li>
            AI is both an enabler of technology and a crystallization of the
            theory of creative destruction.
          </li>
          <li>
            AI sits in the chain of historical technological diffusion—after the
            Industrial Revolution, electrification, and mass production.
          </li>
          <li>
            Firms often adjust employment through hiring slowdowns, attrition,
            and task substitution rather than mass layoffs, capturing
            productivity gains while minimizing cost.
          </li>
          <li>
            History shows productivity gains do not automatically raise wages—as
            in Engels&apos; Pause during the Industrial Revolution.
          </li>
          <li>
            AI&apos;s importance for scientific research in materials science and
            medicine is rising, producing valuable results at remarkable speed.
          </li>
        </ul>

        <h2 className="text-lg sm:text-xl font-bold pt-6">Introduction</h2>
        <p>
          Economists cannot seem to agree on what AI is doing to jobs. In August
          2025, researchers at{" "}
          <ExtLink href={SRC.stanfordCanariesPdf}>
            Stanford&apos;s Digital Economy Lab
          </ExtLink>{" "}
          analyzed high-frequency payroll data from ADP (
          <ExtLink href={SRC.adpResearch}>see ADP Research&apos;s discussion</ExtLink>
          )—the world&apos;s largest payroll provider—to track employment
          changes after the release of ChatGPT. They found a 13–20% decline in
          employment among workers aged 22–25 compared with other age groups in
          the most AI-exposed occupations, with software development among the
          hardest hit. Interestingly, the mechanism was not layoffs: firms were
          simply hiring fewer junior workers. A project page for the same line of
          work is{" "}
          <ExtLink href={SRC.stanfordCanariesPage}>here</ExtLink>.
        </p>
        <p>
          Around the same time, researchers at{" "}
          <ExtLink href={SRC.yaleBudgetLab}>Yale&apos;s Budget Lab</ExtLink>{" "}
          examined aggregate labor-market indicators and reported no discernible
          disruption. Unemployment rates remained low; occupation employment
          shares looked broadly stable. At the macro level, the labor market
          appeared unchanged. Press coverage of that theme appears in{" "}
          <ExtLink href={SRC.yalePressTechTarget}>
            TechTarget&apos;s summary of the Yale findings
          </ExtLink>
          . One study detects a missing rung on the ladder; the other counts the
          ladder still standing.
        </p>
        <p>
          Employment shocks are not new, but the way they manifest today is
          unlike most historical examples. How can workers on the front lines
          feel real and immediate harm while aggregate indicators stay calm? How
          can technological disruption be both present and absent at once?
        </p>
        <p>
          The seeming contradiction is simple to resolve. It arises not because
          the economy is behaving strangely, but because we are measuring
          different layers of the same process. To make sense of it, we need a
          framework that distinguishes where disruption appears from what
          constrains adjustment.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Micro and macro: measurement and constraint
        </h2>
        <p>
          Looking further back helps. History shows tension between individual
          experience and economic data—sometimes inverted. Local innovations and
          tech shifts occurred while overall living standards stayed flat because
          of demographic gravity: the Malthusian trap produced micro changes
          without macro progress.
        </p>
        <p>
          As old arrangements break and new ones take shape, diffusion and
          creativity do not unfold evenly. The former arrives quickly and
          locally; the latter is often delayed, diffuse, and unevenly
          distributed. Relying too heavily on averages flattens temporal and
          structural complexity into misleading calm.
        </p>
        <p>
          Two dimensions are often conflated. First,{" "}
          <strong>measurement</strong>: some effects appear only at the micro
          level—tasks, hiring, firm reorganization—while others appear only at
          the macro level—occupations, sectors, national statistics.
          Historically, disruption almost always surfaces at the micro level
          first, long before it registers in aggregate data.
        </p>
        <p>
          Second, <strong>constraint</strong>: at different moments, economic
          activity is limited either by labor (skill, time, organization) or by
          infrastructure (networks, capital-intensive systems, standards,
          access). Confusion arises when we debate labor outcomes while the
          binding constraint has shifted to infrastructure, or when we look for
          macro effects while the damage is still micro.
        </p>
        <p>
          The earliest disruption often appears when technology reshapes what
          people do before it eliminates whether they work at all. Labor
          remains essential, but its role is reorganized. Late eighteenth-century
          Britain offers a clear illustration.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Lessons from the Industrial Revolution
        </h2>
        <p>
          Beginning in the 1760s, innovations such as the spinning jenny and
          water frame automated the upstream task of spinning yarn (
          <ExtLink href={SRC.cfrIndustrialization}>
            background on industrialization
          </ExtLink>
          ). Yarn became cheap and abundant almost overnight. Weaving—the downstream process
          that turned yarn into cloth—remained a manual craft. The result was
          not immediate unemployment but a boom in handloom weaving.
          Employment expanded and wages even rose temporarily, because weaving
          became the bottleneck. Technology destroyed one occupation while
          temporarily intensifying demand for another—acting as a complement to
          labor rather than a substitute.
        </p>
        <p>
          The power loom, widely adopted by industrialists in Great Britain,
          accelerated profits but also contributed to a significant rise in
          unemployment and deep societal divisions. The Luddites, who smashed
          power looms in response to mechanization, were not simply resisting
          progress; they were early detectors of a shifting task structure that
          would eventually transform their world. They were the canaries,
          signaling danger before aggregate data caught up. Ultimately,
          industrialists prevailed as the British government enacted legislation
          prohibiting destruction of power looms and publicly denounced the
          Luddites.
        </p>
        <p>
          Modern technologies follow the same logic: disruption first appears
          where tasks are most easily codified. Entry-level work sits closest to
          routine, repeatable activities. When firms adopt new tools, they rarely
          begin by firing experienced workers; instead, they quietly hire fewer
          novices. That is why micro-level evidence can show real harm even while
          macro indicators stay stable—the damage concentrates at the point of
          entry, not yet at the level of occupations. Over time, task-level
          reorganization can give way to occupational displacement once
          substitution replaces complementarity.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Engels&apos; Pause and wages
        </h2>
        <p>
          Economic historian Robert C. Allen explains why wages stagnated
          despite a per capita GDP boom driven by immense technological
          upheaval—a theory he calls Engels&apos; Pause. In{" "}
          <em>
            <ExtLink href={SRC.allenEngels}>
              Engels&apos; pause: Technical change, capital accumulation, and
              inequality in the British industrial revolution
            </ExtLink>
          </em>
          , he argues that between 1800 and 1830 the famous inventions raised
          aggregate total factor productivity growth to about 0.69% per year.
          That technology shock pushed output-per-worker growth to about 0.63%
          per annum but had little impact on capital accumulation or real
          wages—which remained constant.
        </p>
        <p>
          Technological innovations and booms do not translate quickly into
          higher wages or quality of life for workers at the bottom of the
          pyramid; that increase is often a slow process taking decades. Wages
          rose much faster toward the end of the nineteenth century as society
          moved away from older systems toward capitalism and a belief that the
          future belonged to the bold.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Creative destruction
        </h2>
        <p>
          John T. Dalton and Andrew J. Logan, in{" "}
          <em>
            <ExtLink href={SRC.daltonLogan}>Creative Destruction</ExtLink>
          </em>
          , examine the Industrial Revolution from a Schumpeterian perspective.
          They describe creative destruction as a force
          that &quot;sculpts the riverbed over which the waters of economic
          history flow&quot;—which is why it captured Schumpeter&apos;s
          imagination generations before Silicon Valley reintroduced
          &quot;disruption&quot; to the public.
        </p>
        <p>
          Joseph Schumpeter described how technological advancement propels
          society by replacing outdated systems with new innovations.
          Destruction is inherent to progress as disruptive technologies supplant
          existing industries. Dalton and Logan clarify: &quot;Creative refers to
          new innovations brought to market,&quot; while &quot;Destruction refers
          to the fate of those antiquated products, processes, and social modes
          of organisation that such innovations replace.&quot; Schumpeter
          contended that long-term effects are often positive—the decline of one
          industry gives rise to several new ones. From a Schumpeterian angle,
          the fear and hardship of the Industrial Revolution were transitional
          challenges; subsequent expansion generated many new professions.
        </p>
        <p>
          People often reject this when facing the present—understandably,
          self-preservation favors the near term. The instinct to oppose
          technologies that could cause widespread unemployment was shared not
          only by workers but by rulers. In{" "}
          <em>
            <ExtLink href={SRC.aghionBook}>
              The Power of Creative Destruction
            </ExtLink>
          </em>
          , the authors recount that in 1589 William Lee presented a machine for knitting stockings to Queen
          Elizabeth I, hoping for support for large-scale adoption. After
          reviewing it, she was against it, telling the inventor to consider what
          his invention could do to her poor subjects—&quot;It would assuredly
          bring them ruin by depriving them of employment, thus making them
          beggars.&quot;
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Escaping the Malthusian trap
        </h2>
        <p>
          Tomas Kögel and Alexia Prskawetz summarize Malthus&apos;s two
          assumptions (
          <ExtLink href={SRC.kogelPrskawetz}>
            <em>Agricultural Productivity Growth and Escape from the Malthusian Trap</em>
          </ExtLink>
          ): higher per capita income above an equilibrium leads to population
          growth, and larger population dilutes per capita resources so
          consumption falls back to equilibrium—generating the trap in which
          technological innovation fails to produce stable GDP gains because
          population growth eventually causes stagnation.
        </p>
        <p>
          In{" "}
          <em>
            <ExtLink href={SRC.aghionBook}>
              The Power of Creative Destruction
            </ExtLink>
          </em>
          , Aghion, Antonin, and Bunel note that in Malthus&apos;s world, only
          demographic decline from abstinence or restricted childbearing could
          increase GDP. Joel Mokyr, in{" "}
          <em>
            <ExtLink href={SRC.mokyrEuropean}>
              Why Was the Industrial Revolution a European Phenomenon?
            </ExtLink>
          </em>
          , argues the trap&apos;s application is historically contingent: if human
          knowledge and economic infrastructure are sufficiently positive
          functions of population, Malthusian constraints can be overcome.
        </p>
        <p>
          How did Britain escape? Aghion, Antonin, and Bunel emphasize the shift
          from agriculture to manufacturing, moving the economic focus from
          land to capital—eliminating setbacks from population growth and
          unlocking compound growth. Capital is not fixed like land; it
          accumulates over time. They summarize: the shift relies on threshold
          effects—population, demand, investment. Mokyr complements this with
          an institutional story: industrial societies adopted a scientific
          approach to innovation, emphasizing practical knowledge. After 1820,
          innovation did not trail off—it gathered force in continuous
          improvements and new applications.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          Electricity and uneven access
        </h2>
        <p>
          Not all disruption is governed by labor; sometimes the constraint is
          access to the system. Electricity transformed the nineteenth century.
          Before it, cities depended on whale oil for light, lubrication, and
          more. Large-scale electrification made whale oil obsolete, with
          widespread unemployment in that industry—reported in the{" "}
          <ExtLink href={SRC.wsjWhaleOil}>
            <em>Wall Street Journal</em>
          </ExtLink>{" "}
          and{" "}
          <ExtLink href={SRC.nytWhaleOil}>
            <em>New York Times</em>
          </ExtLink>
          —yet destruction of whale oil did not automatically guarantee universal
          access to electricity.
        </p>
        <p>
          The 1880s &quot;War of the Currents&quot; pitted Edison&apos;s direct
          current against Tesla&apos;s alternating current (
          <ExtLink href={SRC.energyWarCurrents}>
            U.S. Department of Energy overview
          </ExtLink>
          ). DC could not easily be converted across voltages; AC could, using
          transformers. AC prevailed as cities were designed for a future where
          electricity was baseline, not luxury.
        </p>
        <p>
          By 1930, nearly 90% of urban and rural non-farm dwellings in the U.S.
          had electricity—yet only 10.9% of American farms were on the grid.
          The barrier was not technical; it was the unit economics of
          distribution. Transmission lines cost roughly $1,500–$2,000 per mile
          (tens of thousands in today&apos;s dollars). In cities, cost could be
          amortized across many customers per mile; in sparse rural areas,
          private utilities had little incentive to extend the network. Old ways
          declined everywhere; new capabilities concentrated where networks
          already existed.
        </p>
        <p>
          The Rural Electrification Administration did not halt creative
          destruction—it tried to reshape outcomes. Engineers cut construction
          costs with better conductors and lines; the REA paired that with
          low-interest loans to customer-owned cooperatives where coverage—not
          profit—was the goal (
          <ExtLink href={SRC.yaleRuralElectrification}>
            Lewis &amp; Severnini on rural electrification
          </ExtLink>
          ;{" "}
          <ExtLink href={SRC.encyclopediaREA}>
            <em>Encyclopedia</em> entry on the REA
          </ExtLink>
          ;{" "}
          <ExtLink href={SRC.strongTownsREA}>
            Strong Towns on the Rural Electrification Act
          </ExtLink>
          ). By 1950, cooperatives had extended power to millions of farms
          private utilities had written off. Deliberate public action overcame
          market incentives favoring concentration over inclusion.
        </p>
        <p>
          The War of the Currents also shows how standards and architectures
          allocate value. Edison&apos;s DC implied local, fragmented networks;
          Tesla&apos;s AC enabled long-distance transmission and centralized
          grids. Edison waged a campaign emphasizing AC&apos;s dangers—public
          electrocutions of animals, and supporting the electric chair using AC
          to associate Westinghouse with death. Despite that, AC&apos;s
          practical advantages were decisive. Infrastructure battles are rarely
          settled by technical merit alone; incumbency, narrative, and power
          matter. Before standards settle, firms duplicate effort and
          productivity lags—not because technology fails, but because
          coordination and trust lag behind capability.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Model T and the ladder</h2>
        <p>
          Henry Ford&apos;s Model T (1908) became transformative not only as a
          car but as a system: in 1913 the moving assembly line cut assembly time
          from roughly 12 hours to about 93 minutes (
          <ExtLink href={SRC.henryFordAssembly}>
            The Henry Ford on the assembly line
          </ExtLink>
          ). Within a decade, an
          automobile cost less than a high-quality horse-drawn carriage.
          Carriage makers were not gradually reassigned—their industry ceased to
          exist. New sectors followed: petroleum, civil engineering (roads,
          bridges, highways), and services—motels, diners, repair shops, suburban
          real estate.
        </p>
        <p>
          New industries absorb labor, but not necessarily the same workers. A
          fifty-year-old wheelwright did not seamlessly become a petroleum
          engineer; skills were rendered valueless while opportunities flowed to a
          younger, differently skilled cohort. For some, the ladder is not just
          hard to climb—it is removed. Firms hoard labor, freeze hiring, or use
          attrition; displaced workers may move into informal roles missed by
          headlines. By the time macro disruption is visible, structural change
          is already advanced—destruction becomes legible at scale years after it
          began in quieter ways.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">
          AI and the four patterns at once
        </h2>
        <p>
          Artificial intelligence is unusual because it activates multiple
          patterns simultaneously. Stanford-style hiring data shows task-level
          disruption concentrated among junior workers (
          <ExtLink href={SRC.stanfordNewsLabor}>
            Digital Economy Lab on AI and labor markets
          </ExtLink>
          ); Yale-style aggregates reflect stability with new industries
          buffering the shock. The global compute divide shows infrastructure
          inequality—as{" "}
          <ExtLink href={SRC.csisAllen}>Gregory C. Allen (CSIS)</ExtLink> has
          identified as a defining geopolitical bottleneck of the AI era. Inside
          firms, shadow AI tools and competing standards expose organizational
          friction.
        </p>
        <p>
          Looking only at aggregate statistics is like watching average sea level
          to detect a storm: the water looks calm in the aggregate while the
          coastline—entry-level cognitive work—is battered. Low overall
          unemployment does not negate structural signals in exposed sectors; it
          can confirm them. Task-level disruption appears quickly; standards stay
          unsettled; infrastructure advantages concentrate; aggregate statistics
          adjust slowly, buffered by inertia and demographics. Different layers
          yield different truths—they are not contradictions.
        </p>
        <p>
          That is less evidence that creative destruction has changed its nature
          than that its internal dynamics are moving faster while habitual
          measures lag the lived experience of those at the margins. The
          canaries signal change before aggregate data catches up.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-4">Conclusion</h2>
        <p>
          Schumpeter was right that creative destruction drives long-term growth,
          but he warned its benefits are not automatic or evenly shared. Gains
          depend on institutions, policies, and efforts to rebuild after
          disruption. The Industrial Revolution eventually raised living
          standards—after decades of stagnation and conflict. Electrification
          transformed society—after public action widened access. In each case,
          progress was real, but its moral character depended on how the
          transition was governed. The handloom weaver&apos;s prosperity rested
          on a fragile bottleneck; once power looms matured and factory weaving
          became viable, the bottleneck—and its protection—disappeared.
        </p>
        <p>
          Historians still debate what let the Industrial Revolution escape the
          Malthusian trap: capital and thresholds versus institutions and the
          &quot;industrial Enlightenment.&quot; The coexistence of
          micro-disruption and macro-stability is not a paradox to dismiss but a
          warning to understand. Creative destruction destroys first and creates
          later—and social strain accumulates in the gap. Whether that strain
          hardens into inequality or is softened by adaptation is not determined
          by technology alone, but by choices societies make while averages still
          look reassuringly calm.
        </p>
        <p>
          None of our frameworks is certain; all are imperfect. Waiting for
          certainty is itself a choice. The missing rung is visible now, before
          the ladder fully collapses. The canaries have already signaled danger.
          The question is whether we respond in time—for everyone downstream of
          the next wave of change.
        </p>

        <h2 className="text-lg sm:text-xl font-bold pt-8">
          Sources &amp; links (from the PDF)
        </h2>
        <p className="text-[0.95rem] text-neutral-700 dark:text-neutral-300">
          The PDF contained 30 hyperlinks (some duplicated). Below are the
          canonical destinations we used; additional JSTOR links from the
          manuscript are listed for completeness.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[0.95rem] break-words">
          <li>
            <ExtLink href={SRC.stanfordCanariesPdf}>
              Stanford Digital Economy Lab — Canaries in the Coal Mine (PDF)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.stanfordCanariesPage}>
              Stanford — Canaries project page
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.stanfordNewsLabor}>
              Stanford — AI and labor markets (overview)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.yaleBudgetLab}>Yale Budget Lab — CPS update</ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.yalePressTechTarget}>
              TechTarget — Yale labor-market coverage
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.adpResearch}>ADP Research — AI and employment</ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.cfrIndustrialization}>
              CFR — industrialization (context)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.allenEngels}>
              Robert C. Allen — Engels&apos; pause (DOI)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.daltonLogan}>
              Dalton &amp; Logan — <em>Creative Destruction</em> (JSTOR)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.kogelPrskawetz}>
              Kögel &amp; Prskawetz — Malthusian trap (JSTOR)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.aghionBook}>
              Aghion et al. — <em>The Power of Creative Destruction</em> (JSTOR)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.mokyrEuropean}>
              Mokyr — European Industrial Revolution (JSTOR)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.wsjWhaleOil}>
              <em>WSJ</em> — whale oil / electrification
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.nytWhaleOil}>
              <em>NYT</em> — whale oil towns
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.energyWarCurrents}>
              U.S. DOE — War of the Currents
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.yaleRuralElectrification}>
              Yale — Lewis &amp; Severnini on rural electrification (PDF)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.encyclopediaREA}>
              <em>Encyclopedia.com</em> — Rural Electrification Administration
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.strongTownsREA}>
              Strong Towns — Rural Electrification Act
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.henryFordAssembly}>
              The Henry Ford — assembly line FAQ
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.csisAllen}>CSIS — Gregory C. Allen</ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.jstor41262428}>
              JSTOR — additional reference (stable/41262428)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.doi2593010}>
              DOI 10.2307/2593010
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.jstor25149563}>
              JSTOR — additional reference (stable/25149563)
            </ExtLink>
          </li>
          <li>
            <ExtLink href={SRC.jstor3132364}>
              JSTOR — additional reference (stable/3132364)
            </ExtLink>
          </li>
        </ul>
      </div>
    </article>
  );
}
