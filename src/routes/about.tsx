import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CTALink } from "@/components/ui-kit";
import natureImg from "../assets2/nature-BNBal8dX.jpg";
import teacherImg from "../assets2/teacher-BX2dnIgC.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · House of Yoga · Authentic Indian Yoga in Mumbai" },
      {
        name: "description",
        content:
          "Why House of Yoga exists — a calm sanctuary for authentic yoga rooted in Indian tradition. Meet teacher Jinal Kariya and discover yoga as a way of living with awareness.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="A space to live with awareness."
        intro="House of Yoga exists to help people reconnect with themselves through authentic yoga rooted in Indian tradition."
        image={natureImg}
      />

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow">Why we exist</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">In a world that never stops moving</h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Modern life asks us to do more, achieve more and consume more. Our
            bodies move less while our minds race more. Despite more comfort than
            ever before, many of us feel stressed, overwhelmed, distracted and
            disconnected.
          </p>
          <p>
            House of Yoga was created as an answer to this restlessness — a calm
            sanctuary rather than a commercial fitness studio. A place to pause, to
            breathe, and to return to ourselves.
          </p>
          <p className="text-foreground">
            Yoga, as we practise it, is the art of living with awareness. It is not
            merely physical exercise, but a holistic way of living that integrates
            body, breath, mind and consciousness.
          </p>
        </Reveal>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Yoga as a way of living</h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Rather than chasing perfection or performance, House of Yoga
              encourages mindful living through movement, breath, meditation and
              timeless yogic wisdom. Through consistent practice, we cultivate
              awareness, balance, clarity and inner peace.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meet your teacher */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
        <Reveal className="overflow-hidden rounded-[2rem]">
          <img src={teacherImg} alt="Jinal Kariya, founder of House of Yoga" className="h-full w-full object-cover" loading="lazy" width={1000} height={1200} />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Your guide</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Meet Your Teacher</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              House of Yoga is guided by <span className="text-foreground">Jinal Kariya</span>,
              who has completed the Basic Teacher Training Course (200 Hours) and
              Advanced Teacher Training Course (900 Hours) from The Yoga Institute,
              Santacruz.
            </p>
            <p>
              At House of Yoga, every practice extends beyond physical postures.
              Sessions thoughtfully integrate mindful asana, pranayama, trataka
              meditation, mantra chanting and practical yogic philosophy, creating a
              holistic experience rooted in the authentic tradition of yoga.
            </p>
            <p className="text-foreground">
              The intention is not to perfect poses, but to cultivate awareness,
              inner peace and a healthier relationship with oneself.
            </p>
          </div>
          <div className="mt-10">
            <CTALink to="/practice">Practice With Us</CTALink>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
