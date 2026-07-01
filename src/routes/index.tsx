import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CTALink, WhatsAppLink } from "@/components/ui-kit";
import heroAsset from "../assets2/hero-hoy.jpg";
import natureImg from "../assets2/nature-BNBal8dX.jpg";
import teacherImg from "../assets2/teacher-BX2dnIgC.jpg";
import ctaAsset from "../assets2/cta-trikonasana.jpg";
import wpCorporateAsset from "../assets2/wp-corporate-real.jpg";
import wpSchoolAsset from "../assets2/wp-school-real.jpg";
const heroImg = heroAsset;
const practiceImg = ctaAsset;
import poseTree from "../assets2/pose-tree.png";
import posePranayama from "../assets2/pose-pranayama.png";
import poseTrataka from "../assets2/pose-trataka.png";
import poseMeditation from "../assets2/pose-meditation.png";
import posePhilosophy from "../assets2/pose-philosophy.png";
import poseCommunity from "../assets2/pose-community.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Yoga · Authentic Yoga Classes in Kandivali West, Mumbai" },
      {
        name: "description",
        content:
          "Experience the Yoga. Authentic Indian yoga classes in Kandivali West, Mumbai, plus live online classes across India. Cultivate awareness, calm and clarity.",
      },
    ],
  }),
  component: Home,
});

const experiencePillars = [
  { label: "Mindful Asana Practice", img: poseTree.url },
  { label: "Pranayama", img: posePranayama.url },
  { label: "Trataka Meditation", img: poseTrataka.url },
  { label: "Mantra Chanting", img: poseMeditation.url },
  { label: "Practical Yoga Philosophy", img: posePhilosophy.url },
  { label: "Student Reflection & Community Sharing", img: poseCommunity.url },
];

const testimonials = [
  {
    quote:
      "The best yoga class I have ever attended! Going for the trial session was one of the best decisions I've made. I joined just a month ago, and I can already feel a positive difference in my overall well-being. What truly sets this class apart is not just the physical benefits, but the mental and emotional transformation. The sessions help calm the mind, reduce stress, and bring a deep sense of inner peace.",
    name: "Bansari Javani",
    source: "Google Review",
  },
];

const wellnessImages = [
  { src: wpCorporateAsset.url, alt: "A corporate yoga session led at Illusion Lab" },
  { src: wpSchoolAsset.url, alt: "A guided yoga session for school students" },
];

