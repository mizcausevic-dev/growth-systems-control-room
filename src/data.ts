// Real KG Growth Ops portfolio — synthetic dashboard data deleted 2026-05-31.
// Source of truth: github.com/mizcausevic-dev + live *.kineticgain.com surfaces.

export const heroStats = [
  {
    value: 'Klaviyo · WordPress · VWO · Camunda · CyberArk · Skyflow',
    label: 'Growth-platform integration footprint',
  },
  {
    value: '11',
    label: 'Production-shaped Growth Ops repos in the KG portfolio',
  },
  {
    value: 'flows.kineticgain.com',
    label: 'Phase 0 anchor (Klaviyo Flow Consent Audit) — v1.0-prod',
  },
]

export type LaneRepo = {
  name: string
  url: string
  desc: string
  tag: 'v1.0-prod' | 'v0.1-shipped' | 'in-development'
  live?: string
}

export type Lane = {
  title: string
  kicker: string
  intro: string
  accent: 'emerald' | 'cyan' | 'violet' | 'amber' | 'pink' | 'blue' | 'coral'
  repos: LaneRepo[]
}

export const lanes: Lane[] = [
  {
    title: 'Consent + Lifecycle Marketing',
    kicker: 'Growth-platform consent evidence, suppression hygiene, deliverability readiness',
    accent: 'emerald',
    intro:
      'Lifecycle marketing platforms (Klaviyo, WordPress) bind growth metrics to consent and deliverability evidence. These repos turn the consent contract into an auditable runtime artifact.',
    repos: [
      {
        name: 'klaviyo-flow-consent-audit',
        url: 'https://github.com/mizcausevic-dev/klaviyo-flow-consent-audit',
        live: 'https://flows.kineticgain.com/',
        desc:
          'Klaviyo flow consent evidence + suppression hygiene + deliverability readiness + send-safe lifecycle sequencing. Phase 0 anchor #3 of the v2 strategy.',
        tag: 'v1.0-prod',
      },
      {
        name: 'wordpress-member-journey-consent-kit',
        url: 'https://github.com/mizcausevic-dev/wordpress-member-journey-consent-kit',
        desc:
          'WordPress member-journey consent kit — member-side consent evidence and lifecycle audit across login/profile/upgrade/cancel flows.',
        tag: 'v0.1-shipped',
      },
      {
        name: 'wordpress-regulatory-disclosure-kit',
        url: 'https://github.com/mizcausevic-dev/wordpress-regulatory-disclosure-kit',
        live: 'https://disclosure.kineticgain.com/',
        desc:
          'WordPress regulatory disclosure kit — required-notice management for membership and growth sites.',
        tag: 'v1.0-prod',
      },
      {
        name: 'campaign-appeal-fatigue-monitor',
        url: 'https://github.com/mizcausevic-dev/campaign-appeal-fatigue-monitor',
        desc:
          'Campaign appeal-fatigue monitor — track when growth/donor appeal frequency crosses lifetime-value or unsubscribe-risk thresholds.',
        tag: 'v0.1-shipped',
      },
    ],
  },
  {
    title: 'Experimentation Governance',
    kicker: 'A/B test discipline, rollout sequencing, evidence retention',
    accent: 'violet',
    intro:
      'Experiment platforms (VWO, Klaviyo, in-product) ship features faster than governance teams can keep up with. These repos give experimentation a readable audit trail and a rollout discipline that survives compliance review.',
    repos: [
      {
        name: 'vwo-experiment-governance-mirror',
        url: 'https://github.com/mizcausevic-dev/vwo-experiment-governance-mirror',
        desc:
          'Mirror VWO experiment configurations + rollout decisions into a governance ledger — who approved which variant against which audience, with what evidence.',
        tag: 'v0.1-shipped',
      },
      {
        name: 'martech-experiment-evidence-stack',
        url: 'https://github.com/mizcausevic-dev/martech-experiment-evidence-stack',
        desc:
          'Cross-platform martech experiment evidence stack — Klaviyo / VWO / native A/B layered into one evidence record for promotion + audit.',
        tag: 'v0.1-shipped',
      },
    ],
  },
  {
    title: 'Privacy + Tokenization (Skyflow lane)',
    kicker: 'Vault-contract enforcement before growth platforms see sensitive data',
    accent: 'cyan',
    intro:
      'Growth platforms expect deep customer data; privacy posture (CPRA, GDPR, sector overlays) demands tokenization or redaction. The Skyflow integration line ships the runtime that holds both objectives at once.',
    repos: [
      {
        name: 'kg-skyflow-klaviyo-bridge',
        url: 'https://github.com/mizcausevic-dev/kg-skyflow-klaviyo-bridge',
        desc:
          'Skyflow ↔ Klaviyo bridge library — tokenize PII fields in the vault, send only tokens to Klaviyo, detokenize at send-time per Decision Card policy.',
        tag: 'v0.1-shipped',
      },
      {
        name: 'skyyflow-klaviyo-bridge-console',
        url: 'https://github.com/mizcausevic-dev/skyyflow-klaviyo-bridge-console',
        desc:
          'Visual console for the bridge — protection-level field map, transform pipeline preview, RBAC-aware reveal preview, audit trail viewer.',
        tag: 'v0.1-shipped',
      },
      {
        name: 'kinetic-gain-embedded',
        url: 'https://github.com/mizcausevic-dev/kinetic-gain-embedded',
        live: 'https://www.npmjs.com/package/kinetic-gain-embedded',
        desc:
          'KGE SDK on npm — hash-chained audit-stream + vault-contract enforcement + ed25519-signable events. The runtime spine for the Skyflow bridge and any growth integration that touches sensitive data.',
        tag: 'v1.0-prod',
      },
    ],
  },
  {
    title: 'Connector + Workflow Observability',
    kicker: 'Vendor-connector behavior, secret hygiene, workflow drift detection',
    accent: 'amber',
    intro:
      'Growth stacks live or die by the health of their connectors. CyberArk for credential observability, Camunda for workflow integrity — these repos surface the boring infrastructure stuff that breaks growth at 2am.',
    repos: [
      {
        name: 'cyberark-connector-observability-exporter',
        url: 'https://github.com/mizcausevic-dev/cyberark-connector-observability-exporter',
        desc:
          'CyberArk connector observability exporter — surface secret-rotation drift, vault access anomalies, and connector health alongside the growth pipeline.',
        tag: 'v1.0-prod',
      },
      {
        name: 'camunda-connector-test-harness',
        url: 'https://github.com/mizcausevic-dev/camunda-connector-test-harness',
        desc:
          'Camunda connector test harness — record/replay connector behavior so workflow changes never silently break growth automations.',
        tag: 'v1.0-prod',
      },
      {
        name: 'camunda-process-governance',
        url: 'https://github.com/mizcausevic-dev/camunda-process-governance',
        live: 'https://process.kineticgain.com/',
        desc:
          'Camunda process governance — handoff attestations, timer drift, audit-safe execution review for the workflows growth depends on.',
        tag: 'v1.0-prod',
      },
    ],
  },
]

