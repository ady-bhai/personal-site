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
          This raises an obvious question: if the field needs more grantmakers so
          badly, where is a junior person supposed to fit? It is easy to read all
          of this and come away with the sense that, yes, this is important, but
          also obviously a job for someone older, more experienced, and more
          “strategically sophisticated” than you might be.
        </p>
        <p>
          If you are just entering the field, the honest answer is that you
          probably do not yet have the strategic taste to set a grantmaking
          team&apos;s highest-level priorities. That is normal. Most people do
          not. But that is a very different claim from saying you cannot be
          useful. There is a big gap between “should not decide the whole
          portfolio” and “has nothing to contribute.”
        </p>
      </div>
    </article>
  );
}

