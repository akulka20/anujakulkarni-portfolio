export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-800">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-emerald-600">Hi, I'm Anuja Kulkarni</h1>
        <p className="mt-2 text-lg">Product Manager | UX Enthusiast | CA | Trekker</p>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          I build digital products and experiences that drive results. I love exploring mountains, solving product challenges, and designing intuitive user journeys.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-emerald-500">About Me</h2>
		<section className="mt-16">
		<h2 className="text-2xl font-semibold text-emerald-500">Work Experience</h2>
		<ul className="mt-2 space-y-3 text-gray-700 list-disc list-inside">
		<li><strong>BNP Paribas</strong> – Senior Business Analyst (Feb 2024 – Present)</li>
		<li><strong>ReBIT (RBI)</strong> – Product Manager (2021 – 2024)</li>
		<li><strong>Takeda Pharmaceuticals</strong> – SAP Implementation Analyst</li>
		<li><strong>Freelance UX Projects</strong> – Survey Portals, Big Data Interfaces</li>
		</ul>
		</section>
        <p className="mt-2">
          With 10+ years in the fintech and banking space, I've worked with RBI, ReBIT, and BNP Paribas. My roles have spanned product strategy, UX design, and digital transformation. I’m also a passionate trekker, dancer, and storyteller.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-emerald-500">Contact</h2>
        <p className="mt-2">
          📧 anujakulkarni@email.com<br />
          🔗 <a href="https://linkedin.com/in/anujakulkarni" className="text-emerald-600 underline">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}
