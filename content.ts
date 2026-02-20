export const content = {
  en: {
    nav: {
      subtitle: "THE CONTEXT ENGINE"
    },
    hero: {
      terminalPrefix: "Initializing Research Infrastructure...",
      titleMain: "Information Chaos into Context.",
      titleSub: "Chaos into Context.",
      subtitle: "Tevel is an AI-based contextual research system built to solve the modern world's core problem: not 'how to find information', but how to turn mountains of scattered data into actionable, accurate, and explainable insight—fast.",
      ctaStart: "Initialize Workspace",
      ctaDemo: "Request System Access"
    },
    dashboard: {
      version: "TEVEL_OS v3.3.0 // MARKET_READY",
      high: "PROCESSING",
      targetAcquired: "CONTEXT MATCH: 99.8%",
      eventAnalysis: "Contextual Layering",
      anomaly: "ANOMALY DETECTED",
      entityAnalysis: "Entity Resolution",
      origin: "Source Ingestion",
      class: "Classification",
      threat: "Relevance",
      certainty: "Confidence",
      vals: {
        iran: "ACADEMIA / GOV / CORP",
        military: "Research Target",
        critical: "CRITICAL"
      },
      logs: [
        "Ingesting raw data streams...",
        "Decomposing entities: Person, Org, Location...",
        "Normalizing identities (Resolution Loop)...",
        "Building Context Graph...",
        "Detecting timeline contradictions...",
        "Generating evidence trails...",
        "Research infrastructure active."
      ]
    },
    problem: {
      titlePrefix: "The Collapse:",
      title: "Data Rich, Context Poor",
      description: "Organizations have become information-generating machines: documents, emails, reports, logs. But this is exactly where the collapse happens. When information is split across thousands of sources, and meaning is found 'between the lines', research becomes manual, slow, and dependent on human memory.",
      stats: [
        { value: 80, suffix: "%", label: "of enterprise data is unstructured (docs, emails, PDFs)" },
        { value: 8.2, suffix: "h/week", label: "wasted per employee searching & recreating info" },
        { value: 5, suffix: "M$+", label: "annual loss estimated by orgs due to poor data quality" },
        { value: 60, suffix: "%", label: "of data scientist time spent just cleaning & organizing data" }
      ],
      result: "The Result: You have all the dots, but you can't see the picture."
    },
    comparison: {
      title: "The Reality: 3 Distinct Paradigms",
      subtitle: "Why 'Search' isn't Research.",
      description: "Most tools are either too shallow (Search/RAG) or too heavy (Legacy Intel). Tevel is the only automated research machine.",
      highlight: "Tevel provides the depth of a human analyst at the speed of AI.",
      tables: [
        {
          id: "investor",
          label: "Business / Investor",
          columns: ["Dimension", "TEVEL (Research AI)", "Search/RAG (Generic)", "Legacy Intel (Project)", "DIY Stack (Vector/LLM)"],
          rows: [
            { feature: "Primary Output: Investigation File", values: ["✓", "✗", "✓", "✗"] },
            { feature: "Traceability (Source→Audit)", values: ["✓", "✗", "✓", "✗"] },
            { feature: "Entity Graph + Timeline", values: ["✓", "✗", "✓", "✗"] },
            { feature: "Offline / Air-gapped", values: ["✓", "✗", "✓", "✓"] },
            { feature: "Time-to-Value 'Day-1'", values: ["✓", "✓", "✗", "✗"] },
            { feature: "Pricing (Appliance/Compute)", values: ["✓", "✗", "✗", "✗"] },
          ]
        },
        {
          id: "customer",
          label: "Customer / Deployment",
          columns: ["Solution", "On-Prem", "Offline Work", "Cloud Service", "Data Residency", "Export Artifacts", "Universal Domain"],
          rows: [
            { feature: "TEVEL On-Prem 'Monster' ($200K/y)", values: ["✓", "✓", "✗", "✓", "✓", "✓"] },
            { feature: "TEVEL On-Prem 'Lite' ($150K/y)", values: ["✓", "✓", "✗", "✓", "✓", "✓"] },
            { feature: "TEVEL Cloud ($100K/y)", values: ["✗", "✗", "✓", "✗", "✓", "✓"] },
            { feature: "Search/RAG SaaS 'Typical'", values: ["✗", "✗", "✓", "✗", "✗", "✗"] },
            { feature: "Legacy Intel 'Typical' (Project)", values: ["✓", "✓", "✗", "✓", "✓", "✗"] },
          ]
        },
        {
          id: "competitor",
          label: "Competitor Matrix",
          columns: ["Product/Company", "On-Prem/Offline", "Search/RAG Core", "Entity Graph Core", "Investigation File", "Agile / Fast Deploy"],
          rows: [
            { feature: "TEVEL (The Standard)", values: ["✓", "✓", "✓", "✓", "✓"] },
            { feature: "Glean", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Microsoft (Copilot Search)", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Google (Vertex AI Search)", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Palantir", values: ["✓", "✓", "✓", "✓", "✗"] },
            { feature: "Quantexa", values: ["✓", "✗", "✓", "✓", "✗"] },
            { feature: "i2 Group (Analyst's Notebook)", values: ["✓", "✗", "✓", "✗", "✓"] },
            { feature: "DataWalk", values: ["✓", "✗", "✓", "✓", "✗"] },
            { feature: "Neo4j (Graph DB)", values: ["✓", "✗", "✓", "✗", "✗"] },
          ]
        }
      ]
    },
    solution: {
      badge: "The Mechanism",
      titleGlitch: "Research",
      titleSub: "Factory",
      description1: "Tevel acts as a",
      descriptionHighlight: "'Research Factory',",
      description2: "ingesting raw chaos and outputting structured, actionable consistency.",
      cards: [
        { title: "1. Ingestion & Cleaning", desc: "Accepts any format (PDF, Tables, Reports). Cleans and organizes data to work on 'meaning', not formatting mess." },
        { title: "2. Entity Resolution", desc: "The hardest challenge: Understanding that 'Dr. Cohen', 'Moshe C.', and 'M. Cohen' are the same person. De-duplication at scale." },
        { title: "3. Context Graph & Time", desc: "Mapping the web. Who is linked to whom, what caused what, and how did it evolve over time? Transforming data into a story." },
        { title: "4. Actionable Products", desc: "No more 'just another screen'. Generates Entity Files, Smart Timelines, and verified Insights you can actually use." }
      ],
      nodes: {
        rawData: {
          title: "INGEST",
          desc: "RRaw data input from any source. Works 100% Offline / On-Premise. Your data never leaves your perimeter."
        },
        enrichment: {
          title: "DECODE",
          desc: "EExtracting entities and normalizing identities. Building a 'World Model' from the text."
        },
        context: {
          title: "CONNECT",
          desc: "BBuilding the graph. Identifying hidden indirect links and timeline sequences that manual research misses."
        },
        guidance: {
          title: "ANALYZE",
          desc: "PPattern detection. Identifying anomalies, repetitions, and 'Red Flags' across the entire dataset."
        },
        fusion: {
          title: "STORE",
          desc: "IInstitutional Memory. Knowledge becomes infrastructure, not just a fleeting thought in an analyst's head."
        },
        insight: {
          title: "DELIVER",
          desc: "WWhite-box outputs. Traceable evidence, clear timelines, and verified insights for decision making."
        }
      }
    },
    useCases: {
      title: "Strategic Cross-Sector Applications",
      cases: [
        {
          id: "aml_bank_fraud",
          title: "Business Intelligence in a Global Bank – Detecting Fraud Networks",
          desc: "An AML team sees a rise in 'innocent' transactions between dozens of shell companies. TEVEL ingests transactions, KYC, emails, protocols, and vendor data to surface the hidden ownership chain and circular money flows.",
          protocol: "PROTOCOL_FINCRIME",
          clearance: "CONFIDENTIAL / REGULATED",
          details: {
            fullDesc:
              "An AML team at a global bank notices a surge in 'innocent' transactions between dozens of shell companies—but no single signal justifies a block. TEVEL ingests transactions, KYC records, internal emails, protocols, and vendor data, then builds a relationship graph exposing a hidden ownership chain and circular money flows. It surfaces central 'nodes' (beneficial owners) and patterns that recur across countries and branches. Within hours instead of weeks, the team receives an evidence file with sources, explanations, and a list of accounts and entities for immediate review.",
            capabilities: [
              "Entity Resolution (KYC + beneficial ownership)",
              "Circular Money Flow Detection",
              "Cross-Jurisdiction Pattern Analysis",
              "Shell Company Network Mapping",
              "Evidence File with Traceable Sources",
              "Priority Account & Entity Flagging"
            ],
            impact:
              "Hours instead of weeks to build an evidence case. Investigators get a decision-ready brief with full source traceability—not just a list of alerts."
          }
        },
        {
          id: "pharma_rnd_gaps",
          title: "Pharma / Biotech – Accelerating Drug Research & Closing Literature Gaps",
          desc: "An R&D team works on a molecule for a rare disease, but the literature is scattered across hundreds of papers, patents, and internal trial results. TEVEL extracts entities, detects contradictions, and proposes documented hypotheses.",
          protocol: "PROTOCOL_DRUG_DISCOVERY",
          clearance: "CONFIDENTIAL / IP-SENSITIVE",
          details: {
            fullDesc:
              "An R&D team is working on a molecule for a rare disease, but the literature is scattered across hundreds of papers, patents, and internal trial results with no connection between them. TEVEL reads papers, patents, and trial reports; extracts entities (targets, pathways, assays, side effects); and identifies contradictions and gaps—for example, a trial that failed due to a parameter not tested in other papers. It proposes documented hypotheses ('if X, then test Y') and prioritizes the next experiments with justification. The result: months of work saved and focus on experiments that actually drive decisions.",
            capabilities: [
              "Scientific Entity & Ontology Extraction",
              "Contradiction & Gap Detection Across Sources",
              "Target-Pathway-Compound Knowledge Graph",
              "Structured Hypothesis Generation with Citations",
              "Experiment Prioritization with Evidence Rationale",
              "Secure Offline / On-Prem Operation"
            ],
            impact:
              "Months of manual literature review compressed to days. Teams focus on experiments that move decisions forward, not on information archaeology."
          }
        },
        {
          id: "power_grid_root_cause",
          title: "Power Infrastructure – Failure Prediction & Grid Incident Root Cause Analysis",
          desc: "After a series of substation failures, data pours in from SCADA, maintenance logs, sensor readings, and field technician reports. TEVEL unifies it all and finds the non-obvious connection between equipment, humidity, and a procedure change.",
          protocol: "PROTOCOL_CRITICAL_INFRA",
          clearance: "INTERNAL / CONFIDENTIAL",
          details: {
            fullDesc:
              "Following a series of substation failures, data streams in from every direction: SCADA, maintenance logs, equipment replacements, sensor readings, and field technician reports. TEVEL unifies everything, maps events into a timeline chain, and discovers a non-trivial connection: a combination of a specific connector type, abnormal humidity conditions, and a shift procedure change. It provides an 'incident story' with evidence (logs + documents) and targeted action recommendations (inspections, proactive replacement, SOP changes). The engineering team moves from debating 'gut feelings' to data-driven decisions within a day instead of two weeks.",
            capabilities: [
              "Operational Timeline Reconstruction",
              "Multi-Source Event Correlation (SCADA + Logs + Documents)",
              "Non-Obvious Causal Chain Detection",
              "Asset / Crew / Work-Order Entity Graph",
              "Targeted Remediation Recommendations",
              "Offline On-Prem Processing"
            ],
            impact:
              "Engineering teams go from gut-feel debates to evidence-based decisions within a day. Full traceability from raw sensor data to actionable SOP changes."
          }
        },
        {
          id: "soc_noise_reduction",
          title: "Enterprise Cyber (SOC) – Reducing Alert Noise & False Positives",
          desc: "A large SOC accumulates thousands of alerts daily from EDR, SIEM, and Firewall tools. TEVEL unifies logs and documents, builds an 'attack story', and pinpoints the exact pivot point so analysts spend time on real threats.",
          protocol: "PROTOCOL_CYBER_INTEL",
          clearance: "CONFIDENTIAL / SECURITY",
          details: {
            fullDesc:
              "In a large SOC, thousands of alerts accumulate daily from various tools (EDR, SIEM, Firewall), and most time is burned on triage. TEVEL unifies logs, asset documentation, recent system changes, and prior incident reports, then builds an 'attack story' instead of a collection of alerts. It identifies a single campaign disguised as multiple events and pinpoints the exact pivot (machine, user, credential). The analyst receives a timeline + evidence + recommended containment steps. The result: fewer false positives and significantly faster response time.",
            capabilities: [
              "IOC / TTP Entity Resolution",
              "Campaign Timeline & Attack Story Reconstruction",
              "Cross-Log / Alert Correlation",
              "Pivot Point Identification (machine, user, credential)",
              "Evidence Bundles for IR Reports",
              "Air-gapped / On-Prem Support"
            ],
            impact:
              "Dramatically fewer false positives. Analysts get a coherent attack story instead of thousands of disconnected alerts—response time drops from hours to minutes."
          }
        },
        {
          id: "ediscovery_legal",
          title: "Legal / Regulatory Compliance – Document Discovery in Investigations (eDiscovery)",
          desc: "A tech company receives a regulatory investigation demanding documents on a specific topic over 4 years. TEVEL classifies documents, surfaces contradictions, and builds a who-approved-what relationship map with a consistent evidence trail.",
          protocol: "PROTOCOL_LEGAL_DISCOVERY",
          clearance: "CONFIDENTIAL / PRIVILEGED",
          details: {
            fullDesc:
              "A tech company receives a lawsuit or regulatory investigation with a demand for documents on a specific topic spanning 4 years. There are emails, contracts, Slack messages, presentations, appendices, and entire unorganized folders. TEVEL classifies documents by topic/entity/event, surfaces contradictions between contract versions, and locates 'key documents' people didn't remember existed. It builds a relationship map: who approved what, when, and based on what data. The legal team receives a document list with explanations of why each is relevant and a consistent evidence trail.",
            capabilities: [
              "Document Classification by Topic / Entity / Event",
              "Contract Version Contradiction Detection",
              "Approval Chain Mapping (who, when, based on what)",
              "Key Document Surfacing Across Unstructured Sources",
              "Evidence Trail with Full Traceability",
              "Privilege-Aware On-Prem Processing"
            ],
            impact:
              "Legal teams receive a coherent evidence trail and document map—cutting review time from months to days and producing regulator-grade traceability."
          }
        },
        {
          id: "insurance_fraud_complex",
          title: "Insurance – Detecting Complex / Suspicious Claims & Reducing Field Investigation Costs",
          desc: "A large property claim is filed after 'water damage', but details conflict across forms, call center records, photos, and prior repairs. TEVEL combines text, documents, and image metadata to identify inconsistencies and flag only real anomalies.",
          protocol: "PROTOCOL_INSURANCE_FRAUD",
          clearance: "CONFIDENTIAL / REGULATED",
          details: {
            fullDesc:
              "A large property claim is filed after 'water damage', but details conflict across forms, call center conversations, photos, and prior repair records. TEVEL combines text, documents, and images (metadata, timestamps) and identifies that the damage matches a prior event and that details were altered between versions. It proposes targeted questions for the policyholder and locates vendors and invoices linked to other similar cases. Instead of sending an investigator to every case, the company dispatches only those cases the system rates as anomalous with clear evidence. The result: fewer investigation expenses and a reduction in fraud.",
            capabilities: [
              "Cross-Claim Entity Linking",
              "Image Metadata & Timestamp Correlation",
              "Provider / Vendor Network Mapping",
              "Version Conflict Detection Across Forms & Records",
              "Targeted Policyholder Question Generation",
              "Anomaly Scoring with Evidence References"
            ],
            impact:
              "Only cases with clear evidence anomalies get dispatched for field investigation. Investigation costs drop significantly while fraud detection improves."
          }
        },
        {
          id: "urban_planning_transport",
          title: "Urban Planning / Transportation – Infrastructure Project Decisions Based on 'Complete Picture'",
          desc: "A municipality debates where to invest: a new public transport lane or a problematic intersection upgrade. TEVEL unifies traffic counts, resident complaints, accidents, and protocols to build an evidence-based decision model.",
          protocol: "PROTOCOL_URBAN_INFRA",
          clearance: "INTERNAL / PUBLIC",
          details: {
            fullDesc:
              "A municipality is debating where to invest: a new public transport lane or upgrading a problematic intersection. The data is scattered across traffic counts, resident complaints, accident reports, infrastructure work records, future plans, and meeting protocols. TEVEL unifies all sources and builds a model showing connections between prior works, 'chokepoints', and recurring accidents by time of day and season. It surfaces scenarios: what happens if a lane closes, where congestion will form, and what KPIs are expected to improve. Decision-makers receive evidence-based rationale instead of 'gut feeling'.",
            capabilities: [
              "Multi-Source Data Unification (traffic, complaints, accidents, protocols)",
              "Chokepoint & Recurring Incident Pattern Detection",
              "Temporal Scenario Modeling (by hour / season)",
              "Infrastructure Work ↔ Incident Correlation",
              "KPI Projection & Scenario Comparison",
              "Evidence-Based Decision Brief Export"
            ],
            impact:
              "Decision-makers get evidence-based rationale and scenario modeling—replacing gut feeling with traceable, data-driven infrastructure investment decisions."
          }
        },
        {
          id: "supply_chain_quality",
          title: "Supply Chain / Manufacturing – Root Cause for Quality Failures & Problematic Suppliers",
          desc: "An electronics factory sees a spike in rejection rates on a production line, but there's no consensus on whether it's raw materials, machinery, or a shift change. TEVEL connects MES/ERP data, quality reports, and maintenance logs to find the real cause.",
          protocol: "PROTOCOL_SUPPLY_CHAIN",
          clearance: "INTERNAL / CONFIDENTIAL",
          details: {
            fullDesc:
              "An electronics factory sees a spike in rejection rates on a production line, but there's no consensus on whether it's raw materials, machinery, or a shift change. TEVEL connects MES/ERP data, quality reports, supplier forms, maintenance failures, and technician notes. It identifies that rejections started after replacing a sub-supplier for a specific component combined with a storage temperature change in the warehouse, and shows which batches are affected. It produces an action list: batch hold, targeted lab tests, and supplier/storage condition replacement. The result: rapid bleeding stop instead of weeks of trial-and-error.",
            capabilities: [
              "MES / ERP + Quality Report Correlation",
              "Supplier Change ↔ Defect Timeline Linkage",
              "Batch / Lot Affected Identification",
              "Multi-Variable Root Cause Isolation",
              "Targeted Action List (hold, test, replace)",
              "Vendor / Sub-Supplier Network Graph"
            ],
            impact:
              "Root cause identified within hours instead of weeks. Affected batches are isolated immediately and specific corrective actions replace costly trial-and-error cycles."
          }
        },
        {
          id: "hr_people_analytics",
          title: "HR / People Analytics – Identifying Attrition Drivers & Reducing Turnover",
          desc: "An organization with hundreds of employees faces a wave of resignations, but the causes are 'noisy': manager feedback, anonymous surveys, exit interviews, performance, promotions, and salary data—all scattered. TEVEL identifies specific at-risk teams with evidence.",
          protocol: "PROTOCOL_HR_ANALYTICS",
          clearance: "INTERNAL / CONFIDENTIAL",
          details: {
            fullDesc:
              "An organization with hundreds of employees faces a wave of resignations, but the causes are 'noisy': manager feedback, anonymous surveys, exit interviews, performance, promotions, and salary data—all scattered. TEVEL unifies all sources (including free text), and identifies a pattern: specific teams after a structural change, overload in a particular project, and role misalignment. It presents 'risk factors' by team/role with evidence and explains what changes before departures. HR receives a precise action plan (reallocation, training, KPI corrections for managers). The result: targeted treatment instead of generic initiatives that don't work.",
            capabilities: [
              "Multi-Source Text Unification (surveys, exit interviews, free text)",
              "Team / Role Risk Factor Identification",
              "Pre-Departure Pattern Detection",
              "Structural Change ↔ Attrition Correlation",
              "Evidence-Based Action Plan by Team",
              "Privacy-Preserving On-Prem Processing"
            ],
            impact:
              "HR moves from generic retention initiatives to precise, evidence-backed interventions by team and role—reducing attrition with measurable outcomes."
          }
        },
        {
          id: "real_estate_due_diligence",
          title: "Commercial Real Estate – Pre-Acquisition Due Diligence",
          desc: "A real estate fund examines a mall or office building, with data scattered across lease contracts, appendices, engineering reports, municipal correspondence, tenant complaints, and maintenance invoices. TEVEL extracts entities and flags hidden risks.",
          protocol: "PROTOCOL_REAL_ESTATE",
          clearance: "CONFIDENTIAL / LEGAL",
          details: {
            fullDesc:
              "A real estate fund is examining a mall or office building, and the data is scattered across lease contracts, appendices, engineering reports, municipal correspondence, tenant complaints, and maintenance invoices. TEVEL reads everything and extracts entities: tenants, renewal dates, exit clauses, construction violations, recurring faults. It identifies contradictions between contracts and addendum versions, and flags hidden risks (e.g., a costly renovation commitment starting in 9 months). The output: an 'asset file' with a risk map, source documents, and a recommendation to renegotiate deal terms.",
            capabilities: [
              "Lease & Addendum Entity Extraction",
              "Contract Version Contradiction Detection",
              "Tenant / Renewal / Exit Clause Timeline",
              "Hidden Risk & Liability Surfacing",
              "Construction Violation & Maintenance Pattern Detection",
              "Asset Risk File Export with Source References"
            ],
            impact:
              "Funds go into acquisitions with a complete evidence-based risk map instead of surprises—cutting due diligence time and improving negotiation leverage."
          }
        },
        {
          id: "clinical_incident_hospital",
          title: "Healthcare (Hospital) – Clinical Incident Investigation & Care Quality Improvement",
          desc: "After an adverse event in a ward, a quality committee needs to understand what really happened: medical record, medications, nursing notes, lab results, equipment, and informal corridor conversations not formally documented. TEVEL builds the clinical timeline.",
          protocol: "PROTOCOL_CLINICAL_QUALITY",
          clearance: "CONFIDENTIAL / HEALTH-REGULATED",
          details: {
            fullDesc:
              "After an adverse event in a ward, a quality committee needs to understand what really happened: medical record, medications, nursing notes, lab results, equipment, and informal corridor conversations not formally documented. TEVEL unifies the documentation, builds a clinical timeline, and identifies 'split moments' where a decision was made without critical information. It compares to similar past cases and surfaces which protocols were not implemented and where training is lacking. Instead of general conclusions, the result is a root cause with precise corrective actions (protocol update, controls, training).",
            capabilities: [
              "Clinical Timeline Reconstruction",
              "Multi-Source Documentation Unification",
              "Decision Gap & Missing Information Detection",
              "Protocol Compliance Comparison",
              "Similar Case Pattern Matching",
              "Corrective Action Report with Evidence"
            ],
            impact:
              "Quality committees get a precise root cause with corrective actions instead of general conclusions—improving patient safety through evidence-driven protocol updates."
          }
        },
        {
          id: "renewable_energy_solar",
          title: "Renewable Energy (Solar/Wind) – Output Optimization & Smart Maintenance",
          desc: "A solar farm experiences gradual output decline, but it's hard to tell if it's dirt, shading, inverter issues, or a grid problem. TEVEL connects SCADA, weather, cleaning reports, equipment failures, and replacement history to find the non-obvious cause.",
          protocol: "PROTOCOL_RENEWABLE_ENERGY",
          clearance: "INTERNAL / OPERATIONAL",
          details: {
            fullDesc:
              "A solar farm experiences gradual output decline, but it's hard to tell if it's dirt, shading, an inverter problem, or a grid issue. TEVEL connects SCADA data, weather, cleaning reports, equipment failures, and replacement history. It finds a non-trivial connection: a specific panel type + high-dust zone + cleaning schedule misaligned with the season. It proposes a targeted maintenance plan (cleaning/replacement/inspections) and ranks each action by cost-benefit. The result: output improvement without 'maintaining everything'.",
            capabilities: [
              "SCADA + Weather + Maintenance Event Correlation",
              "Non-Obvious Output Degradation Root Cause",
              "Panel Type / Zone / Season Pattern Detection",
              "Cost-Benefit Ranked Maintenance Prioritization",
              "Equipment Replacement Timeline Analysis",
              "Offline On-Prem Processing for Operational Data"
            ],
            impact:
              "Output improves through surgical interventions instead of blanket maintenance—with cost-benefit rankings guiding every decision."
          }
        },
        {
          id: "public_procurement_fraud",
          title: "Government / Public Procurement – Detecting Corruption & Tender Failures",
          desc: "A government ministry has hundreds of tenders, suppliers, objections, committees, and budget supplements pushed after award. TEVEL analyzes tender documents, protocols, bids, budget changes, and winning patterns over years to detect signature fraud indicators.",
          protocol: "PROTOCOL_PUBLIC_PROCUREMENT",
          clearance: "INTERNAL / REGULATED",
          details: {
            fullDesc:
              "A government ministry has hundreds of tenders, suppliers, objections, committees, and budget supplements pushed after the award. TEVEL analyzes tender documents, protocols, price bids, budget changes, and winning patterns over years. It identifies the 'signature' of suppliers that repeatedly receive overruns, specs tailored around a specific capability, or order-splitting to bypass approval thresholds. It produces a high-priority case list with an evidence chain and sources. The result: intelligent auditing and damage prevention before it escalates.",
            capabilities: [
              "Tender Document & Protocol Intelligence",
              "Supplier Winning Pattern Detection Over Time",
              "Spec Tailoring & Order-Split Anomaly Detection",
              "Budget Overrun Chain Analysis",
              "High-Priority Case List with Evidence Chain",
              "Audit-Ready Export with Full Source Traceability"
            ],
            impact:
              "Auditors detect corruption signatures before damage escalates—evidence chains replace hunches and investigations become faster and more defensible."
          }
        },
        {
          id: "consulting_war_room",
          title: "Consulting / Global Integration Firms – Transformation War Room (Deloitte / Accenture / IBM)",
          desc: "In a Fortune 500 transformation project, there are 8–12 weeks to deliver a risk map and execution plan, but data is scattered across procedures, contracts, ERP/CRM, presentations, IT documentation, interviews, and emails. TEVEL builds the 'reality model' in days.",
          protocol: "PROTOCOL_CONSULTING_DELIVERY",
          clearance: "CONFIDENTIAL / CLIENT-PRIVILEGED",
          details: {
            fullDesc:
              "In a Fortune 500 transformation project, there are 8–12 weeks to deliver a risk map and execution plan, but data is scattered across procedures, contracts, ERP/CRM systems, presentations, IT documentation, interviews, and emails. TEVEL ingests all material and builds an 'organizational reality model': entities, processes, ownership, system dependencies, and operational risks. It quickly surfaces 'landmines' (contradictions between policy and practice, shadow IT, problematic vendor contracts) and produces a decision file with evidence, timeline, and recommendations. Consulting firms sell more projects faster because they arrive with a ground-truth picture within days instead of weeks. TEVEL becomes the official accelerator for every engagement.",
            capabilities: [
              "Organizational Reality Model (entities, processes, dependencies)",
              "Policy vs. Practice Contradiction Detection",
              "Shadow IT & Vendor Risk Surfacing",
              "Decision File with Evidence & Timeline",
              "Multi-Source Ingestion (contracts, ERP, emails, docs)",
              "Offline / Client-Premises Processing"
            ],
            impact:
              "Consultants deliver ground-truth assessments in days instead of weeks—selling more engagements with higher confidence and evidence-backed recommendations."
          }
        },
        {
          id: "bigtech_security_compliance",
          title: "Big Tech / Enterprise SaaS – Security & Compliance at Scale (Microsoft / AWS / Google)",
          desc: "In a large organization there's a chronic gap between 'what should be' and 'what actually happens': permissions, exceptions, logs, documentation, config changes, and audit reports. TEVEL connects policy, tickets, configs, and logs to identify real risk chains.",
          protocol: "PROTOCOL_ENTERPRISE_SECURITY",
          clearance: "CONFIDENTIAL / SECURITY",
          details: {
            fullDesc:
              "In a large organization there's a chronic gap between 'what should be' and 'what actually happens': permissions, exceptions, countless logs, documentation, config changes, and audit reports. TEVEL connects policy, tickets, configs, logs, and infrastructure documentation to identify real 'risk chains' (not just point alerts): who received an unusual permission, which services are affected, and what the likely path to a leak/incident is. It generates an audit-ready trail + remediation recommendations ranked by impact and effort. Immediate ROI: fewer incidents, fewer SOC hours, significantly shorter audits and attestations.",
            capabilities: [
              "Policy → Config → Log Risk Chain Detection",
              "Permission Anomaly & Unusual Access Identification",
              "Cross-System Impact Scope Assessment",
              "Audit-Ready Evidence Trail Generation",
              "Remediation Recommendations by Impact & Effort",
              "Air-gapped / On-Prem for Sensitive Environments"
            ],
            impact:
              "Security teams get real risk chains instead of point alerts—fewer incidents, shorter SOC investigations, and audit cycles that take days instead of weeks."
          }
        },
        {
          id: "pharma_rd_copilot",
          title: "Pharma / MedTech Giant – R&D Copilot Preventing Duplicate Trials (Pfizer / Novartis / Medtronic)",
          desc: "In a pharma giant's R&D, there's a mountain of knowledge: papers, patents, failed trials, pre-clinical reports, clinical notes, and internal data—but much of it never translates into decisions. TEVEL surfaces early warning signs recurring across projects before another budget quarter is burned.",
          protocol: "PROTOCOL_RD_COPILOT",
          clearance: "CONFIDENTIAL / IP-SENSITIVE",
          details: {
            fullDesc:
              "In a pharma giant's R&D there's a mountain of knowledge: papers, patents, failed trials, pre-clinical reports, clinical notes, and internal data—but much of it never translates into decisions. TEVEL unifies external literature and internal knowledge, builds a graph of targets/pathways/assays and outcomes, and early-detects 'warning signs' that recur across projects (e.g., toxicity appearing only under a specific assay condition). It proposes focused 'decision' experiments and highlights contradictions/gaps before another budget quarter is burned. Investor value is clear: shorter time-to-decision, less duplication, and millions saved per program.",
            capabilities: [
              "Internal + External Knowledge Graph (targets/pathways/assays)",
              "Cross-Project Warning Sign Detection",
              "Failed Trial Pattern Analysis",
              "Focused Decision Experiment Proposals",
              "Contradiction & Gap Highlighting Before Budget Commit",
              "Secure On-Prem / Air-gapped Operation"
            ],
            impact:
              "R&D organizations detect duplicate work and warning signs early—cutting time-to-decision and saving millions in redundant trials per year."
          }
        },
        {
          id: "materials_lab_battery",
          title: "Materials / Battery Lab – Selecting Follow-Up Experiments from Thousands of Contradictory Results",
          desc: "In developing a new material there are endless small experiments (synthesis conditions, temperature, additives, measurements) yielding inconsistent results. TEVEL ingests lab notebooks, protocols, spectra/metadata, and measurement results to propose 3–5 decisive experiments with higher success probability.",
          protocol: "PROTOCOL_MATERIALS_SCIENCE",
          clearance: "CONFIDENTIAL / IP-SENSITIVE",
          details: {
            fullDesc:
              "In developing a new material there are endless small experiments (synthesis conditions, temperature, additives, measurements) yielding inconsistent results. TEVEL ingests lab notebooks, protocols, spectra/metadata, and measurement results, and builds a model connecting conditions → properties → performance. It identifies 'threshold conditions' causing phase transitions and explains why experiments almost succeeded but collapsed due to an unmeasured parameter. The result: a proposal of 3–5 decisive experiments with higher success probability, instead of another two months of trial-and-error.",
            capabilities: [
              "Lab Notebook & Protocol Entity Extraction",
              "Conditions → Properties → Performance Model",
              "Threshold / Phase-Change Condition Detection",
              "Contradicting Result Reconciliation",
              "Decisive Experiment Proposals with Success Probability",
              "Secure On-Prem / Air-gapped Processing"
            ],
            impact:
              "Research teams replace months of blind trial-and-error with 3–5 prioritized, evidence-backed decisive experiments—compressing material discovery timelines significantly."
          }
        },
        {
          id: "plasma_experimental_physics",
          title: "Plasma / Experimental Physics – Investigating a Complex Shot & Finding Critical Variables",
          desc: "In an experimental facility (e.g., plasma/accelerators) each shot produces massive amounts of sensor data + instrument settings + operator notes. TEVEL unifies waveform data, configs, calibrations, logs, and fault history to find the real driver of anomalies—separating new physics from measurement artifacts.",
          protocol: "PROTOCOL_EXPERIMENTAL_PHYSICS",
          clearance: "INTERNAL / RESEARCH",
          details: {
            fullDesc:
              "In an experimental facility (e.g., plasma/accelerators) each shot produces massive amounts of sensor data, instrument settings, and operator notes. TEVEL unifies waveform data, configs, calibrations, logs, and fault history, and generates automatic comparison to 'similar' shots. It finds that a small sensor calibration drift + trigger timing actually produced an anomaly that looked like 'new physics' but was a measurement artifact. The output: a list of high-sensitivity variables + recommendations to improve the experiment design. ROI: less wasted expensive beamtime/shot-time.",
            capabilities: [
              "Waveform + Config + Log Cross-Correlation",
              "Automatic Shot-to-Shot Similarity Comparison",
              "Calibration Drift & Trigger Timing Detection",
              "Physics vs. Measurement Artifact Disambiguation",
              "High-Sensitivity Variable Ranking",
              "Shot Time ROI Optimization Recommendations"
            ],
            impact:
              "Teams stop wasting expensive beamtime chasing measurement artifacts. Critical variables are ranked fast, and experiment designs improve with each shot cycle."
          }
        },
        {
          id: "hpc_simulation_validation",
          title: "HPC / CFD / FEA Simulations – Preventing Model Errors Before Burning Weeks of Compute",
          desc: "An engineering team runs heavy simulations (flow, structural, thermal) on a cluster; a small bug in boundary conditions or mesh can waste a week. TEVEL reads input decks, code versions, commits, model documentation, and prior run results to prevent costly reruns.",
          protocol: "PROTOCOL_HPC_SIMULATION",
          clearance: "INTERNAL / ENGINEERING",
          details: {
            fullDesc:
              "An engineering team runs heavy simulations (flow, structural, thermal) on a cluster; a small bug in boundary conditions or mesh can waste a week of compute. TEVEL reads input decks, code versions, commits, model documentation, and prior run results, and identifies inconsistencies between settings and design assumptions. It proposes automatic sanity checks and identifies recurring failure patterns ('convergence crashes only when…'). The result: more 'correct-first-time' runs, less compute waste, and faster product design cycles.",
            capabilities: [
              "Input Deck & Model Documentation Consistency Check",
              "Code Version / Commit ↔ Simulation Result Linkage",
              "Boundary Condition & Mesh Assumption Validation",
              "Recurring Failure Pattern Detection",
              "Automated Sanity Check Proposals",
              "Compute Cost Waste Reduction Analysis"
            ],
            impact:
              "Engineering teams get more correct-first-time simulation runs—cutting compute waste, shortening design cycles, and catching model errors before they cost weeks of cluster time."
          }
        }
      ]
    },
    market: {
      title: "Market Opportunity (TAM)",
      value: "$40B+",
      desc: "3-Layer Strategy: 1) Narrow (AI Search $6B+). 2) Core (Context Engine $40B+). 3) Expanded (Risk/Analytics $100B+).",
      audiences: ["Appliance Model (Offline)", "Research Production", "Investigative Analytics", "Risk Intelligence"]
    },
    footer: {
      title: "Initialize Tevel",
      subtitle: "Ready to unify your research?",
      inputName: "RESEARCHER ID",
      inputEmail: "SECURE CHANNEL",
      inputOrg: "ORGANIZATION",
      btn: "START RESEARCH"
    },
    sidenav: {
      hero: "Terminal",
      dashboard: "System View",
      problem: "Context Gap",
      comparison: "Landscape",
      solution: "Mechanism",
      usecases: "Applications",
      market: "Market",
      contact: "Access"
    },
    chaos: {
      before: "DATA SILOS",
      after: "RESEARCH INFRASTRUCTURE"
    }
  },
  he: {
    nav: {
      subtitle: "מנוע ההקשרים"
    },
    hero: {
      terminalPrefix: "מאתחל תשתית מחקר...",
      titleMain: "מכאוס מידע לקונטקסט.",
      titleSub: "מידע לקונטקסט.",
      subtitle: "טבל היא מערכת מחקר קונטקסטואלית מבוססת AI שנבנתה כדי לפתור את הבעיה המרכזית של העולם המודרני: לא 'איך למצוא מידע', אלא איך להפוך הררי מידע מפוזר לתמונה אחת ברורה, מדויקת וברת־פעולה.",
      ctaStart: "הפעלת סביבת מחקר",
      ctaDemo: "בקשת גישה למערכת"
    },
    dashboard: {
      version: "TEVEL_OS v3.3.0 // תשתית מחקר",
      high: "בעיבוד",
      targetAcquired: "התאמת הקשר: 99.8%",
      eventAnalysis: "ריבוד קונטקסטואלי",
      anomaly: "זוהתה חריגה",
      entityAnalysis: "התרת ישויות",
      origin: "קליטת מקורות",
      class: "סיווג",
      threat: "רלוונטיות",
      certainty: "רמת ודאות",
      vals: {
        iran: "אקדמיה / ממשל / עסקי",
        military: "יעד מחקר",
        critical: "קריטי"
      },
      logs: [
        "קולט זרמי מידע גולמי...",
        "מפרק ישויות: אדם, ארגון, מיקום...",
        "מנרמל זהויות (לולאת רזולוציה)...",
        "בונה גרף הקשרים...",
        "מזהה סתירות בציר הזמן...",
        "מייצר נתיבי ראיות...",
        "תשתית מחקר פעילה."
      ]
    },
    problem: {
      titlePrefix: "הקריסה:",
      title: "עשירים במידע, עניים בקונטקסט",
      description: "ארגונים הפכו למכונות שמייצרות מידע: מסמכים, דוחות, טבלאות. אבל בדיוק שם נוצרת הקריסה. כשהמידע מפוצל בין אלפי מקורות, ו'המשמעות' נמצאת בין השורות, המחקר הופך לעבודה ידנית, איטית ותלויה בזיכרון האנושי.",
      stats: [
        { value: 80, suffix: "%", label: "מהמידע הארגוני אינו מובנה (PDF, מיילים, מסמכים)" },
        { value: 8.2, suffix: "שעות", label: "מבוזבזות בשבוע לעובד על חיפוש ושחזור מידע קיים" },
        { value: 5, suffix: "M$+", label: "הפסד שנתי מוערך בארגונים עקב איכות נתונים ירודה" },
        { value: 60, suffix: "%", label: "מזמן המחקר מושקע רק בניקוי, ארגון והכנת הדאטה" }
      ],
      result: "התוצאה: יש לך את כל הנקודות, אבל אי אפשר לראות את התמונה."
    },
    comparison: {
      title: "המציאות: 3 פרדיגמות שונות",
      subtitle: "למה 'חיפוש' זה לא מחקר.",
      description: "רוב הכלים הם או שטחיים מדי (Search/RAG) או כבדים מדי (Legacy Intel). טבל היא מכונת המחקר האוטונומית היחידה.",
      highlight: "טבל מספקת עומק של אנליסט אנושי במהירות של בינה מלאכותית.",
      tables: [
        {
          id: "investor",
          label: "השוואה עסקית / משקיעים",
          columns: ["ממד", "TEVEL (בינה מחקרית)", "חיפוש / RAG (גנרי)", "מערכות ביון (Legacy)", "סטאק עצמאי (Vector/LLM)"],
          rows: [
            { feature: "תוצר מרכזי: תיק חקירה מלא", values: ["✓", "✗", "✓", "✗"] },
            { feature: "עקיבות מלאה (Source→Audit)", values: ["✓", "✗", "✓", "✗"] },
            { feature: "גרף ישויות + ציר זמן (ליבה)", values: ["✓", "✗", "✓", "✗"] },
            { feature: "פריסה אופליין / Air-gapped", values: ["✓", "✗", "✓", "✓"] },
            { feature: "Time-to-Value 'Day-1'", values: ["✓", "✓", "✗", "✗"] },
            { feature: "תמחור (Appliance/Compute)", values: ["✓", "✗", "✗", "✗"] },
          ]
        },
        {
          id: "customer",
          label: "השוואה ללקוחות / פריסה",
          columns: ["פתרון", "On-Prem אצל הלקוח", "עבודה ללא אינטרנט", "שירות ענן", "Residency אצל הלקוח", "יצוא תוצרים (דוח/תיק)", "מתאים לכל דומיין"],
          rows: [
            { feature: "TEVEL On-Prem 'מפלצת' ($200K/y)", values: ["✓", "✓", "✗", "✓", "✓", "✓"] },
            { feature: "TEVEL On-Prem 'לייט' ($150K/y)", values: ["✓", "✓", "✗", "✓", "✓", "✓"] },
            { feature: "TEVEL Cloud ($100K/y)", values: ["✗", "✗", "✓", "✗", "✓", "✓"] },
            { feature: "Search/RAG SaaS 'טיפוסי'", values: ["✗", "✗", "✓", "✗", "✗", "✗"] },
            { feature: "Legacy Intel 'טיפוסי' (פרויקט)", values: ["✓", "✓", "✗", "✓", "✓", "✗"] },
          ]
        },
        {
          id: "competitor",
          label: "מטריצת מתחרים",
          columns: ["מוצר / חברה", "On-Prem / Offline", "Search/RAG כליבה", "Entity Graph כליבה", "תיק חקירה מובנה", "פריסה מהירה / Agile"],
          rows: [
            { feature: "TEVEL (הסטנדרט)", values: ["✓", "✓", "✓", "✓", "✓"] },
            { feature: "Glean", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Microsoft (Copilot Search)", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Google (Vertex AI Search)", values: ["✗", "✓", "✗", "✗", "✓"] },
            { feature: "Palantir", values: ["✓", "✓", "✓", "✓", "✗"] },
            { feature: "Quantexa", values: ["✓", "✗", "✓", "✓", "✗"] },
            { feature: "i2 Group (Analyst's Notebook)", values: ["✓", "✗", "✓", "✗", "✓"] },
            { feature: "DataWalk", values: ["✓", "✗", "✓", "✓", "✗"] },
            { feature: "Neo4j (Graph DB)", values: ["✓", "✗", "✓", "✗", "✗"] },
          ]
        }
      ]
    },
    solution: {
      badge: "המנגנון",
      titleGlitch: "מפעל",
      titleSub: "המחקר",
      description1: "טבל פועלת כ",
      descriptionHighlight: "'מפעל מחקר',",
      description2: "בולעת כאוס גולמי ומייצרת תשתית ידע מאורגנת ועקבית.",
      cards: [
        { title: "1. קליטה וניקוי", desc: "קולטת כל פורמט (PDF, דוחות, טבלאות). מנקה ומארגנת את התוכן כדי לעבוד על 'משמעות' ולא על בלגן של פורמטים." },
        { title: "2. איחוד זהויות (Resolution)", desc: "האתגר הכי קשה: להבין ש-'ד״ר כהן', 'משה כהן' ו-'מ. כהן' הם אותו אדם. צמצום כפילויות ווריאציות." },
        { title: "3. גרף קשרים וזמן", desc: "מיפוי הרשת. מי קשור למי? מה גרם למה? ומה השתנה לאורך זמן? הופכת נתונים לסיפור עם התחלה ואמצע." },
        { title: "4. תוצרים בני-פעולה", desc: "לא עוד 'סתם מסך'. הפקת תיקי ישויות, טיימליין חכם, ותובנות מאומתות שניתן לעבוד איתן." }
      ],
      nodes: {
        rawData: {
          title: "קליטה",
          desc: "קקליטת מידע גולמי מכל מקור. עבודה 100% לוקאלית (Offline) ללא אינטרנט. המידע לא יוצא מהארגון."
        },
        enrichment: {
          title: "פענוח",
          desc: "חחילוץ ישויות ונורמליזציה. בניית 'מודל עולם' מתוך הטקסט, תוך הבנת הקשרים ושפה מקצועית."
        },
        context: {
          title: "חיבור",
          desc: "בבניית הגרף. זיהוי קשרים עקיפים ורצפים כרונולוגיים שמחקר ידני מפספס."
        },
        guidance: {
          title: "ניתוח",
          desc: "זזיהוי דפוסים. איתור חריגות, חזרתיות ו'דגלים אדומים' על פני כל הדאטה-סט."
        },
        fusion: {
          title: "שמירה",
          desc: "זזיכרון מוסדי. הידע הופך לתשתית ארגונית נשמרת, ולא נעלם יחד עם החוקר שעוזב."
        },
        insight: {
          title: "תוצר",
          desc: "ייצוא תוצרים שקופים ('קופסה לבנה'). ראיות עקיבות, ציר זמן ברור, ותובנות לקבלת החלטות."
        }
      }
    },
    useCases: {
      title: "יישומים אסטרטגיים חוצי-תעשיות",
      cases: [
        {
          id: "aml_bank_fraud",
          title: "מודיעין עסקי בבנק בינלאומי – זיהוי רשתות הונאה",
          desc: "צוות AML רואה עלייה בעסקאות 'תמימות' בין עשרות חברות קש. TEVEL בולעת טרנזקציות, KYC, מיילים ונתוני ספקים ובונה גרף שמראה שרשרת בעלויות נסתרת ותנועת כספים מעגלית.",
          protocol: "PROTOCOL_FINCRIME",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "צוות AML בבנק רואה עלייה בעסקאות 'תמימות' בין עשרות חברות קש, אבל אין סיגנל חד שמצדיק חסימה. TEVEL בולעת טרנזקציות, KYC, מיילים פנימיים, פרוטוקולים ונתוני ספקים, ובונה גרף קשרים שמראה שרשרת בעלויות נסתרת ותנועת כספים מעגלית. היא מציפה 'צמתים' מרכזיים (beneficial owners) ודפוסים שחוזרים בין מדינות וסניפים. תוך שעות במקום שבועות, הצוות מקבל תיק ראיות עם מקורות, הסבר, ורשימת חשבונות/ישויות לבדיקה מיידית.",
            capabilities: [
              "איחוד ישויות וזהויות (KYC + בעלות נהנה)",
              "זיהוי תנועת כספים מעגלית",
              "ניתוח דפוסים חוצה-מדינות",
              "מיפוי רשת חברות קש",
              "תיק ראיות עם עקיבות מלאה למקורות",
              "תעדוף חשבונות וישויות לבדיקה"
            ],
            impact:
              "שעות במקום שבועות לבניית תיק ראיות. החוקרים מקבלים בריף מוכן להחלטה עם עקיבות מלאה למקורות—לא רק רשימת התראות."
          }
        },
        {
          id: "pharma_rnd_gaps",
          title: "פארמה/ביוטק – קיצור זמן למחקר תרופתי וסגירת פערים בספרות",
          desc: "צוות R&D עובד על מולקולה למחלה נדירה, אבל הספרות מפוזרת. TEVEL קוראת מאמרים, פטנטים ותוצאות ניסויים, מחלצת ישויות, מזהה סתירות וחורים, ומציעה היפותזות ממוסמכות.",
          protocol: "PROTOCOL_DRUG_DISCOVERY",
          clearance: "סודי / רגיש לקניין רוחני",
          details: {
            fullDesc:
              "צוות R&D עובד על מולקולה למחלה נדירה, אבל הספרות מפוזרת בין מאות מאמרים, פטנטים ותוצאות ניסויים פנימיים שלא מדברים אחד עם השני. TEVEL קוראת מאמרים/פטנטים/דוחות ניסוי, מחלצת ישויות (targets, pathways, assays, תופעות לוואי) ומזהה סתירות וחורים: למשל ניסוי שנכשל בגלל פרמטר שלא נבדק במאמרים אחרים. היא מציעה היפותזות ממוסמכות ('אם X אז בדקו Y') ומסדרת סדר עדיפויות לניסויים הבאים עם הצדקה. התוצאה: חיסכון חודשי עבודה ומיקוד בניסויים שבאמת מקדמים החלטה.",
            capabilities: [
              "חילוץ ישויות מדעיות ואונטולוגיות",
              "זיהוי סתירות ופערים בין מקורות",
              "גרף ידע Target–Pathway–Compound",
              "יצירת היפותזות מובנות עם ציטוטים",
              "תעדוף ניסויים עם רציונל ראייתי",
              "הרצה לוקאלית מאובטחת On-Prem"
            ],
            impact:
              "חודשים של סקירת ספרות ידנית מתכווצים לימים. צוותים ממוקדים בניסויים שמקדמים החלטות, לא בארכיאולוגיית מידע."
          }
        },
        {
          id: "power_grid_root_cause",
          title: "תשתיות חשמל – חיזוי כשלים וחקירת אירועי רשת (Root Cause)",
          desc: "אחרי רצף תקלות בתחנת משנה, יש נתונים מכל כיוון: SCADA, יומני תחזוקה, קריאות חיישנים ודיווחי טכנאים. TEVEL מאחדת הכל ומוצאת את הקשר הלא-טריוויאלי בין ציוד, לחות ושינוי נוהל.",
          protocol: "PROTOCOL_CRITICAL_INFRA",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "אחרי רצף תקלות בתחנת משנה, יש נתונים מכל כיוון: SCADA, יומני תחזוקה, החלפות ציוד, קריאות חיישנים, ודיווחים של טכנאים בשטח. TEVEL מאחדת הכל, ממפה אירועים לשרשרת זמן, ומוצאת קשר לא טריוויאלי: שילוב בין סוג מחבר מסוים, תנאי לחות חריגים, ושינוי נוהל עבודה במשמרת. היא מספקת 'סיפור אירוע' עם ראיות (לוגים + מסמכים) וגם המלצות פעולה ממוקדות (בדיקות, החלפה יזומה, שינוי SOP). כך צוות ההנדסה עובר מוויכוח על 'תחושות' להחלטה מבוססת נתונים תוך יום במקום שבועיים.",
            capabilities: [
              "שחזור טיימליין תפעולי",
              "הצלבת אירועים רב-מקורית (SCADA + לוגים + מסמכים)",
              "זיהוי שרשרת סיבתית לא-טריוויאלית",
              "גרף נכסים/צוותים/הזמנות עבודה",
              "המלצות תיקון ממוקדות",
              "עיבוד לוקאלי מלא On-Prem"
            ],
            impact:
              "צוות ההנדסה עובר מוויכוחי 'תחושת בטן' להחלטה מבוססת ראיות תוך יום. עקיבות מלאה מנתוני חיישן גולמי ועד שינוי SOP."
          }
        },
        {
          id: "soc_noise_reduction",
          title: "סייבר ארגוני (SOC) – צמצום רעש והתראות שווא",
          desc: "ב-SOC גדול מצטברות אלפי התראות ביום מ-EDR, SIEM ו-Firewall. TEVEL מאחדת לוגים ומסמכים, בונה 'סיפור מתקפה' ומסמנת את ה-pivot המדויק כדי שהאנליסטים ישקיעו זמן באיומים אמיתיים.",
          protocol: "PROTOCOL_CYBER_INTEL",
          clearance: "סודי / אבטחת מידע",
          details: {
            fullDesc:
              "ב-SOC גדול מצטברות אלפי התראות ביום מכלים שונים (EDR, SIEM, Firewall), ורוב הזמן נשרף על triage. TEVEL מאחדת לוגים, תיעוד נכסים, שינויים אחרונים במערכות ודוחות קודמים, ובונה 'סיפור מתקפה' במקום אוסף התראות. היא מזהה קמפיין אחד שמתחפש לכמה אירועים, ומסמנת את ה-pivot המדויק (מחשב, משתמש, credential). האנליסט מקבל timeline + ראיות + צעדי containment מומלצים. התוצאה: פחות false positives וזמן תגובה מהיר משמעותית.",
            capabilities: [
              "איחוד ישויות IOC/TTP",
              "שחזור טיימליין קמפיין וסיפור מתקפה",
              "הצלבה בין לוגים והתראות",
              "זיהוי נקודת ה-pivot (מחשב, משתמש, credential)",
              "חבילות ראיות לדוח IR",
              "תמיכה ב-Air-Gapped / On-Prem"
            ],
            impact:
              "פחות false positives דרמטית. אנליסטים מקבלים סיפור מתקפה קוהרנטי במקום אלפי התראות מנותקות—זמן תגובה יורד משעות לדקות."
          }
        },
        {
          id: "ediscovery_legal",
          title: "משפטי/ציות רגולטורי – גילוי מסמכים בחקירה (eDiscovery)",
          desc: "בחברת טכנולוגיה נכנסת תביעה עם דרישה למסמכים על נושא מסוים לאורך 4 שנים. TEVEL מסווגת מסמכים, מציפה סתירות ובונה מפת קשרים: מי אישר מה, מתי ועל בסיס אילו נתונים.",
          protocol: "PROTOCOL_LEGAL_DISCOVERY",
          clearance: "סודי / חסוי-עו״ד",
          details: {
            fullDesc:
              "בחברת טכנולוגיה נכנסת תביעה/חקירה רגולטורית עם דרישה למסמכים בנושא מסוים לאורך 4 שנים. יש מיילים, חוזים, Slack, מצגות, נספחים ותיקיות שלמות בלי סדר. TEVEL מסווגת מסמכים לפי נושאים/ישויות/אירועים, מציפה סתירות בין גרסאות חוזה ומאתרת 'מסמכי מפתח' שאנשים לא זכרו שקיימים. היא בונה מפת קשרים: מי אישר מה, מתי, ועל בסיס אילו נתונים. הצוות המשפטי מקבל רשימת מסמכים עם הסבר למה הם רלוונטיים ומסלול ראיות עקבי.",
            capabilities: [
              "סיווג מסמכים לפי נושא/ישות/אירוע",
              "זיהוי סתירות בין גרסאות חוזה",
              "מיפוי שרשרת אישורים (מי, מתי, על בסיס מה)",
              "איתור מסמכי מפתח ממקורות לא מאורגנים",
              "מסלול ראיות עם עקיבות מלאה",
              "עיבוד לוקאלי מודע-פריבילגיה"
            ],
            impact:
              "הצוות המשפטי מקבל מסלול ראיות ומפת מסמכים קוהרנטית—קיצור זמן ביקורת מחודשים לימים עם עקיבות ברמת רגולטור."
          }
        },
        {
          id: "insurance_fraud_complex",
          title: "ביטוח – זיהוי תביעות מורכבות/חשודות וחיסכון בחקירת שטח",
          desc: "מגישים תביעת רכוש גדולה אחרי 'נזק מים', אבל הפרטים מתנגשים בין טפסים, שיחות מוקד, תמונות ותיקוני עבר. TEVEL משלבת טקסט, מסמכים ומטא-דאטה לזיהוי חריגות ממשיות בלבד.",
          protocol: "PROTOCOL_INSURANCE_FRAUD",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "מגישים תביעת רכוש גדולה אחרי 'נזק מים', אבל הפרטים מתנגשים בין טפסים, שיחות מוקד, תמונות ותיקוני עבר. TEVEL משלבת טקסט, מסמכים ותמונות (מטא-דאטה, תאריכים), ומזהה שהנזק תואם אירוע קודם וששונו פרטים בין גרסאות. היא מציעה שאלות ממוקדות למבוטח ומאתרת ספקים/חשבוניות שמקושרים לעוד תיקים דומים. במקום לשלוח חוקר לכל מקרה, החברה שולחת רק את התיקים שהמערכת מדרגת כחריגים עם ראיות ברורות. התוצאה: פחות הוצאות חקירה וירידה בהונאות.",
            capabilities: [
              "קישור ישויות בין תביעות שונות",
              "הצלבת מטא-דאטה ותאריכי תמונות",
              "מיפוי רשת ספקים וקבלנים",
              "זיהוי סתירות בין גרסאות טפסים ורישומים",
              "יצירת שאלות ממוקדות למבוטח",
              "דירוג חריגות עם ראיות תומכות"
            ],
            impact:
              "רק תיקים עם ראיות חריגות ברורות נשלחים לחקירת שטח. הוצאות חקירה יורדות משמעותית ויחד איתן רמת ההונאות."
          }
        },
        {
          id: "urban_planning_transport",
          title: "תכנון ערים/תחבורה – החלטה על פרויקט תשתית על בסיס 'תמונה מלאה'",
          desc: "עירייה מתלבטת בין נתיב תחבורה ציבורית חדש לשדרוג צומת בעייתי. TEVEL מאחדת ספירות תנועה, תלונות תושבים, תאונות ופרוטוקולים לבניית מודל מבוסס-ראיות.",
          protocol: "PROTOCOL_URBAN_INFRA",
          clearance: "פנימי / ציבורי",
          details: {
            fullDesc:
              "עירייה מתלבטת איפה להשקיע: נתיב תחבורה ציבורית חדש או שדרוג צומת בעייתי. הנתונים מפוזרים בין ספירות תנועה, תלונות תושבים, תאונות, עבודות תשתית, תוכניות עתידיות ופרוטוקולים. TEVEL מאחדת את כל המקורות ובונה מודל שמראה קשרים בין עבודות קודמות, 'נקודות חנק' ותאונות חוזרות לפי שעות/עונות. היא מציפה תרחישים: מה יקרה אם סוגרים נתיב, איפה יווצר עומס, ומה KPI צפוי להשתפר. מקבלי החלטות מקבלים נימוק מבוסס ראיות ולא 'תחושת בטן'.",
            capabilities: [
              "איחוד מידע רב-מקורי (תנועה, תלונות, תאונות, פרוטוקולים)",
              "זיהוי נקודות חנק ודפוסי אירועים חוזרים",
              "מידול תרחישים טמפורלי (לפי שעה/עונה)",
              "קורלציה בין עבודות תשתית ↔ אירועים",
              "השוואת תרחישים ו-KPI צפויים",
              "ייצוא בריף החלטה מבוסס ראיות"
            ],
            impact:
              "מקבלי החלטות מקבלים נימוק מבוסס ראיות ומידול תרחישים—מחליפים 'תחושת בטן' בהחלטות השקעת תשתית מבוססות-נתונים."
          }
        },
        {
          id: "supply_chain_quality",
          title: "שרשרת אספקה/ייצור – Root cause לתקלות איכות וספקים בעייתיים",
          desc: "במפעל אלקטרוניקה יש קפיצה באחוז פסילות בקו ייצור, אבל אין הסכמה על הסיבה. TEVEL מחברת נתוני MES/ERP, דוחות איכות ותקלות תחזוקה כדי לאתר את הגורם האמיתי.",
          protocol: "PROTOCOL_SUPPLY_CHAIN",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "במפעל אלקטרוניקה יש קפיצה באחוז פסילות בקו ייצור, אבל אין הסכמה אם זה חומר גלם, מכונה, או שינוי משמרת. TEVEL מחברת נתוני MES/ERP, דוחות איכות, טפסי ספקים, תקלות תחזוקה והערות טכנאים. היא מזהה שהפסילות התחילו אחרי החלפת ספק משנה לרכיב מסוים + שינוי טמפ' אחסון במחסן, ומראה אילו batches מושפעים. היא מפיקה רשימת פעולות: עצירת batch, בדיקות מעבדה נקודתיות, והחלפת ספק/תנאי אחסון. התוצאה: עצירת דימום מהירה במקום שבועות של ניסוי-וטעייה.",
            capabilities: [
              "הצלבת MES/ERP + דוחות איכות",
              "קישור החלפת ספק ↔ ציר זמן פסילות",
              "זיהוי batches/lots מושפעים",
              "בידוד גורם שורש רב-משתני",
              "רשימת פעולות ממוקדות (עצירה, בדיקה, החלפה)",
              "גרף רשת ספקים וקבלני משנה"
            ],
            impact:
              "גורם השורש מזוהה תוך שעות במקום שבועות. ה-batches המושפעים מבודדים מיידית ופעולות תיקון ספציפיות מחליפות מחזורי ניסוי-וטעייה יקרים."
          }
        },
        {
          id: "hr_people_analytics",
          title: "משאבי אנוש (People Analytics) – זיהוי סיבות נטישה והורדת attrition",
          desc: "בארגון של מאות עובדים יש גל עזיבות, אבל הסיבות 'רועשות': משוב מנהלים, סקרים אנונימיים, שיחות Exit, ביצועים, קידומים ושכר – הכול מפוזר. TEVEL מאחדת את כל המקורות ומזהה דפוס.",
          protocol: "PROTOCOL_HR_ANALYTICS",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "בארגון של מאות עובדים יש גל עזיבות, אבל הסיבות 'רועשות': משוב מנהלים, סקרים אנונימיים, שיחות Exit, ביצועים, קידומים ושכר – הכול מפוזר. TEVEL מאחדת את כל המקורות (כולל טקסט חופשי), ומזהה דפוס: צוותים ספציפיים אחרי שינוי מבני, עומס בפרויקט מסוים וחוסר התאמה בתפקיד. היא מציגה 'גורמי סיכון' לפי צוות/תפקיד עם ראיות ומסבירה מה משתנה לפני עזיבה. HR מקבל תוכנית פעולה מדויקת (שינוי הקצאות, הכשרות, תיקון KPI למנהלים). התוצאה: טיפול ממוקד במקום יוזמות כלליות שלא עובדות.",
            capabilities: [
              "איחוד טקסט רב-מקורי (סקרים, Exit, טקסט חופשי)",
              "זיהוי גורמי סיכון לפי צוות ותפקיד",
              "זיהוי דפוסים לפני עזיבה",
              "קורלציה שינוי מבני ↔ נטישה",
              "תוכנית פעולה מבוססת-ראיות לפי צוות",
              "עיבוד לוקאלי שמירת פרטיות"
            ],
            impact:
              "HR עובר מיוזמות שימור גנריות להתערבויות מדויקות ומבוססות-ראיות לפי צוות ותפקיד—עם תוצאות מדידות."
          }
        },
        {
          id: "real_estate_due_diligence",
          title: "נדל\"ן מסחרי – בדיקת נכס לפני רכישה (Due Diligence)",
          desc: "קרן נדל\"ן בוחנת קניון/בניין משרדים, והמידע מפוזר בין חוזי שכירות, נספחים, דוחות הנדסה, התכתבויות עם עירייה, תלונות דיירים וחשבונות אחזקה. TEVEL מחלצת ישויות ומסמנת סיכונים נסתרים.",
          protocol: "PROTOCOL_REAL_ESTATE",
          clearance: "סודי / משפטי",
          details: {
            fullDesc:
              "קרן נדל\"ן בוחנת קניון/בניין משרדים, והמידע מפוזר בין חוזי שכירות, נספחים, דוחות הנדסה, התכתבויות עם עירייה, תלונות דיירים וחשבונות אחזקה. TEVEL קוראת הכול ומחלצת ישויות: דיירים, מועדי חידוש, סעיפי יציאה, חריגות בנייה, תקלות חוזרות. היא מזהה סתירות בין חוזים לגרסאות נספחים, ומצביעה על סיכון נסתר (לדוגמה: התחייבות לשיפוץ יקר שמתחילה בעוד 9 חודשים). התוצר: 'תיק נכס' עם מפת סיכונים, מסמכי מקור והמלצה לשינוי תנאי העסקה.",
            capabilities: [
              "חילוץ ישויות חוזי שכירות ונספחים",
              "זיהוי סתירות בין גרסאות חוזים",
              "טיימליין דיירים/חידושים/סעיפי יציאה",
              "הצפת סיכונים וחבויות נסתרים",
              "זיהוי חריגות בנייה ודפוסי תחזוקה",
              "ייצוא תיק נכס עם הפניות למקורות"
            ],
            impact:
              "קרנות נכנסות לרכישה עם מפת סיכונים מבוססת-ראיות במקום הפתעות—מקצרות Due Diligence ומשפרות מינוף במשא ומתן."
          }
        },
        {
          id: "clinical_incident_hospital",
          title: "בריאות (בית חולים) – חקירת אירוע קליני ושיפור איכות טיפול",
          desc: "אחרי אירוע חריג במחלקה, ועדת איכות צריכה להבין מה קרה: תיק רפואי, תרופות, תיעוד אחיות, מעבדה, מכשור ושיחות מסדרון שלא נכנסו מסודר. TEVEL בונה את הטיימליין הקליני.",
          protocol: "PROTOCOL_CLINICAL_QUALITY",
          clearance: "סודי / רגולציית בריאות",
          details: {
            fullDesc:
              "אחרי אירוע חריג במחלקה, ועדת איכות צריכה להבין מה קרה באמת: תיק רפואי, תרופות, תיעוד אחיות, מעבדה, מכשור, ושיחות מסדרון שלא נכנסו מסודר. TEVEL מאחדת את התיעוד, בונה ציר זמן קליני, ומזהה 'רגעי פיצול' שבהם התקבלה החלטה ללא מידע קריטי. היא משווה למקרים דומים בעבר ומציפה אילו פרוטוקולים לא יושמו ואיפה יש חוסר בהדרכה. במקום מסקנות כלליות, מתקבל root cause עם פעולות מתקנות מדויקות (עדכון פרוטוקול, בקרה, הדרכה).",
            capabilities: [
              "שחזור טיימליין קליני",
              "איחוד תיעוד רב-מקורי",
              "זיהוי פערי החלטה ומידע חסר",
              "השוואת עמידה בפרוטוקולים",
              "התאמה למקרים דומים בעבר",
              "דוח פעולות מתקנות עם ראיות"
            ],
            impact:
              "ועדות איכות מקבלות root cause מדויק עם פעולות מתקנות במקום מסקנות כלליות—משפרות בטיחות מטופלים דרך עדכוני פרוטוקול מבוססי-ראיות."
          }
        },
        {
          id: "renewable_energy_solar",
          title: "אנרגיה מתחדשת (סולארי/רוח) – אופטימיזציה לתפוקה ותחזוקה חכמה",
          desc: "בחוות סולארית יש ירידה הדרגתית בתפוקה, אבל קשה לדעת אם זה לכלוך, הצללה, inverter, או בעיית רשת. TEVEL מחברת SCADA, מזג אוויר, דוחות ניקיון, תקלות ציוד והיסטוריית החלפות.",
          protocol: "PROTOCOL_RENEWABLE_ENERGY",
          clearance: "פנימי / תפעולי",
          details: {
            fullDesc:
              "בחוות סולארית יש ירידה הדרגתית בתפוקה, אבל קשה לדעת אם זה לכלוך, הצללה, inverter, או בעיית רשת. TEVEL מחברת SCADA, מזג אוויר, דוחות ניקיון, תקלות ציוד, והיסטוריית החלפות. היא מוצאת קשר לא טריוויאלי: סוג פאנל ספציפי + אזור עם אבק גבוה + תזמון ניקוי לא מתאים לעונה. היא מציעה תוכנית תחזוקה ממוקדת (ניקיון/החלפה/בדיקות) ומדרגת עלות-תועלת לכל פעולה. התוצאה: שיפור תפוקה בלי 'לתחזק הכול'.",
            capabilities: [
              "הצלבת SCADA + מזג אוויר + תחזוקה",
              "אבחון root cause ירידת תפוקה",
              "זיהוי דפוס פאנל/אזור/עונה",
              "תעדוף תחזוקה עלות-תועלת",
              "ניתוח טיימליין החלפת ציוד",
              "עיבוד לוקאלי ללא אינטרנט"
            ],
            impact:
              "תפוקה משתפרת דרך התערבויות כירורגיות במקום תחזוקה שטוחה—עם דירוגי עלות-תועלת שמנחים כל החלטה."
          }
        },
        {
          id: "public_procurement_fraud",
          title: "ממשל/רכש ציבורי – איתור שחיתות/כשלים במכרזים",
          desc: "במשרד ממשלתי יש מאות מכרזים, ספקים, הסתייגויות, ועדות ותוספות תקציב שנדחפות אחרי הזכייה. TEVEL מנתחת מסמכי מכרז, פרוטוקולים, הצעות מחיר ודפוסי זכייה לזיהוי חתימות הונאה.",
          protocol: "PROTOCOL_PUBLIC_PROCUREMENT",
          clearance: "פנימי / רגולטורי",
          details: {
            fullDesc:
              "במשרד ממשלתי יש מאות מכרזים, ספקים, הסתייגויות, ועדות, ותוספות תקציב שנדחפות אחרי הזכייה. TEVEL מנתחת מסמכי מכרז, פרוטוקולים, הצעות מחיר, שינויי תקציב, ודפוסי זכייה לאורך שנים. היא מזהה 'חתימה' של ספקים שמקבלים שוב ושוב חריגות, מפרט שנתפר סביב יכולת ספציפית, או פיצול הזמנות כדי לעקוף סף אישור. היא מפיקה רשימת מקרים בעדיפות גבוהה עם שרשרת ראיות ומקורות. התוצאה: ביקורת חכמה ומניעת נזקים לפני שהם מתגלגלים.",
            capabilities: [
              "מודיעין מסמכי מכרז ופרוטוקולים",
              "זיהוי דפוסי זכייה של ספקים לאורך זמן",
              "זיהוי מפרט מותאם ופיצול הזמנות",
              "ניתוח שרשרת חריגות תקציב",
              "רשימת מקרים עם שרשרת ראיות",
              "ייצוא מוכן לביקורת עם עקיבות מלאה"
            ],
            impact:
              "מבקרים מזהים חתימות שחיתות לפני שהנזק מתגלגל—שרשרות ראיות מחליפות תחושות בטן וחקירות הופכות מהירות ויותר הגנתיות."
          }
        },
        {
          id: "consulting_war_room",
          title: "ייעוץ/אינטגרציה עולמית – War Room טרנספורמציה (Deloitte / Accenture / IBM)",
          desc: "בפרויקט טרנספורמציה של Fortune 500 יש 8–12 שבועות להציג מפת סיכונים ותוכנית ביצוע, אבל הדאטה מפוזר: נהלים, חוזים, ERP/CRM, מצגות, תיעוד IT וראיונות. TEVEL בונה את 'מודל המציאות' תוך ימים.",
          protocol: "PROTOCOL_CONSULTING_DELIVERY",
          clearance: "סודי / חסוי-לקוח",
          details: {
            fullDesc:
              "בפרויקט טרנספורמציה של Fortune 500 יש 8–12 שבועות להציג מפת סיכונים ותוכנית ביצוע, אבל הדאטה מפוזר: נהלים, חוזים, מערכות ERP/CRM, מצגות, תיעוד IT, ראיונות ומיילים. TEVEL בולעת את כל החומר ובונה 'מודל מציאות' של הארגון: ישויות, תהליכים, בעלויות, תלות בין מערכות וסיכונים תפעוליים. היא מציפה מהר 'מוקשים' (סתירות בין policy לפרקטיקה, shadow IT, חוזי ספקים בעייתיים) ומפיקה תיק החלטה עם ראיות, timeline והמלצות. הייעוץ מוכר יותר פרויקטים מהר יותר כי הוא מגיע עם תמונת אמת תוך ימים במקום שבועות. TEVEL הופך לאקסלרייטור הרשמי של כל engagement.",
            capabilities: [
              "מודל מציאות ארגוני (ישויות, תהליכים, תלויות)",
              "זיהוי סתירות policy לעומת פרקטיקה",
              "הצפת Shadow IT וסיכוני ספקים",
              "תיק החלטה עם ראיות וטיימליין",
              "קליטה רב-מקורית (חוזים, ERP, מיילים, מסמכים)",
              "עיבוד לוקאלי בחצרות הלקוח"
            ],
            impact:
              "יועצים מגיעים עם תמונת אמת תוך ימים במקום שבועות—מוכרים יותר engagements עם ביטחון גבוה יותר והמלצות מבוססות-ראיות."
          }
        },
        {
          id: "bigtech_security_compliance",
          title: "Big Tech / Enterprise SaaS – אבטחת מידע וציות בקנה מידה (Microsoft / AWS / Google)",
          desc: "בארגון ענק יש פער כרוני בין 'מה אמור להיות' לבין 'מה קורה בפועל': הרשאות, חריגות, לוגים, תיעוד ושינויי קונפיג. TEVEL מחברת policy, tickets, configs ולוגים לזיהוי שרשראות סיכון אמיתיות.",
          protocol: "PROTOCOL_ENTERPRISE_SECURITY",
          clearance: "סודי / אבטחת מידע",
          details: {
            fullDesc:
              "בארגון ענק יש פער כרוני בין 'מה אמור להיות' לבין 'מה קורה בפועל': הרשאות, חריגות, אינספור לוגים, תיעוד, שינויי קונפיג, ודוחות ביקורת. TEVEL מחברת בין policy, tickets, configs, לוגים ותיעוד תשתיות כדי לזהות 'שרשראות סיכון' אמיתיות (לא עוד התראה נקודתית): מי קיבל הרשאה חריגה, איזה שירותים מושפעים, ומה המסלול הסביר לדליפה/תקרית. היא מייצרת Audit Trail שמוכן לביקורת + המלצות remediations לפי impact ו-effort. ROI מיידי: פחות אירועים, פחות שעות SOC, קיצור ביקורות ו-attestations.",
            capabilities: [
              "זיהוי שרשרת סיכון Policy → Config → Log",
              "זיהוי חריגות הרשאה וגישה חריגה",
              "הערכת היקף השפעה חוצה-מערכות",
              "יצירת Audit Trail מוכן לביקורת",
              "המלצות remediation לפי impact ו-effort",
              "תמיכה ב-Air-gapped / On-Prem לסביבות רגישות"
            ],
            impact:
              "צוותי אבטחה מקבלים שרשראות סיכון אמיתיות במקום התראות נקודתיות—פחות אירועים, חקירות SOC קצרות יותר, ומחזורי ביקורת שלוקחים ימים במקום שבועות."
          }
        },
        {
          id: "pharma_rd_copilot",
          title: "פארמה/MedTech ענק – R&D Copilot שמונע כפל ניסויים (Pfizer / Novartis / Medtronic)",
          desc: "ב-R&D של ענקית פארמה יש הר של ידע: מאמרים, פטנטים, ניסויים כושלים, דוחות פרה-קליניים ונתונים פנימיים—אבל הרבה ממנו לא מתורגם להחלטות. TEVEL מציפה סימני אזהרה חוזרים בין פרויקטים.",
          protocol: "PROTOCOL_RD_COPILOT",
          clearance: "סודי / רגיש לקניין רוחני",
          details: {
            fullDesc:
              "ב-R&D של ענקית פארמה יש הר של ידע: מאמרים, פטנטים, ניסויים כושלים, דוחות פרה-קליניים, clinical notes, ונתונים פנימיים—אבל הרבה ממנו לא מתורגם להחלטות. TEVEL מאחדת ספרות חיצונית + ידע פנימי, בונה גרף של targets/pathways/assays ותוצאות, ומזהה מוקדם 'סימני אזהרה' שחוזרים בין פרויקטים (למשל טוקסיות שמופיעה רק בתנאי assay מסוים). היא מציעה ניסויי 'הכרעה' ממוקדים ומדגישה סתירות/פערים לפני ששורפים עוד רבעון תקציב. הערך למשקיעים ברור: קיצור time-to-decision ומיליונים נחסכים בכל תוכנית.",
            capabilities: [
              "גרף ידע פנימי + חיצוני (targets/pathways/assays)",
              "זיהוי סימני אזהרה חוצה-פרויקטים",
              "ניתוח דפוסי ניסויים כושלים",
              "הצעת ניסויי הכרעה ממוקדים",
              "הדגשת סתירות/פערים לפני commit תקציבי",
              "הרצה מאובטחת On-Prem / Air-gapped"
            ],
            impact:
              "ארגוני R&D מזהים כפל עבודה וסימני אזהרה מוקדם—מקצרים time-to-decision וחוסכים מיליונים בניסויים מיותרים בשנה."
          }
        },
        {
          id: "materials_lab_battery",
          title: "מעבדת חומרים/סוללות – בחירת ניסויי המשך מתוך אלפי תוצאות סותרות",
          desc: "בפיתוח חומר חדש יש אינסוף ניסויים קטנים (תנאי סינתזה, טמפ', תוספים, מדידות) שמניבים תוצאות לא עקביות. TEVEL בולעת lab notebooks, פרוטוקולים, ספקטרומים ומטא-דאטה, ובונה מודל שמחבר תנאים → תכונות → ביצועים.",
          protocol: "PROTOCOL_MATERIALS_SCIENCE",
          clearance: "סודי / רגיש לקניין רוחני",
          details: {
            fullDesc:
              "בפיתוח חומר חדש יש אינסוף ניסויים קטנים (תנאי סינתזה, טמפ', תוספים, מדידות) שמניבים תוצאות לא עקביות. TEVEL בולעת lab notebooks, פרוטוקולים, ספקטרומים/מטא-דאטה, ותוצאות מדידה, ובונה מודל שמחבר תנאים → תכונות → ביצועים. היא מזהה 'תנאי סף' שגורם לשינוי פאזה ומסביר למה ניסויים כמעט הצליחו אבל קרסו בגלל פרמטר שלא נמדד. התוצאה: הצעת 3–5 ניסויי הכרעה עם הסתברות הצלחה גבוהה יותר, במקום עוד חודשיים ניסוי-וטעייה.",
            capabilities: [
              "חילוץ ישויות מ-lab notebooks ופרוטוקולים",
              "מודל תנאים → תכונות → ביצועים",
              "זיהוי תנאי סף ושינוי פאזה",
              "יישוב תוצאות סותרות",
              "הצעת ניסויי הכרעה עם הסתברות הצלחה",
              "עיבוד מאובטח On-Prem / Air-gapped"
            ],
            impact:
              "צוותי מחקר מחליפים חודשי ניסוי-וטעייה עיוור ב-3–5 ניסויי הכרעה ממוקדים ומבוססי-ראיות—מקצרים משמעותית את ציר הזמן לגילוי חומרים."
          }
        },
        {
          id: "plasma_experimental_physics",
          title: "פלזמה/פיזיקה ניסויית – חקירת Shot מורכב ומציאת משתנים קריטיים",
          desc: "במתקן ניסויי (פלזמה/מאיצים) כל Shot מייצר כמויות עצומות של נתוני חיישנים + הגדרות מכשור + הערות מפעילים. TEVEL מאחדת waveform data, configs, calibrations, לוגים והיסטוריית תקלות—ומפרידה פיזיקה אמיתית מ-artifacts מדידה.",
          protocol: "PROTOCOL_EXPERIMENTAL_PHYSICS",
          clearance: "פנימי / מחקרי",
          details: {
            fullDesc:
              "במתקן ניסויי (למשל פלזמה/מאיצים) כל Shot מייצר כמויות עצומות של נתוני חיישנים + הגדרות מכשור + הערות מפעילים. TEVEL מאחדת waveform data, configs, calibrations, לוגים והיסטוריית תקלות, ומייצרת השוואה אוטומטית ל-shots 'דומים'. היא מוצאת שדווקא דריפט קטן בכיול חיישן + טיימינג של טריגר יצרו אנומליה שנראתה כמו 'פיזיקה חדשה' אבל היא ארטיפקט מדידה. התוצר: רשימת משתנים בעלי רגישות גבוהה + המלצות לשיפור ניסוי. ROI: פחות בזבוז זמן beamtime/shot-time יקר.",
            capabilities: [
              "הצלבת Waveform + Config + לוגים",
              "השוואה אוטומטית shot-to-shot",
              "זיהוי דריפט כיול ובעיות טיימינג טריגר",
              "הפרדת פיזיקה אמיתית מ-artifacts מדידה",
              "דירוג משתנים בעלי רגישות גבוהה",
              "המלצות לאופטימיזציית זמן beamtime"
            ],
            impact:
              "צוותים מפסיקים לבזבז beamtime יקר על רדיפת artifacts מדידה. משתנים קריטיים מדורגים מהר ועיצוב הניסוי משתפר בכל מחזור Shot."
          }
        },
        {
          id: "hpc_simulation_validation",
          title: "סימולציות HPC/CFD/FEA – מניעת טעויות מודל לפני שריפת שבועות חישוב",
          desc: "צוות הנדסי מריץ סימולציות כבדות (זרימה, מבנים, תרמי) על קלאסטר; באג קטן ב-boundary conditions או mesh יכול לבזבז שבוע. TEVEL קוראת input decks, גרסאות קוד, commits ותיעוד מודלים כדי למנוע ריצות חוזרות יקרות.",
          protocol: "PROTOCOL_HPC_SIMULATION",
          clearance: "פנימי / הנדסי",
          details: {
            fullDesc:
              "צוות הנדסי מריץ סימולציות כבדות (זרימה, מבנים, תרמי) על קלאסטר; באג קטן ב-boundary conditions או mesh יכול לבזבז שבוע. TEVEL קוראת input decks, גרסאות קוד, commits, תיעוד מודלים, ותוצאות ריצות קודמות, ומזהה חוסר עקביות בין הגדרות לבין הנחות בתכנון. היא מציעה בדיקות sanity אוטומטיות ומזהה דפוסי כשל שחוזרים ('ההתכנסות קורסת רק כש…'). התוצאה: יותר ריצות 'נכונות' על הפעם הראשונה, פחות compute waste, והאצה של תכנון מוצרים.",
            capabilities: [
              "בדיקת עקביות input deck ותיעוד מודל",
              "קישור גרסת קוד/commit ↔ תוצאת סימולציה",
              "ולידציית boundary conditions והנחות mesh",
              "זיהוי דפוסי כשל חוזרים",
              "הצעת בדיקות sanity אוטומטיות",
              "ניתוח חסכון ב-compute cost"
            ],
            impact:
              "צוותי הנדסה מקבלים יותר ריצות 'נכונות בפעם הראשונה'—מורידים compute waste, מקצרים מחזורי תכנון, ותופסים שגיאות מודל לפני שעולות בשבועות של זמן קלאסטר."
          }
        }
      ]
    },
    market: {
      title: "הזדמנות שוק (TAM)",
      value: "$40B+",
      desc: "אסטרטגיית שוק תלת-שכבתית: 1) צר (AI Search): $6B+. 2) ליבה (מנוע קונטקסט): $40B+. 3) מורחב (סיכונים/אנליטיקה): $100B+.",
      audiences: ["מודל תשתית (Offline Appliance)", "ייצור נכסי מחקר", "אנליטיקה חקירתית", "מודיעין סיכונים"]
    },
    footer: {
      title: "אתחול מערכת טבל",
      subtitle: "מוכנים לאחד את המחקר?",
      inputName: "מזהה חוקר",
      inputEmail: "ערוץ מאובטח",
      inputOrg: "ארגון",
      btn: "התחל חקירה"
    },
    sidenav: {
      hero: "טרמינל",
      dashboard: "מבט מערכת",
      problem: "פער הקונטקסט",
      comparison: "תחרות",
      solution: "מנגנון",
      usecases: "יישומים",
      market: "שוק",
      contact: "גישה"
    },
    chaos: {
      before: "איי מידע (SILOS)",
      after: "תשתית מחקר"
    }
  }
};
