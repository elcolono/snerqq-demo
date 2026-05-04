"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const asset = (path: string) => `https://snerqq.ch${path}`;
const optimized = (path: string, width = 3840) =>
  asset(`/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75`);

const images = {
  logo: asset("/icons/logo.svg"),
  hero: optimized("/_next/static/media/playground-baner.02mnc1-l873zb.webp"),
  phone: optimized("/_next/static/media/phone-in-hand.1685vn8xe_lrz.webp", 1200),
  dings: optimized("/_next/static/media/evolution-2.03.mdckmq8ke9.webp"),
  dingsAlt: optimized("/_next/static/media/evolution-4.0f-l5zp8tqs29.webp"),
  harmless: optimized("/_next/static/media/harmless.03hmh9-b.wzqx.webp"),
  freeNotFree: optimized("/_next/static/media/free-not-free.0snq478o81z4z.webp"),
  policy: optimized("/_next/static/media/policy-scheme.15ln7006eao9r.webp"),
  happiness: optimized("/_next/static/media/happines.0.06typ6lswuj.webp")
};

const navItems = [
  { label: "The problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "Safety", href: "#safety" },
  { label: "Launch", href: "#launch" }
];

const trustBullets = [
  "Built for kids, not for big tech",
  "Parent-approved friend groups",
  "No endless feed, no ads, no influencers"
];

const features = [
  {
    title: "The Dings",
    eyebrow: "Shared companion",
    text: "Every friend group gets a living companion that grows through shared play, creativity and care.",
    image: images.dings,
    color: "bg-mint",
    span: "xl:col-span-2"
  },
  {
    title: "Yard",
    eyebrow: "Digital playground",
    text: "Small games and shared moments give children a playful reason to meet without endless competition loops.",
    image: images.happiness,
    color: "bg-butter",
    span: "xl:col-span-2"
  },
  {
    title: "Chat",
    eyebrow: "Real friends only",
    text: "Group and one-to-one chats stay rooted in real friendships, not public performance or viral visibility.",
    image: images.phone,
    color: "bg-skywash",
    span: "xl:col-span-1"
  },
  {
    title: "MySpot",
    eyebrow: "Personal space",
    text: "A private place for memories, diary moments and friendship-book energy inside a closed group.",
    image: images.dingsAlt,
    color: "bg-blush",
    span: "xl:col-span-1"
  },
  {
    title: "Buzz",
    eyebrow: "Group-shaped stream",
    text: "A stream for friend-circle moments and Yard Clips, deliberately designed without an endless algorithmic feed.",
    image: images.policy,
    color: "bg-paper",
    span: "xl:col-span-1"
  }
];

const safetyItems = [
  {
    icon: ShieldCheck,
    title: "Safety by design",
    text: "Closed groups, parent approval and visible boundaries are part of the product, not an afterthought."
  },
  {
    icon: Users,
    title: "Friendship over reach",
    text: "Children interact with people they know. There is no public audience pushing them to perform."
  },
  {
    icon: Sparkles,
    title: "Natural stopping points",
    text: "The experience is built around shared activities instead of infinite scroll and constant alerts."
  }
];

type FormErrors = {
  email?: string;
  policy?: string;
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, menuOpen]);

  const openModal = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden text-ink">
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onOpenModal={openModal}
      />
      <Hero onOpenModal={openModal} />
      <ProblemSection />
      <FeatureSection />
      <SafetySection />
      <LaunchSection onOpenModal={openModal} />
      <SiteFooter />
      <LaunchModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

