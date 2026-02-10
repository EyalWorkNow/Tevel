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
            { feature: "i2 Group (Analyst's Notebook)", values: ["✓", "✗", "✓", "✗", "✓"] }, // i2 is fast to install but slow to configure? Actually i2 is client-side app, fast install. Changed to V.
            { feature: "DataWalk", values: ["✓", "✗", "✓", "✓", "✗"] },
            { feature: "Neo4j (Graph DB)", values: ["✓", "✗", "✓", "✗", "✗"] }, // DIY is slow
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
          id: "fincrime_aml",
          title: "Financial Crime (AML) & Complex Fraud Rings",
          desc: "Uncovering hidden networks behind laundering, mule accounts, and coordinated fraud.",
          protocol: "PROTOCOL_FINCRIME",
          clearance: "CONFIDENTIAL / REGULATED",
          details: {
            fullDesc:
              "Financial crime investigations drown in fragmented signals: transactions, KYC docs, emails, chat logs, adverse media, and case notes. Tevel ingests internal and external sources, resolves entities (people, companies, accounts, devices), and builds a temporal relationship graph that exposes ring structures, shared infrastructure, and evolving typologies. Investigators get a decision-ready narrative with traceable evidence, not just a search result.",
            capabilities: [
              "Entity Resolution (KYC + identifiers)",
              "Network / Link Analysis at Scale",
              "Temporal Pattern Detection",
              "Cross-Source Correlation",
              "Evidence Traceability & Audit Trail",
              "Case Export (reports / exhibits)"
            ],
            impact:
              "Higher case throughput, faster ring discovery, fewer false positives, and defensible investigative outputs for compliance and enforcement."
          }
        },
        {
          id: "market_abuse",
          title: "Market Abuse & Insider-Trading Investigations",
          desc: "Linking trades, communications, and events to identify suspicious coordination.",
          protocol: "PROTOCOL_MARKET_ABUSE",
          clearance: "CONFIDENTIAL / REGULATED",
          details: {
            fullDesc:
              "Market abuse cases require stitching together noisy timelines: trades, order books, corporate actions, earnings, chats, and meeting records. Tevel builds a unified event timeline, detects anomalies around sensitive events, and links actors through shared channels and repeated behavioral motifs. The output is an explainable chain from event → behavior → evidence, designed for regulator-grade scrutiny.",
            capabilities: [
              "Event Timeline Reconstruction",
              "Behavioral Sequence Mining",
              "Communication-Trade Linkage",
              "Entity Graph with Confidence Scoring",
              "Explainable Evidence Bundles",
              "Red-Flag Alerting (rule + AI)"
            ],
            impact:
              "Cuts investigation time from weeks to days, strengthens defensibility, and reduces dependency on ad-hoc analyst memory."
          }
        },
        {
          id: "insurance_claims",
          title: "Insurance Claims Fraud & Multi-Claim Collusion",
          desc: "Detecting coordinated fraud across claims, providers, and identities.",
          protocol: "PROTOCOL_INSURANCE_FRAUD",
          clearance: "CONFIDENTIAL / REGULATED",
          details: {
            fullDesc:
              "Insurance fraud often hides across years and across product lines. Tevel connects claims, medical/provider data, repair invoices, photos metadata, call transcripts, and prior investigations into a single graph. It highlights repeated patterns (shared addresses, reused phone numbers, recurring providers, suspicious timing) and produces a clear, traceable story for SIU and legal teams.",
            capabilities: [
              "Cross-Claim Entity Linking",
              "Provider / Vendor Network Mapping",
              "Temporal Fraud Pattern Detection",
              "Document Intelligence (invoices / PDFs)",
              "Multimodal Metadata Correlation",
              "Report Generation with Citations"
            ],
            impact:
              "Faster identification of collusion rings, better prioritization, and lower loss ratios with auditable investigative outputs."
          }
        },
        {
          id: "pharma_drug_discovery",
          title: "Pharma R&D: Drug Discovery & Competitive Intelligence",
          desc: "Turning massive biomedical literature and internal notes into actionable hypotheses.",
          protocol: "PROTOCOL_DRUG_DISCOVERY",
          clearance: "CONFIDENTIAL / IP-SENSITIVE",
          details: {
            fullDesc:
              "Biopharma research is an ocean of papers, patents, internal experiments, trial results, and lab notebooks. Tevel resolves entities like targets, pathways, compounds, assays, and outcomes, then builds a time-aware knowledge graph across publications and internal data. Scientists can ask high-level questions and receive structured, source-linked findings with contradictions, gaps, and hypothesis candidates highlighted.",
            capabilities: [
              "Scientific Entity & Ontology Mapping",
              "Contradiction & Gap Detection",
              "Target-Pathway-Compound Graphs",
              "Patent / Publication Timeline",
              "Traceable Evidence Summaries",
              "Secure Offline / On-Prem Operation"
            ],
            impact:
              "Accelerates literature review and hypothesis generation, reduces duplicated work, and improves decision quality in portfolio selection."
          }
        },
        {
          id: "pharmacovigilance",
          title: "Pharmacovigilance & Safety Signal Detection",
          desc: "Connecting adverse events, patient narratives, and product changes into safety insights.",
          protocol: "PROTOCOL_SAFETY_SIGNAL",
          clearance: "CONFIDENTIAL / HEALTH-REGULATED",
          details: {
            fullDesc:
              "Safety teams must correlate adverse event reports, call center transcripts, clinician notes, batch records, and labeling changes—often across time and languages. Tevel builds a traceable timeline of signals, clusters similar event narratives, and links them to product lots, geographies, and changes in formulation or distribution. Outputs are audit-ready for regulatory review.",
            capabilities: [
              "Narrative Clustering & Normalization",
              "Temporal Signal Trending",
              "Lot / Batch / Geography Correlation",
              "Multi-Source Evidence Traceability",
              "Regulatory-Ready Reporting Exports",
              "Privacy-Preserving On-Prem Deployment"
            ],
            impact:
              "Earlier detection of meaningful safety signals with clearer evidence chains and reduced manual triage."
          }
        },
        {
          id: "cyber_threat_intel",
          title: "Cyber Threat Intelligence & Incident Correlation",
          desc: "Linking indicators, campaigns, and internal telemetry into an investigative map.",
          protocol: "PROTOCOL_CYBER_INTEL",
          clearance: "CONFIDENTIAL / SECURITY",
          details: {
            fullDesc:
              "Cyber investigations require correlating logs, alerts, tickets, threat feeds, malware reports, and analyst notes. Tevel resolves entities (IPs, domains, hashes, tool names, actors), builds a campaign timeline, and highlights shared infrastructure and repeated TTPs. Analysts get a coherent story and evidence bundle to speed containment and post-incident learning.",
            capabilities: [
              "IOC / TTP Entity Resolution",
              "Campaign Timeline & Link Graph",
              "Cross-Log / Ticket Correlation",
              "Narrative Reconstruction (what happened when)",
              "Evidence Bundles for IR reports",
              "Air-gapped / On-Prem Support"
            ],
            impact:
              "Faster root-cause discovery, reduced dwell time, and improved institutional memory across incidents."
          }
        },
        {
          id: "critical_infrastructure",
          title: "Critical Infrastructure: Grid / Telecom / Transport Investigations",
          desc: "Finding root causes across operational data, maintenance records, and vendor reports.",
          protocol: "PROTOCOL_CRITICAL_INFRA",
          clearance: "INTERNAL / CONFIDENTIAL",
          details: {
            fullDesc:
              "When outages or degradations occur, relevant data is scattered across SCADA exports, maintenance logs, vendor PDFs, field notes, and emails. Tevel builds an event timeline, links equipment IDs, locations, crews, and work orders, and surfaces patterns that repeat across sites. It converts complex post-mortems into traceable, decision-ready remediation plans.",
            capabilities: [
              "Operational Timeline Reconstruction",
              "Asset / Location Entity Graph",
              "Recurring Failure Pattern Detection",
              "Vendor Doc Intelligence (PDFs)",
              "Post-Mortem Report Automation",
              "Offline On-Prem Processing"
            ],
            impact:
              "Shorter MTTR/MTTI cycles, better preventive maintenance decisions, and improved accountability through evidence-linked reports."
          }
        },
        {
          id: "defense_intelligence_fusion",
          title: "Defense & Intelligence Fusion (Air-Gapped Analysis)",
          desc: "Connecting multi-source intelligence into an explainable operational picture.",
          protocol: "PROTOCOL_DEFENSE_FUSION",
          clearance: "SECRET / TOP SECRET",
          details: {
            fullDesc:
              "Operational intelligence depends on rapidly connecting people, places, events, and assets across disparate data streams. Tevel runs fully offline inside secured networks, transforms raw reports into entity graphs and timelines, and helps analysts detect weak signals and indirect connections. Outputs remain fully traceable to original sources to preserve analytical rigor and reduce hallucination risk.",
            capabilities: [
              "Air-Gapped Deployment & Local Processing",
              "Entity / Relationship Graph at Scale",
              "Temporal Fusion & Change Detection",
              "Cross-Report Deconfliction",
              "Analyst-Controlled Evidence Traceability",
              "Structured Exports to downstream systems"
            ],
            impact:
              "Faster situational understanding with higher analytical consistency, while keeping sensitive data entirely inside secure environments."
          }
        },
        {
          id: "legal_regulatory_investigations",
          title: "Legal Discovery & Regulatory Investigations",
          desc: "Turning mountains of documents into entity-centric, timeline-driven case narratives.",
          protocol: "PROTOCOL_LEGAL_DISCOVERY",
          clearance: "CONFIDENTIAL / PRIVILEGED",
          details: {
            fullDesc:
              "High-stakes disputes involve millions of pages, email threads, meeting notes, contracts, and attachments. Tevel resolves parties, subsidiaries, projects, and key events; reconstructs timelines; and flags contradictions across versions. Legal teams get structured fact patterns and evidence packs designed for rapid review and defensible filings.",
            capabilities: [
              "Contract / Email Thread Intelligence",
              "Entity & Alias Resolution (parties/subsidiaries)",
              "Timeline & Version-Conflict Detection",
              "Privilege-Aware On-Prem Processing",
              "Evidence Pack Generation",
              "Search + Research Workspace"
            ],
            impact:
              "Massively reduces review time, improves fact consistency, and produces regulator-grade traceability."
          }
        },
        {
          id: "supply_chain_procurement",
          title: "Supply Chain Risk & Procurement Integrity",
          desc: "Detecting hidden dependencies, vendor collusion, and operational fragility.",
          protocol: "PROTOCOL_SUPPLY_CHAIN",
          clearance: "INTERNAL / CONFIDENTIAL",
          details: {
            fullDesc:
              "Supply chains break where dependencies are invisible: shared subcontractors, repeated incidents, quietly changed terms, or single-point failures across tiers. Tevel links vendor contracts, PO history, shipping events, quality reports, and communications into a unified graph and timeline. It surfaces concentration risks, recurrent failure patterns, and suspicious vendor networks—then exports clear mitigation plans.",
            capabilities: [
              "Vendor / Subcontractor Graph Mapping",
              "Dependency & Concentration Risk Detection",
              "Incident / Quality Timeline Correlation",
              "Document Intelligence (contracts, SOWs)",
              "Anomaly & Pattern Detection",
              "Decision-Ready Export Reports"
            ],
            impact:
              "Earlier detection of operational fragility and integrity risks, improved negotiation leverage, and stronger resilience planning."
          }
        },
        {
          id: "oncology_target_biomarker_to_trial",
          title: "Oncology: Target/Biomarker-to-Trial Decision File",
          desc: "Turn scattered oncology evidence into a traceable decision file that accelerates prioritization, validation, and trial design.",
          protocol: "PROTOCOL_ONCO_RND",
          clearance: "CONFIDENTIAL / IP-SENSITIVE",
          details: {
            fullDesc:
              "In oncology drug development, the real bottleneck isn't lack of data—it's fragmented, inconsistent evidence: papers, patents, clinical readouts, CRISPR screens, multi-omics, internal assays, and lab narratives that don't align. Teams burn months manually answering: What is truly supported? In which patient subgroup? Which biomarker replicates? Where do results contradict and why? Tevel runs inside the customer environment (including fully offline/air-gapped when required), ingests internal + external sources, and converts them into a temporal evidence graph: Targets, Pathways, Tumor types, Biomarkers, Compounds, Indications, Endpoints, Dose regimens. It resolves synonyms, links every claim to supporting evidence, flags contradictions, and produces a traceable 'Decision File' for evidence-weighted candidate ranking, biomarker strategy definition, and trial design with dose rationale grounded in sources.",
            capabilities: [
              "Scientific Entity Resolution (Targets/Pathways/Biomarkers/Indications)",
              "Temporal Evidence Graph + Relationship Mapping",
              "Contradiction & Gap Detection (Replication Awareness)",
              "Structured Synthesis: Target→Biomarker→Population→Endpoint",
              "Dose Evidence Pack: Exposure–Response / Efficacy–Toxicity Rationale",
              "Decision Pack Export: Narrative + Appendices + Traceable Citations"
            ],
            impact:
              "Cuts evidence synthesis from months to days/weeks, reduces assumption-driven development with traceable evidence chains, improves biomarker selection and lowers validation risk, and enables more focused trials with defensible rationale."
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
          id: "fincrime_aml",
          title: "פיננסים (AML) והונאות מורכבות בקנה מידה עצום",
          desc: "חשיפת רשתות נסתרות מאחורי הלבנות הון, חשבונות מולים והונאות מתואמות.",
          protocol: "PROTOCOL_FINCRIME",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "חקירות פשיעה פיננסית טובעות בסיגנלים מפוזרים: טרנזקציות, מסמכי KYC, מיילים, צ׳אטים, חדשות שליליות, ותיעוד תיקים. טבל קולטת מקורות פנימיים וחיצוניים, מאחדת זהויות (אנשים, חברות, חשבונות, מכשירים), ובונה גרף קשרים טמפורלי שמבליט מבני טבעת, תשתיות משותפות ודפוסי פעולה מתפתחים. במקום עוד תוצאות חיפוש, החוקר מקבל נרטיב החלטתי עם ראיות ניתנות לאימות.",
            capabilities: [
              "איחוד ישויות וזהויות (KYC + מזהים)",
              "ניתוח רשתות וקשרים בקנה מידה",
              "זיהוי דפוסים לאורך זמן",
              "הצלבה בין מקורות שונים",
              "עקיבות ראייתית (Audit Trail)",
              "ייצוא תיק חקירה (דוחות / נספחים)"
            ],
            impact:
              "יותר תיקים נסגרים לכל אנליסט, גילוי מהיר של טבעות הונאה, פחות False Positives, ותוצרים שניתנים להגנה מול רגולטור ואכיפה."
          }
        },
        {
          id: "market_abuse",
          title: "מניפולציות שוק וסחר במידע פנים",
          desc: "חיבור בין מסחר, תקשורת ואירועים כדי לזהות תיאום חשוד והפרות.",
          protocol: "PROTOCOL_MARKET_ABUSE",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "תיקי Market Abuse דורשים תפירה של טיימליין רועש: עסקאות, פקודות, אירועי חברה, דוחות כספיים, צ׳אטים, ופגישות. טבל בונה ציר זמן אחוד, מאתרת חריגות סביב אירועים רגישים, ומקשרת גורמים דרך ערוצי תקשורת ותבניות התנהגות חוזרות. התוצאה היא שרשרת מוסברת: אירוע → התנהגות → ראיות, ברמת קשיחות שמתאימה גם לביקורת רגולטורית.",
            capabilities: [
              "שחזור טיימליין אירועים",
              "כרייה של רצפי התנהגות חשודים",
              "קישור תקשורת ↔ מסחר",
              "גרף ישויות עם רמות ביטחון",
              "חבילות ראיות מוסברות",
              "התראות (כללים + AI)"
            ],
            impact:
              "קיצור חקירות משבועות לימים, עלייה בהגנתיות (defensibility), ופחות תלות בזיכרון ארגוני של יחידים."
          }
        },
        {
          id: "insurance_claims",
          title: "הונאות ביטוח וקנוניה בין תביעות וספקים",
          desc: "איתור הונאות מתואמות החבויות לאורך שנים ובין קווי מוצר שונים.",
          protocol: "PROTOCOL_INSURANCE_FRAUD",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "הונאת ביטוח לא מופיעה בתביעה אחת — היא מסתתרת ברשת. טבל מחברת תביעות, נתוני ספקים, חשבוניות, מטא-דאטה של תמונות, תמלולי שיחות ותיקי עבר לגרף אחד. היא מדגישה חזרות חשודות (כתובות/טלפונים חוזרים, ספקים שחוזרים, תזמון חריג, תבניות ניסוח דומות) ומייצרת סיפור עקיב ובר-אימות עבור SIU ומשפטנים.",
            capabilities: [
              "קישור ישויות בין תביעות שונות",
              "מיפוי רשת ספקים וקבלני משנה",
              "זיהוי דפוסי הונאה טמפורליים",
              "Document Intelligence לחשבוניות/PDF",
              "הצלבת מטא-דאטה רב-מקורית",
              "דוח עם ציטוטים/מקורות"
            ],
            impact:
              "חשיפה מוקדמת של רשתות קנוניה, תעדוף חכם של תיקים, והפחתת הפסדים עם תוצרים שניתנים לעמידה משפטית."
          }
        },
        {
          id: "pharma_drug_discovery",
          title: "ביולוגיה ותרופות: גילוי תרופות ו-R&D לחברות ענק",
          desc: "הפיכת ספרות מדעית עצומה ונתונים פנימיים להשערות מחקר ישימות.",
          protocol: "PROTOCOL_DRUG_DISCOVERY",
          clearance: "סודי / רגיש לקניין רוחני",
          details: {
            fullDesc:
              "מחקר פארמה הוא ים של מאמרים, פטנטים, ניסויים, תוצאות פרה-קליניות, ותיעוד מעבדה. טבל מאחדת ישויות כמו מטרות (targets), מסלולים ביולוגיים, מולקולות, אסאים ותוצאות — ובונה גרף ידע טמפורלי שמחבר בין פרסומים לנתונים פנימיים. החוקרים מקבלים ממצאים מובנים עם מקורות, סתירות והזדמנויות שמודגשות בצורה שקופה.",
            capabilities: [
              "מיפוי ישויות מדעיות ואונטולוגיות",
              "זיהוי סתירות ופערי ידע",
              "גרפים Target–Pathway–Compound",
              "טיימליין פטנטים/פרסומים",
              "סיכומים מבוססי-מקור (Traceable)",
              "הרצה לוקאלית/On-Prem מאובטחת"
            ],
            impact:
              "האצת סקירות ספרות ובניית היפותזות, הפחתת עבודה כפולה, ושיפור החלטות בתעדוף קווי מחקר."
          }
        },
        {
          id: "pharmacovigilance",
          title: "Pharmacovigilance: ניטור בטיחות וזיהוי סיגנלים מוקדמים",
          desc: "חיבור תופעות לוואי, נרטיבים של מטופלים ושינויים במוצר לתובנות בטיחות.",
          protocol: "PROTOCOL_SAFETY_SIGNAL",
          clearance: "סודי / רגולטורי-בריאותי",
          details: {
            fullDesc:
              "צוותי בטיחות חייבים לקשר דיווחי תופעות לוואי, תמלילי מוקד, הערות קליניות, רישומי אצוות ושינויים בתוויות — לעיתים בשפות שונות ולאורך שנים. טבל בונה טיימליין של סיגנלים, מאגדת נרטיבים דומים, ומקשרת אותם לאצוות, גיאוגרפיות ושינויים תפעוליים. התוצרים מותאמים לביקורת ולדיווח רגולטורי.",
            capabilities: [
              "אשכול נרטיבים ונרמול מונחים",
              "טרנדינג וזיהוי שינוי לאורך זמן",
              "קישור Lot/Batch ↔ אירועים",
              "עקיבות ראייתית מלאה",
              "ייצוא דוחות רגולטוריים",
              "פריסה לוקאלית עם פרטיות"
            ],
            impact:
              "גילוי מוקדם של סיגנלים משמעותיים, פחות טריאז׳ ידני, וחבילות ראיות מסודרות לרגולטור."
          }
        },
        {
          id: "cyber_threat_intel",
          title: "סייבר: מודיעין איומים וקורלציה של אירועים ותקריות",
          desc: "קישור בין אינדיקטורים, קמפיינים וטלמטריה פנימית למפת חקירה אחת.",
          protocol: "PROTOCOL_CYBER_INTEL",
          clearance: "סודי / אבטחת מידע",
          details: {
            fullDesc:
              "חקירות סייבר דורשות לחבר לוגים, התראות, טיקטים, פידים מודיעיניים, דוחות נוזקות והערות אנליסטים. טבל מאחדת ישויות כמו IP, דומיינים, hashes, כלי תקיפה ושחקנים, בונה טיימליין של קמפיין, ומבליטה תשתיות משותפות ו-TTP חוזרים. האנליסט מקבל סיפור קוהרנטי + ראיות, שמאיץ בלימה ותחקיר.",
            capabilities: [
              "איחוד ישויות IOC/TTP",
              "טיימליין קמפיינים וגרף קשרים",
              "הצלבה בין לוגים וטיקטים",
              "שחזור נרטיב (מה קרה מתי)",
              "חבילות ראיות לדוח IR",
              "תמיכה ב-Air-Gapped / On-Prem"
            ],
            impact:
              "קיצור זמן לזיהוי שורש (RCA), צמצום dwell time, ושימור ידע ארגוני בין תקריות."
          }
        },
        {
          id: "critical_infrastructure",
          title: "תשתיות קריטיות: חשמל/תקשורת/תחבורה – חקירת תקלות ושורש בעיה",
          desc: "איתור סיבת שורש על פני נתוני תפעול, תחזוקה, ספקים ודוחות שטח.",
          protocol: "PROTOCOL_CRITICAL_INFRA",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "בעת תקלה או השפלה תפעולית, המידע מפוזר בין יצואי SCADA, יומני תחזוקה, PDF של ספקים, הערות שטח ומיילים. טבל בונה טיימליין אירועים, מקשרת מזהי ציוד, אתרים, צוותים והזמנות עבודה, ומזהה דפוסים שחוזרים בין אתרים. היא הופכת תחקירים מורכבים לתוכנית תיקון מונחית-ראיות.",
            capabilities: [
              "שחזור טיימליין תפעולי",
              "גרף נכסים/אתרים/צוותים",
              "זיהוי דפוסי כשל חוזרים",
              "עיבוד מסמכי ספקים (PDF)",
              "אוטומציה לדוחות תחקיר",
              "עיבוד לוקאלי מלא"
            ],
            impact:
              "קיצור זמני חקירה ו-MTTR, שיפור תחזוקה מונעת, והגברת שקיפות ואחריות עם ראיות."
          }
        },
        {
          id: "defense_intelligence_fusion",
          title: "צבאי/מודיעיני: מיזוג רב-מקורי בסביבה מבודדת (Air-Gapped)",
          desc: "חיבור מקורות שונים לתמונה מבצעית מוסברת, בלי להוציא מידע החוצה.",
          protocol: "PROTOCOL_DEFENSE_FUSION",
          clearance: "סודי / סודי ביותר",
          details: {
            fullDesc:
              "מודיעין מבצעי נשען על חיבור מהיר בין אנשים, מקומות, אירועים ונכסים על פני זרמי מידע שונים. טבל רצה 100% אופליין בתוך רשת מאובטחת, ממירה דיווחים גולמיים לגרף ישויות וטיימליין, ומסייעת לזהות סיגנלים חלשים וקשרים עקיפים. התוצרים נשארים עקיבים למקור כדי לשמור על קשיחות אנליטית ולצמצם סיכון של מסקנות לא מבוססות.",
            capabilities: [
              "פריסה מבודדת והרצה לוקאלית",
              "גרף ישויות וקשרים בקנה מידה",
              "מיזוג טמפורלי וזיהוי שינוי",
              "דה-קונפליקטציה בין דיווחים",
              "עקיבות ראייתית בשליטת אנליסט",
              "ייצוא מובנה למערכות המשך"
            ],
            impact:
              "הבנה מהירה יותר של מצב, עקביות אנליטית גבוהה יותר, ושמירה מלאה על סודיות הנתונים בתוך הסביבה המאובטחת."
          }
        },
        {
          id: "legal_regulatory_investigations",
          title: "משפטים ורגולציה: גילוי מסמכים וחקירות רגולטוריות",
          desc: "הפיכת הררי מסמכים לנרטיב מבוסס-ישויות וטיימליין שמחזיק בביקורת.",
          protocol: "PROTOCOL_LEGAL_DISCOVERY",
          clearance: "סודי / חסוי-עו״ד",
          details: {
            fullDesc:
              "בסכסוכים וחומרי גילוי יש מיליוני עמודים, שרשורי מייל, חוזים ונספחים. טבל מאחדת צדדים, חברות-בת, פרויקטים ואירועים מרכזיים; בונה טיימליין; ומסמנת סתירות בין גרסאות. הצוות מקבל דפוסי עובדות ותיקי ראיות שמקצרים דרמטית את זמן הביקורת והכתיבה המשפטית.",
            capabilities: [
              "ניתוח חוזים ושרשורי מייל",
              "איחוד ישויות/כינויים (צדדים/חברות)",
              "טיימליין וזיהוי סתירות בין גרסאות",
              "עיבוד לוקאלי מודע-פריבילגיה",
              "יצירת תיקי ראיות",
              "מרחב עבודה חיפוש+מחקר"
            ],
            impact:
              "הפחתה משמעותית בזמן review, עקביות עובדתית גבוהה, ותוצרים ניתנים להגשה/ביקורת עם עקיבות למקורות."
          }
        },
        {
          id: "supply_chain_procurement",
          title: "שרשרת אספקה ורכש: סיכוני תלות, קנוניית ספקים ושבריריות תפעולית",
          desc: "חשיפת תלות נסתרת, רשתות ספקים בעייתיות ונקודות כשל קריטיות.",
          protocol: "PROTOCOL_SUPPLY_CHAIN",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "שרשראות אספקה נשברות במקום שבו התלות סמויה: קבלני משנה משותפים, תנאים שמשתנים בשקט, תקלות שחוזרות או נקודת כשל יחידה. טבל מחברת חוזים, היסטוריית הזמנות, אירועי שילוח, דוחות איכות ותקשורת לסיפור אחד עם גרף וטיימליין. היא מדגישה ריכוזיות סיכון, דפוסי כשל חוזרים ורשתות ספקים חשודות — ומייצאת תוכניות מיטיגציה ברורות.",
            capabilities: [
              "מיפוי רשת ספקים וקבלני משנה",
              "זיהוי תלות וריכוזיות (Concentration Risk)",
              "קורלציה בין אירועי איכות/תקלות לאורך זמן",
              "עיבוד מסמכי חוזה ו-SOW",
              "זיהוי דפוסים ואנומליות",
              "ייצוא דוחות החלטתיים"
            ],
            impact:
              "זיהוי מוקדם של שבריריות ותלות מסוכנת, חיזוק יכולת מו״מ, ותכנון חוסן תפעולי מבוסס-ראיות."
          }
        },
        {
          id: "esg_csrd_audit",
          title: "ESG / CSRD: עמידה ברגולציה והגנה מפני Greenwashing",
          desc: "הפיכת טענות קיימות לקובץ ראיות עקיב, מוכן לביקורת ולדוח רגולטורי.",
          protocol: "PROTOCOL_ESG",
          clearance: "סודי / רגולטורי",
          details: {
            fullDesc:
              "דוחות ESG הם שדה מוקשים: PDFs מספקים, גיליונות פליטות, רכש, מיילים והצהרות צד ג׳ כמעט אף פעם לא מסתדרים אחד עם השני. טבל בונה לכל מדד וטענה שרשרת ראיות עקיבה, מסמנת סתירות בין גרסאות, ומשחזרת ציר זמן של מה השתנה ומדוע. התוצר הוא תיק ESG מוכן לביקורת שמצמצם חשיפה ל-greenwashing ומקצר משמעותית את מחזור הדיווח.",
            capabilities: [
              "עקיבות מלאה מטענה → מקור → מדד",
              "גרף ראיות ספקים (tiers ותלויות)",
              "זיהוי סתירות וקונפליקטים בין גרסאות",
              "טיימליין שינויים במדיניות/מדדים",
              "חבילות ראיות לאודיטורים",
              "אפשרות On-Prem / Offline לנתונים רגישים"
            ],
            impact:
              "דיווח מהיר יותר עם פחות 'הפתעות', עמידה חזקה יותר בביקורת, ונרטיב ESG שמבוסס על מקורות."
          }
        },
        {
          id: "systematic_reviews",
          title: "סקירות שיטתיות וסינתזה של ראיות (אקדמיה / רפואה / מדיניות)",
          desc: "קיצור חודשים של סקירת ספרות לימים—בלי לאבד עקיבות וציטוטים.",
          protocol: "PROTOCOL_EVIDENCE_SYNTHESIS",
          clearance: "ציבורי / פנימי",
          details: {
            fullDesc:
              "סקירות שיטתיות נופלות על קנה מידה: אלפי מאמרים, מונחים לא אחידים, וסינון ידני ששורף צוותים חודשים. טבל מנרמלת ישויות (התערבויות, תוצאות, אוכלוסיות), ממפה ראיות לאורך זמן, מסמנת סתירות ופערים, ומייצרת סיכומים מובנים עם עקיבות למקורות. כל מסקנה נשענת על מסלול ציטוט ברור—קריטי לפרסום ולמדיניות.",
            capabilities: [
              "נרמול ישויות (התערבות/תוצאה/אוכלוסייה)",
              "גרף ראיות ואשכולות",
              "מיפוי סתירות/שחזורי ניסוי (replication)",
              "עקיבות בסגנון PRISMA (כולל רציונל סינון)",
              "ייצוא מובנה (טבלאות, נספחים)",
              "בסיס ידע חוזר לשימוש בסקירות עתידיות"
            ],
            impact:
              "קיצור דרמטי של זמן סקירה, עקביות גבוהה יותר, ותיק ראיות שמחזיק ביקורת עמיתים או רגולציה."
          }
        },
        {
          id: "construction_claims",
          title: "מגה-פרויקטים: תביעות בנייה, עיכובים וסכסוכי Change Orders",
          desc: "שחזור מדויק של מה קרה מתי—בין RFIs, פרוטוקולים, חוזים וגרסאות תכנון.",
          protocol: "PROTOCOL_PROJECT_CLAIMS",
          clearance: "סודי / משפטי",
          details: {
            fullDesc:
              "סכסוכי בנייה גדולים מוכרעים על כרונולוגיה ותיעוד: RFIs, אישורים, פרוטוקולים, יומני אתר, מיילים, שרטוטים וגרסאות חוזה. טבל משחזרת טיימליין בר-אימות, מקשרת החלטות לגורמים ולחובות חוזיות, ומבליטה שרשראות סיבתיות שמסבירות עיכובים וחריגות תקציב. התוצרים נארזים כחבילות ראיות למו״מ, בוררות או בית משפט.",
            capabilities: [
              "שחזור טיימליין (אירועים, החלטות, אישורים)",
              "השוואות גרסאות (חוזים/מפרטים/שרטוטים)",
              "קישור ישויות (קבלנים, ספקים, חבילות עבודה)",
              "שרשראות סיבתיות (drivers לעיכובים ותלויות)",
              "חבילות ראיות לצוותים משפטיים",
              "עיבוד אופליין לפרויקטים רגישים"
            ],
            impact:
              "עמידה משפטית חזקה יותר, סגירת מחלוקות מהר יותר, ופחות 'דיג מסמכים' יקר ומתיש."
          }
        },
        {
          id: "workplace_investigations",
          title: "חקירות פנים וציות ארגוני (HR / אתיקה)",
          desc: "בניית תיק חקירה רגיש ומובנה, עם עקיבות ותהליך הוגן.",
          protocol: "PROTOCOL_WORKPLACE_COMPLIANCE",
          clearance: "סודי ביותר / חסוי-עו״ד",
          details: {
            fullDesc:
              "חקירות פנים מתפרקות כשיש פיזור ראיות ואמון נמוך: מיילים, צ׳אטים, תלונות, סיכומי ראיונות, לוגים ומדיניות. טבל בונה תיק חקירה מובנה ומודע-פרטיות: טיימליין ברור, מיפוי חיזוקים/סתירות, והפניות עקיבות למקורות. אפשר להריץ 100% On-Prem כדי למנוע דליפת מידע.",
            capabilities: [
              "טיימליין תיק + מיפוי חיזוקים/קורובורציה",
              "קישור מדיניות ↔ אירוע",
              "בקרות מידע רגיש (סגמנטציה/אדאקטציה תהליכית)",
              "זיהוי חוסר עקביות ופערים נרטיביים",
              "ייצוא דוחות ברמת ביקורת",
              "פריסה On-Prem / Air-gapped"
            ],
            impact:
              "חקירות עקביות יותר, פחות סיכון משפטי, סגירה מהירה יותר, ותיעוד שמחזיק רגולטור/בית משפט."
          }
        },
        {
          id: "brand_crisis_intel",
          title: "משברי מותג/תקשורת: מודיעין נרטיבים ומעקב טענות",
          desc: "זיהוי מוקדם, מיפוי נרטיבים, והפקת בריפים תגובתיים מבוססי ראיות.",
          protocol: "PROTOCOL_NARRATIVE_INTEL",
          clearance: "פנימי / סודי",
          details: {
            fullDesc:
              "במשבר, הבעיה היא לא כמות אלא מבנה הנרטיב: מי התחיל, אילו טענות מתפשטות, ואיפה הראיות באמת. טבל מחברת תקשורת פנימית, כתבות, דוחות והצהרות בעלי עניין לטיימליין + מפת השפעה. היא מבודדת את הטענות המרכזיות, מקורותיהן, וסתירות—כדי שהנהלה תגיב בדיוק ולא בפאניקה.",
            capabilities: [
              "טיימליין נרטיב ומעקב טענות",
              "מיפוי בעלי עניין/משפיענים",
              "הדגשת אמינות מקור וסתירות",
              "ייצור בריפים הנהלתיים",
              "הצלבה בין ערוצים (פנימי + חיצוני)",
              "ענן או On-Prem לפי רמת רגישות"
            ],
            impact:
              "איתור מוקדם יותר, סנכרון מהיר בין צוותים, ותגובה שמבוססת על עובדות מאומתות ומקורות עקיבים."
          }
        },
        {
          id: "oncology_target_biomarker_to_trial",
          title: "אונקולוגיה: מ-Target/Biomarker לתיק החלטה ולתכנון ניסוי",
          desc: "חיבור ספרות, פטנטים ונתונים פנימיים לתיק מחקר עקיב שמקצר בחירה, ולידציה ותכנון ניסוי.",
          protocol: "PROTOCOL_ONCO_RND",
          clearance: "סודי / רגיש לקניין רוחני",
          details: {
            fullDesc:
              "בפיתוח תרופות לסרטן, צוואר הבקבוק האמיתי אינו 'חוסר מידע' אלא עודף מידע לא עקיב: מאמרים, פטנטים, תוצאות ניסויים, מסכי CRISPR, פרופילים מולטי-אומיים, נתוני תגובת תרופה וקבצי מעבדה פנימיים. צוותים מבזבזים חודשים על סינתזה ידנית: מה באמת מוכח? באיזו אוכלוסיית חולים? איזה Biomarker מחזיק? אילו תוצאות סותרות ומה ההסבר האפשרי? טבל רצה אצל הלקוח (כולל אופליין/אייר-גאפד אם צריך), קולטת את מקורות הידע הפנימיים והחיצוניים, וממירה אותם לגרף ישויות וטיימליין: Targets, Pathways, Tumor types, Biomarkers, Compounds, Indications, Endpoints, Dose regimens. היא מאחדת שמות/סינונימים, מקשרת טענה לראיה, מסמנת סתירות בין מחקרים וגרסאות, ומייצרת 'תיק החלטה' אחד שמאפשר: (1) דירוג מועמדים אמיתי לפי חוזק ראיות, (2) הגדרת אסטרטגיית Biomarker/Companion Diagnostic, (3) תכנון ניסוי (כולל רציונל מינון) שמגובה במקורות.",
            capabilities: [
              "Entity Resolution מדעי (Targets/Pathways/Biomarkers/Indications)",
              "גרף ראיות טמפורלי + מיפוי קשרים (מי קשור למה ומדוע)",
              "זיהוי סתירות/פערים ושחזור 'למה זה לא משתחזר'",
              "סינתזה מובנית: Target→Biomarker→אוכלוסייה→Endpoint",
              "תיק מינון: קשר חשיפה-תגובה/יעילות-רעילות כראיות תומכות",
              "ייצוא 'Decision Pack' לוועדות: דוח + נספחים + מקורות"
            ],
            impact:
              "קיצור דרמטי של זמן סינתזת ידע (חודשים → ימים/שבועות), פחות 'פיתוח על הנחות' ויותר החלטות על בסיס ראיות עקיבות, בחירת Biomarker מדויקת יותר והפחתת סיכוני ולידציה, ותכנון ניסויים ממוקד יותר (אוכלוסייה/מינון/Endpoints) עם סיפור ראיות ברור."
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
