import { apexCompanions, heroStats, lanes } from './data'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <a className="kg-logo" href="https://kineticgain.com/" aria-label="Kinetic Gain home">
            <svg className="kg-mark" viewBox="-8 -8 188 88" aria-hidden="true">
              <rect className="anchor" x="0" y="0" width="14" height="72" />
              <polygon className="bar" points="32,0 83,0 77,18 26,18" />
              <polygon className="bar" points="32,27 127,27 121,45 26,45" />
              <polygon className="bar" points="32,54 172,54 166,72 26,72" />
            </svg>
            <span className="kg-word">Kinetic Gain</span>
          </a>
          <nav className="site-nav">
            <a href="https://kineticgain.com/calculators/">Calculators</a>
            <a href="https://kineticgain.com/trust/">Trust pack</a>
            <a href="https://kineticgain.com/policies/">Policies</a>
            <a href="https://suite.kineticgain.com/">Suite</a>
            <a href="https://kineticgain.com/">Home ↗</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="eyebrow">Growth Systems · production-shaped operator portfolio</div>
          <h1>
            Where the <span className="grad">Growth Ops</span> lane ships.
          </h1>
          <p className="lede">
            Eleven production-shaped repos that take growth-platform integrations seriously — consent evidence,
            experimentation discipline, privacy-aware tokenization, and connector observability. Klaviyo · WordPress ·
            VWO · Camunda · CyberArk · Skyflow as integration surfaces; AGPL-3.0 or Apache-2.0; CI green; deployed via
            wildcard <code>*.kineticgain.com</code> + GitHub Pages where applicable, or npm where the shape is a library.
          </p>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {lanes.map((lane) => (
          <section className={`lane lane-${lane.accent}`} key={lane.title} aria-label={lane.title}>
            <div className="lane-head">
              <div>
                <span className="eyebrow small">{lane.kicker}</span>
                <h2>{lane.title}</h2>
              </div>
              <span className="lane-count">{lane.repos.length} repos</span>
            </div>
            <p className="lane-intro">{lane.intro}</p>
            <div className="grid">
              {lane.repos.map((repo) => (
                <article className="card" key={repo.name}>
                  <a className="card-title" href={repo.url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <p className="card-desc">{repo.desc}</p>
                  <div className="card-meta">
                    <span className={`tag tag-${repo.tag.replace(/[^a-z0-9]/g, '-')}`}>{repo.tag}</span>
                    {repo.live ? (
                      <a className="live-link" href={repo.live} target="_blank" rel="noreferrer">
                        Live ↗
                      </a>
                    ) : (
                      <span className="muted">repo only</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="lane lane-cyan" aria-label="Companion apex tools">
          <div className="lane-head">
            <div>
              <span className="eyebrow small">apex executive-tools that pair with the Growth Ops lane</span>
              <h2>Pairs with</h2>
            </div>
            <span className="lane-count">{apexCompanions.length} tools</span>
          </div>
          <p className="lane-intro">
            Browser-only tools on the apex (<a href="https://kineticgain.com/">kineticgain.com</a>) that growth operators
            and CFO/Procurement leads reach for alongside these repos. No login, no telemetry, no backend.
          </p>
          <div className="grid">
            {apexCompanions.map((c) => (
              <article className="card" key={c.title}>
                <a className="card-title" href={c.url} target="_blank" rel="noreferrer">
                  {c.title}
                </a>
                <p className="card-desc">{c.desc}</p>
                <div className="card-meta">
                  <span className="tag tag-apex">apex tool</span>
                  <a className="live-link" href={c.url} target="_blank" rel="noreferrer">
                    Open ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="belief">
          <h3>What this surface is — and is not</h3>
          <p>
            <strong>What it is:</strong> a buyer-readable index of the Kinetic Gain Growth Ops lane. Every linked repo is
            real, open-source, and either deployed at a <code>*.kineticgain.com</code> subdomain or shipped on a
            registry. The lanes mirror how Growth + Marketing teams actually buy: consent + lifecycle, experimentation
            governance, privacy + tokenization, connector + workflow observability.
          </p>
          <p>
            <strong>What it isn't:</strong> a dashboard with live metrics about your business. KG ships scaffolding and
            runtime primitives — your own data lives in your stack. Aligned in vocabulary with GDPR Art. 28, CPRA
            §1798.140, ISO/IEC 27018, SOC 2 CC9.2, NIST AI RMF — never "compliant" or "certified" without external
            attestation.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot-row">
          <span>© 2026 Kinetic Gain LLC · Boston, MA</span>
          <div>
            <a href="https://kineticgain.com/calculators/vendor-renewal-decision/">Vendor renewal</a>
            <a href="https://kineticgain.com/trust/">Trust pack</a>
            <a href="https://kineticgain.com/policies/">Policies</a>
            <a href="https://flows.kineticgain.com/">flows ↗</a>
            <a href="https://github.com/mizcausevic-dev/growth-systems-control-room">Repo ↗</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
