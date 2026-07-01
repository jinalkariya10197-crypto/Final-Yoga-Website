import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/ui-kit";
import practiceImg from "../assets2/practice-DuVSeTMF.jpg";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice With Us · Yoga Classes in Kandivali West, Mumbai" },
      {
        name: "description",
        content:
          "Authentic yoga classes in Kandivali West, Mumbai and live online classes across India. 3 or 5 days a week, 60-minute morning sessions, suitable for beginners.",
      },
    ],
  }),
  component: Practice,
});

const elements = [
  ["Asana", "Mindful movement that builds steadiness and ease in the body."],
  ["Pranayama", "Conscious breathing to calm the nervous system and the mind."],
  ["Trataka", "A focused gazing meditation to steady attention and awareness."],
  ["Mantra Chanting", "Sound and vibration to quiet mental noise and centre the self."],
  ["Yoga Philosophy", "Practical yogic wisdom for living with greater clarity."],
  ["Community Reflection", "Shared reflection that deepens learning and belonging."],
];

const faqs = [
  ["Do I need prior experience?", "Not at all. Classes are suitable for beginners and gently guided, with options to deepen as you grow."],
  ["What should I bring?", "Comfortable clothing and, if you have one, a yoga mat. For offline classes, simply arrive a few minutes early."],
  ["What time are the classes?", "Both offline and online classes run in morning batches. Exact timings are shared upon registration."],
  ["Are online classes live?", "Yes. Online sessions are live and interactive, conducted via Zoom or Google Meet so you are personally guided."],
  ["Can international students join?", "Absolutely. International students are warmly welcome — please contact us for international pricing."],
];

function Practice() {
  return (
    <Layout>
      <PageHero
        eyebrow="Practice With Us"
        title="Begin where you are."
        intro="Morning live classes in Kandivali West, Mumbai and online sessions across India — each practice extends far beyond physical postures."
        image={practiceImg}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Class structure</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">What every class integrates</h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Each session weaves together the timeless elements of yoga to support
            physical wellbeing, mental clarity, emotional balance and self-awareness.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {elements.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 70} className="bg-background p-8">
              <span className="font-serif text-2xl text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Schedules */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="text-center">
            <p className="eyebrow">Schedules</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Choose your rhythm</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-border bg-background p-10">
              <h3 className="text-3xl">Offline Group Classes</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Morning live classes in Kandivali West, Mumbai, serving students
                from Kandivali and surrounding areas.
              </p>
              <ul className="mt-7 space-y-3 text-foreground/80">
                <li>· 3 or 5 days per week</li>
                <li>· 60-minute morning sessions</li>
                <li>· Suitable for beginners</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="rounded-[2rem] border border-border bg-background p-10">
              <h3 className="text-3xl">Online Live Classes</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Live interactive classes for students across India and internationally.
              </p>
              <ul className="mt-7 space-y-3 text-foreground/80">
                <li>· Morning batches</li>
                <li>· Conducted via Zoom or Google Meet</li>
                <li>· Personally guided &amp; beginner-friendly</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow">Membership</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Pricing</h2>
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
          <a href="mailto:contact@thehouseofyoga.in" className="text-primary underline-offset-4 hover:underline">contact us</a>{" "}
          for international pricing.
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
          <Reveal className="text-center">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Before you begin</h2>
          </Reveal>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60} as="details" className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl text-foreground">
                  {q}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{a}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <WhatsAppLink>Join a Free Trial Class</WhatsAppLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}
