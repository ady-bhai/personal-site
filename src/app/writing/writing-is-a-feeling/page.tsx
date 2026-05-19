import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing is a Feeling · Ady Mehta",
  description:
    "On how the process of writing can create distance from feelings and help you return to yourself.",
};

const postContent = `Over the last few weeks, I've been struggling with the mental a bit. A bit of anxiety has been creeping during alone time, while brain fogs started to cloud conversations. I've had small fears about people leaving, and these feelings have been coming in waves.
These small telltale signs, though, are familiar. So, I sat down tonight to write a depression handbook. My goal was to catch myself before it's too late by reminding myself of some hard-earned lessons from the first go.
I began typing the list, but I noticed this list was too unreachable, too far away, and too hard to do during the process. [1] be kind to yourself, [2] stay in motion, [3] don't isolate, all felt like prescriptions that if I'd go back in time to read during the summer, they wouldn't have helped; I knew the words were true, but they were far away at the same time. Not being able to do these things under anhedonia, I felt even worse, which spiraled into more negative feelings.
Two days ago, I wrote a letter to my sister. It'd started as a brain dump of how I was feeling, which had then naturally led to thinking about coming to terms with the fact that I'd be seeing less of her in the upcoming years. For the better half of our lives, we've shared Oreos and stolen Beyblades and watched Saturday screen time and heard the same fights and all the jazz.
However, even just halfway through writing the piece, I'd felt in a way that was indescribable. No other Inkhaven post had made me feel so…full? I was curious what had happened, and to my surprise, I found some things had changed after publishing. As I headed down into Control Conf, it felt like magic—for the first time since returning to Berkeley, I could talk to people again. I felt curious about their days instead of the anxious obligation to. I felt more open, more fluid, and hit crisper daps. It felt natural, fun, almost soothing to create a sort of third space to discuss how Control Conf was going (complain about the lunch salads mostly). I felt closer to myself, and because of that, closer to everyone else.
That letter came from a specific place of care. But tonight, writing this — which started as a depression handbook and is now shaping itself mid-write into whatever this is — I feel the same thing happening.
To this end, I'm wondering if the letter wasn't the reason for these feelings, and instead the process. The feelings that led to that writing, as apparent as this might sound, felt mine. When you say things out loud or put them on paper, it becomes something you can look at. Instead of this thing being everything, it feels like there's me and a thing. These emotions now feel like a dashboard — like I can see where they sit in the corpus of a mind that's felt hard to parse, even though it's been mine all along.
Super powerful writing has made me feel recently. The most prominent has come from my friend Derek, twice this past week. Once I nearly cried, once I couldn't stop laughing, and the third time I felt liberated and inspired to also feel in some way.
There's this element of purity of truth that I found in writing that day that I haven't for the better half of Inkhaven posts. I could close my eyes and just talk into the mic, record my thoughts, hear them back, and replay them. It felt like something was with me, kind of like an invisible friend, who I could count on. It never judges me, and only sees me exist; it allows me to feel comfortable, which becomes the only thing I can then focus on.
To that end, I hope this post gives you a small experiment of care. If anyone feels anything familiar, I'd love to invite you to stay with yourself for a minute and say how you feel out loud.`;

const paragraphs = postContent
  .split("\n")
  .map((paragraph) => paragraph.trim())
  .filter((paragraph) => paragraph.length > 0);

export default function WritingIsAFeelingPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Writing is a Feeling
      </h1>

      <div className="text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-5 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
