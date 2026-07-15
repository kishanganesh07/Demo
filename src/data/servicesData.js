export const servicesData = [
  {
    slug: 'cloud-solutions',
    icon: 'cloud',
    title: 'Cloud Solutions',
    desc: 'Enterprise-grade cloud migration and architecture optimization.',
    theory: 'Our Cloud Solutions methodology is rooted in zero-downtime migrations and highly elastic, cost-optimized architectures. We build cloud-native systems that evolve with your workload, eliminating technical debt through rigorous infrastructure-as-code practices and immutable deployments.',
    stats: {
      projectsCompleted: 142,
      activeEngineers: 35,
      successRate: '99.9%',
      avgCostReduction: '32%'
    },
    projects: [
      { id: 1, name: 'Project Nimbus', sector: 'Financial Services', desc: 'Migrated legacy core banking systems to a multi-cloud Kubernetes environment, achieving 40% performance gains.' },
      { id: 2, name: 'Aether Platform', sector: 'Healthcare', desc: 'Built a HIPAA-compliant cloud data lake for real-time patient analytics across 400 hospitals.' },
      { id: 3, name: 'Stratus Operations', sector: 'Retail', desc: 'Global e-commerce infrastructure optimization resulting in 99.999% uptime during peak holiday sales.' }
    ]
  },
  {
    slug: 'ai',
    icon: 'psychology',
    title: 'AI',
    desc: 'Integrating artificial intelligence into core business workflows.',
    theory: 'We treat AI not as an experiment, but as a core utility. Our approach focuses on embedding deterministic, auditable AI models into enterprise workflows, ensuring that every algorithmic decision is traceable, secure, and actively drives operational efficiency without compromising data sovereignty.',
    stats: {
      projectsCompleted: 87,
      activeEngineers: 24,
      successRate: '98.5%',
      avgCostReduction: '45%'
    },
    projects: [
      { id: 1, name: 'Automata Vision', sector: 'Manufacturing', desc: 'Deployed computer vision algorithms on assembly lines to detect microscopic defects in real-time.' },
      { id: 2, name: 'Cognitive Logistics', sector: 'Supply Chain', desc: 'Implemented predictive routing models that reduced global shipping delays by 18%.' },
      { id: 3, name: 'Neural Fraud Deflect', sector: 'Banking', desc: 'Integrated real-time transaction analysis AI, preventing $120M in fraudulent transfers annually.' }
    ]
  },
  {
    slug: 'generative-ai',
    icon: 'smart_toy',
    title: 'Generative AI',
    desc: 'Custom LLMs and generative workflows for modern enterprises.',
    theory: 'Generative AI requires rigorous guardrails. We specialize in fine-tuning massive language models on proprietary corporate data, deploying them in air-gapped or private cloud environments. We prioritize hallucination reduction and strict access controls over raw generative output.',
    stats: {
      projectsCompleted: 45,
      activeEngineers: 18,
      successRate: '97.0%',
      avgCostReduction: '20%'
    },
    projects: [
      { id: 1, name: 'Synapse Counsel', sector: 'Legal', desc: 'Developed a private LLM trained on case law to assist paralegals, cutting research time by 60%.' },
      { id: 2, name: 'Creative Engine', sector: 'Marketing', desc: 'Built a generative asset pipeline that scales brand-compliant marketing copy across 12 languages.' },
      { id: 3, name: 'CodeAssist Pro', sector: 'Technology', desc: 'Deployed an internal coding assistant fine-tuned on the client\'s proprietary codebase for secure developer acceleration.' }
    ]
  },
  {
    slug: 'machine-learning',
    icon: 'neurology',
    title: 'Machine Learning',
    desc: 'Predictive modeling and deep learning for data-rich environments.',
    theory: 'Our machine learning practice is built on the scientific method. We engineer robust feature pipelines and deploy models using strict MLOps principles, ensuring models do not drift and remain highly performant as underlying data topologies shift over time.',
    stats: {
      projectsCompleted: 112,
      activeEngineers: 42,
      successRate: '99.1%',
      avgCostReduction: '28%'
    },
    projects: [
      { id: 1, name: 'Predictive Maintenance', sector: 'Aviation', desc: 'Machine learning models predicting part failure on commercial jets 30 days before critical wear.' },
      { id: 2, name: 'Dynamic Pricing', sector: 'Retail', desc: 'Reinforcement learning algorithms dynamically adjusting pricing across 10,000 SKUs based on real-time market signals.' },
      { id: 3, name: 'Yield Optimizer', sector: 'Agriculture', desc: 'Deep learning applied to satellite imagery to optimize crop yield predictions and resource allocation.' }
    ]
  },
  {
    slug: 'data-engineering',
    icon: 'database',
    title: 'Data Engineering',
    desc: 'Scalable data pipelines and robust infrastructure foundations.',
    theory: 'Data is only as valuable as its pipeline. We construct resilient, high-throughput data engineering architectures that can ingest, transform, and store petabytes of data with sub-millisecond latency. Our systems are built to withstand chaotic data influxes without breaking.',
    stats: {
      projectsCompleted: 205,
      activeEngineers: 60,
      successRate: '99.8%',
      avgCostReduction: '40%'
    },
    projects: [
      { id: 1, name: 'Pipeline Zero', sector: 'Telecommunications', desc: 'Redesigned a telecom data ingestion pipeline to process 5 billion daily events with zero data loss.' },
      { id: 2, name: 'StreamCore', sector: 'Media & Entertainment', desc: 'Built a Kafka-based real-time analytics streaming platform for a global streaming service.' },
      { id: 3, name: 'Unified Ledger', sector: 'Insurance', desc: 'Consolidated 15 legacy databases into a single, high-performance distributed ledger.' }
    ]
  },
  {
    slug: 'business-intelligence',
    icon: 'insights',
    title: 'Business Intelligence',
    desc: 'Strategic visualization and executive decision-making tools.',
    theory: 'We transform raw telemetry into boardroom leverage. Our Business Intelligence solutions focus on reducing cognitive load, presenting complex multi-dimensional data through minimalist, high-impact executive dashboards that instantly highlight operational anomalies and strategic opportunities.',
    stats: {
      projectsCompleted: 156,
      activeEngineers: 22,
      successRate: '99.5%',
      avgCostReduction: '15%'
    },
    projects: [
      { id: 1, name: 'Executive Prism', sector: 'Global Conglomerate', desc: 'Created a unified dashboard pulling KPIs from 8 diverse subsidiaries into a single pane of glass.' },
      { id: 2, name: 'SupplyPulse', sector: 'Manufacturing', desc: 'Real-time supply chain visualization tool highlighting bottlenecks before they impact production.' },
      { id: 3, name: 'Market Sentiment', sector: 'Finance', desc: 'Visualized real-time social and market sentiment data overlaid against trading volumes.' }
    ]
  },
  {
    slug: 'data-analytics',
    icon: 'analytics',
    title: 'Data Analytics',
    desc: 'Unlocking patterns through advanced statistical analysis.',
    theory: 'Analytics is about separating signal from noise. We apply rigorous statistical methodologies to uncover hidden patterns within vast datasets, moving beyond simple descriptive metrics into prescriptive and diagnostic analytics that dictate precise business interventions.',
    stats: {
      projectsCompleted: 134,
      activeEngineers: 28,
      successRate: '98.9%',
      avgCostReduction: '22%'
    },
    projects: [
      { id: 1, name: 'Churn Predictor', sector: 'SaaS', desc: 'Analyzed user behavior logs to identify micro-patterns predicting churn, reducing attrition by 24%.' },
      { id: 2, name: 'Cohort Alpha', sector: 'E-commerce', desc: 'Advanced cohort analysis identifying the most profitable customer journeys over a 5-year lifecycle.' },
      { id: 3, name: 'Fraud Topology', sector: 'Insurance', desc: 'Network analysis uncovering organized fraud rings previously hidden within isolated claims data.' }
    ]
  },
  {
    slug: 'cloud-data-platforms',
    icon: 'storage',
    title: 'Cloud Data Platforms',
    desc: 'Modernizing data warehouses and lakehouses in the cloud.',
    theory: 'Modern enterprises require fluid data mobility. We architect and deploy massive cloud data platforms—from Snowflake to Databricks—ensuring high query performance, strict access governance, and the flexibility to seamlessly scale compute and storage independently.',
    stats: {
      projectsCompleted: 98,
      activeEngineers: 38,
      successRate: '99.7%',
      avgCostReduction: '35%'
    },
    projects: [
      { id: 1, name: 'Lakehouse Migration', sector: 'Retail', desc: 'Migrated a massive on-premise Hadoop cluster to a modern Cloud Lakehouse, cutting query times by 80%.' },
      { id: 2, name: 'Data Mesh Init', sector: 'Financial Services', desc: 'Implemented a decentralized Data Mesh architecture across a global banking institution.' },
      { id: 3, name: 'Warehouse Modernization', sector: 'Healthcare', desc: 'Consolidated clinical and operational data into a unified Snowflake environment for secure research access.' }
    ]
  },
  {
    slug: 'data-governance',
    icon: 'gavel',
    title: 'Data Governance',
    desc: 'Security, compliance, and quality frameworks for data assets.',
    theory: 'Without governance, data is a liability. We implement strict, automated data governance frameworks that ensure regulatory compliance (GDPR, CCPA), enforce data quality rules at the point of ingestion, and provide full lineage tracking across the entire data lifecycle.',
    stats: {
      projectsCompleted: 175,
      activeEngineers: 45,
      successRate: '100%',
      avgCostReduction: 'N/A'
    },
    projects: [
      { id: 1, name: 'Compliance Core', sector: 'Banking', desc: 'Automated PII detection and masking across 5,000 databases to ensure GDPR compliance.' },
      { id: 2, name: 'Lineage Trace', sector: 'Pharmaceuticals', desc: 'Implemented strict data lineage tracking for clinical trial data to satisfy FDA audit requirements.' },
      { id: 3, name: 'Quality Gatekeeper', sector: 'Logistics', desc: 'Deployed automated data quality gates that quarantine malformed records before they pollute the data lake.' }
    ]
  },
  {
    slug: 'app-modernization',
    icon: 'developer_board',
    title: 'App Modernization',
    desc: 'Refactoring legacy systems into microservices architectures.',
    theory: 'Legacy monoliths choke innovation. We systematically dismantle monolithic applications, strangling legacy code and refactoring it into resilient, scalable microservices orchestrated via Kubernetes, all while ensuring zero disruption to ongoing business operations.',
    stats: {
      projectsCompleted: 210,
      activeEngineers: 75,
      successRate: '99.4%',
      avgCostReduction: '50%'
    },
    projects: [
      { id: 1, name: 'Monolith Strangler', sector: 'Travel', desc: 'Gradually decoupled a 15-year-old booking monolith into 40+ microservices over an 18-month period.' },
      { id: 2, name: 'Containerization Push', sector: 'Government', desc: 'Dockerized and deployed legacy citizen portals onto a secure, highly-available Kubernetes cluster.' },
      { id: 3, name: 'API Gateway Revamp', sector: 'Finance', desc: 'Rebuilt external partner integrations using a modern, secure, high-throughput API gateway architecture.' }
    ]
  },
  {
    slug: 'devops',
    icon: 'terminal',
    title: 'DevOps',
    desc: 'Continuous integration and automated delivery pipelines.',
    theory: 'Velocity requires safety. Our DevOps philosophy is built on extreme automation. We construct CI/CD pipelines that enforce rigorous testing, security scanning, and automated rollbacks, allowing engineering teams to deploy to production multiple times a day with absolute confidence.',
    stats: {
      projectsCompleted: 340,
      activeEngineers: 85,
      successRate: '99.9%',
      avgCostReduction: '60%'
    },
    projects: [
      { id: 1, name: 'Pipeline Acceleration', sector: 'Technology', desc: 'Reduced software release cycles from 3 weeks to 4 hours by implementing fully automated CI/CD.' },
      { id: 2, name: 'GitOps Implementation', sector: 'Retail', desc: 'Transitioned infrastructure management entirely to GitOps, providing full auditability for all environment changes.' },
      { id: 3, name: 'Chaos Engineering', sector: 'Streaming', desc: 'Introduced automated chaos testing into the deployment pipeline to ensure system resilience under stress.' }
    ]
  },
  {
    slug: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    desc: 'Fortifying digital infrastructure against evolving threats.',
    theory: 'We assume breach. Our cybersecurity architecture relies on Zero Trust principles, moving away from perimeter defense to micro-segmentation, continuous authentication, and automated threat isolation. We build digital fortresses that actively resist intrusion and lateral movement.',
    stats: {
      projectsCompleted: 450,
      activeEngineers: 110,
      successRate: '100%',
      avgCostReduction: 'N/A'
    },
    projects: [
      { id: 1, name: 'Zero Trust Init', sector: 'Defense', desc: 'Implemented a strict Zero Trust architecture across a network of 50,000 globally distributed endpoints.' },
      { id: 2, name: 'Ransomware Shield', sector: 'Healthcare', desc: 'Deployed immutable backups and AI-driven anomaly detection to successfully thwart a coordinated ransomware attack.' },
      { id: 3, name: 'Micro-Segmentation', sector: 'Finance', desc: 'Segmented a flat corporate network into hundreds of isolated micro-zones to prevent lateral movement of threats.' }
    ]
  }
];