function Header({
  menuOpen,
  onMenuToggle,
  onOpenModal
}: {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onOpenModal: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a className="focus-ring rounded-xl" href="#" aria-label="snërqq home">
          <Image
            src={images.logo}
            alt="snërqq"
            width={115}
            height={40}
            className="h-8 w-auto lg:h-10"
            style={{ width: "auto" }}
            unoptimized
          />
        </a>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-3 text-sm font-semibold text-ink/72 transition hover:bg-white hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="focus-ring hidden min-h-12 items-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-berry shadow-button transition hover:-translate-y-0.5 hover:shadow-soft lg:flex"
            type="button"
            onClick={onOpenModal}
          >
            Join the launch list
            <ArrowRight aria-hidden="true" size={18} />
          </button>
          <button
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm lg:hidden"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onMenuToggle}
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-ink/10 bg-paper px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring flex min-h-14 items-center justify-between rounded-xl px-3 text-lg font-semibold"
              >
                {item.label}
                <ChevronRight aria-hidden="true" size={18} />
              </a>
            ))}
          </nav>
          <button
            className="focus-ring mt-4 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-lime px-5 text-lg font-bold text-berry shadow-button"
            type="button"
            onClick={onOpenModal}
          >
            Join the launch list
            <ArrowRight aria-hidden="true" size={20} />
          </button>
        </div>
      ) : null}
    </header>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden lg:min-h-[820px]">
      <Image
        src={images.hero}
        alt="Digital playground background"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,18,28,0.74),rgba(12,18,28,0.48)_46%,rgba(12,18,28,0.1))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-paper to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[820px] lg:px-8">
        <div className="max-w-3xl pt-10 text-white">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/16 px-4 py-2 text-sm font-bold uppercase backdrop-blur-md">
            Pre-launch for safer digital childhoods
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
            A digital playground where friends chat, play and create together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/90 sm:text-2xl sm:leading-9">
            Every friend group gets its own Dings, a shared companion that grows with them in a world made for children.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3">
            {trustBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-base font-semibold sm:text-lg">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-berry">
                  <Check aria-hidden="true" size={17} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              className="focus-ring flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-lime px-7 text-lg font-black text-berry shadow-button transition hover:-translate-y-0.5"
              type="button"
              onClick={onOpenModal}
            >
              Join the launch list
              <ArrowRight aria-hidden="true" size={20} />
            </button>
            <a
              className="focus-ring flex min-h-14 items-center justify-center rounded-2xl border border-white/45 bg-white/12 px-7 text-lg font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              href="#features"
            >
              Explore snërqq
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="texture relative px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-berry">The problem</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-5xl">
            The daily stress around phones is not a coincidence
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/72 sm:text-xl">
            Free platforms make money by keeping children online for as long as possible. Children grow up inside systems optimized for attention, visibility and constant activity.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <ContentPanel
            eyebrow="Hidden pressure"
            title="What looks harmless can become a real problem"
            highlight="This is bigger than ordinary screen time."
            paragraphs={[
              "In many families, the same conflicts keep coming back. Phones are hard to put away. Group chats escalate. After mainstream platforms, children can be left feeling agitated, withdrawn or overwhelmed.",
              "Many platforms are intentionally built to keep children checking back, reacting quickly and staying socially alert. Over time, that can fuel pressure, overstimulation, poor sleep and emotional instability."
            ]}
          />
          <ImageCard
            src={images.harmless}
            alt="Child reacting to a message on their phone"
            label="Attention loops feel personal to families"
          />
        </div>

        <div className="mt-10 grid items-center gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          <div className="lg:order-2">
            <ContentPanel
              eyebrow="The real cost"
              title="Free is not really free"
              highlight="When a platform is free, attention becomes the business model."
              paragraphs={[
                "The longer children stay online, the more valuable their time becomes for the platform.",
                "That is why many systems rely on endless scrolling, constant stimulation, public visibility and social mechanics that keep pulling children back in."
              ]}
            />
          </div>
          <div className="lg:order-1">
            <ImageCard
              src={images.freeNotFree}
              alt="Two children, one distracted by phone"
              label="A calmer digital everyday life is possible"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentPanel({
  eyebrow,
  title,
  highlight,
  paragraphs
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft backdrop-blur sm:p-8 lg:p-10">
      <p className="text-sm font-black uppercase text-lagoon">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-black leading-tight text-ink sm:text-4xl">{title}</h3>
      <div className="mt-6 space-y-5 text-base leading-8 text-ink/74 sm:text-lg">
        <p>{paragraphs[0]}</p>
        <p className="rounded-2xl border-l-4 border-berry bg-blush px-5 py-4 font-bold text-ink">
          {highlight}
        </p>
        <p>{paragraphs[1]}</p>
      </div>
    </article>
  );
}

function ImageCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
      <div className="relative aspect-[607/354] overflow-hidden rounded-[1.4rem]">
        <Image src={src} alt={alt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
      </div>
      <figcaption className="flex items-center gap-2 px-2 pb-1 pt-4 text-sm font-bold text-ink/70">
        <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        {label}
      </figcaption>
    </figure>
  );
}

