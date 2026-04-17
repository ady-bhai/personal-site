import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Palentines Day Pt 1 · Ady Mehta",
  description: "A personal reflection on friendship and heartbreak.",
};

const postContent = `“He finally begins. “I miss her guys,” he says, tracing his feelings onto his glass.

His voice splinters—a blink too fast, filled with a throat-clearing pause. His girlfriend is a part of his life. His girlfriend knows his mother, his sister, his friends, even here in the US.  

Aryan and I lock eyes, silent.

----

I had just dropped off my Valentine's Day date at her place before calling Adi. The last two weeks had taken hostage of my mental energy due to how hard it was to communicate with her. I knew that this would be a tough day for Anej, and it’d been a while since we’d all been together. Tonight, I wanted to be there for him. 

---

Aryan and I planned this dinner at the last minute, expecting a 30% chance that Anej would already have plans. His breakup was a month ago: two years dating and four years best friends. These breakups hurt more. They’re mutual, but the less fighting before, the longer the pain seems to last after. Perhaps we don’t talk to Anej enough about his life; life with him has always been casual and lighthearted. Throughout, Anej had always championed his smile. It shone more through than the mouth. We banter, update each other on our lives (college life makes hangouts twice a month, unfortunately), and figure out the vibe for tonight, filtered by the number of Yelp reviews

But just from the way he interacts with us, the deep bond we’ve felt in just two years of being friends, we can only imagine how much his relationships mean to him. For Anej to have ended such a meaningful relationship in his life, logical deduction may lead us to the fact that this is a non-trivial event for him. 
---

Breaking up with my girlfriend was probably the hardest thing I’ve ever experienced emotionally. She served a role in my life, similar to the one of Ady and Aryan - a piece of home I carried in my heart, far away from my physical home, wherever I went. We met in our freshman year of high school at an introductory Zoom meeting for the debate club, where we were the only two attendees besides our professor. After that meeting, we became good friends. After that, best friends and ultimately a couple. She was the first person I told I wanted to go study in America, and she has supported me through learning English, taking the TOEFL and SAT exams, writing college essays, and, finally, leaving to go study abroad.

I was too busy to realize February 14th was around the corner, but I was flattered when I received an unexpected text from the “Hindu Boys” group chat, inviting me to a Pal-entine’s dinner with my two favorite boys. This intentional, friendly gesture was a nice break from most of my daily interactions – others didn’t really know what I was going through, either because I didn’t tell them I broke up, or because they hadn't met Alma and heard me talk about how I care for her and our relationship. `;

export default function IMissHerGuysPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Palentines Day Pt 1
      </h1>

      <div className="whitespace-pre-wrap text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        {postContent}
      </div>
    </article>
  );
}