function WellnessGallery() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % wellnessImages.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[4/3]">
        {wellnessImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2.5">
        {wellnessImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="A yoga practitioner in Trikonasana (Triangle Pose) outdoors"
          className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">House of Yoga</p>
            <h1 className="mt-6 text-6xl leading-[1.02] md:text-8xl">Experience the Yoga</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              Cultivate a calmer mind, a healthier body, and reconnect with yourself
              through authentic yoga practices rooted in Indian tradition.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppLink>Join a Free Trial</WhatsAppLink>
              <CTALink to="/practice" variant="outline">Practice With Us</CTALink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — pause */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="eyebrow">A space to pause</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl">
            In a world that never stops moving…
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Modern life asks us to do more, achieve more, and consume more. Our
            bodies move less while our minds race more.
          </p>
          <p>
            Many people feel stressed, overwhelmed, distracted and disconnected
            despite having more comfort than ever before.
          </p>
          <p className="text-foreground">
            House of Yoga offers a space to pause. To breathe. To reconnect.
          </p>
        </Reveal>
      </section>

      {/* Section 3 — what is yoga */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img
              src={natureImg}
              alt="A student seated cross-legged in calm meditation"
              className="h-full w-full object-cover object-[center_30%]"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">The essence</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">What is Yoga?</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground">Yoga is the art of living with awareness.</p>
              <p>It is not merely physical exercise.</p>
              <p>
                It is a holistic way of living that integrates body, breath, mind
                and consciousness.
              </p>
              <p>
                Through consistent practice, yoga helps cultivate greater
                awareness, balance, clarity and inner peace.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — the experience */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Holistic practice</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            The House of Yoga Experience
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Every practice at House of Yoga extends beyond physical postures. Our
            approach integrates each element to support physical wellbeing, mental
            clarity, emotional balance and self-awareness.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {experiencePillars.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 80}
              className="flex min-h-72 flex-col items-center bg-background p-8 text-center transition-colors duration-500 hover:bg-card"
            >
              <img
                src={p.img}
                alt={p.label}
                className="h-36 w-auto object-contain"
                loading="lazy"
              />
              <div className="mt-7">
                <span className="font-serif text-xl text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-2xl leading-snug">{p.label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 5 — practice with us */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="text-center">
            <p className="eyebrow">Practice with us</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Find your practice</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-border bg-background p-10">
              <h3 className="text-3xl">Offline Group Classes</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Morning live classes in Kandivali West, Mumbai, serving students
                from Kandivali and surrounding neighbourhoods.
              </p>
              <ul className="mt-7 space-y-3 text-foreground/80">
                <li>· 3 Days per Week</li>
                <li>· 5 Days per Week</li>
                <li>· 60-minute sessions</li>
                <li>· Suitable for beginners</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="rounded-[2rem] border border-border bg-background p-10">
              <h3 className="text-3xl">Online Live Classes</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Live interactive online classes for students across India and
                internationally.
              </p>
              <ul className="mt-7 space-y-3 text-foreground/80">
                <li>· Morning batches</li>
                <li>· Conducted via Zoom or Google Meet</li>
                <li>· Interactive &amp; personally guided</li>
                <li>· Suitable for beginners</li>
              </ul>
            </Reveal>
          </div>
          <div className="mt-12 text-center">
            <CTALink to="/practice">Explore Classes</CTALink>
          </div>
        </div>
      </section>

      {/* Section 6 — wellness programs */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow">For organizations</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Wellness Programs</h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            House of Yoga offers customized yoga and wellbeing programs, each
            thoughtfully designed around the goals and requirements of your
            organization — including mindful movement, breathwork, meditation,
            relaxation techniques and practical yogic wisdom.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Corporate Offices", "Schools", "Colleges & Universities", "Educational Institutions", "Hostels", "Community Groups"].map((t) => (
              <span key={t} className="rounded-full border border-border px-5 py-2 text-sm text-foreground/75">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <CTALink to="/wellness" variant="outline">Discover Programs</CTALink>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <WellnessGallery />
        </Reveal>
      </section>

      {/* Section 7 — teacher */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img src={teacherImg} alt="Jinal Kariya, founder of House of Yoga" className="h-full w-full object-cover" loading="lazy" width={1000} height={1200} />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Your guide</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Meet Your Teacher</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                House of Yoga is guided by <span className="text-foreground">Jinal Kariya</span>,
                who has completed the Basic Teacher Training Course (200 Hours)
                and Advanced Teacher Training Course (900 Hours) from The Yoga
                Institute, Santacruz.
              </p>
              <p>
                Sessions thoughtfully integrate mindful asana, pranayama, trataka
                meditation, mantra chanting and practical yogic philosophy —
                creating a holistic experience rooted in authentic tradition.
              </p>
              <p className="text-foreground">
                The intention is not to perfect poses, but to cultivate awareness,
                inner peace and a healthier relationship with oneself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 8 — pricing */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <h2 className="text-4xl leading-tight md:text-5xl">Pricing</h2>
          <p className="mt-5 text-muted-foreground">Offline &amp; Online Classes</p>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-border p-10 text-center">
            <p className="eyebrow">3 Days / Week</p>
            <p className="mt-6 font-serif text-5xl text-foreground">₹2,000</p>
            <p className="mt-2 text-sm text-muted-foreground">per month</p>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] border border-primary/40 bg-card p-10 text-center">
            <p className="eyebrow">5 Days / Week</p>
            <p className="mt-6 font-serif text-5xl text-foreground">₹2,500</p>
            <p className="mt-2 text-sm text-muted-foreground">per month</p>
          </Reveal>
        </div>
        <Reveal className="mt-8 text-center text-sm text-muted-foreground">
          International students are warmly welcome — please{" "}
          <a href="mailto:contact@thehouseofyoga.in" className="text-primary underline-offset-4 hover:underline">
            contact us
          </a>{" "}
          for international pricing.
        </Reveal>
      </section>

      {/* Section 9 — testimonials */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="text-center">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Reflections from our students</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="flex flex-col rounded-[2rem] border border-border bg-background p-9">
                <p className="flex-1 font-serif text-xl leading-relaxed text-foreground/90">“{t.quote}”</p>
                <div className="mt-7">
                  <p className="text-sm text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img src={practiceImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1400} height={1000} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center lg:py-44">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              House of Yoga is not a place to escape life. It is a place to learn
              how to live it with greater awareness.
            </p>
            <h2 className="mt-8 text-5xl leading-tight md:text-7xl">Experience the Yoga</h2>
            <div className="mt-10">
              <WhatsAppLink>Join a Free Trial Class</WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