function FeatureSection() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-berry">The product</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Built like a playground, governed like a safe space.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
            snërqq keeps the magic children want while changing the mechanics parents worry about: no public follower chase, no ad-funded attention loop, no endless scroll.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`${feature.color} ${feature.span} group flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-ink/10 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/70">
                <Image
                  src={feature.image}
                  alt=""
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                  unoptimized
                />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs font-black uppercase text-berry">{feature.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink/72">{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section id="safety" className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-lime">Safety by design</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            A friend-first system that refuses the usual attention economy.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            snërqq is member-funded and built for children to connect with real friends. The rules, the product loops and the visual world all point toward healthier use.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["No ads", "No public profiles", "No endless feed", "Parent approval"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/14 bg-white/8 p-4 text-sm font-black">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {safetyItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-berry">
                    <Icon aria-hidden="true" size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-white/70">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LaunchSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="launch" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.2rem] bg-berry shadow-soft lg:grid-cols-[1fr_0.8fr]">
        <div className="p-6 text-white sm:p-10 lg:p-14">
          <p className="text-sm font-black uppercase text-lime">Pre-launch offer</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Join the list for a calmer first step into digital friendship.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
            Get launch updates, early access information and the limited pre-launch offer: five years for the price of one year.
          </p>
          <button
            className="focus-ring mt-8 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-lime px-7 text-lg font-black text-berry shadow-button transition hover:-translate-y-0.5"
            type="button"
            onClick={onOpenModal}
          >
            Join the launch list
            <ArrowRight aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="relative min-h-[320px] bg-butter">
          <Image
            src={images.phone}
            alt="Phone showing a child-friendly digital space"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/28 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function LaunchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  if (!open) {
    return null;
  }

  const closeModal = () => {
    setErrors({});
    setSuccess(false);
    onClose();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const policy = form.get("policy") === "on";
    const nextErrors: FormErrors = {};

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!policy) {
      nextErrors.policy = "Please agree to the Privacy Policy.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6" role="dialog" aria-modal="true" aria-labelledby="launch-modal-title">
      <button className="absolute inset-0 bg-ink/62 backdrop-blur-sm" type="button" aria-label="Close launch form" onClick={closeModal} />
      <div className="relative max-h-[calc(100dvh-3rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-paper p-6 shadow-soft sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-berry">Launch list</p>
            <h2 id="launch-modal-title" className="mt-2 text-3xl font-black">
              Join the launch list
            </h2>
          </div>
          <button
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink"
            type="button"
            aria-label="Close modal"
            onClick={closeModal}
          >
            <X aria-hidden="true" size={21} />
          </button>
        </div>

        {success ? (
          <div className="mt-8 rounded-3xl bg-mint p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-berry">
              <Check aria-hidden="true" size={24} strokeWidth={3} />
            </div>
            <h3 className="mt-5 text-2xl font-black">You&apos;re on the list.</h3>
            <p className="mt-3 leading-7 text-ink/72">
              We&apos;ll reach out when snërqq opens for early families. This demo keeps the submission local.
            </p>
            <button
              className="focus-ring mt-6 min-h-12 rounded-2xl bg-ink px-5 font-bold text-white"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
            <label className="block">
              <span className="text-sm font-bold text-ink/78">First name optional</span>
              <input
                className="focus-ring mt-2 min-h-[52px] w-full rounded-2xl border border-ink/14 bg-white px-4 text-base outline-none"
                name="firstName"
                placeholder="First name"
                type="text"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-ink/78">Email address</span>
              <input
                className="focus-ring mt-2 min-h-[52px] w-full rounded-2xl border border-ink/14 bg-white px-4 text-base outline-none"
                name="email"
                placeholder="example@mail.com"
                type="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? <p id="email-error" className="mt-2 text-sm font-bold text-berry">{errors.email}</p> : null}
            </label>

            <label className="flex items-start gap-3 rounded-2xl bg-white p-4">
              <input
                className="mt-1 h-5 w-5 accent-berry"
                name="policy"
                type="checkbox"
                aria-invalid={Boolean(errors.policy)}
                aria-describedby={errors.policy ? "policy-error" : undefined}
              />
              <span className="text-sm leading-6 text-ink/74">
                I agree to the snërqq Privacy Policy and understand this demo does not submit to a live waitlist API.
              </span>
            </label>
            {errors.policy ? <p id="policy-error" className="text-sm font-bold text-berry">{errors.policy}</p> : null}

            <button
              className="focus-ring flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-lime px-6 text-lg font-black text-berry shadow-button"
              type="submit"
            >
              Join the launch list
              <ArrowRight aria-hidden="true" size={20} />
            </button>
            <p className="text-center text-sm leading-6 text-ink/58">
              We will never share or sell your information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src={images.logo}
            alt="snërqq"
            width={115}
            height={40}
            className="h-9 w-auto"
            style={{ width: "auto" }}
            unoptimized
          />
          <p className="mt-3 max-w-md text-sm leading-6 text-ink/62">
            A child-friendly digital platform with no endless feed, no influencers, no advertising and no public visibility.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-ink/72" aria-label="Footer navigation">
          {["Home", "How it works", "Child safety", "Roadmap", "Terms", "Privacy"].map((item) => (
            <a key={item} className="focus-ring rounded-lg hover:text-berry" href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
