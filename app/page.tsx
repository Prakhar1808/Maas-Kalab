import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard";
import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import { RotatingInfoCard } from "@/components/RotatingInfoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { title } from "process";

const members = [
  {
    name: "Mallu",
    description: "President of Maas Kalab",
  },
  {
    name: "Sejal",
    description: "Maas Enthusiast", // Maas Enthusiast is a place holder
  },
  {
    name: "exhidna tea",
    description: "Vice President of Maas Kalab",
  },
  {
    name: "abneeeees",
    description: "Food Inspector of Maas Kalab",
  },
  {
    name: "V8",
    description: "Event Coordinator of Maas Kalab",
  },
  {
    name: "LilSuperUser",
    description: "Maas Enthusiast",
  },
  {
    name: "Karan",
    description: "Maas Enthusiast",
  },
  {
    name: "K2",
    description: "Maas Man"
  }
];

const resources = [
  {
    imgSrc: "resources/gulrez_kabab_corner.png",
    title: "Gulrez Kabab Corner",
    description: "placeholder",
    addr: "https://share.google/pQdWHFnzm1GzWbmio"
  },
  {
    imgSrc: "resources/hafiz_ji_parathe_wale.png",
    title: "HAFIZ JI PARATHE WALE",
    description: "placeholder",
    addr: "https://share.google/0aaDdAPEPtuRPNXY3"
  },
  {
    imgSrc: "resources/imran_nihari_shop.png",
    title: "Imran Nihari Shop Turkmangate Delhi",
    description: "placeholder",
    addr: "https://share.google/v9UlFeH1g9ChM4Z2E"
    },
  {
    imgSrc: "resources/sangam_kabab_corner.png",
    title: "Sangam Kabab Corner", 
    description: "placeholder",
    addr: "https://share.google/zb9N2rAmisskdVEko"
  },
  {
    imgSrc: "resources/talib_kabab_corner.png",
    title: "TALIB KABAB CORNER",
    description: "placeholder",
    addr: "https://share.google/TZayhAx1eB3KFdZAE"
  },
  {
    imgSrc: "resources/al_nihar.png",
    title: "Al Nihar",
    description: "placeholder",
    addr: "https://share.google/5e6EiHaIjbW2qFqDB1"
  },
  {
    imgSrc: "resources/pul_bangash_wale.png",
    title: "Pul Bangash Wale",
    description: "placeholder",
    addr: "https://share.google/aJb6xXr61kKSJ9fNx"
  }
];

const miniMeetups = [
  {
    imgSrc: "miniMeetups/briyani.png",
    title: "Briyani shop near Kolez",
    description: "Placeholder",
    date: "5-12-2025",
  },
  {
    imgSrc: "miniMeetups/gulawati_kebab.png",
    title: "Adarsh Ka Laptop",
    description: "placeholder",
    date: "16-02-2026",
  },
  {
    imgSrc: "miniMeetups/humayun_tomb.png",
    title: "Happy B'day",
    description: "placeholder",
    date: "18-03-2026",
  },
  {
    imgSrc: "miniMeetups/post_foss_hack.png",
    title: "Post FOSS Hack",
    description: "placeholder",
    date: "29-03-2026 - 31-03-2026",
  },
  {
    imgSrc: "miniMeetups/Om_ki_briyani.png",
    title: "Om ki Briyani",
    description: "placeholder",
    date: "10-04-2026",
  }
];

const clubHighlights = [
  {
    title: "About Maas Kalab",
    description: "Maas Kalab is a commmunity of Maas Khors from dilli those who love to eat and cook Maas.",
  },
  {
    title: "Maas Hacks and Meetups",
    description: "Maas Hack is out flagship event and we even do some mini events time to time.",
  },
  {
    title: "What we eat ?",
    description: "Nihari, Briyani, Shwarma, Kebab, Paratha, Kakori Kebab, Gulawati Kebab, Keema etc.",
  },
  {
    title: "Motto",
    description: "'jo Maas khaye wo mera bhai' ~ Karan",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section
          id="home"
          className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="w-fit rounded-full border border-white/40 bg-white/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-stone-700 backdrop-blur">
                A Kalab For MAAS Khors
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                  Maas Kalab
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                  Maas Kalab is a community for people who love to cook and eat delicious food (non-veg obv).
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6  "
                  className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
                >
                  Join The Kalab
                </a>
                <a
                  href="#resources"
                  className="rounded-full border border-stone-300 bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-500"
                >
                  View Resources
                </a>
              </div>
            </div>

            <RotatingInfoCard items={clubHighlights} />
          </div>
        </section>

        <section
          id="mass-hack"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl rounded-[2.1rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_80px_rgba(28,25,23,0.08)] backdrop-blur sm:p-10">
            <SectionHeading
              title="MAAS HACK"
              description="Maas Kalab's flagship program. We meet and Eat (A Lot)"
            />
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                imgSrc="maashack/maashack_1.png"
                title="Maas Hack 1.0"
                description="placeholder"
                date= "04-10-25"
                link="/masshacks/1"
              />
              <InfoCard
                imgSrc="maashack/maashack_2.png"
                title="Maas Hack 2.0"
                description="placeholder"
                date= "28-11-25"
                link="/masshacks/2"
              />
              <InfoCard
                imgSrc="maashack/maashack_3.png"
                title="Maas Hack 3.0"
                description="placeholder"
                date= "05-03-26"
                link="/masshacks/3"
              />
              <InfoCard
                imgSrc="maashack/maashack_4.png"
                title="Maas Hack 4.0"
                description="placeholder"
                date= "15-04-26"
                link="/masshacks/4"
              />
            </div>
          </div>
        </section>

        <section
          id="mini-meetups"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Mini Maasups"
              description="Other than Maas Hacks, Maas Kalab hosts some mini meetups too!"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {miniMeetups.map((meetup) => (
                <InfoCard
                  key={meetup.title}
                  imgSrc={meetup.imgSrc}
                  title={meetup.title}
                  description={meetup.description}
                  date={meetup.date}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="members"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Maas Khors"
              description="All the Maas khors from the Maas kalab"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {members.map((member) => {
          const baseSize = 64;
          const size = baseSize + Math.max(0, member.name.length - 4) * 8;
          return (
            <div key={member.name} className="flex flex-col items-center space-y-4">
              <div
                className="flex items-center justify-center rounded-full bg-stone-200 text-lg font-semibold text-stone-950"
                style={{ width: size, height: size }}
              >
                {member.name}
              </div>
              <p className="text-center text-sm text-stone-700">
                {member.description}
              </p>
            </div>
          );
              })}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                title="Become a Maas Khor"
                description="Tap the Join Now button"
              />
            </div>
            <div className="grid gap-4">
              <InfoCard
                title="whatsapp/@masskalab"
                link="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
              />
              <InfoCard
                title="Github/@masskalab"
                link="https://github.com/abneeeees/Maas-Kalab/"
              />
            </div>
          </div>
        </section>

        <section
          id="resources"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Resources"
              description="All the Maas Places you can go in dilli"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  imgSrc={resource.imgSrc}
                  title={resource.title}
                  description={resource.description}
                  addr={resource.addr
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
