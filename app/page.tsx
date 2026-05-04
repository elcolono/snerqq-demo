"use client";

import { ArrowRight, Check, Menu, Moon, ShieldCheck, Smile, Sun, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const asset = (path: string) => `https://snerqq.ch${path}`;
const optimized = (path: string, width = 3840) =>
  asset(`/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75`);

const images = {
  logo: asset("/icons/logo.svg"),
  hero: optimized("/_next/static/media/playground-baner.02mnc1-l873zb.webp"),
  phone: optimized("/_next/static/media/phone-in-hand.1685vn8xe_lrz.webp", 1200),
  sticker: asset("/icons/stickers/5-year-sticker.webp"),
  wall: asset("/images/backgrounds/wall.webp"),
  harmless: optimized("/_next/static/media/harmless.03hmh9-b.wzqx.webp"),
  freeNotFree: optimized("/_next/static/media/free-not-free.0snq478o81z4z.webp"),
  dingsCircle: optimized("/_next/static/media/circule.0471e2k~rj-6_.webp"),
  dingsArrows: optimized("/_next/static/media/arrows.05g4.vqxjjw4v.webp"),
  dingsCenter: optimized("/_next/static/media/happines.0.06typ6lswuj.webp"),
  evolution0: optimized("/_next/static/media/evolution-0.0th023~1edq9r.webp"),
  evolution1: optimized("/_next/static/media/evolution-1.0aq_exnaj8mmb.webp"),
  evolution2: optimized("/_next/static/media/evolution-2.03.mdckmq8ke9.webp"),
  evolution3: optimized("/_next/static/media/evolution-3.00a9blqwm-3lt.webp"),
  evolution4: optimized("/_next/static/media/evolution-4.0f-l5zp8tqs29.webp")
};

const navItems = ["Home", "How it works", "Child safety", "snërqq Test", "Roadmap"];

const trustBullets = [
  "Built for kids. Not for big tech.",
  "Parent-approved from the start.",
  "Ad-free and designed around real friend groups."
];

const childFriendlyCards = [
  {
    label: "For kids",
    title: "A place that feels like theirs",
    icon: Smile,
    accent: "bg-blush text-berry",
    items: [
      "They do not just chat. They build their own group companion together.",
      "They do not scroll a random feed. They are part of a story that grows with them.",
      "They explore a digital playground that responds through characters and moments.",
      "They play games without ads interrupting them."
    ]
  },
  {
    label: "For parents",
    title: "A system you can actually say yes to",
    icon: Users,
    accent: "bg-mint text-lagoon",
    items: [
      "Built for kids, not for big tech.",
      "Designed around real friend groups, not open networks.",
      "No ads. No endless feeds. No pressure to stay.",
      "Parent-approved from the start."
    ]
  }
];

const dingsMoments = [
  {
    title: "It belongs to the group",
    text: "Every child helps shape it.",
    image: images.evolution0,
    desktopPosition: "left-[25%] top-[28%]"
  },
  {
    title: "Every Ding is unique",
    text: "Each group builds its own version.",
    image: images.evolution1,
    desktopPosition: "left-[71%] top-[24%]"
  },
  {
    title: "You can play with it",
    text: "It is part of games and shared fun.",
    image: images.evolution2,
    desktopPosition: "left-[77%] top-[62%]"
  },
  {
    title: "It grows over time",
    text: "The Dings evolves through five stages.",
    image: images.evolution3,
    desktopPosition: "left-[50%] top-[85%]"
  },
  {
    title: "It is their constant companion",
    text: "It reacts to the group and the child.",
    image: images.evolution4,
    desktopPosition: "left-[23%] top-[62%]"
  }
];

const pressureStories = [
  {
    eyebrow: "Pressure loop 01",
    title: "What looks harmless can become a real problem",
    image: images.harmless,
    alt: "Child reacting to a message on their phone",
    tag: "not just screen time",
    paragraphs: [
      "In many families, the same conflicts keep coming back. Phones are hard to put away. Group chats escalate.",
      "After mainstream platforms, children can be left agitated, withdrawn, dissatisfied or emotionally overwhelmed."
    ],
    callout:
      "Many platforms are intentionally built to keep children checking back, reacting quickly and staying socially alert."
  },
  {
    eyebrow: "Pressure loop 02",
    title: "Free is not really free",
    image: images.freeNotFree,
    alt: "Two children, one distracted by phone",
    tag: "attention is the price",
    paragraphs: [
      "When a platform is free, attention becomes the business model. The longer children stay online, the more valuable their time becomes.",
      "Endless scrolling, public visibility and social mechanics keep pulling children back in."
    ],
    callout:
      "For children, that can create pressure, overstimulation, poor sleep and behavior that becomes harder for families to manage."
  }
];

type Theme = "light" | "dark";

export default function Home() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("snerqq-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem("snerqq-theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <main className={`${theme === "dark" ? "dark bg-ink text-white" : "bg-paper text-ink"} min-h-screen overflow-x-hidden transition-colors duration-300`}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <HeroSection />
      <ChildFriendlySection />
      <DingsEvolutionSection />
      <FreeNotFreeSection />
      <SiteFooter />
    </main>
  );
}

