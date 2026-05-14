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
      price: "SUV R14/15/16: 180 lei • R17/18: 200 lei • R19: 240 lei • R20-24: 290 lei • Jeep Offroad R13-22: 240 lei • Dubă mică: 220 lei • Dubă mare: 270 lei • Dubă axă dublă spate: 370 lei",
    },
    {
      title: "Schimb roți fără echilibrat",
      desc: "Schimb roți cu totul + presiune, fără echilibrare.",
      price: "Turisme: 80 lei • Jeep/SUV: 100 lei • Dubă: 110 lei",
    },
    {
      title: "Schimb roți cu echilibrat",
      desc: "Schimb roți cu totul + presiune + echilibrare.",
      price: "Turism R14/15/16/17/18: 140 lei • Turism R19/20/21: 160 lei • Jeep/SUV R14/15/16/17/18: 160 lei • Jeep/SUV R19/20/21: 190 lei • Dubă mică: 180 lei • Dubă mare: 200 lei",
    },
    {
      title: "Reparații pană",
      desc: "Pană cu etanșare, șnur sau petic, în funcție de situație.",
      price: "Pană etanșare R14-21: 40 lei • SUV/Dubă: 50 lei • Pană șnur R14-21: 40 lei • SUV/Dubă: 50 lei • Pană petic R14-16: 60 lei • R17-21: 70 lei • SUV/Dubă: 80 lei • Dubă axă dublă: 120 lei",
    },
    {
      title: "Echilibrare roți",
      desc: "Echilibrare roată pentru confort, stabilitate și uzură corectă.",
      price: "R13-14: 15 lei/buc • R15-18: 20 lei/buc • R19-21: 25 lei/buc • Dubă/Jeep: 25 lei/buc",
    },
    {
      title: "Geometrie direcție",
      desc: "Reglaj direcție pentru stabilitate, siguranță și consum optim.",
      price: "Autoturism: punte față 160 lei, punte spate 100 lei • SUV/Jeep: față 180 lei, spate 150 lei • Dubițe: față 200 lei, spate 130 lei • Constatare: 70 lei • Unghi cădere față: 80 lei",
    },
    {
      title: "Încărcare freon AC",
      desc: "Încărcare freon R134A, freon ecologic YF1234, test verificare și igienizare cu ozon.",
      price: "R134A: 150 lei în limita a 600g • Suplimentar: 30 lei / 100g • YF1234: 100 lei / 100g • Test verificare freon: 50 lei • Igienizare cu ozon: 60 lei",
    },
    {
      title: "Valve, presiune și accesorii",
      desc: "Valve cauciuc, valve mecanice, valve senzori, presiune, azot și saci pentru roți.",
      price: "Valvă cauciuc: 5 lei/buc • Valvă mecanică: 25 lei/buc • Valvă senzor aluminiu: 50 lei/buc • Valvă senzor cauciuc: 30 lei/buc • D/M valvă senzor: 10 lei/buc • Presiune: 2 lei/buc • Azot: 5 lei/buc • Saci 4 buc: 20 lei",
    },
    {
      title: "Jante și intervenții speciale",
      desc: "Îndreptare jante, roluit jantă tablă, extragere antifurt și extragere prezon.",
      price: "Roluit jantă tablă: 40 lei/buc • Îndreptat jantă aliaj: 100 lei • Extragere antifurt: 50 lei/buc • Extragere prezon: 20 lei/buc • Umflare roată cu explozie: 5 lei/buc • Runflat: +10 lei/buc",
    },
  ];

  const benefits = [
    "Program rapid",
    "Echipamente moderne",
    "Prețuri transparente",
    "Locație accesibilă",
  ];

  const testimonials = [
    {
      name: "Cătălin",
      text: "Locație foarte bună. Băieții profesioniști, experiență foarte bună de-a lungul anilor. Scule profesionale și servicii excelente.",
    },
    {
      name: "Ionica",
      text: "Extraordinari, super rapizi, serviabili și politicoși. Vulcanizarea este impecabil organizată. Recomand!",
    },
    {
      name: "Ciprian",
      text: "Calitatea montajului este de top. Curățenie, profesionalism și atenție la detalii. Recomand cu încredere.",
    },
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
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo-mao.png"
              alt="MAO Service Roți"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                MAO <span className="text-red-600">SERVICE ROȚI</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-[0.25em]">
                Prelungirea Ghencea 99
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide">
            <a href="#servicii" className="hover:text-red-600 transition">Servicii</a>
            <a href="#preturi" className="hover:text-red-600 transition">Prețuri</a>
            <a href="#galerie" className="hover:text-red-600 transition">Galerie</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </div>

          <a
            href="tel:+40765529472"
            className="hidden sm:block bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-black transition"
          >
            Sună acum
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(220,38,38,0.35),transparent_45%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-red-600/10 skew-x-[-12deg] translate-x-28" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-red-500 font-black uppercase tracking-[0.35em] mb-5">
              Vulcanizare • Geometrie • Freon • Service Auto
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-none mb-7">
              Vulcanizare auto profesionistă
            </h2>

            <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed">
              MAO Service oferă servicii auto complete pe Prelungirea Ghencea:
              roți, anvelope, geometrie, freon, diagnoză și întreținere auto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+40765529472"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-black text-lg transition text-center"
              >
                Sună pentru programare
              </a>

              <a
                href="https://maps.google.com?q=MAO%20Service%20Roti%20GEOMETRIE%20INCARCARE%20FREO%20Vulcanizare,%20Prelungirea%20Ghencea%2099,%20061715%20Bucure%C8%99ti"
                target="_blank"
                className="border border-white/20 hover:border-red-600 px-8 py-4 rounded-2xl font-black text-lg transition text-center"
              >
                Vezi locația
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-red-500 font-black text-2xl">✓</p>
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/20 rounded-[2rem] blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop"
              alt="Service auto MAO"
              className="relative h-[520px] w-full object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="servicii" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 uppercase tracking-[0.3em] text-center mb-4 font-black">
            Ce putem face pentru tine
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Servicii auto complete
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#service-${index}`}
                className="group bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-red-600 text-4xl font-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-black group-hover:scale-110 transition">
                    →
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-red-600 transition">
                  {service.title}
                </h3>
                <p className="text-zinc-600 mb-5">{service.desc}</p>
                <p className="text-sm text-red-600 font-black">
                  Apasă pentru detalii preț
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="preturi" className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500 uppercase tracking-[0.3em] text-center mb-4 font-black">
            Prețuri reale afișate în service
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Detalii pentru fiecare serviciu
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                id={`service-${index}`}
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 scroll-mt-28 hover:border-red-600 transition"
              >
                <h3 className="text-3xl font-black text-red-500 mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-lg mb-5">{service.desc}</p>
                <div className="bg-black/40 rounded-2xl border border-white/10 p-5">
                  <p className="text-white font-black mb-1">Preț:</p>
                  <p className="text-zinc-400 leading-relaxed">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 uppercase tracking-[0.3em] text-center mb-4 font-black">
            Galerie
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Service modern, lucrări rapide
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="MAO Service auto"
                className="h-80 w-full object-cover rounded-3xl border border-zinc-200 hover:scale-105 transition duration-300 shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Echipa noastră
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Nume Angajat 1", role: "Specialist vulcanizare", image: "/team/team-1.jpg" },
              { name: "Nume Angajat 2", role: "Geometrie & service roți", image: "/team/team-2.jpg" },
              { name: "Nume Angajat 3", role: "Freon & suport clienți", image: "/team/team-3.jpg" },
              { name: "Nume Angajat 4", role: "Montaj anvelope", image: "/team/team-4.jpg" },
              { name: "Nume Angajat 5", role: "Tehnician jante", image: "/team/team-5.jpg" },
              { name: "Nume Angajat 6", role: "Asistență service", image: "/team/team-6.jpg" },
              { name: "Nume Angajat 7", role: "Vulcanizare mobilă", image: "/team/team-7.jpg" },
              { name: "Nume Angajat 8", role: "Consultant clienți", image: "/team/team-8.jpg" },
              { name: "Nume Angajat 9", role: "Specialist echilibrare", image: "/team/team-9.jpg" },
              { name: "Nume Angajat 10", role: "Manager service", image: "/team/team-10.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover"
                />
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                  <p className="text-red-600 font-bold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 uppercase tracking-[0.3em] text-center mb-4 font-black">
            Testimoniale
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
            Ce spun clienții
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl"
              >
                <div className="text-red-600 text-3xl mb-4">★★★★★</div>
                <p className="text-zinc-700 text-lg mb-6">“{review.text}”</p>
                <h3 className="text-xl font-black text-red-600">
                  {review.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] mb-4 font-black">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Ai nevoie de ajutor cu mașina?
            </h2>
            <p className="text-zinc-300 text-xl mb-8">
              Sună sau vino direct la locație. Echipa MAO Service te ajută rapid cu servicii auto profesionale.
            </p>

            <div className="space-y-4 text-lg">
              <p>📍 Prelungirea Ghencea 99, București</p>
              <p>📞 0765 529 472</p>
              <p>🕒 Luni - Sâmbătă, 08:00 - 19:30</p>
            </div>
          </div>

          <div className="bg-white text-zinc-950 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black mb-6">Programare rapidă</h3>
            <p className="text-zinc-600 mb-8">
              Pentru preț exact și disponibilitate, contactează service-ul direct.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+40765529472"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition text-center"
              >
                Sună acum
              </a>

              <a
                href="https://maps.google.com?q=MAO%20Service%20Roti%20GEOMETRIE%20INCARCARE%20FREO%20Vulcanizare,%20Prelungirea%20Ghencea%2099,%20061715%20Bucure%C8%99ti"
                target="_blank"
                className="border border-zinc-300 hover:border-red-600 px-10 py-5 rounded-2xl font-black text-lg transition text-center"
              >
                Deschide harta
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-zinc-500 bg-black border-t border-white/10">
        © 2026 MAO SERVICE. Toate drepturile rezervate.
      </footer>
    </main>
  );
}