export type CompanionLink = { title: string; url: string; desc: string }

export const apexCompanions: CompanionLink[] = [
  {
    title: '/calculators/vendor-renewal-decision/',
    url: 'https://kineticgain.com/calculators/vendor-renewal-decision/',
    desc:
      'Per-vendor renewal scoring (CFO/Procurement angle on growth-platform contracts). Pair with vwo / klaviyo / wordpress renewal cycles.',
  },
  {
    title: '/trust/subprocessors/',
    url: 'https://kineticgain.com/trust/subprocessors/',
    desc:
      'Public-facing subprocessor list + data-flow narrative buyers ask for in growth-stack reviews. CSV + JSON export.',
  },
  {
    title: '/trust/ai-vendor-intake/',
    url: 'https://kineticgain.com/trust/ai-vendor-intake/',
    desc:
      'Pre-approval intake for adding an AI tool into a growth surface — captures data categories, opt-out posture, and review notes.',
  },
  {
    title: '/trust/shadow-ai-discovery/',
    url: 'https://kineticgain.com/trust/shadow-ai-discovery/',
    desc:
      'Find unapproved AI tools in your growth + marketing stack before a buyer review surfaces them.',
  },
  {
    title: '/portfolio-triage/',
    url: 'https://kineticgain.com/portfolio-triage/',
    desc:
      "For PE / VC operating partners reviewing a portfolio company's growth maturity: 9-dimension scoring with verdict bands.",
  },
]