function FreeNotFreeSection() {
  return (
    <section
      id="free-not-free"
      className="relative isolate overflow-hidden bg-cover bg-top bg-repeat-y px-4 py-16 md:px-10 md:py-20 xl:bg-[length:100%_auto] xl:bg-center xl:px-[100px]"
      style={{ backgroundImage: `url(${images.wall})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,247,0.70),rgba(234,249,255,0.58)_42%,rgba(255,253,247,0.78))] dark:bg-[linear-gradient(180deg,rgba(8,17,27,0.78),rgba(12,23,35,0.72)_42%,rgba(8,17,27,0.84))]" />
      <div className="absolute left-[-4rem] top-16 rotate-[-12deg] text-[72px] font-black uppercase leading-none text-berry/10 md:text-[140px] dark:text-[#FF8FD5]/10">
        no feed
      </div>
      <div className="absolute bottom-14 right-[-3rem] rotate-[8deg] text-[64px] font-black uppercase leading-none text-lagoon/10 md:text-[132px] dark:text-[#7FEAF3]/10">
        yard rules
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rotate-[-1deg] rounded-full border-2 border-ink bg-lime px-4 py-2 text-sm font-black uppercase text-berry shadow-[5px_5px_0_rgba(23,32,42,0.9)] dark:border-lime dark:bg-[#142332] dark:text-lime dark:shadow-[5px_5px_0_rgba(173,252,3,0.45)]">
            The problem outside the Yard
          </p>
          <h2 className="mt-6 text-[32px] font-black leading-[112%] text-ink md:text-[56px] dark:text-white">
            The daily stress around phones is not a coincidence.
          </h2>
          <p className="mx-auto mt-5 max-w-[850px] text-lg font-semibold leading-[155%] text-ink/74 md:text-xl dark:text-[#D7E8EE]">
            Free platforms make money by keeping children online for as long as possible. snërqq starts from the opposite idea: a place with edges, rules and room to leave.
          </p>
        </header>

        <div className="mt-12 grid gap-8 xl:gap-12">
          {pressureStories.map((story, index) => (
            <article
              key={story.title}
              className="grid items-center gap-6 xl:grid-cols-2 xl:gap-12"
            >
              <div className={index === 1 ? "xl:order-2" : ""}>
                <div className="relative rounded-[2rem] border-2 border-ink bg-[#F5F0E7]/92 p-5 shadow-[8px_8px_0_rgba(23,32,42,0.9)] backdrop-blur md:p-7 dark:border-white/14 dark:bg-[#121E2A]/92 dark:shadow-[8px_8px_0_rgba(173,252,3,0.28)]">
                  <div className="absolute -right-3 -top-3 rotate-6 rounded-xl bg-berry px-3 py-1 text-xs font-black uppercase text-white shadow-[4px_4px_0_rgba(23,32,42,0.85)]">
                    {story.tag}
                  </div>
                  <p className="text-sm font-black uppercase text-berry dark:text-[#FF8FD5]">{story.eyebrow}</p>
                  <h3 className="mt-3 max-w-[620px] text-[28px] font-black leading-[114%] text-ink md:text-[42px] dark:text-white">
                    {story.title}
                  </h3>

                  <div className="mt-6 grid gap-4 text-base font-semibold leading-[160%] text-ink/76 md:text-lg dark:text-[#EAF7FA]">
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <p className="mt-6 border-l-4 border-berry bg-white/72 px-5 py-4 text-base font-black leading-[150%] text-lagoon dark:border-lime dark:bg-white/8 dark:text-[#9FF4FA]">
                    {story.callout}
                  </p>
                </div>
              </div>

              <figure className={index === 1 ? "xl:order-1" : ""}>
                <div className="relative rotate-[1.2deg] rounded-[1.8rem] border-2 border-ink bg-white p-3 shadow-[10px_10px_0_rgba(23,32,42,0.9)] dark:border-white/14 dark:bg-[#182635] dark:shadow-[10px_10px_0_rgba(253,2,157,0.25)]">
                  <div className="absolute left-8 top-[-14px] h-8 w-28 rotate-[-4deg] bg-lime/90 opacity-90 shadow-[0_6px_18px_rgba(23,32,42,0.2)]" />
                  <div className="relative aspect-[607/354] overflow-hidden rounded-[1.25rem] bg-ink">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 50vw"
                      className="object-cover grayscale-[18%] contrast-[1.05] saturate-[0.92]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(23,32,42,0.36))]" />
                  </div>
                </div>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate h-[720px] w-full overflow-hidden md:h-[640px] xl:h-[870px]">
      <Image
        src={images.hero}
        alt="Digital playground background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1440px"
        className="object-cover object-center"
        unoptimized
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,28,0.48)_0%,rgba(12,18,28,0.56)_42%,rgba(12,18,28,0.72)_100%)] md:bg-[linear-gradient(90deg,rgba(12,18,28,0.78)_0%,rgba(12,18,28,0.56)_45%,rgba(12,18,28,0.16)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/50 to-transparent" />

      <Image
        src={images.sticker}
        alt="Limited Pre-Launch offer: 5 years for the price of 1"
        width={170}
        height={166}
        className="absolute right-3 top-[104px] z-20 h-[116px] w-[120px] rotate-[7deg] drop-shadow-[0_18px_34px_rgba(0,0,0,0.34)] md:right-[28%] md:top-[188px] md:h-[190px] md:w-[196px] xl:hidden"
        unoptimized
      />

      <div className="relative z-10 flex h-full max-w-[1440px] items-start px-4 pt-12 md:px-10 md:pt-14 xl:mx-auto xl:px-[100px] xl:pt-[120px]">
        <div className="flex max-w-[794px] flex-col gap-7 text-white md:max-w-[620px] xl:max-w-[794px]">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/28 bg-white/14 px-4 py-2 text-sm font-bold uppercase leading-none backdrop-blur-md">
            <ShieldCheck aria-hidden="true" size={16} />
            Pre-launch for safer digital childhoods
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            <h1 className="max-w-[700px] text-[34px] font-black leading-[112%] tracking-normal md:text-[46px] md:leading-[116%] xl:text-[62px] xl:leading-[106%]">
              A safer digital playground for real friends.
            </h1>

            <p className="max-w-[560px] text-base font-semibold leading-[150%] text-white/86 md:text-[22px] md:leading-[135%] xl:max-w-[600px]">
              Kids chat, play and create in closed friend groups — with their own Dings growing alongside them.
            </p>

            <div className="grid gap-2.5 md:gap-3">
              {trustBullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-berry shadow-[0_8px_18px_rgba(173,252,3,0.24)]">
                    <Check aria-hidden="true" size={17} strokeWidth={3} />
                  </span>
                  <span className="text-base font-semibold leading-[150%] text-white md:text-[18px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-1 md:flex-row md:items-center">
            <button
              type="button"
              className="focus-ring flex h-14 w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-lime px-6 text-base font-black text-berry shadow-button transition duration-200 hover:-translate-y-0.5 hover:shadow-soft md:w-[230px] md:text-[18px]"
            >
              Join the launch list
              <ArrowRight aria-hidden="true" size={20} />
            </button>

            <p className="max-w-[310px] text-sm font-semibold leading-6 text-white/76">
              No endless feed. No ads. No public visibility.
            </p>
          </div>
        </div>

        <Image
          src={images.sticker}
          alt=""
          aria-hidden="true"
          width={225}
          height={219}
          className="ml-4 mt-[92px] hidden h-[310px] w-[318px] shrink-0 rotate-[6deg] drop-shadow-[0_24px_52px_rgba(0,0,0,0.38)] xl:block"
          unoptimized
        />
      </div>

      <Image
        src={images.phone}
        alt="snërqq app on a smartphone"
        width={545}
        height={817}
        priority
        className="absolute bottom-[-36px] right-[-38px] z-10 hidden h-[534px] w-[356px] object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.42)] md:block xl:bottom-0 xl:right-0 xl:h-[817px] xl:w-[545px]"
        unoptimized
      />
    </section>
  );
}

function ChildFriendlySection() {
  return (
    <section id="child-friendly" className="bg-paper px-4 py-16 transition-colors duration-300 md:px-10 md:py-20 xl:px-[100px] dark:bg-[#111C28]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase text-berry">For kids and parents</p>
          <h2 className="mt-3 text-[30px] font-black leading-[116%] tracking-normal text-ink md:text-[52px] dark:text-white">
            <span>Why kids love it.</span>{" "}
            <span className="text-lagoon dark:text-[#7FEAF3]">Why parents say yes.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2 xl:gap-6">
          {childFriendlyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.label}
                className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-5 shadow-[0_18px_54px_rgba(23,32,42,0.08)] transition-colors duration-300 md:p-7 dark:border-white/12 dark:bg-[#152331] dark:shadow-none"
              >
                <div className="absolute right-[-42px] top-[-42px] h-40 w-40 rounded-full bg-lime/20" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${card.accent} dark:bg-white/10 dark:text-[#9FF4FA]`}>
                      <Icon aria-hidden="true" size={17} />
                      {card.label}
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lime md:flex dark:bg-lime dark:text-berry">
                      <Check aria-hidden="true" size={22} strokeWidth={3} />
                    </div>
                  </div>

                  <h3 className="mt-5 max-w-[620px] text-[26px] font-black leading-[120%] text-lagoon md:text-[34px] dark:text-[#7FEAF3]">
                    {card.title}
                  </h3>

                  <ul className="mt-6 grid gap-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base font-semibold leading-[155%] text-ink/78 md:text-xl md:leading-[145%] dark:text-[#EAF7FA]">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-berry">
                          <Check aria-hidden="true" size={15} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DingsEvolutionSection() {
  return (
    <section
      id="dings-evolution"
      className="relative overflow-hidden bg-skywash px-4 py-16 transition-colors duration-300 md:px-10 md:py-20 xl:px-[100px] dark:bg-[#0C1723]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(173,252,3,0.26),transparent_24rem),radial-gradient(circle_at_84%_8%,rgba(253,2,157,0.12),transparent_22rem)]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase text-berry dark:text-[#FF8FD5]">Shared group companion</p>
          <h2 className="mt-3 text-[34px] font-black leading-[112%] text-ink md:text-[56px] dark:text-white">
            The Dings
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg font-semibold leading-[155%] text-ink/70 md:text-xl dark:text-[#D7E8EE]">
            A living group companion that children build together, grow over time and take through their shared world.
          </p>
        </div>

        <div className="mt-10 hidden rounded-[2.25rem] border border-ink/10 bg-white/86 p-8 shadow-soft backdrop-blur transition-colors duration-300 xl:block dark:border-white/12 dark:bg-[#152331] dark:shadow-none">
          <div className="relative mx-auto aspect-[1.24] max-w-[1040px]">
            <Image
              src={images.dingsCircle}
              alt="The Dings evolution"
              fill
              sizes="1040px"
              className="object-contain"
              unoptimized
            />
            <Image
              src={images.dingsArrows}
              alt=""
              aria-hidden="true"
              width={284}
              height={238}
              className="pointer-events-none absolute left-1/2 top-[52%] h-[238px] w-[284px] -translate-x-1/2 -translate-y-1/2"
              unoptimized
            />
            <Image
              src={images.dingsCenter}
              alt=""
              aria-hidden="true"
              width={150}
              height={223}
              className="pointer-events-none absolute left-1/2 top-[48%] h-[245px] w-auto -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_32px_rgba(23,32,42,0.18)]"
              unoptimized
            />

            {dingsMoments.map((moment) => (
              <div
                key={moment.title}
                className={`absolute max-w-[240px] -translate-x-1/2 rounded-2xl border border-ink/10 bg-paper/88 px-4 py-3 text-center shadow-[0_12px_32px_rgba(23,32,42,0.1)] backdrop-blur dark:border-white/12 dark:bg-[#0E1A26]/92 ${moment.desktopPosition}`}
              >
                <p className="text-lg font-black leading-[120%] text-lagoon dark:text-[#7FEAF3]">{moment.title}</p>
                <p className="mt-1 text-sm font-semibold leading-[140%] text-ink/62 dark:text-[#D7E8EE]">{moment.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-[720px] text-center text-xl font-black leading-[140%] text-lagoon dark:text-[#9FF4FA]">
            The Dings gives the group something that is truly theirs — something they build together and genuinely care about.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:hidden">
          <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-5 shadow-[0_18px_54px_rgba(23,32,42,0.08)] md:p-7 dark:border-white/12 dark:bg-[#152331] dark:shadow-none">
            <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-[260px] w-full max-w-[220px]">
                  <Image
                    src={images.dingsCenter}
                    alt="The Dings evolution"
                    fill
                    sizes="220px"
                    className="object-contain drop-shadow-[0_18px_32px_rgba(23,32,42,0.18)]"
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-base font-black leading-[150%] text-lagoon dark:text-[#9FF4FA]">
                  The Dings gives the group something that is truly theirs.
                </p>
              </div>

              <div className="grid gap-3">
                {dingsMoments.map((moment, index) => (
                  <div
                    key={moment.title}
                    className="grid grid-cols-[92px_1fr] items-center gap-4 rounded-2xl bg-skywash/70 p-3 dark:bg-white/10"
                  >
                    <div className="relative h-[72px] overflow-hidden rounded-xl bg-white">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        sizes="92px"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-berry dark:text-[#FF8FD5]">Stage {index + 1}</p>
                      <h3 className="mt-1 text-base font-black leading-[120%] text-ink dark:text-[#F6FBFC]">{moment.title}</h3>
                      <p className="mt-1 text-sm font-semibold leading-[140%] text-ink/62 dark:text-[#D7E8EE]">{moment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SiteHeader({
  theme,
  onToggleTheme
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/94 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0D1824]/94">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-10 xl:h-20 xl:px-[100px]">
        <a className="focus-ring rounded-xl" href="#" aria-label="snërqq home">
          <Image
            src={images.logo}
            alt="snërqq"
            width={115}
            height={40}
            className="h-7 w-auto transition xl:h-10 dark:brightness-0 dark:invert"
            style={{ width: "auto" }}
            unoptimized
          />
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="focus-ring rounded-full px-4 py-3 text-base font-bold text-ink/70 transition hover:bg-white hover:text-ink dark:text-[#EAF7FA] dark:hover:bg-white/10 dark:hover:text-[#9FF4FA]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="focus-ring hidden h-14 items-center justify-center rounded-2xl bg-lime px-6 text-lg font-black text-berry shadow-button transition hover:-translate-y-0.5 dark:shadow-[0_12px_28px_rgba(173,252,3,0.2)] xl:flex"
          >
            Join the launch list
          </button>

          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-skywash dark:border-white/12 dark:bg-white/10 dark:text-white dark:hover:bg-white/16"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <Sun aria-hidden="true" size={20} /> : <Moon aria-hidden="true" size={20} />}
          </button>

          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-sm transition dark:border-white/12 dark:bg-white/10 dark:text-white xl:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-10 text-white transition-colors duration-300 md:px-10 xl:px-[100px] dark:bg-[#08111B]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src={images.logo}
            alt="snërqq"
            width={115}
            height={40}
            className="h-9 w-auto brightness-0 invert"
            style={{ width: "auto" }}
            unoptimized
          />
          <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/72">
            A child-friendly digital platform with no endless feed, no ads and no public visibility.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/70" aria-label="Footer navigation">
          {["Home", "How it works", "Child safety", "Roadmap", "Terms", "Privacy"].map((item) => (
            <a key={item} className="focus-ring rounded-lg transition hover:text-lime" href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
