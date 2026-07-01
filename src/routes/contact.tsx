import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/ui-kit";
import natureImg from "../assets2/nature-BNBal8dX.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · House of Yoga · Kandivali West, Mumbai" },
      {
        name: "description",
        content:
          "Get in touch with House of Yoga. Join a free trial class via WhatsApp, email contact@thehouseofyoga.in, or connect on Instagram and YouTube. Offline classes in Kandivali West, Mumbai.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  ["Email", "contact@thehouseofyoga.in", "mailto:contact@thehouseofyoga.in"],
  ["Instagram", "@houseofyoga0", "https://instagram.com/houseofyoga0"],
  ["YouTube", "@Houseofyogaa", "https://youtube.com/@Houseofyogaa"],
];

function Contact() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you."
        intro="Begin your practice, ask a question, or enquire about a wellness program for your organization."
        image={natureImg}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Start a conversation</h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              The simplest way to begin is a quick message on WhatsApp. We’ll help
              you choose a class and answer any questions.
            </p>
            <div className="mt-8">
              <WhatsAppLink>Message us on WhatsApp</WhatsAppLink>
            </div>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {channels.map(([label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 transition-colors hover:text-primary"
                >
                  <span className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
                  <span className="text-lg">{value}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-border bg-card p-10">
              <p className="eyebrow">Where we practise</p>
              <h3 className="mt-5 text-3xl leading-snug">Kandivali West, Mumbai</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Strokesarthouse, Anupam CHS, Sector 5, Sector 8, Kandivali West,
                Mumbai, Maharashtra 400067.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strokesarthouse%2C%20Anupam%20CHS%2C%20Sector%205%2C%20Sector%208%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-background text-center text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
