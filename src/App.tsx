import { architectureNodes, domainTiles, queueCards, scenarioCards, signalRows, summaryTiles } from './data'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-grid panel">
        <div className="hero-copy">
          <p className="eyebrow">Growth Systems Control Room</p>
          <h1>One flagship surface for revenue, growth, AI, security, and operating pressure.</h1>
          <p className="lead">
            A unifying control room that makes the rest of the portfolio feel like one operating system instead of
            isolated tools.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="https://kineticgain.com/" rel="noreferrer" target="_blank">
              Kinetic Gain
            </a>
            <a className="secondary-link" href="https://mizcausevic.com/skills/" rel="noreferrer" target="_blank">
              Skills / Portfolio
            </a>
          </div>
        </div>

        <div className="summary-grid">
          {summaryTiles.map((tile) => (
            <article className="summary-tile" key={tile.label}>
              <span>{tile.label}</span>
              <strong>{tile.value}</strong>
              <small>{tile.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio system map</p>
            <h2>The portfolio comes together as one coordinated growth operating model.</h2>
          </div>
          <span className="annotation">Metro-style flagship layout</span>
        </div>

        <div className="domain-grid">
          {domainTiles.map((tile) => (
            <article className="domain-card" key={tile.title}>
              <p className="eyebrow small">{tile.kicker}</p>
              <h3>{tile.title}</h3>
              <b>{tile.metric}</b>
              <p>{tile.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Signal wall</p>
              <h2>What leadership should worry about first</h2>
            </div>
          </div>

          <div className="signal-list">
            {signalRows.map((row) => (
              <article className="signal-row" key={row.lane}>
                <div className="signal-left">
                  <strong>{row.lane}</strong>
                  <p>{row.narrative}</p>
                </div>
                <div className="signal-right">
                  <span className={`state-pill state-${row.state.toLowerCase()}`}>{row.state}</span>
                  <b>{row.score}</b>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Action queue</p>
              <h2>Cross-domain work that needs coordinated execution</h2>
            </div>
          </div>

          <div className="queue-grid">
            {queueCards.map((card) => (
              <article className="queue-card" key={card.title}>
                <div className="queue-topline">
                  <span className="priority-pill">{card.priority}</span>
                  <span>{card.owner}</span>
                </div>
                <strong>{card.title}</strong>
                <p>{card.context}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="split-grid">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Scenario board</p>
              <h2>Different ways to steer the system depending on what matters most</h2>
            </div>
          </div>

          <div className="scenario-grid">
            {scenarioCards.map((scenario) => (
              <article className="scenario-card" key={scenario.title}>
                <strong>{scenario.title}</strong>
                <p>{scenario.summary}</p>
                <ul>
                  {scenario.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Architecture</p>
              <h2>A control room for systems that usually stay fragmented</h2>
            </div>
          </div>

          <div className="architecture-stack">
            {architectureNodes.map((node, index) => (
              <div className="architecture-node" key={node}>
                <span>{index + 1}</span>
                <strong>{node}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
