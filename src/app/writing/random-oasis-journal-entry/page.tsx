import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "random oasis journal entry · Ady Mehta",
  description: "A journal entry from OASIS Day 1.",
};

const postContent = `I'm writing this at home, battling the most viral of demons. The heart is warm, as is the thermometer. It's also full, as are my tissues 😂

At OASIS Day 1, we ran simulations to flag blindspots and to ensure that each session and task was delegated to an organizer.

Balling out with the boys T-10 minutes before OASIS. Best pre-game ever.

Day 1.

Apparently crowds get mad if you don't let them in on time. The line becomes delighted to get Constellation badges — suboptimally optimal. The friction is that people don't get time to settle, but waiting is the perfect time to make awkward intros. "Hi, I'm Elise, I'm from XYZ" — "Wait, you're from Minnesota too?" someone else replies. A third chimes in — "Wait, y'all are from Minnesota too?"

Multiple of those people get settled in and are met with dinner. What a way to start. I feel like because people are probably tired — it is after a day of travel — they deserve to ease into conversation, especially over Chef Beck's food.

We huddle for a round of intros, which follows the classic "hi, where are you from" pipeline. This one's not that deep. These people are lovely and interesting enough that the room naturally fills itself with laughs and that gradual smile that acknowledges everyone is unique, special, and perhaps even on the spectrum in their own and best way possible.

We huddle around to let them know that today, the hard part is done. Dinner complete. Intros complete. We tried to keep it light-hearted but also to introduce a sense of urgency — the goal is to build up their tolerance to the jam-packed days ahead, where they will have to become uncomfortable, test, and stress-test their preconceived opinions.

The gong helps echo some of that sentiment. It's a simple $20 purchase. What a simple lad.

To be honest, I haven't bought breakfast yet. Maybe I told Neav that I did, but I was perhaps buying myself some time. And so the art of the finesse begins. I run a quick web search for the best breakfast burritos and prompt some culinary saucery — now, this isn't a Bay Area house party, but Claude isn't so bad at the optimal black bean to avocado ratio. Got to give credit where credit's due.

I add the Kairos Ramp card — which is great when you only have about $2 in your bank account — to Apple Wallet, hop on Veo (Berkeley's premier scooter and e-bike service), and zoom past traffic to the breakfast place. Thanking the breakfast owners and telling them they're a fan favorite isn't a bad strategy for getting the occasional 10% off. It's not Machiavellian, I promise — maybe I'm just predicting the future. Hopefully.

Breakfast rolls around and the chitter-chatter, humble hum of coworking, and the promise of a bright day greets us. Offering a chance for people to go work is good — we understand that we ask people to skip school. In some cases, you should reciprocate the sacrifice that they're making and meet them where they are, which happens to be a big theme of OASIS.

At 11:00, the day starts. We have a 10-minute kickoff with opening slides. There are many strategies one can adopt, but I personally go for the personal story, partly because I've always been intimidated at conferences, as if I need to extract every inch of value. But this time, I want the feeling to be slightly different for OASIS. OASIS is just a stepping stone for these people's careers. These people are going to do great things anyway.

Instead of making attendees feel like they need OASIS, our goal should be a gentle reminder that we're here to hold their hand, should they choose so. We have been and will continue to be.

There's a sense of guiding light or north star I feel at OASIS too. Words can't describe how it catalyzed my recovery from depression. In Hinduism, there's a concept of dharma, which is duty. I want to give back to the community and honor the past organizers by building off their hard work. I feel like I stand on their shoulders. I don't want to let the chance Neav's taking on me go in vain.

I also make a callout to someone in the seats as part of a story, to let the attendees know that we're in the same boat. Shoutout, goat

to be continued soon
`;

export default function RandomOasisJournalEntryPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        random oasis journal entry
      </h1>

      <div className="whitespace-pre-wrap text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        {postContent}
      </div>
    </article>
  );
}
