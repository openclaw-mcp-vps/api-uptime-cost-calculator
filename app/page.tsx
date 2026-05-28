export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Revenue Lost from{" "}
          <span className="text-[#58a6ff]">API Downtime</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor your API endpoints, plug in your traffic and conversion metrics,
          and instantly see the dollar cost of every minute of downtime.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to start.</p>

        {/* Metric strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { label: "Avg downtime cost", value: "$5,600/hr" },
            { label: "Endpoints monitored", value: "Unlimited" },
            { label: "Check interval", value: "60 sec" }
          ].map((m) => (
            <div key={m.label}>
              <p className="text-2xl font-bold text-[#58a6ff]">{m.value}</p>
              <p className="text-xs text-[#6e7681] mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#6e7681] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API endpoints",
              "60-second uptime checks",
              "Revenue impact dashboard",
              "Historical downtime reports",
              "Email & Slack alerts",
              "Custom conversion metrics"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is revenue loss calculated?",
              a: "You enter your hourly traffic, conversion rate, and average revenue per conversion. We multiply those by downtime duration to give you an accurate dollar figure."
            },
            {
              q: "Which APIs can I monitor?",
              a: "Any publicly reachable HTTP/HTTPS endpoint. REST, GraphQL, webhooks — if it returns a status code, we track it."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Uptime Cost Calculator. All rights reserved.
      </footer>
    </main>
  );
}
