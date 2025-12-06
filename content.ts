
export const content = {
  en: {
    nav: {
      subtitle: "THE CONTEXT ENGINE"
    },
    hero: {
      terminalPrefix: "Augmenting Analyst Protocol...",
      titleMain: "Information into Intelligence.",
      titleSub: "Chaos into Context.",
      subtitle: "The ultimate force multiplier for investigators. Tevel doesn't replace the analyst—it connects the hidden dots and guides the investigation from a single lead to a full narrative.",
      ctaStart: "Initialize Workspace",
      ctaDemo: "Request Access"
    },
    dashboard: {
      version: "TEVEL_OS v2.5.0 // AUGMENTED",
      high: "INVESTIGATION ACTIVE",
      targetAcquired: "CONTEXT MATCH: 98%",
      eventAnalysis: "Contextual Enrichment",
      anomaly: "HIDDEN LINK FOUND",
      entityAnalysis: "Entity Profile",
      origin: "Source Intel",
      class: "Classification",
      threat: "Risk Score",
      certainty: "Confidence",
      vals: {
        iran: "SIGINT / OSINT / HUMINT",
        military: "Hostile Actor",
        critical: "CRITICAL"
      },
      logs: [
        "Analyzing node #882...",
        "Connection est. [192.168.1.10]",
        "Metadata parsed: 4kb",
        "Entity resolved: TARGET_ALPHA",
        "Cross-ref DB: NSA_LEAKS",
        "Pattern match: 98%",
        "Updating graph topology...",
        "Sentiment analysis: HOSTILE"
      ]
    },
    problem: {
      titlePrefix: "The Blind Spot:",
      title: "The 'Hidden Dots' Problem",
      description: "In complex organizations, the picture is fragmented. Data is siloed, and investigators work with partial leads. You see the dots, but the connections remain invisible.",
      stats: [
        { value: 85, suffix: "%", label: "Of an analyst's time is spent hunting for missing context" },
        { value: 60, suffix: "m", label: "Delay in understanding the 'bigger picture' of an event" },
        { value: 100, suffix: "%", label: "Reliance on scattered tools that don't talk to each other" },
        { value: 18, suffix: "+", label: "Browser tabs open to verify a single entity" }
      ],
      result: "The Result: The investigator holds one dot, missing the pattern hidden in their own data."
    },
    comparison: {
      title: "The Paradigm Shift",
      subtitle: "Tevel: The Analyst's White Box",
      description: "Unlike 'Black Box' automation that leaves you guessing, Tevel is a 'White Box'. It provides transparent guidance, enriching every lead and suggesting the next logical move.",
      highlight: "We don't replace the analyst. We give them a cockpit.",
      columns: ["Capability", "TEVEL (Augmentation)", "Palantir Foundry", "Maltego", "Recorded Future"],
      rows: [
        { feature: "Investigation Approach", tevel: "Guided / Augmented", palantir: "Engineering Heavy", maltego: "Manual", rf: "Automated Feeds" },
        { feature: "Data Enrichment", tevel: "Automatic Enrichment", palantir: "Configured Integration", maltego: "On Demand / Manual", rf: "Proprietary DB" },
        { feature: "Narrative Building", tevel: "Story Generation", palantir: "None", maltego: "None", rf: "None" },
        { feature: "Revealing Hidden Links", tevel: "Context Engine", palantir: "Query Based", maltego: "Visual Only", rf: "Threat Intel" },
        { feature: "User Experience", tevel: "Investigator First", palantir: "Complex / Engineer", maltego: "Technical / Graph", rf: "Dashboard" },
        { feature: "Implementation Time", tevel: "Days", palantir: "Months", maltego: "Instant", rf: "Instant" },
        { feature: "Cross-Silo Fusion", tevel: "Native / Auto", palantir: "High Effort", maltego: "Manual Transforms", rf: "N/A" },
        { feature: "Cost Accessibility", tevel: "High Value", palantir: "Enterprise Only", maltego: "Affordable", rf: "Premium" }
      ]
    },
    solution: {
      badge: "Methodology",
      titleGlitch: "Guided",
      titleSub: "Investigation",
      description1: "Tevel acts as a smart layer on top of your data. The investigator inputs a query, and Tevel",
      descriptionHighlight: "enriches the entity,",
      description2: "building the story backwards and forwards in time.",
      cards: [
        { title: "1. The Lead", desc: "The analyst starts with a single piece of data (Name, Phone, IP). Tevel instantly scans all silos." },
        { title: "2. The Enrichment", desc: "The system layers additional data from other departments and open sources to 'thicken' the profile." },
        { title: "3. The Connection", desc: "Tevel highlights hidden links to other entities that the analyst couldn't see." },
        { title: "4. The Narrative", desc: "Data is assembled into a coherent timeline and operational story for decision making." }
      ],
      nodes: {
        rawData: { 
          title: "RAW DATA", 
          desc: "IIngesting structured and unstructured data from internal silos and external feeds." 
        },
        enrichment: { 
          title: "ENRICHMENT", 
          desc: "AAutomatically augmenting entities with OSINT, social graphs, and historical records." 
        },
        context: { 
          title: "CONTEXT", 
          desc: "BBuilding the semantic layer that connects isolated data points into a unified picture." 
        },
        guidance: { 
          title: "GUIDANCE", 
          desc: "AAI-driven suggestions for the next logical investigative step." 
        },
        fusion: { 
          title: "FUSION", 
          desc: "MMerging cross-domain intelligence to reveal hidden identities and networks." 
        },
        insight: { 
          title: "INSIGHT", 
          desc: "DDelivering actionable intelligence and probability scores for decision making." 
        }
      }
    },
    useCases: {
      title: "Operational Scenarios",
      cases: [
        {
          id: "terror",
          title: "Terror Prevention",
          desc: "Analyst holds a single name. Tevel reveals the entire support network.",
          protocol: "PROTOCOL_SHADOW_NET",
          clearance: "TOP SECRET",
          details: {
            fullDesc: "An investigator receives a tip about a suspect. Usually, they would search 10 databases manually. Tevel takes that name, auto-enriches it with social media, travel history, and financial data, and presents the analyst with a 'thickened' profile. It flags a hidden connection to a known logistic provider that the analyst didn't even know to look for.",
            capabilities: ["Auto-profiling of single leads", "Cross-silo identity fusion", "Hidden link suggestions", "Predictive behavioral modeling"],
            impact: "Turning a weak signal into a actionable prevention operation."
          }
        },
        {
          id: "cyber",
          title: "Cyber Investigation",
          desc: "From a single anomaly log to the full attack story.",
          protocol: "PROTOCOL_ZERO_DAY",
          clearance: "RESTRICTED",
          details: {
            fullDesc: "A SOC analyst sees a strange login attempt. Instead of just logging it, Tevel guides the investigation: 'This user also accessed file X and emailed person Y'. The system builds the narrative of the breach, allowing the analyst to understand the intent, not just the technical event.",
            capabilities: ["Lateral movement storytelling", "User intent analysis", "Breach impact narrative", "Automated TTP mapping"],
            impact: "Understanding the 'Why' and 'Who' behind the 'What'."
          }
        },
        {
          id: "finance",
          title: "Money Laundering",
          desc: "Unfolding the ownership layers for the compliance officer.",
          protocol: "PROTOCOL_FOLLOW_MONEY",
          clearance: "CONFIDENTIAL",
          details: {
            fullDesc: "A compliance officer looks at a standard transaction. It looks clean. Tevel augments this view by showing the 'hidden dots': the company behind the transfer shares an address with a sanctioned entity. The system guides the officer to freeze the funds, providing the evidence chain automatically.",
            capabilities: ["Ultimate Beneficial Owner (UBO) unwrapping", "Sanction overlap detection", "Transaction path visualization", "Shell company detection"],
            impact: "Stopping illicit flow that standard checks miss."
          }
        },
        {
          id: "crypto",
          title: "Crypto Forensics",
          desc: "De-anonymizing the wallet owner through context fusion.",
          protocol: "PROTOCOL_BLOCK_TRACE",
          clearance: "SECRET",
          details: {
            fullDesc: "A wallet address is just a string of characters. Tevel enriches this string by searching for it in leaked databases, forums, and dark web marketplaces. It hands the analyst a real-world identity linked to the digital key, turning an anonymous hash into a suspect profile.",
            capabilities: ["Off-chain data fusion", "Entity resolution for wallets", "Dark web correlation", "Smart contract auditing"],
            impact: " attributing digital crimes to physical actors."
          }
        },
        {
          id: "maritime",
          title: "Maritime Intelligence",
          desc: "Filling the gaps when the AIS transponder goes dark.",
          protocol: "PROTOCOL_GHOST_SHIP",
          clearance: "SECRET",
          details: {
            fullDesc: "When a ship goes dark, the analyst is blind. Tevel fills this gap by correlating satellite imagery (SAR) and radio frequency data, essentially 'turning the lights back on'. It guides the analyst to where the ship *actually* is, versus where it claims to be.",
            capabilities: ["Dark vessel route reconstruction", "Multi-sensor correlation", "Illicit transfer flagging", "AIS spoofing detection"],
            impact: "Maintaining situational awareness even when targets try to hide."
          }
        },
        {
          id: "uav",
          title: "Aerial Defense (UAV)",
          desc: "Locating the drone operator before the impact.",
          protocol: "PROTOCOL_SKY_EYE",
          clearance: "TOP SECRET",
          details: {
            fullDesc: "Radar picks up a small signature. Is it a bird or a drone? Tevel fuses the radar track with acoustic sensor data to confirm a UAV. It then instantly correlates this with SIGINT intercepts of remote control frequencies and Telegram chatter about 'incoming' packages, triangulating the operator's location in real-time.",
            capabilities: ["Sensor Fusion (Radar/Acoustic)", "Real-time Geolocation", "Operator Pattern Matching", "Signal triangulation"],
            impact: "Neutralizing the threat at the source."
          }
        },
        {
          id: "trafficking",
          title: "Human Trafficking",
          desc: "Dismantling the smuggling network from a single ad.",
          protocol: "PROTOCOL_BROKEN_CHAIN",
          clearance: "RESTRICTED",
          details: {
            fullDesc: "Police identify a suspicious online ad. Tevel scrapes the phone number and links it to a travel agency that bulk-purchases one-way tickets. The system connects these tickets to a specific money transfer service used by a known syndicate, revealing the entire smuggling pipeline from recruitment to exploitation.",
            capabilities: ["Digital Footprint Analysis", "Travel Pattern Recognition", "Financial Link Analysis", "Victim profiling patterns"],
            impact: "Rescuing victims and arresting the ringleaders."
          }
        },
        {
          id: "espionage",
          title: "Counter-Espionage",
          desc: "Catching the mole stealing state secrets.",
          protocol: "PROTOCOL_DOUBLE_AGENT",
          clearance: "EYES ONLY",
          details: {
            fullDesc: "A classified file is accessed at an unusual hour. Tevel doesn't just flag the event; it builds the context. It sees the employee recently has high gambling debts (Finance), travelled to a hostile country (Border Control), and met with a foreign diplomat (Intel). The system flags a 'MICE' compromise scenario immediately.",
            capabilities: ["Insider Risk Scoring", "Cross-Domain behavioral analysis", "MICE Framework mapping", "Metadata anomaly detection"],
            impact: "Protecting national security assets from betrayal."
          }
        },
        {
          id: "audit",
          title: "Internal Audit",
          desc: "Connecting disparate documents to find the fraud narrative.",
          protocol: "PROTOCOL_INSIDE_LOOK",
          clearance: "INTERNAL",
          details: {
             fullDesc: "An auditor reviews a contract. Tevel automatically pulls related emails, invoices, and chat logs involving the signatories. It highlights that the vendor was created 2 days before the contract was signed—a red flag the auditor might miss in a pile of paperwork.",
             capabilities: ["Document-to-Entity linking", "Timeline reconstruction", "Conflict of interest flagging", "Invoice forensics"],
             impact: "Finding the needle in the haystack without reading every straw."
          }
        },
        {
          id: "supply",
          title: "Supply Chain Risk",
          desc: "Visualizing the risks deep in the sub-contractor network.",
          protocol: "PROTOCOL_CHAIN_REACTION",
          clearance: "COMMERCIAL",
          details: {
             fullDesc: "A procurement manager vets a direct supplier. Tevel guides them deeper, showing that the Tier-2 supplier relies on a factory in a conflict zone. The system reveals the hidden dependency dots that could disrupt the entire chain.",
             capabilities: ["N-tier dependency mapping", "Geopolitical risk overlay", "Hidden sub-contractor discovery", "Alternative supplier matching"],
             impact: "Proactive mitigation of risks before they stop the line."
          }
        },
        {
          id: "insider",
          title: "Insider Threat",
          desc: "Contextualizing user behavior to distinguish negligence from malice.",
          protocol: "PROTOCOL_MOLE_HUNT",
          clearance: "HR RESTRICTED",
          details: {
             fullDesc: "A user downloads a large file. Is it work or theft? Tevel adds context: 'This user handed in their resignation yesterday' and 'They have never accessed this folder before'. It helps the analyst distinguish between a normal workflow and a data exfiltration attempt.",
             capabilities: ["Behavioral context injection", "HR data correlation", "Intent analysis", "Access log correlation"],
             impact: "Stopping data theft without blocking legitimate work."
          }
        },
        {
          id: "disinfo",
          title: "Disinformation Analysis",
          desc: "Tracing the origin of a narrative across platforms.",
          protocol: "PROTOCOL_ECHO_CHAMBER",
          clearance: "OPEN SOURCE",
          details: {
             fullDesc: "An analyst sees a viral fake news story. Tevel tracks it back to its source, showing the coordinated bot network that amplified it. It guides the analyst to the root actor manipulating the conversation.",
             capabilities: ["Propagation tree mapping", "Bot cluster identification", "Origin tracing", "Deepfake detection"],
             impact: "Exposing the architect behind the influence campaign."
          }
        },
        {
          id: "border",
          title: "Border Control",
          desc: "Enriching passenger profiles in real-time.",
          protocol: "PROTOCOL_GATEKEEPER",
          clearance: "OFFICIAL",
          details: {
             fullDesc: "A border agent scans a passport. Tevel instantly overlays the 'hidden dots': previous travel partners, ticket purchase methods, and open-source checks. It guides the agent to ask the right questions based on a rich context, not just a database hit/miss.",
             capabilities: ["Real-time passenger enrichment", "Co-traveler analysis", "Risk scoring augmentation", "Biometric watchlist match"],
             impact: "Smarter questioning and better decisions at the checkpoint."
          }
        },
        {
          id: "narcotics",
          title: "Organized Crime",
          desc: "Mapping the hierarchy from street dealers to kingpins.",
          protocol: "PROTOCOL_KINGPIN",
          clearance: "LAW ENFORCEMENT",
          details: {
             fullDesc: "Police arrest a street dealer. Tevel analyzes their phone data and reveals the communication patterns that link them to the mid-level distributor. The system guides the detective up the chain of command, building the case against the organization, not just the individual.",
             capabilities: ["Hierarchy mapping", "Communication pattern analysis", "Network dismantling guidance", "Burner phone analysis"],
             impact: "Strategic disruption of criminal organizations."
          }
        },
        {
          id: "vip",
          title: "VIP Protection",
          desc: "Dynamic risk assessment based on live context.",
          protocol: "PROTOCOL_GUARDIAN",
          clearance: "SECRET",
          details: {
             fullDesc: "A security detail plans a route. Tevel suggests alternatives by overlaying real-time social media sentiment and protest locations. It acts as an advance scout, guiding the team away from developing threats.",
             capabilities: ["Route risk overlay", "Live sentiment monitoring", "Dynamic threat avoidance", "Emergency route planning"],
             impact: "Proactive avoidance of security incidents."
          }
        }
      ]
    },
    market: {
      title: "The Market",
      value: "$23B",
      desc: "Projected market for Decision Intelligence & Contextual Augmentation.",
      audiences: ["Intelligence Units", "SOC / Cyber", "Field Operations", "Internal Investigations"]
    },
    footer: {
      title: "Initialize Protocol",
      subtitle: "Ready to see the hidden dots?",
      inputName: "AGENT IDENTITY",
      inputEmail: "SECURE COMM CHANNEL",
      inputOrg: "AGENCY / ORGANIZATION",
      btn: "INITIATE SEQUENCE"
    },
    sidenav: {
      hero: "Terminal",
      dashboard: "System View",
      problem: "The Blind Spot",
      comparison: "Paradigm",
      solution: "Methodology",
      usecases: "Scenarios",
      market: "The Market",
      contact: "Access"
    },
    chaos: {
      before: "SILOED DATA",
      after: "FULL CONTEXT"
    }
  },
  he: {
    nav: {
      subtitle: "מנוע ההקשרים"
    },
    hero: {
      terminalPrefix: "מאתחל פרוטוקול חקירה...",
      titleMain: "להפוך מידע למודיעין.",
      titleSub: "מכאוס להקשר אופרטיבי.",
      subtitle: "מכפיל הכוח האולטימטיבי לחוקר. Tevel אינה מחליפה את האנליסט – היא מחברת את הנקודות הנסתרות ומנחה את החקירה מקצה חוט בודד ועד לתמונה המלאה.",
      ctaStart: "הפעלת סביבת מחקר",
      ctaDemo: "בקשת גישה למערכת"
    },
    dashboard: {
      version: "TEVEL_OS גרסה 2.5.0 // מבצעי",
      high: "חקירה פעילה",
      targetAcquired: "התאמת הקשר: 98%",
      eventAnalysis: "עיבוי וניתוח הקשרים",
      anomaly: "זוהתה זיקה נסתרת",
      entityAnalysis: "פרופיל יעד",
      origin: "מקורות מידע",
      class: "סיווג ביטחוני",
      threat: "רמת סיכון",
      certainty: "רמת ודאות",
      vals: {
        iran: "סיגינט / אוסינט / יומינט",
        military: "גורם עוין / מדינתי",
        critical: "קריטי"
      },
      logs: [
        "מנתח צומת מידע #882...",
        "חיבור מאובטח הושלם [192.168.1.10]",
        "מטא-דאטה חולץ: 4kb",
        "זיהוי ישות: TARGET_ALPHA",
        "הצלבה מול מאגר: NSA_LEAKS",
        "רמת התאמת דפוס: 98%",
        "מעדכן טופולוגיית גרף...",
        "ניתוח סנטימנט: עוין"
      ]
    },
    problem: {
      titlePrefix: "הפער המודיעיני:",
      title: "בעיית 'הנקודות הנעלמות'",
      description: "בארגונים מורכבים, המידע מבוזר באיים נפרדים (Silos). החוקרים עובדים עם קצות חוט חלקיים. אתם רואים את הנקודות, אך הקשרים הסמויים ביניהן נותרים בלתי נראים.",
      stats: [
        { value: 85, suffix: "%", label: "מזמן האנליסט מבוזבז על איסוף ידני של מידע חסר" },
        { value: 60, suffix: "דק", label: "עיכוב ממוצע בהבנת 'התמונה הגדולה' באירוע" },
        { value: 100, suffix: "%", label: "תלות במערכות נפרדות שאינן מתקשרות ביניהן" },
        { value: 18, suffix: "+", label: "חלונות דפדפן פתוחים לאימות ישות בודדת" }
      ],
      result: "התוצאה: החוקר מחזיק במידע, אך מחמיץ את התובנה המסתתרת בתוכו."
    },
    comparison: {
      title: "שינוי פרדיגמה",
      subtitle: "Tevel: הקוקפיט של האנליסט",
      description: "בניגוד לפתרונות 'קופסה שחורה' המנסים להחליף את שיקול הדעת האנושי, Tevel פועלת כ'קופסה לבנה'. היא מנגישה את המידע, מעבה אותו ומציעה כיווני חקירה, אך משאירה את ההחלטה בידי החוקר.",
      highlight: "לא מחליפים את האדם. מעניקים לו עליונות מודיעינית.",
      columns: ["יכולת מבצעית", "TEVEL (העצמה ועיבוי)", "Palantir Foundry", "Maltego", "Recorded Future"],
      rows: [
        { feature: "גישת המערכת", tevel: "מונחית חקירה (Guided)", palantir: "הנדסת נתונים", maltego: "ויזואליזציה ידנית", rf: "הזנת מידע (Feed)" },
        { feature: "עיבוי מידע (Enrichment)", tevel: "אוטומטי ומובנה", palantir: "אינטגרציה מותאמת", maltego: "ידני / לפי פעולה", rf: "מאגר סגור" },
        { feature: "בניית סיפור המעשה", tevel: "מחולל נרטיב", palantir: "אין", maltego: "אין", rf: "אין" },
        { feature: "חשיפת קשרים עקיפים", tevel: "מנוע הקשרים סמנטי", palantir: "מבוסס שאילתות", maltego: "ויזואלי בלבד", rf: "התרעות איומים" },
        { feature: "חווית משתמש (UX)", tevel: "מותאם לחוקר", palantir: "מותאם למהנדס", maltego: "טכני / גרף קשרים", rf: "דשבורד" },
        { feature: "זמן הטמעה (TTV)", tevel: "ימים בודדים", palantir: "חודשים ארוכים", maltego: "מיידי", rf: "מיידי" },
        { feature: "היתוך מידע (Fusion)", tevel: "אוטומטי (Cross-Silo)", palantir: "דורש פיתוח", maltego: "טרנספורם ידני", rf: "לא רלוונטי" },
        { feature: "נגישות ועלות", tevel: "ROI גבוה ומהיר", palantir: "Enterprise בלבד", maltego: "נגיש", rf: "פרימיום" }
      ]
    },
    solution: {
      badge: "מתודולוגיה",
      titleGlitch: "חקירה",
      titleSub: "מונחית מחשב",
      description1: "Tevel משמשת כשכבת בינה מעל המידע הארגוני. החוקר מזין קצה חוט, והמערכת",
      descriptionHighlight: "מעשירה את הישות,",
      description2: "בונים את סיפור המעשה אחורה וקדימה בזמן.",
      cards: [
        { title: "1. קצה החוט (The Lead)", desc: "החוקר מתחיל עם נתון בודד (מספר טלפון, שם, IP). המערכת סורקת מיידית את כל המאגרים המחוברים." },
        { title: "2. העיבוי (Enrichment)", desc: "המערכת מצליבה מידע ממקורות גלויים (OSINT), פנימיים ושותפים כדי ליצור פרופיל 360 מעלות." },
        { title: "3. הקשר (The Link)", desc: "מנוע ההקשרים חושף זיקות לישויות אחרות, ארגונים או אירועים שהיו נסתרים מהעין." },
        { title: "4. הנרטיב (The Story)", desc: "המידע הגולמי מעובד לסיפור אופרטיבי, ציר זמן והמלצות לפעולה מיידית." }
      ],
      nodes: {
        rawData: { 
          title: "מידע גולמי", 
          desc: "אאיסוף ונירמול מאסיבי של מידע מובנה ולא-מובנה. המערכת שואבת נתונים מכלל מאגרי הארגון (Silos), לוגים טכניים ומקורות חיצוניים, ויוצרת 'אגם נתונים' אחיד ומוכן לניתוח."
        },
        enrichment: { 
          title: "העשרה", 
          desc: "עעיבוי אוטומטי של ישויות. על כל פיסת מידע, המערכת מפעילה סוכני איסוף וירטואליים המצליבים נתונים מול מקורות גלויים (OSINT), רשתות חברתיות, מאגרי דלף והיסטוריה ארגונית כדי לייצר פרופיל עומק."
        },
        context: { 
          title: "הקשר", 
          desc: "בבניית הגרף הסמנטי. המערכת מזהה וממפה את הקשרים הסמויים בין ישויות שונות (אנשים, חברות, כתובות IP) כדי להפוך רשימת נתונים אקראית לתמונת מצב מחוברת והגיונית."
        },
        guidance: { 
          title: "הכוונה", 
          desc: "ההיגוי חקירה מבוסס AI. האלגוריתם מנתח את כיווני החקירה האפשריים וממליץ לחוקר על הצעד הבא בעל הסבירות הגבוהה ביותר להנבת מודיעין, תוך מניעת 'מבוי סתום'."
        },
        fusion: { 
          title: "היתוך", 
          desc: "ממיזוג מודיעין רב-תחומי (Cross-Domain Fusion). שבירת המחיצות בין עולמות הסייבר, המודיעין הפיזי (HUMINT) והפיננסי. המערכת מתיכה אינדיקציות נפרדות לכדי ישות אחת ברורה בעלת זהות, מיקום וכוונה."
        },
        insight: { 
          title: "תובנה", 
          desc: "ההפקת תובנות מערכה. תרגום מפת הקשרים המורכבת לשורה תחתונה אופרטיבית: זיהוי דפוסים חריגים, הערכת סיכונים, ומתן ציון רלוונטיות לתמיכה מהירה בקבלת החלטות קריטיות."
        }
      }
    },
    useCases: {
      title: "תרחישים מבצעיים",
      cases: [
        {
          id: "terror",
          title: "סיכול טרור (CT)",
          desc: "מקצה חוט בודד לחשיפת רשת הסייענים המלאה.",
          protocol: "פרוטוקול SHADOW_NET",
          clearance: "סודי ביותר",
          details: {
            fullDesc: "במהלך ניטור שגרתי, נקלטה שיחת 'ברזלים' קצרה ממספר לא מוכר באזור גבול. במקום להתעלם, Tevel ביצעה העשרה מיידית ומצאה כי המכשיר נרכש באותה חנות ובאותו יום שבו נרכשו מכשירים ששימשו לפיגוע קודם. המערכת הצליבה מיקומי אנטנות וזיהתה דפוס מפגשים חוזר עם סייען לוגיסטי מוכר. המודיעין הפך מ'רעש' להתרעה קונקרטית על תא רדום בהכנות לפעולה.",
            capabilities: ["היתוך סיגינט/ויזינט", "זיהוי דפוסים חריגים (Anomaly)", "ניתוח רשתות קשר", "דירוג סיכון חזוי"],
            impact: "מעבר ממודיעין בדיעבד לסיכול מנע בזמן אמת."
          }
        },
        {
          id: "cyber",
          title: "חקירות סייבר (DFIR)",
          desc: "זיהוי תוקף מתוחכם (APT) בתוך הרשת הארגונית.",
          protocol: "פרוטוקול ZERO_DAY",
          clearance: "שמור / מוגבל",
          details: {
            fullDesc: "צוות ה-SOC זיהה הרצת סקריפט PowerShell בשרת זניח. לכאורה אירוע מינורי. Tevel חיברה את הנקודות: הסקריפט הורץ 5 דקות לאחר שמשתמש מורשה (שנפרץ) התחבר מכתובת VPN במדינה עוינת. המערכת בנתה את ציר הזמן לאחור וגילתה שהתוקף מבצע 'תנועה רוחבית' (Lateral Movement) שקטה כבר חודשיים, בדרך למאגר הליבה. המערכת סיפקה תמונת נזק מלאה (Blast Radius) תוך שניות.",
            capabilities: ["שחזור Kill-Chain אוטומטי", "ייחוס תוקף (Attribution)", "זיהוי גניבת זהות", "מיפוי טקטיקות תקיפה (TTP)"],
            impact: "בלימת מתקפה אסטרטגית לפני דלף מידע קריטי."
          }
        },
        {
          id: "finance",
          title: "הלבנת הון (AML)",
          desc: "חשיפת רשת חברות קש חוצת יבשות.",
          protocol: "פרוטוקול MONEY_TRAIL",
          clearance: "סודי עסקי",
          details: {
             fullDesc: "בנק זיהה העברה בנקאית גדולה אך לגיטימית לכאורה לחברת ייבוא. Tevel ביצעה בדיקת נאותות עמוקה (Deep Due Diligence) וגילתה שהחברה רשומה במקלט מס, והדירקטור שלה הוא למעשה איש קש המופיע ב-50 חברות אחרות. המערכת עקבה אחרי נתיב הכסף וגילתה שהוא מתפצל וחוזר לחשבון הקשור לארגון פשיעה. המערכת חשפה את מנגנון ה-'Layering' המורכב.",
             capabilities: ["קילוף ישויות משפטיות (UBO)", "ניתוח גרף עסקאות", "זיהוי אנשי קש", "זיהוי חברות קש"],
             impact: "מניעת הלבנת הון במיליונים ועמידה ברגולציה."
          }
        },
        {
          id: "crypto",
          title: "מודיעין קריפטו",
          desc: "פיצוח זהות של סוחט כופרה (Ransomware).",
          protocol: "פרוטוקול BLOCK_TRACE",
          clearance: "סודי",
          details: {
             fullDesc: "ארגון נפגע מכופרה ונדרש לשלם בביטקוין. כתובת הארנק הייתה אנונימית לחלוטין. Tevel עקבה אחר תנועת המטבעות דרך שלושה שירותי ערבול (Mixers) שונים, עד לנקודת יציאה (Off-Ramp) בבורסת קריפטו מפוקחת ברוסיה. המערכת הצליבה את מועד המשיכה עם הדלפות מפורומים בדארק-נט וחשפה את כתובת האימייל והזהות האמיתית של ההאקר.",
             capabilities: ["דה-אנונימיזציה של ארנקים", "מעקב חוצה-בלוקצ'יין", "מודיעין דארק-נט", "ביקורת חוזים חכמים"],
             impact: "ייחוס פלילי לארנק דיגיטלי והשבת כספים."
          }
        },
        {
          id: "maritime",
          title: "מודיעין ימי",
          desc: "איתור מכלית נפט המפרה סנקציות בינלאומיות.",
          protocol: "פרוטוקול GHOST_SHIP",
          clearance: "סודי",
          details: {
             fullDesc: "מכלית נפט כיבתה את משדר ה-AIS בלב ים ונעלמה. Tevel הפעילה אלגוריתם לחיזוי נתיב וסרקה תצלומי לוויין (SAR) באזור החשוד. המערכת זיהתה את המכלית מבצעת העברת נפט ספינה-לספינה (STS) עם מכלית אחרת בלב ים, בחסות החשיכה. המערכת הפיקה דוח מפליל הכולל את זיהוי הספינות, נפח ההעברה והיעד הסופי של הנפט המוברח.",
             capabilities: ["ניתוח תצלומי לוויין (GEOINT)", "זיהוי דפוסי הפלגה חריגים", "חשיפת רשתות הברחה", "זיהוי זיוף מיקום (AIS)"],
             impact: "אכיפת סנקציות ומניעת מימון טרור."
          }
        },
        {
          id: "uav",
          title: "הגנה אווירית (UAV)",
          desc: "איתור מפעיל הרחפן טרם פגיעה.",
          protocol: "פרוטוקול SKY_EYE",
          clearance: "סודי ביותר",
          details: {
             fullDesc: "מכ\"ם זיהה חתימה חלשה. ציפור או רחפן? Tevel התיכה את נתוני המכ\"ם עם סנסורים אקוסטיים ואישרה את האיום. בו-זמנית, המערכת ביצעה הצלבה מיידית מול יירוטי סיגינט של תדרי שליטה ושיח בטלגרם על 'חבילה בדרך', וביצעה איכון מדויק של מיקום המפעיל בזמן אמת, עוד לפני שהרחפן חצה את הגדר.",
             capabilities: ["היתוך סנסורים (מכ\"ם/אקוסטי)", "איכון בזמן אמת", "זיהוי דפוס מפעיל", "איכון משולש של אותות"],
             impact: "נטרול האיום במקור ולא רק ביירוט."
          }
        },
        {
          id: "trafficking",
          title: "סחר בבני אדם",
          desc: "חשיפת רשת ההברחה ממודעה אחת ברשת.",
          protocol: "פרוטוקול BROKEN_CHAIN",
          clearance: "משטרתי / מוגבל",
          details: {
             fullDesc: "המשטרה זיהתה מודעה חשודה ברשת. Tevel שאבה את מספר הטלפון וחיברה אותו לסוכנות נסיעות שרוכשת כרטיסי טיסה בכיוון אחד בסיטונאות. המערכת קישרה את הכרטיסים הללו לשירות העברת כספים המשמש ארגון פשיעה מוכר, ובכך חשפה את צינור ההברחה המלא - מהגיוס ועד לניצול.",
             capabilities: ["ניתוח טביעת רגל דיגיטלית", "זיהוי דפוסי נסיעה", "ניתוח קשרים פיננסיים", "בניית פרופיל קורבנות"],
             impact: "חילוץ קורבנות ומעצר ראשי הרשת."
          }
        },
        {
          id: "espionage",
          title: "ריגול נגדי",
          desc: "חשיפת חפרפרת בלב הארגון.",
          protocol: "פרוטוקול DOUBLE_AGENT",
          clearance: "עינייך בלבד",
          details: {
             fullDesc: "קובץ מסווג נפתח בשעה חריגה. Tevel לא רק התריעה, אלא בנתה הקשר: העובד שפתח את הקובץ נכנס לחובות הימורים לאחרונה (פיננסים), חזר מנסיעה למדינה עוינת (ביקורת גבולות), ונפגש עם נספח זר (מודיעין). המערכת סימנה מיידית חשד להפעלה על בסיס מניעי MICE (כסף/אידיאולוגיה/כפייה/אגו).",
             capabilities: ["דירוג סיכון פנימי", "ניתוח התנהגות חוצה-דומיינים", "מיפוי מניעי ריגול", "חריגות מטא-דאטה"],
             impact: "הגנה על נכסים לאומיים מפני בגידה מבפנים."
          }
        },
        {
          id: "audit",
          title: "ביקורת וחקירות פנים",
          desc: "חשיפת הונאת רכש על ידי עובד בכיר.",
          protocol: "פרוטוקול INSIDE_LOOK",
          clearance: "פנימי - רגיש",
          details: {
             fullDesc: "חשד עלה לגבי מכרז רכש גדול. Tevel סרקה את כלל המיילים, המסמכים והקבלות בארגון. היא מצאה קשר נסתר: סמנכ\"ל הרכש והספק הזוכה למדו באותו מחזור באוניברסיטה (מידע שנשאב מלינקדאין), והם חולקים כתובת מגורים היסטורית. המערכת הציפה חשבוניות מנופחות שאושרו בשעות חריגות, והוכיחה קנוניה להוצאת כספים במרמה.",
             capabilities: ["ניתוח רשתות חברתיות ארגוניות", "זיהוי ניגוד עניינים", "פורנזיקה של מסמכים", "פורנזיקה של חשבוניות"],
             impact: "הפסקת עושק הקופה הציבורית והחזרת כספים."
          }
        },
        {
          id: "supply",
          title: "סיכוני שרשרת אספקה",
          desc: "זיהוי רכיב קריטי המיוצר במפעל שקרס.",
          protocol: "פרוטוקול CHAIN_REACTION",
          clearance: "מסחרי",
          details: {
             fullDesc: "חברה ביטחונית נערכה לייצור המוני. Tevel מיפתה את שרשרת האספקה עד לרמת הרכיב הבודד (N-Tier). המערכת התריעה כי שבב קריטי במערכת מיוצר במפעל בטאיוואן שנפגע ברעידת אדמה יום קודם לכן. בעוד המתחרים המתינו להודעה רשמית, המערכת אפשרה למנהלי הרכש לאתר ספק חלופי ולשריין מלאי, ובכך למנוע השבתת קו ייצור של מיליונים.",
             capabilities: ["מיפוי תלויות עמוק", "מודיעין עסקי בזמן אמת", "ניהול משברים פרואקטיבי", "התרעות סיכון גיאופוליטי"],
             impact: "רציפות עסקית ועליונות תחרותית."
          }
        },
        {
          id: "insider",
          title: "איום פנימי (Insider Threat)",
          desc: "סיכול גניבת קניין רוחני (IP) על ידי עובד עוזב.",
          protocol: "פרוטוקול MOLE_HUNT",
          clearance: "רגיש ביותר",
          details: {
             fullDesc: "מהנדס תוכנה הגיש התפטרות. לכאורה תהליך סטנדרטי. Tevel זיהתה דפוס חריג שקדם להודעה: שלושה שבועות לפני העזיבה, העובד החל לגשת לתיקיות קוד שאינן קשורות לפרויקט שלו, והעביר קבצים מוצפנים לשירות ענן פרטי בשעות הלילה. המערכת הצליבה את המידע עם שיחות צ'אט שבהן הביע תסכול, והתריעה לקב\"ט על גניבת IP בטרם העובד עזב את הבניין.",
             capabilities: ["ניתוח התנהגות משתמש (UEBA)", "זיהוי אנומליות בגישה לקבצים", "פרופיילינג פסיכולוגי", "קורלציית לוגים של גישה"],
             impact: "הגנה על נכסי הליבה של הארגון."
          }
        },
        {
          id: "disinfo",
          title: "לוחמת תודעה (CIB)",
          desc: "חשיפת קמפיין השפעה זר בזמן בחירות.",
          protocol: "פרוטוקול ECHO_CHAMBER",
          clearance: "בלמ\"ס / מחקר",
          details: {
             fullDesc: "נרטיב שקרי על זיוף קלפיות החל לצבור תאוצה ברשת. Tevel ניתחה את דפוס ההפצה וזיהתה ש-80% מהמפיצים הראשוניים הם חשבונות שנפתחו באותו שבוע ופועלים בתיאום זמנים מחשיד (Botnet). המערכת עקבה אחרי מקור התוכן לשרתים במדינה זרה, וחשפה שמדובר במבצע השפעה מאורגן ולא במחאה אותנטית. המערכת סיפקה למדינה יכולת להזים את השמועה עם הוכחות.",
             capabilities: ["ניתוח רשתות ההפצה", "זיהוי בוטים ואוטומציה", "ניתוח סנטימנט ונרטיב", "זיהוי תוכן מסונתז (Deepfake)"],
             impact: "שמירה על טוהר הבחירות ויציבות שלטונית."
          }
        },
        {
          id: "border",
          title: "ביקורת גבולות",
          desc: "זיהוי גורם עוין בזהות בדויה במעבר גבול.",
          protocol: "פרוטוקול GATEKEEPER",
          clearance: "רשמי",
          details: {
             fullDesc: "תייר תמים למראה הגיע לביקורת דרכונים. בדיקה רגילה לא העלתה דבר. Tevel ביצעה העשרה מהירה וגילתה שתמונת הפנים שלו מופיעה ברשת חברתית תחת שם אחר, כשהוא אוחז בנשק באזור קרבות. בנוסף, כרטיס הטיסה נרכש במזומן במדינה שלישית. המערכת הציפה חשבוניות מנופחות שאושרו בשעות חריגות, והוכיחה קנוניה להוצאת כספים במרמה.",
             capabilities: ["ביומטריה והתאמת פנים", "אימות מסמכים", "הערכת סיכון בזמן אמת", "התאמה ביומטרית לרשימות"],
             impact: "מניעת כניסת גורמי טרור למדינה."
          }
        },
        {
          id: "narcotics",
          title: "פשיעה חמורה",
          desc: "פירוק קרטל סמים באמצעות ניתוח תקשורת.",
          protocol: "פרוטוקול KINGPIN",
          clearance: "משטרתי",
          details: {
             fullDesc: "המשטרה תפסה סוחר סמים זוטר עם טלפון 'מבצעי'. Tevel שאבה את נתוני המיקום והשיחות, והצליבה אותם עם אלפי טלפונים אחרים במאגר. המערכת זיהתה דפוס של 'טלפונים מבצעיים' שמתחלפים כל שבוע, אך כולם מתקשרים למספר אחד קבוע - הבוס הגדול. המערכת מיפתה את ההיררכיה המלאה של הארגון, מהרחוב ועד למלבין הכספים בחו\"ל, ואפשרה גל מעצרים מתואם.",
             capabilities: ["ניתוח מחקרי תקשורת (CDR)", "מיפוי ארגוני פשיעה", "מודיעין גיאוגרפי (GEOINT)", "ניתוח טלפונים מבצעיים"],
             impact: "ריסוק תשתיות פשיעה מאורגנת."
          }
        },
        {
          id: "vip",
          title: "אבטחת אישים",
          desc: "סיכול התנקשות באמצעות מודיעין ממקורות גלויים.",
          protocol: "פרוטוקול GUARDIAN",
          clearance: "סודי",
          details: {
             fullDesc: "לקראת ביקור אישיות בכירה, Tevel סרקה את הרשתות החברתיות באזור. המערכת זיהתה עלייה חריגה בשיח שנאה (Sentiment Analysis) הממוקד במיקום ספציפי בנתיב השיירה. במקביל, זוהה רחפן לא מזוהה שטס באזור יום קודם לכן. המערכת התריעה על 'אזור השמדה' פוטנציאלי והמליצה על שינוי נתיב מיידי, דקות לפני יציאת השיירה.",
             capabilities: ["ניטור איומים בזמן אמת", "היתוך סנסורים (רחפנים/מצלמות)", "ניהול סיכונים דינמי", "תכנון נתיבי מילוט"],
             impact: "הגנה על חיי אדם ומניעת תקרית דיפלומטית."
          }
        }
      ]
    },
    market: {
      title: "פוטנציאל השוק",
      value: "$23B",
      desc: "השוק העולמי למודיעין קבלת החלטות (DI) והעשרה הקשרית.",
      audiences: ["קהילת המודיעין", "מרכזי SOC וסייבר", "גופי אכיפה", "יחידות חקירה ארגוניות"]
    },
    footer: {
      title: "יצירת קשר",
      subtitle: "מוכנים לחשוף את הנקודות הנסתרות?",
      inputName: "שם מלא / כינוי",
      inputEmail: "ערוץ התקשרות",
      inputOrg: "ארגון / יחידה",
      btn: "אתחול יצירת קשר"
    },
    sidenav: {
      hero: "טרמינל",
      dashboard: "מבט על",
      problem: "הפער",
      comparison: "הפתרון",
      solution: "מתודולוגיה",
      usecases: "תרחישים",
      market: "השוק",
      contact: "גישה"
    },
    chaos: {
      before: "מידע מבודד (SILOS)",
      after: "מודיעין הקשרי (CONTEXT)"
    }
  }
};
