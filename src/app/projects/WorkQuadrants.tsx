"use client";

import { useState, type ReactNode } from "react";
import "./WorkQuadrants.css";

type Quadrant = {
  id: string;
  title: string;
  /** Shown under the title; omit when using headerTooltip only (e.g. Research). */
  blurb?: string;
  /** Native browser tooltip on hover over the quadrant title row. */
  headerTooltip?: string;
  items: ReactNode[];
  ordered?: boolean;
};

const QUADRANTS: Quadrant[] = [
  {
    id: "research",
    title: "Research",
    headerTooltip: "AI safety, evals, and governance research.",
    ordered: true,
    items: [
      <>
        April &apos;26:{" "}
        <a
          className="hyperlink"
          href="https://www.ai-wellbeing.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI-Wellbeing
        </a>{" "}
        at the{" "}
        <a
          className="hyperlink"
          href="https://safe.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Center for AI Safety
        </a>
        .
      </>,
      <>
        Feb &apos;26:{" "}
        <a
          className="hyperlink"
          href="https://agentids-sash.github.io/agentids/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agent IDs
        </a>{" "}
        at the{" "}
        <a
          className="hyperlink"
          href="https://erafellowship.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ERA Fellowship
        </a>
        .
      </>,
      <>
        Dec &apos;25:{" "}
        <a
          className="hyperlink"
          href="https://www.dailycal.org/news/campus/uc-institute-hosts-symposium-to-discuss-ai-policy/article_039b4c0b-cd15-4383-8903-4c20273154f1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Dividend Funds
        </a>{" "}
        at the{" "}
        <a
          className="hyperlink"
          href="https://citris-uc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CITRIS Institute
        </a>
        .
      </>,
      <>
        Oct &apos;25:{" "}
        <a
          className="hyperlink"
          href="https://www.remotelabor.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Automation
        </a>{" "}
        at the{" "}
        <a
          className="hyperlink"
          href="https://safe.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Center for AI Safety
        </a>
        .
      </>,
    ],
  },
  {
    id: "field-building",
    title: "Field-building",
    items: [
      <>
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
      </>,
      <>
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
      </>,
      <>
        Hosted{" "}
        <a
          className="hyperlink"
          href="https://kairos-project.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OASIS 6.0
        </a>
        .
      </>,
    ],
  },
  {
    id: "operations",
    title: "Operations",
    items: [
      <>
        Lead generation for 250+ stakeholders at{" "}
        <a
          className="hyperlink"
          href="https://civai.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CivAI
        </a>
        .
      </>,
      <>
        Doubled policy briefing sign ups in 48 hours for{" "}
        <a
          className="hyperlink"
          href="https://palisaderesearch.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Palisade Research
        </a>
        .
      </>,
      <>
        Wrote{" "}
        <a
          className="hyperlink"
          href="https://research.contrary.com/company/goodfire"
          target="_blank"
          rel="noopener noreferrer"
        >
          10K+ words
        </a>{" "}
        on Goodfire for{" "}
        <a
          className="hyperlink"
          href="https://contrary.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contrary
        </a>{" "}
        VC.
      </>,
    ],
  },
  {
    id: "fun",
    title: "Fun",
    items: [
      <>
        Tried making a{" "}
        <a
          className="hyperlink"
          href="https://conrad.spacecenter.org/challenge-alumni/meet-the-alc-board/"
          target="_blank"
          rel="noopener noreferrer"
        >
          space parachute
        </a>{" "}
        for Mars rovers out of plants.
      </>,
      <>
        Helped build{" "}
        <a
          className="hyperlink"
          href="https://www.docubridge.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI for finance bros
        </a>
        , building Excel-native data entry automations.
      </>,
      <>
        Modeled{" "}
        <a
          className="hyperlink"
          href="https://drive.google.com/file/d/1hgcZrvOGD6_IOXk0tUziH7EhSKms1L3z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          infectious Guatemalan flies, linear agriculture systems, and honeybee
          lifespans
        </a>{" "}
        with math.
      </>,
    ],
  },
];

export default function WorkQuadrants() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5">
      {QUADRANTS.map((q) => {
        const isOpen = openId === q.id;
        const panelId = `quadrant-panel-${q.id}`;
        const buttonId = `quadrant-button-${q.id}`;
        return (
          <div
            key={q.id}
            className={`quadrant-card ${isOpen ? "is-open" : ""}`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(q.id)}
              className="quadrant-header"
              title={q.headerTooltip}
            >
              <span className="quadrant-title">{q.title}</span>
            </button>
            {q.blurb ? <p className="quadrant-blurb">{q.blurb}</p> : null}
            {isOpen &&
              (q.ordered ? (
                <ol
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="quadrant-list quadrant-list--ordered"
                >
                  {q.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="quadrant-list"
                >
                  {q.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ))}
          </div>
        );
      })}
    </div>
  );
}
