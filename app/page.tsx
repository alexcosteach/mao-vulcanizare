export default function Home() {
  const services = [
    {
      title: "Vulcanizare mobilă",
      desc: "Intervenții rapide pentru pene și probleme la roți direct la locația clientului, în funcție de disponibilitate.",
      price: "Prețurile variază în funcție de distanță, intervenție și tipul vehiculului.",
    },
    {
      title: "Schimb anvelope turisme",
      desc: "Demontat/montat anvelope, echilibrare și verificare presiune pentru autoturisme.",
      price: "R12/13/14: 160 lei • R15/16: 170 lei • R17/18: 180 lei • R19/20/21: 220 lei",
    },
    {
      title: "Schimb anvelope SUV / Jeep / Dube",
      desc: "Manoperă schimb complet pentru SUV, Jeep, dubă mică, dubă mare și dubă cu axă dublă.",
      price: "SUV R14/15/16: 180 lei • R17/18: 200 lei • R19: 240 lei • R20-24: 290 lei • Jeep Offroad: 240 lei",
    },
    {
      title: "Schimb roți fără echilibrat",
      desc: "Schimb roți cu totul + presiune, fără echilibrare.",
      price: "Turisme: 80 lei • Jeep/SUV: 100 lei • Dubă: 110 lei",
    },
    {
      title: "Schimb roți cu echilibrat",
      desc: "Schimb roți cu totul + presiune + echilibrare.",
      price: "Turism: 140-160 lei • SUV: 160-190 lei • Dubă: 180-200 lei",
    },
    {
      title: "Reparații pană",
      desc: "Pană cu etanșare, șnur sau petic, în funcție de situație.",
      price: "40 - 120 lei",
    },
    {
      title: "Geometrie direcție",
      desc: "Reglaj direcție pentru stabilitate, siguranță și consum optim.",
      price: "Autoturism: de la 160 lei • SUV: de la 180 lei",
    },
    {
      title: "Încărcare freon AC",
      desc: "Încărcare freon, verificare și igienizare instalație AC.",
      price: "De la 150 lei",
    },
    {
      title: "Valve, presiune și accesorii",
      desc: "Valve, senzori, azot, presiune și accesorii pentru roți.",
      price: "2 - 50 lei",
    },
    {
      title: "Jante și intervenții speciale",
      desc: "Îndreptare jante, roluit, extrageri și intervenții speciale.",
      price: "De la 20 lei",
    },
  ];

  const benefits = ["Program rapid", "Echipamente moderne", "Prețuri transparente", "Locație accesibilă"];

  const testimonials = [
    { name: "Cătălin", text: "Locație foarte bună. Băieții profesioniști, experiență excelentă și servicii de calitate." },
    { name: "Ionica", text: "Super rapizi, serviabili și politicoși. Recomand cu încredere." },
    { name: "Ciprian", text: "Curățenie, profesionalism și atenție la detalii. Foarte mulțumit." },
  ];

  const team = [
    { name: "Nume Angajat 1", role: "Specialist vulcanizare", image: "/team/team-1.jpg" },
    { name: "Nume Angajat 2", role: "Geometrie & service roți", image: "/team/team-2.jpg" },
    { name: "Nume Angajat 3", role: "Freon & suport clienți", image: "/team/team-3.jpg" },
    { name: "Nume Angajat 4", role: "Montaj anvelope", image: "/team/team-4.jpg" },
    { name: "Nume Angajat 5", role: "Tehnician jante", image: "/team/team-5.jpg" },
    { name: "Nume Angajat 6", role: "Asistență service", image: "/team/team-6.jpg" },
    { name: "Nume Angajat 7", role: "Vulcanizare mobilă", image: "/team/team-7.jpg" },
  ];

  const gallery = [
    "/portfolio/mao-exterior-1.jpg",
    "/portfolio/mao-exterior-2.jpg",
    "/portfolio/mao-exterior-3.jpg",
    "/portfolio/mao-interior-1.jpg",
    "/portfolio/mao-interior-2.jpg",
    "/portfolio/mao-interior-3.jpg",
    "/portfolio/mao-equipment-1.jpg",
    "/portfolio/mao-equipment-2.jpg",
    "/portfolio/mao-branding-1.jpg",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img src="/logo-mao.png" alt="MAO Service Roți" className="h-12 w-auto object-contain sm:h-16 lg:h-20" />
            <div className="min-w-0">
              <h1 className="text-lg font-black tracking-tight sm:text-2xl lg:text-3xl">
                MAO <span className="text-red-600">SERVICE ROȚI</span>
              </h1>
              <p className="truncate text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs lg:text-sm">
                Prelungirea Ghencea 99
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide lg:flex">
            <a href="#servicii" className="hover:text-red-600 transition">Servicii</a>
            <a href="#preturi" className="hover:text-red-600 transition">Prețuri</a>
            <a href="#galerie" className="hover:text-red-600 transition">Galerie</a>
            <a href="#echipa" className="hover:text-red-600 transition">Echipă</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </div>

          <a href="tel:+40765529472" className="shrink-0 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition hover:bg-red-700 sm:px-5">
            Sună
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-[calc(100vh-88px)] items-center overflow-hidden bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(220,38,38,0.35),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-red-500 sm:text-sm lg:tracking-[0.35em]">
              Vulcanizare • Geometrie • Freon • Service Roți
            </p>

            <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Vulcanizare auto profesionistă
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-xl lg:text-2xl">
              MAO Service Roți oferă servicii complete pentru anvelope, jante,
              geometrie și întreținere rapidă, direct pe Prelungirea Ghencea.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="tel:+40765529472" className="rounded-2xl bg-red-600 px-6 py-4 text-center text-base font-black transition hover:bg-red-700 sm:px-8 sm:text-lg">
                Sună pentru programare
              </a>
              <a href="https://maps.google.com?q=MAO%20Service%20Roti%20GEOMETRIE%20INCARCARE%20FREO%20Vulcanizare,%20Prelungirea%20Ghencea%2099,%20061715%20Bucure%C8%99ti" target="_blank" className="rounded-2xl border border-white/20 px-6 py-4 text-center text-base font-black transition hover:border-red-600 sm:px-8 sm:text-lg">
                Vezi locația
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black text-red-500">✓</p>
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src="/portfolio/mao-exterior-1.jpg" alt="MAO Service" className="h-72 w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl sm:h-[420px] lg:h-[520px]" />
          </div>
        </div>
      </section>

      <section id="servicii" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            Ce putem face pentru tine
          </p>
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-14 sm:text-5xl lg:text-6xl">
            Servicii auto complete
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a key={index} href={`#service-${index}`} className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-2xl sm:p-8">
                <div className="mb-4 text-3xl font-black text-red-600 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-black transition group-hover:text-red-600 sm:text-2xl">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-600 sm:text-base">{service.desc}</p>
                <p className="text-sm font-black text-red-600">Apasă pentru detalii preț</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="preturi" className="bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-14 sm:text-5xl lg:text-6xl">Prețuri și servicii</h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <div id={`service-${index}`} key={index} className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="mb-4 text-2xl font-black text-red-500 sm:text-3xl">{service.title}</h3>
                <p className="mb-5 text-base leading-relaxed text-zinc-300 sm:text-lg">{service.desc}</p>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                  <p className="mb-1 font-black text-white">Preț:</p>
                  <p className="leading-relaxed text-zinc-400">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-14 sm:text-5xl lg:text-6xl">Galerie MAO Service</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, index) => (
              <img key={index} src={img} alt="MAO Service" className="h-64 w-full rounded-3xl border border-zinc-200 object-cover shadow-xl transition duration-300 hover:scale-[1.02] sm:h-80" />
            ))}
          </div>
        </div>
      </section>

      <section id="echipa" className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-14 sm:text-5xl lg:text-6xl">Echipa noastră</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl transition hover:shadow-2xl">
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover sm:h-80" />
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-black sm:text-2xl">{member.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wide text-red-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-14 sm:text-5xl lg:text-6xl">Ce spun clienții</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((review, index) => (
              <div key={index} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="mb-4 text-2xl text-red-600 sm:text-3xl">★★★★★</div>
                <p className="mb-6 text-base leading-relaxed text-zinc-700 sm:text-lg">“{review.text}”</p>
                <h3 className="text-xl font-black text-red-600">{review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-3xl font-black sm:text-5xl lg:text-6xl">Contact</h2>
          <p className="mb-4 text-lg text-zinc-300 sm:text-xl">📍 Prelungirea Ghencea 99, București</p>
          <p className="mb-4 text-lg text-zinc-300 sm:text-xl">📞 0765 529 472</p>
          <p className="mb-10 text-lg text-zinc-300 sm:text-xl">🕒 Luni - Sâmbătă, 08:00 - 19:30</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+40765529472" className="rounded-2xl bg-red-600 px-8 py-5 text-lg font-black transition hover:bg-red-700 sm:px-10">Sună acum</a>
            <a href="https://maps.google.com?q=MAO%20Service%20Roti%20GEOMETRIE%20INCARCARE%20FREO%20Vulcanizare,%20Prelungirea%20Ghencea%2099,%20061715%20Bucure%C8%99ti" target="_blank" className="rounded-2xl border border-white/20 px-8 py-5 text-lg font-black transition hover:border-red-600 sm:px-10">Deschide harta</a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-8 text-center text-sm text-zinc-500 sm:text-base">
        © 2026 MAO SERVICE ROȚI. Toate drepturile rezervate.
      </footer>
    </main>
  );
}
