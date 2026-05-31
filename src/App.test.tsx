import { render, screen } from '@testing-library/react'
import App from './App'

describe('GrowthOpsLane', () => {
  it('renders the Growth Ops lane index with hero + lanes', () => {
    render(<App />)

    // Hero h1
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /where the growth ops lane ships/i,
      }),
    ).toBeInTheDocument()

    // All 4 Growth Ops lane h2s + the Pairs-with h2 — scoped to headings to avoid
    // ambiguity with kicker text that repeats the lane name.
    const laneHeadings = screen.getAllByRole('heading', { level: 2 })
    const laneTitles = laneHeadings.map((h) => h.textContent ?? '')
    expect(laneTitles).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/Consent \+ Lifecycle Marketing/i),
        expect.stringMatching(/Experimentation Governance/i),
        expect.stringMatching(/Privacy \+ Tokenization/i),
        expect.stringMatching(/Connector \+ Workflow Observability/i),
        expect.stringMatching(/Pairs with/i),
      ]),
    )

    // Real KG repos surfaced as card-title links
    expect(screen.getByRole('link', { name: /klaviyo-flow-consent-audit/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /kinetic-gain-embedded/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /vwo-experiment-governance-mirror/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /camunda-process-governance/i })).toBeInTheDocument()

    // Belief block disclaimer present
    expect(
      screen.getByRole('heading', { level: 3, name: /what this surface is — and is not/i }),
    ).toBeInTheDocument()
  })
})
