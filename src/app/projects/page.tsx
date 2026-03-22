import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work · Ady Mehta",
  description:
    "Generalist work across research, policy, field-building, and more—Ady Mehta.",
};

export default function ProjectsPage() {
  return (
    <div className="py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Work</h1>

      <p className="mb-8 sm:mb-10">
        I enjoy being a generalist. I strongly believe good field-building can
        come from working across domains. I want to inhabit many worlds and
        build much empathy.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Research
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8 sm:mb-10">
        <li>
          Building Agent IDs for Singapore at the{" "}
          <a
            className="hyperlink"
            href="https://erafellowship.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ERA Fellowship
          </a>
          .
        </li>
        <li>
          Co-authored the{" "}
          <a
            className="hyperlink"
            href="https://www.remotelabor.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remote Labor Index
          </a>{" "}
          at the Center for AI Safety (CAIS).
        </li>
        <li>Incoming eval benchmark also at CAIS.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Policy
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8 sm:mb-10">
        <li>
          Proposing an{" "}
          <a
            className="hyperlink"
            href="https://www.dailycal.org/news/campus/uc-institute-hosts-symposium-to-discuss-ai-policy/article_039b4c0b-cd15-4383-8903-4c20273154f1.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Dividend Fund
          </a>{" "}
          in California.
        </li>
        <li>
          Advocated for{" "}
          <a
            className="hyperlink"
            href="https://hsph.harvard.edu/research/eating-disorders-striped/"
            target="_blank"
            rel="noopener noreferrer"
          >
            youth eating disorder legislation
          </a>
          .
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Field-building
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8 sm:mb-10">
        <li>
          Hosted{" "}
          <a
            className="hyperlink"
            href="https://www.linkedin.com/posts/aditya-mehta-7892311a2_last-weekend-we-organized-ibar-the-intercollegiate-activity-7321214998842662913-P6aO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IBAR
          </a>
          .
        </li>
        <li>
          Hosted the SF{" "}
          <a
            className="hyperlink"
            href="https://builddefenses.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            def/acc hackathon
          </a>
          .
        </li>
        <li>Hosted OASIS 6.0 (link to add).</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Operations / misc
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8 sm:mb-10">
        <li>
          <a
            className="hyperlink"
            href="https://civai.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CivAI
          </a>
          {" "}
          — outreach and university programming (exact resume line to refine).
        </li>
        <li>
          <a
            className="hyperlink"
            href="https://palisaderesearch.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palisade Research
          </a>
          {" "}
          — outreach and ops support (exact resume line to refine).
        </li>
        <li>
          Writing on Goodfire for{" "}
          <a
            className="hyperlink"
            href="https://contrary.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contrary
          </a>{" "}
          (piece URL to add when live).
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
        Fun
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Fibron (link and blurb to add).</li>
        <li>
          <a
            className="hyperlink"
            href="https://www.docubridge.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DocuBridge
          </a>
          .
        </li>
        <li>Math modeling (write-up to add).</li>
      </ul>
    </div>
  );
}
