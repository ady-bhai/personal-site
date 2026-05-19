import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Letter To My Sister · Ady Mehta",
  description: "Advice for my sister as she heads off to college.",
};

type Paragraph = { text: string; bold?: boolean };

const paragraphs: Paragraph[] = [
  { text: "Dear Miti," },
  {
    text: "As you go to college, here's some advice. You might read some of these and think you understand, only to find you need to live them first. Haha, have fun. Other things, you'll reach your own conclusions. Then you can come tell me I was wrong; I'll happily wait for it.",
  },
  { text: "Drink tea more than you spill.", bold: true },
  {
    text: "I know it'll be enticing to stay up late with your friends, but before you say anything about anyone, imagine it being said about you. Tea should never feel like some currency you barter. You don't owe anyone tea in exchange for them spilling it. You don't have to be interesting by being a good source of gossip.",
  },
  {
    text: "Stay up late talking about things you feel good about. Invite your friends over and drink some tea. And as you share moments together, know that in the long run, you'll feel more connected to the people you can feel comfortable with in silence than those you trade lore with.",
  },
  { text: "Wear coats.", bold: true },
  {
    text: "I don't know what viral disease has affected each college girl going to a frat on a Friday night, but it seems like the 21st century American college experience has hard-baked in a certain type of frat attire. You wear what you want, and what makes you feel good. If that's one of the frat dresses, wear it with pride.",
  },
  {
    text: "But if it's cold, put on a coat. You're not trying to impress anyone. You don't need to be shivering just because all the other girls in tube tops are shivering. Between the walk from your dorm to the frat or kickback or wherever, you owe yourself a coat.",
  },
  { text: "Distinguish honor from sunk cost.", bold: true },
  {
    text: "There's honor in sticking something through. You've already done this like a champ. But there's also wisdom in stepping back. If you feel your major isn't right for you, re-evaluate and change course. I know it will feel like the end of the world to have claimed that this college sacrifice was worth what you set out to, and now it's changing, but that's a short-term hit. You find what you love and become good at it. And then you honor what you feel good about doing, not what you think society or Mumma Papa or I will.",
  },
  { text: "It's okay to lie about why you can't eat out.", bold: true },
  {
    text: "We share the same financial situation; you can take it from me that I've made many excuses on why I can't eat out. Just say you have homework or something; money can be uncomfortable to talk about, so it's okay to just be chill about this one.",
  },
  {
    text: "That said, making your own money and eating out with close friends is empowering and liberating and comforting, so make the meals count when you do go. Find a few mom-and-pop restaurants. Become friends with the owners and offer to distribute flyers or take orders. Bring your friends. These will be the stories you remember.",
  },
  { text: "Host and cook for others.", bold: true },
  {
    text: "You can always cook. Cook, Miti—we gotta cook. And perhaps you'll enjoy hosting. You can bring your friends from different worlds together. You'll also be remembered as the person who made that connection. You might find a love for feeding people. You already make such tasty food.",
  },
  { text: "Love yourself as you love others.", bold: true },
  {
    text: "You know the classic line Papa keeps telling us. दूस्रून से पहले खुद की जय करें. This can be a chicken-and-egg thing. You need to love yourself to love others, but loving others is also how you'll learn you owe yourself some too. If an inferiority complex creeps in, cut yourself some slack. And let people care for you. Learn to care for others.",
  },
  { text: "Relationships.", bold: true },
  {
    text: "You are never entitled to anyone, and no one is entitled to you. Walk away when things don't feel right. You can always just be transparent, tell the truth, and not complicate things. You deserve your space, and the other person does too.",
  },
  {
    text: "You'll have regrets about how you handled things, and that's okay. You're learning and everyone around you is too. Let yourself be hurt when you think it's worth it — but never ever actively want to hurt someone, even though all of us have thought this at some point.",
  },
  { text: "A lot of the \u201Ccollege rules\u201D are illusions.", bold: true },
  {
    text: "The parties you \u201Chave to\u201D go to, the spring break trips, the friend group, the clubs you have to join—these are invisible things social media will make you feel you need to have. And while they have their merits, you can also live in solo mode and be content with the things that make you happy. Just remember to look inside and evaluate how something makes you feel instead of something that you need to reach for.",
  },
  {
    text: "You may also think your freshman friend group is your squad forever, and it's okay if you go separate ways. Time and distance will do that. Acquaint yourself with the truth that people come and go, but there are a few people worth staying and fighting for.",
  },
  { text: "Call Dadu Dadi and Nanu Nani", bold: true },
  { text: "Call Mumma Papa", bold: true },
  { text: "And call me, wherever, whenever." },
  { text: "Love you broski" },
];

export default function ALetterToMySisterPost() {
  return (
    <article className="py-6 sm:py-8">
      <p className="mb-4">
        <Link href="/writing" className="hyperlink text-base font-normal">
          ← Writing
        </Link>
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
        A Letter To My Sister
      </h1>

      <div className="text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.text.slice(0, 24)}`}
            className={`mb-5 last:mb-0${paragraph.bold ? " font-bold" : ""}`}
          >
            {paragraph.text}
          </p>
        ))}
      </div>
    </article>
  );
}
