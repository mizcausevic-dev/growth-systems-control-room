export const summaryTiles = [
  {
    label: 'Revenue surface',
    value: '$18.2M',
    note: 'Pipeline and forecast exposure under active operator management',
  },
  {
    label: 'Experiment pressure',
    value: '14',
    note: 'Live tests and staged rollouts affecting growth and conversion',
  },
  {
    label: 'Security posture',
    value: '6',
    note: 'High-priority governance items needing remediation or approval',
  },
  {
    label: 'AI operations',
    value: '92%',
    note: 'Prompt quality and model health across managed AI workflows',
  },
]

export const domainTiles = [
  {
    title: 'Revenue Operations',
    kicker: 'Forecast, churn, and deal execution',
    metric: '$2.4M at-risk pipeline',
    detail: 'Forecast coverage is healthy, but upside concentration remains too dependent on late-stage enterprise deals.',
  },
  {
    title: 'Growth and Experimentation',
    kicker: 'Attribution, funnel, and testing',
    metric: '+4.8% weighted lift',
    detail: 'Active experiments are improving conversion, but rollout discipline is needed before promotion into broader audiences.',
  },
  {
    title: 'Security and Governance',
    kicker: 'Access, compliance, and vendor risk',
    metric: '3 critical approvals',
    detail: 'Identity, vendor, and model-risk reviews are visible in one place so operator load stays coordinated.',
  },
  {
    title: 'AI Operations',
    kicker: 'Prompt, guardrail, and model oversight',
    metric: '2 release holds',
    detail: 'AI quality remains strong overall, but two sensitive workflows remain blocked on governance review.',
  },
]

export const signalRows = [
  {
    lane: 'Revenue',
    score: '81',
    state: 'Stable',
    narrative: 'Coverage is holding, but commit confidence still relies on a small set of enterprise opportunities.',
  },
  {
    lane: 'Growth',
    score: '76',
    state: 'Watch',
    narrative: 'Funnel health improved after pricing and experimentation refinements, though partner-led velocity is slowing.',
  },
  {
    lane: 'Security',
    score: '69',
    state: 'Watch',
    narrative: 'Exception aging is under control, but vendor renewal sequencing and privileged access cleanup need attention.',
  },
  {
    lane: 'AI',
    score: '88',
    state: 'Healthy',
    narrative: 'Evaluation quality is strong and guardrail incident volume is low, but release gating remains strict.',
  },
]

export const queueCards = [
  {
    priority: 'P1',
    title: 'Escalate pricing rollout decision',
    owner: 'Revenue Ops',
    context: 'Move the checkout-anchoring experiment into broader self-serve reach or hold it behind procurement-safe copy.',
  },
  {
    priority: 'P1',
    title: 'Resolve vendor-risk renewal block',
    owner: 'Security Operations',
    context: 'A critical third-party review is nearing renewal without final remediation closure.',
  },
  {
    priority: 'P2',
    title: 'Approve AI release gate',
    owner: 'AI Governance',
    context: 'Two sensitive prompt workflows are ready, but final human review is still pending.',
  },
  {
    priority: 'P2',
    title: 'Rebalance funnel follow-up sequence',
    owner: 'Growth Systems',
    context: 'Lifecycle nurture is producing lift, but partner-led handoff timing still drops too much qualified intent.',
  },
]

export const scenarioCards = [
  {
    title: 'Protect the quarter',
    summary: 'Prioritize forecast confidence, tighten rollout decisions, and suppress avoidable operational variance.',
    metrics: ['Commit confidence +6 pts', 'Experiment promotion only on proven lanes'],
  },
  {
    title: 'Accelerate growth',
    summary: 'Push on validated pricing, experimentation, and attribution improvements to expand pipeline creation.',
    metrics: ['Qualified pipeline +11%', 'Attribution clarity across partner and paid channels'],
  },
  {
    title: 'Reduce governance drag',
    summary: 'Close security, vendor, and AI oversight bottlenecks so teams move faster without opening new risk.',
    metrics: ['Approval cycle time -18%', 'Exception aging under governance target'],
  },
]

export const architectureNodes = [
  'Executive command view',
  'Revenue and growth layer',
  'Security and compliance layer',
  'AI and workflow layer',
  'Operator action queue',
]
