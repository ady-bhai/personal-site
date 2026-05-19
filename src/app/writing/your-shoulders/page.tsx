import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Shoulders · Ady Mehta",
  description: "A note to my mother on her husband's 54th birthday.",
};

const postContent = `Today is your husband's 54th birthday.
You look into his eyes, and aside from the fact that he's aged, you notice a few more wrinkles than the last time. We all sit quietly at the table. There is a weather in the room more potent than the silence — no one's at rest, and there are clouds around which the room is being gentle upon.
You spent the last four hours baking diabetic-friendly treats. You made a lovely batch of tahini cookies to complement an almond flour, coconut, and carrot cake. You bake under constraints of ingredients, not to mention your own: you're exhausted. A long night of looming contract work lies ahead of you. Your colleagues are merciless, yet despite the hand you've been dealt, you fight on.
You haven't seen your husband smile today. Someone who's supposed to be a source of home and comfort for you has let the situation get to him; he's retreated somewhere you, or any of us, can follow. Yet despite how alone you might feel during these times, you do not let go.
But to make this evening possible for just a brief sliver of happiness and hope, you worked tirelessly to create a few shared laughs over a carrot cake that could make us feel safe, could make us all feel comfortable.
Today, I feel a great sense of pride to be your son. While you sit on the floor to mix some flour, I touch your feet. We hold our hug for a little bit longer. You and I both don't know how many more of these are left, which makes each one tighter.
You tell me we signed a lease for around half the price of our current apartment in North Carolina, where you'll move for a few months as my sister settles into college. It hits me that this is the last month we'll all be under one roof.
Perhaps home was never defined, and perhaps things have been unstable—throughout grief, emergencies, tears, loss, cries, downturns, and pain—but here, I will always feel tethered to you. So much has been weathered, and still your hands are open to hold us.
You've given up the world to give your kids a sacred chance to pursue what you weren't able to when you moved to this country. Your 20s were defined by making ends meet, arriving in a new country, and figuring out how to parent two feral little creatures without a support system nearby. Our experiences, albeit their shape, are downstream of yours; you've given us the shoulders to cry, laugh, and stand upon.
Tonight, at this dining table, I watch your shoulders prepare the treats so your family can find a bit of happiness. The way you pat your husband's head, even though he's not really able to respond, I come to terms with the depth of your love, Mumma.`;

const paragraphs = postContent
  .split("\n")
  .map((paragraph) => paragraph.trim())
  .filter((paragraph) => paragraph.length > 0);

export default function YourShouldersPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        Your Shoulders
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
