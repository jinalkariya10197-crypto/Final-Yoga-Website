import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/ui-kit";
import corporateImg from "../assets2/wp-corporate-real.jpg";
import schoolImg from "../assets2/wp-school-real.jpg";

export const Route = createFileRoute("/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness Programs · Corporate Yoga Mumbai · Yoga for Schools & Colleges" },
      {
        name: "description",
        content:
          "Customized yoga and wellbeing programs for corporate offices, schools, colleges, educational institutions and hostels in Mumbai. Flexible, mindful and thoughtfully designed.",
      },
    ],
  }),
  component: Wellness,
});

const audiences = [
  ["Corporate Offices", "Restorative breaks for focus, calm and resilience amid demanding workdays."],
  ["Schools", "Gentle, age-appropriate practices that nurture attention and emotional balance."],
  ["Colleges & Universities", "Tools to manage stress, sharpen clarity and support student wellbeing."],
  ["Educational Institutions", "Mindful programs woven thoughtfully into the rhythm of learning."],
  ["Hostels", "Grounding routines that bring calm and connection to shared living."],
  ["Community Groups", "Shared practice that builds presence, belonging and wellbeing."],
];

const includes = [
  "Mindful Movement",
  "Breathwork",
  "Meditation",
  "Relaxation Techniques",
  "Practical Yogic Wisdom",
];

function Wellness() {
  return (
    <Layout>
      <PageHero
        eyebrow="Wellness Programs"
        title="Calm, brought to your community."
        intro="Customized yoga and wellbeing programs, thoughtfully designed around the goals of your organization."
        image={corporateImg.url}
      />

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
        <Reveal>
          <p className="eyebrow">A tailored approach</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Designed around you</h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            House of Yoga offers customized yoga and wellbeing programs for
            organizations of every kind. Each session is shaped according to your
            goals and requirements — we emphasise flexibility and customization
            rather than fixed packages.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 70} className="bg-background p-8">
              <span className="font-serif text-2xl text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal className="overflow-hidden rounded-[2rem]">
          <img src={schoolImg.url} alt="A calm moment of stillness" className="h-full w-full object-cover" loading="lazy" width={1400} height={1000} />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">What programs may include</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Thoughtfully composed</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {includes.map((t) => (
              <span key={t} className="rounded-full border border-border px-5 py-2 text-sm text-foreground/75">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Each program supports not only physical wellbeing, but also mental
            clarity, emotional balance and a calmer, more present way of working
            and living together.
          </p>
        </Reveal>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <Reveal>
            <h2 className="text-4xl leading-tight md:text-6xl">Bring stillness to your organization.</h2>
            <p className="mt-7 text-lg text-muted-foreground">
              Tell us about your group and goals — we’ll design a program that fits.
            </p>
            <div className="mt-10">
              <WhatsAppLink>Enquire on WhatsApp</WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
