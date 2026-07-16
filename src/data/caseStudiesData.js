export const caseStudiesData = [
  {
    id: 1,
    client: 'GLOBAL BANK',
    title: 'Core Modernization',
    desc: 'Decommissioning a 30-year-old mainframe without disrupting $4T in daily transactional volume.',
    image: 'https://i.pinimg.com/736x/96/db/d3/96dbd3c5c5f68ae2636c6d7e477bc9dd.jpg?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Cloud Architecture', 'Security'],
    problem: 'The client was bound to a monolithic legacy mainframe that cost $45M annually in maintenance alone. Transaction processing times were degrading, and introducing new digital banking products took 14 months on average. They needed to move to a cloud-native microservices architecture without a single second of downtime for their $4T daily transaction volume.',
    solution: 'We implemented the "Strangler Fig" pattern. Instead of a risky big-bang migration, we deployed a modern API Gateway that securely routed traffic between the legacy mainframe and a new, scalable Kubernetes cluster on AWS. Over 18 months, we systematically migrated core banking logic into 45 isolated microservices.',
    impact: 'Reduced deployment times from 14 months to 2 weeks. Infrastructure costs plummeted by 60%. The system now dynamically scales to handle peak transaction spikes 400% higher than the legacy system could endure.'
  },
  {
    id: 2,
    client: 'AEROJET SYS',
    title: 'Predictive Assembly',
    desc: 'Implementing neural networks to predict aerospace component failure 30 days before critical wear.',
    image: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Machine Learning', 'Data Engineering'],
    problem: 'Unscheduled maintenance was costing Aerojet Sys over $120M annually in grounded flights and expedited part shipping. Their existing diagnostic systems were reactive, only flagging issues after a component had already degraded past safe operating limits.',
    solution: 'We engineered a massive data pipeline capable of ingesting 5TB of high-frequency telemetry data per hour from in-flight aircraft sensors. We trained deep learning models on historical failure data to identify microscopic vibrational anomalies that precede catastrophic wear.',
    impact: 'The models successfully predict component failure with 98.4% accuracy up to 30 days in advance. Unscheduled maintenance dropped by 45%, saving the company an estimated $75M in the first year alone.'
  },
  {
    id: 3,
    client: 'NEXUS ENERGY',
    title: 'Grid Intelligence',
    desc: 'Decentralizing power distribution logic across a continental smart grid using real-time edge AI.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Edge AI', 'IoT'],
    problem: 'Nexus Energy struggled to balance the unpredictable load of renewable energy sources (solar/wind) across their national grid. Their centralized command center suffered from latency, causing localized brownouts during rapid weather changes.',
    solution: 'We shifted compute to the edge. We deployed lightweight, highly optimized AI inference models directly onto smart transformers across the grid. These edge nodes process local weather data and grid demand autonomously, communicating in a decentralized mesh network to reroute power instantly.',
    impact: 'Grid response latency dropped from 4 seconds to 12 milliseconds. Localized brownouts were reduced by 88%, and Nexus Energy optimized their renewable energy capture by 15%, significantly reducing reliance on fossil-fuel backup generators.'
  }
];
