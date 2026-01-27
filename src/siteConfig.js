import { Camera, Shield, Zap, BarChart3, Globe, Cpu, Wind, Activity, Eye, FileText, Map, Settings, CheckCircle, Users, Layers, Award, FileCheck } from "lucide-react";

export const siteConfig = {
    name: "VARUNA AEROTECH",
    tagline: "Aerial Data Intelligence",
    description: "Advanced diagnostics and asset reliability solutions for the renewable energy sector.",
    logo: "/logo.png",

    hero: {
        title: "Aerial Data Intelligence",
        subtitle: "Drone Thermography • EL Testing • Barcode Scanning • Transmission-Line Inspection. Reports compliant with IEC 62446-3:2022.",
        bullets: ["Aerial Data Intelligence", "On Demand Aerial Data Acquisition"]
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        {
            label: "Services",
            href: "#services",
            dropdown: [
                "Solar Panel Inspection",
                "Windmill Inspection",
                "Powerline Inspection",
                "Pipeline Inspection",
                "Infrastructure Monitoring",
                "Surveillance",
                "Industrial Utility Inspection",
                "Inventory Management",
                "Topographic Survey"
            ]
        },
        {
            label: "Industries", // User said "in blog add dropdown" but the content is clearly Industries. Renaming for clarity as per standard web conventions, or should I stick to Blog? The image shows "Industries" as the header. I'll use "Industries" as the label to match the content, assuming "Blog" was just a positional reference.
            href: "/industries",
            dropdown: [
                "Solar Energy",
                "Wind Energy",
                "Power & Utilities",
                "Infrastructure",
                "Industrial Plants",
                "Land & Highway"
            ]
        },
        { label: "Contact Us", href: "/contact" },
    ],

    whatWeDo: {
        title: "What We Do",
        description: "At Varuna Aerotech, we deliver end-to-end asset reliability solutions by combining drone-mounted thermal imaging, high-resolution electroluminescence (EL) testing, barcode scanning, and asset tagging. All findings are geo-tagged, severity-classified, and made available instantly on our cloud platform—empowering you with real-time ambient data, interactive dashboards, and actionable recommendations to maximize energy yield, minimize downtime, and extend asset life.",
        compliance: "All services are performed in strict adherence to IEC 62446-3:2022."
    },

    aboutPage: {
        whoWeAre: {
            title: "Who We Are",
            description: "Varuna Aerotech is a precision diagnostics and inspection firm, on a mission to maximize the reliability and yield of solar power plants and transmission-line assets.",
            bullets: [
                { title: "Multidisciplinary Team", text: "Certified drone pilots, photovoltaic performance engineers, EL & IV testing specialists, GIS analysts, and data scientists—each bringing deep, hands-on expertise." },
                { title: "Field & Lab Expertise", text: "Over 7 years' combined experience in hundreds of site inspections and detailed analytical reporting." },
                { title: "Wide Reach", text: "Actionable insights across 20 GW+ of solar installations and 1,000 km+ of transmission infrastructure." },
                { title: "Standards-Driven Accuracy", text: "Reports fully compliant with IEC 62446-3:2022—systematic fault classification and rapid turnaround." },
                { title: "Cloud-Native Intelligence", text: "Secure, real-time dashboards and interactive reports for data-backed decisions at scale." }
            ],
            tagline: "Empower your operations with the precision, speed, and clarity only Varuna Aerotech can provide."
        },
        mission: {
            title: "Mission",
            text: "To empower asset owners with cutting-edge diagnostics, standardized field inspections, and intelligent analytics—enabling faster decisions, minimized losses, and maximized energy yield across every stage of the asset lifecycle."
        },
        vision: {
            title: "Vision",
            text: "To become the most trusted global partner in energy infrastructure diagnostics—ensuring every solar plant and transmission line performs at its peak, sustainably and safely."
        },
        coreValues: [
            {
                title: "Innovation",
                icon: Zap, // Using Zap for Innovation
                description: "We harness cutting-edge drone thermography and AI analytics to continuously advance PV diagnostics and set new industry benchmarks."
            },
            {
                title: "Reliability",
                icon: CheckCircle, // Using CheckCircle for Reliability
                description: "Our end-to-end workflows and IEC-compliant reporting guarantee consistent, dependable insights that help you keep assets operating at peak performance."
            },
            {
                title: "Expertise",
                icon: Award, // Using Award for Expertise
                description: "A multidisciplinary team of PV engineers, GIS analysts, and data scientists collaborates to deliver precise, field-validated diagnostics and actionable recommendations."
            },
            {
                title: "Partnership",
                icon: Users, // Using Users for Partnership
                description: "We work hand-in-hand with clients—aligning on goals, co-creating tailored solutions, and providing ongoing support to drive sustainable asset value."
            }
        ]
    },

    // "Our Varuna Edge" - Why Choose Us
    whyUs: [
        {
            title: "Certified Elite Pilots",
            icon: Users,
            description: "Our specialized drone pilots execute complex missions with safety and precision."
        },
        {
            title: "Drone Tech Expertise",
            icon: Cpu,
            description: "Leveraging state-of-the-art aerial platforms for superior data fidelity."
        },
        {
            title: "Engineering Accuracy",
            icon: Layers,
            description: "Data processing workflows designed by engineers for engineers."
        },
        {
            title: "Tailored Workflow",
            icon: Settings,
            description: "Custom inspection protocols adapted to your specific asset needs."
        },
        {
            title: "Safe & Scalable Operation",
            icon: Shield,
            description: "Operations built for massive scale without compromising safety standards."
        },
        {
            title: "Regulatory Compliance",
            icon: FileCheck,
            description: "Fully compliant with local aviation and industrial safety regulations."
        }
    ],

    services: [
        {
            id: "solar-panel-inspection",
            title: "Solar Panel Inspection",
            description: "Maximize energy yield with IEC-compliant thermal inspections.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
            overview: {
                title: "Solar Thermography Overview",
                content: "Drone Thermography employs UAV-mounted, high-resolution infrared sensors to perform rapid, non-invasive surveys of the entire PV array. By capturing precise thermal data under stable irradiance conditions, we detect and map temperature anomalies—such as hotspots, bypass-diode failures, string imbalances, and cell-level defects—before they adversely impact energy yield or escalate into safety hazards.",
                image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Precise Fault Mapping", description: "Pinpoint thermal anomalies with centimeter-level accuracy." },
                { title: "Comprehensive Coverage", description: "Survey hundreds of hectares in a single flight." },
                { title: "Safety & Efficiency", description: "Remote scanning keeps personnel away from high-voltage equipment." },
                { title: "Data-Driven Maintenance", description: "Geo-tagged datasets drive prioritized repair schedules." },
                { title: "Standards-Driven Accuracy", description: "Fully compliant with IEC 62446-3:2022 standards." },
                { title: "Rapid Turnaround", description: "Complete inspection-to-report cycle in as little as 24-48 hours." }
            ],
            process: [
                { title: "Site Assessment", description: "Review layout, module specs, and shading to plan optimal flight paths." },
                { title: "Thermal Capture", description: "Fly UAVs under >600 W/m² irradiance, capturing geo-tagged infrared frames." },
                { title: "Data Processing", description: "Orthorectify, calibrate, and mosaic thermal imagery; run AI-driven fault detection." },
                { title: "Quality Assurance", description: "Expert engineers validate results and upload finalized data to cloud." }
            ],
            deliverables: [
                { title: "Audit-Ready PDF", description: "Detailed findings, corrective actions, and technical appendices." },
                { title: "CSV Export", description: "All anomaly data (GPS, ΔT, severity) for seamless integration." },
                { title: "Executive Summary", description: "Highlighting key metrics, trends, and ROI impacts." },
                { title: "Annotated Imagery", description: "High-res maps with fault call-outs and temperature notes." }
            ]
        },
        {
            id: "windmill-inspection",
            title: "Windmill Inspection",
            description: "Comprehensive blade and tower inspections using autonomous drones.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Wind Turbine Inspection Overview",
                content: "Our autonomous drone inspections capture high-resolution imagery of wind turbine blades, nacelles, and towers. We identify cracks, erosion, lightning strikes, and composite delamination with millimeter precision, enabling preventative maintenance and maximizing turbine uptime.",
                image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Millimeter Precision", description: "Detect hairline cracks and early signs of erosion." },
                { title: "Reduced Downtime", description: "Inspections completed in minutes versus hours for manual methods." },
                { title: "Enhanced Safety", description: "Eliminate the need for rope access monitoring in hazardous conditions." },
                { title: "Historical Tracking", description: "Track defect progression over time with repeatable flight paths." },
                { title: "Detailed Analytics", description: "AI-powered analysis to categorize defect severity." },
                { title: "Asset Longevity", description: "Extend turbine life through proactive maintenance interventions." }
            ],
            process: [
                { title: "Flight Planning", description: "3D modeling of the turbine for safe automated flight paths." },
                { title: "Automated Capture", description: "High-res optical and thermal imaging of all blade surfaces." },
                { title: "Defect Analysis", description: "AI identifies and classifies structural anomalies." },
                { title: "Reporting", description: "Interactive portal access to visualize defects and generate work orders." }
            ],
            deliverables: [
                { title: "3D Asset Model", description: "Digital twin of the turbine for virtual inspection." },
                { title: "Defect Map", description: "Precise location of all identified issues on the blade structure." },
                { title: "Severity Report", description: "Criticality ranking for maintenance prioritization." },
                { title: "Raw Imagery", description: "Access to all high-resolution inspection photos." }
            ]
        },
        {
            id: "powerline-inspection",
            title: "Powerline Inspection",
            description: "Secure the grid with rapid corridor mapping and corona detection.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Transmission Line Overview",
                content: "We provide comprehensive monitoring for transmission and distribution lines. Our sensors detect corona discharges, identify vegetation encroachment, and inspect insulator health, helping utilities prevent outages and ensure grid reliability.",
                image: "https://images.unsplash.com/photo-1621360841012-6368d601b80d?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Corona Detection", description: "Identify invisible electrical discharges/faults." },
                { title: "Vegetation Management", description: "Calculate precise clearance violations." },
                { title: "Component Health", description: "Inspect insulators, spacers, and dampers in detail." },
                { title: "Rapid Deployment", description: "Cover long linear corridors efficiently." },
                { title: "Emergency Response", description: "Quickly assess storm damage or line faults." },
                { title: "Regulatory Compliance", description: "Maintain clear right-of-way documentation." }
            ],
            process: [
                { title: "Corridor Mapping", description: "LiDAR and photogrammetry of the transmission corridor." },
                { title: "Sensor Sweep", description: "Simultaneous capture of UV (corona), thermal, and RGB." },
                { title: "Vegetation Analysis", description: "Calculate sag and sway against vegetation growth." },
                { title: "Fault Reporting", description: "Generate actionable maintenance tickets for line crews." }
            ],
            deliverables: [
                { title: "Vegetation encroachments", description: "Reports highlighting critical clearance zones." },
                { title: "Component Status", description: "Detailed visual audit of tower hardware." },
                { title: "Thermal/UV Map", description: "Geo-located electrical anomalies." },
                { title: "PLS-CADD Data", description: "Compatible export formats for engineering analysis." }
            ]
        },
        {
            id: "pipeline-inspection",
            title: "Pipeline Inspection",
            description: "Monitor pipeline integrity with thermal leak detection and surveillance.",
            image: "https://images.unsplash.com/photo-1587375253018-b2102146ae45?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Pipeline Integrity Overview",
                content: "Our aerial solutions monitor oil, gas, and water pipelines for leaks, unauthorized activity, and environmental hazards. Thermal sensors detect temperature differentials caused by leaks, while high-res optics monitor the Right of Way (RoW).",
                image: "https://images.unsplash.com/photo-1440615496137-5f6a6ca7aa04?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Leak Detection", description: "Identify thermal signatures of subsurface leaks." },
                { title: "RoW Monitoring", description: "Detect unauthorized construction or excavation." },
                { title: "Environmental Safety", description: "Prevent contamination through early warning." },
                { title: "Cost Effective", description: "More frequent and cheaper than manned helicopter patrols." },
                { title: "Geo-referenced Data", description: "Exact location of every anomaly found." },
                { title: "Change Detection", description: "Compare surveys to spot terrain or asset shifts." }
            ],
            process: [
                { title: "Route Planning", description: "Define linear flight plans along the pipeline RoW." },
                { title: "Dual-Sensor Flight", description: "Capture thermal for leaks and RGB for visual status." },
                { title: "Anomaly Detection", description: "Process data to flag potential leaks or encroachments." },
                { title: "Alert Generation", description: "Immediate notification for critical findings." }
            ],
            deliverables: [
                { title: "Leak Report", description: "GPS coordinates and thermal imagery of suspected leaks." },
                { title: "RoW Video", description: "Full high-definition flyover video of the corridor." },
                { title: "Change Analysis", description: "Report showing changes from previous inspections." },
                { title: "GIS Layer", description: "Integration ready files for your asset map." }
            ]
        },
        {
            id: "infrastructure-monitoring",
            title: "Infrastructure Monitoring",
            description: "Assess the structural health of bridges, dams, and roads.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Structural Health Overview",
                content: "We provide detailed visual and thermal inspections of critical infrastructure like bridges, dams, and telecommunication towers. Our data helps engineers identify spalling, corrosion, stress cracks, and other structural defects without expensive scaffolding.",
                image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Remote Access", description: "Reach hard-to-access areas safely." },
                { title: "High Resolution", description: "Capture sub-millimeter details of structural defects." },
                { title: "Thermal Insights", description: "Detect internal delamination or moisture ingress." },
                { title: "Digital Archiving", description: "Maintain a visual history of asset condition." },
                { title: "Safety First", description: "Reduce risk to inspectors by using unmanned systems." },
                { title: "Operational Continuity", description: "Inspect without shutting down the asset (often)." }
            ],
            process: [
                { title: "Mission Scoping", description: "Identify critical structural zones for inspection." },
                { title: "Data Acquisition", description: "Close-proximity flight for detailed imagery." },
                { title: "3D Reconstruction", description: "Create photogrammetric models of the structure." },
                { title: "Engineering Review", description: "Civil engineers analyze data for defects." }
            ],
            deliverables: [
                { title: "3D Cloud/Mesh", description: "Interactable model of the infrastructure." },
                { title: "Defect Report", description: "Annotated images showing cracks, rust, etc." },
                { title: "Orthomosaic Map", description: "Top-down high-res view of the site." },
                { title: "Measurement Data", description: "Precise dimensions of identified defects." }
            ]
        },
        {
            id: "surveillance",
            title: "Surveillance",
            description: "Aerial security and perimeter monitoring for critical assets.",
            image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop",
            overview: {
                title: "Aerial Surveillance Overview",
                content: "Our surveillance drones provide real-time aerial situational awareness for large industrial plants, construction sites, and event venues. We offer active monitoring to deter intrusion, document progress, and ensure site safety compliance.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
            },
            benefits: [
                { title: "Live Streaming", description: "Low-latency video feed to command centers." },
                { title: "Deterrence", description: "Visible aerial presence discourages unauthorized entry." },
                { title: "Large Coverage", description: "Patrol consistent perimeters faster than guards." },
                { title: "Thermal Night Vision", description: "24/7 monitoring capability in total darkness." },
                { title: "Event Documentation", description: "Record site activities for legal or compliance review." },
                { title: "Rapid Response", description: "Deploy quickly to investigate triggered alarms." }
            ],
            process: [
                { title: "Perimeter Setup", description: "Define geofences and patrol routes." },
                { title: "Scheduled Patrols", description: "Automated flights at varied intervals." },
                { title: "Real-time Monitoring", description: "Security team views live feed and controls camera." },
                { title: "Incident Logging", description: "Record and store footage of any anomalies." }
            ],
            deliverables: [
                { title: "Live Video Feed", description: "Secure stream accessible via web or mobile." },
                { title: "Incident Reports", description: "Time-stamped video clips of security events." },
                { title: "Patrol Logs", description: "Documentation of flight times and areas covered." },
                { title: "Site Maps", description: "Updated aerial maps for security planning." }
            ]
        },
        {
            id: "industrial-utility-inspection",
            title: "Industrial Utility Inspection",
            description: "Detailed thermal and visual inspection of factory utilities.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Industrial Utility Overview",
                content: "Factories and refineries rely on complex utility networks. We inspect flare stacks, cooling towers, chimneys, and external piping for thermal leaks, insulation failure, and structural integrity, ensuring operational efficiency and safety.",
                image: "https://images.unsplash.com/photo-1565193566173-034e460366b8?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Online Inspection", description: "No need for plant shutdown during inspection." },
                { title: "Heat Loss Detection", description: "Identify poor insulation and energy waste." },
                { title: "Hazard Reduction", description: "Avoid putting humans in high-heat or height zones." },
                { title: "Preventative Maintenance", description: "Catch issues before they cause failure." },
                { title: "Compliance", description: "Adhere to environmental and safety regulations." },
                { title: "Comprehensive View", description: "See the top-side of assets rarely visible from ground." }
            ],
            process: [
                { title: "Safety Briefing", description: "Align with plant safety protocols and permits." },
                { title: "Asset Survey", description: "Systematic thermal scanning of utility assets." },
                { title: "Data Analysis", description: "Thermal experts quantify heat loss and severity." },
                { title: "Remediation Plan", description: "Report generation for maintenance teams." }
            ],
            deliverables: [
                { title: "Thermal Report", description: "Images showing temperature distribution." },
                { title: "Visual Defect Log", description: "Photos of rust, cracks, or damage." },
                { title: "Energy Loss Estimate", description: "Calculations on potential savings from repairs." },
                { title: "Asset Condition Score", description: "Rating system for utility health." }
            ]
        },
        {
            id: "inventory-management",
            title: "Inventory Management",
            description: "Volumetric measurements for stockpiles and quarries.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Stockpile Volumetrics Overview",
                content: "Accurately measuring large stockpiles of coal, aggregate, or minerals is time-consuming manually. Our drone photogrammetry generates precise 3D volumetric data in minutes, providing accurate inventory audits and reconciliation.",
                image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "99% Accuracy", description: "Survey-grade accuracy comparable to LiDAR." },
                { title: "Fast Results", description: "Stockpile reports generated within 24 hours." },
                { title: "Safety", description: "No surveyors walking on unstable piles." },
                { title: "Audit Trail", description: "Digital record of inventory at specific dates." },
                { title: "Cost Savings", description: "Fraction of the cost of traditional surveying." },
                { title: "Material Tracking", description: "Monitor cut/fill volumes over time." }
            ],
            process: [
                { title: "GCP Placement", description: "Set Ground Control Points for maximum accuracy." },
                { title: "Aerial Grid Flight", description: "Capture overlapping nadir imagery." },
                { title: "Photogrammetry", description: "Process images into a dense 3D point cloud." },
                { title: "Volume Calculation", description: "Compute volumes relative to base plane." }
            ],
            deliverables: [
                { title: "Volume Report", description: "PDF with volume calculations for each pile." },
                { title: "Contour Map", description: "Topographic lines of the stockpile site." },
                { title: "3D Mesh", description: "Visualization of the inventory." },
                { title: "Inventory Table", description: "CSV file for ERP integration." }
            ]
        },
        {
            id: "topographic-survey",
            title: "Topographic Survey",
            description: "High-precision mapping for land development and engineering.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Topographic Mapping Overview",
                content: "We deliver CAD-ready topographic maps and Digital Terrain Models (DTM) for construction, mining, and urban planning. Our aerial surveys cover huge areas rapidly, capturing every terrain feature with high geometric fidelity.",
                image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2070&auto=format&fit=crop"
            },
            benefits: [
                { title: "Survey Grade", description: "Accuracy down to 1-3 cm with RTK/PPK." },
                { title: "Dense Data", description: "Millions of points versus hundreds with total station." },
                { title: "Project Speed", description: "Weeks of surveying done in a single day." },
                { title: "Terrain Filtering", description: "Digital removal of vegetation to see ground." },
                { title: "Visual Context", description: "High-res orthophomap underlays the topo data." },
                { title: "Cost Efficiency", description: "Significant savings on large land tracts." }
            ],
            process: [
                { title: "Reference Setup", description: "Establish geodetic control network." },
                { title: "Data Capture", description: "Systematic aerial mapping flight." },
                { title: "Photogrammetry", description: "Generate point clouds and ortho-mosaics." },
                { title: "Feature Extraction", description: "Digitize kerbs, buildings, and contours." }
            ],
            deliverables: [
                { title: "Topographic Map", description: "CAD (DWG/DXF) file with contours and features." },
                { title: "Orthomosaic", description: "High-resolution geo-referenced map image." },
                { title: "DEM/DTM", description: "Digital Elevation Models for flooding analysis." },
                { title: "Survey Report", description: "Quality checking and methodology report." }
            ]
        },
    ],

    industries: [
        {
            id: "solar-energy",
            title: "Solar Energy",
            description: "Maximize PV plant performance with aerial thermography and EL testing.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
            overview: {
                title: "Solar Energy Solutions",
                content: "We provide end-to-end aerial diagnostics for utility-scale solar plants. From commissioning to O&M, our drone-based thermography and electroluminescence (EL) testing identify critical faults like hotspots, PID, and cell cracks ensuring maximum energy generation.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            },
            applications: [
                { title: "Commissioning Checks", description: "Verify system health before handover." },
                { title: "Annual O&M Audits", description: "Routine health checks to maintaining warranty." },
                { title: "Warranty Claims", description: "Evidence-based reports for module replacement." },
                { title: "Due Diligence", description: "Asset valuation for M&A activities." }
            ],
            benefits: [
                "Maximize Energy Yield",
                "Reduce O&M Costs",
                "Ensure IEC Compliance",
                "Historical Data Tracking"
            ]
        },
        {
            id: "wind-energy",
            title: "Wind Energy",
            description: "Inspect turbine blades and towers with autonomous precision.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Wind Energy Solutions",
                content: "Our autonomous drone inspections deliver millimeter-accurate data on wind turbine blades and towers. We detect leading-edge erosion, lightning damage, and structural cracks, enabling predictive maintenance that extends asset life.",
                image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2070&auto=format&fit=crop"
            },
            applications: [
                { title: "Blade Inspection", description: "Detect cracks, delays, and erosion." },
                { title: "Tower Inspection", description: "Check for corrosion and structural integrity." },
                { title: "End-of-Warranty", description: "Comprehensive audit before warranty expiry." }
            ],
            benefits: [
                "Reduce Downtime",
                "Safe Remote Inspection",
                "Detailed Defect Analytics",
                "Prevent Catastrophic Failure"
            ]
        },
        {
            id: "power-utilities",
            title: "Power & Utilities",
            description: "Ensure grid reliability with transmission line and substation monitoring.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Power & Utility Solutions",
                content: "We support power utilities in maintaining grid stability through rapid aerial inspection of transmission lines, distribution networks, and substations. Our sensors detect corona, thermal hotspots, and vegetation encroachment.",
                image: "https://images.unsplash.com/photo-1621360841012-6368d601b80d?q=80&w=2070&auto=format&fit=crop"
            },
            applications: [
                { title: "Corridor Mapping", description: "Vegetation management and varying clearance checks." },
                { title: "Substation Monitoring", description: "Thermal checks of insulators and transformers." },
                { title: "Tower Inspection", description: "Structural analysis of pylons and hardware." }
            ],
            benefits: [
                "Prevent Outages",
                "Optimize Vegetation Trimming",
                "Fire Risk Mitigation",
                "Faster Storm Response"
            ]
        },
        {
            id: "infrastructure",
            title: "Infrastructure",
            description: "Detailed structural health monitoring for bridges, dams, and roads.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Infrastructure Solutions",
                content: "Our aerial solutions provide critical data for the lifecycle management of civil infrastructure. We create 3D digital twins and detailed inspection reports for bridges, dams, railways, and tunnels, tracking deterioration over time.",
                image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
            },
            applications: [
                { title: "Bridge Inspection", description: "Under-deck and bearing operational checks." },
                { title: "Dam Monitoring", description: "Detect cracks, seepage, and surface shifts." },
                { title: "Road & Rail", description: "Pavement condition layout and mapping." }
            ],
            benefits: [
                "Access Hard-to-Reach Areas",
                "No Traffic Disruptions",
                "Digital Record Keeping",
                "Precision Measurements"
            ]
        },
        {
            id: "industrial-plants",
            title: "Industrial Plants",
            description: "Secure and maintain large-scale industrial facilities from the air.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
            overview: {
                title: "Industrial Plant Solutions",
                content: "For large refineries, chemical plants, and manufacturing hubs, we offer aerial surveillance, thermal leak detection, and utility inspections. Enhance safety and security while monitoring critical process equipment.",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
            },
            applications: [
                { title: "Perimeter Security", description: "Automated patrols and intrusion detection." },
                { title: "Gas Leak Detection", description: "Identify fugitive emissions and leaks." },
                { title: "Pipe Rack Inspection", description: "Check insulation and structural supports." }
            ],
            benefits: [
                "Enhanced Site Security",
                "Environmental Compliance",
                "Reduce Personnel Risk",
                "24/7 Monitoring Capability"
            ]
        },
        {
            id: "land-highway",
            title: "Land & Highway",
            description: "Accelerate surveying and mapping for development projects.",
            image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2070&auto=format&fit=crop",
            overview: {
                title: "Land & Highway Solutions",
                content: "We revolutionize land surveying with LiDAR and photogrammetry. Whether for new highway planning, urban development, or mining, our data provides survey-grade topographical maps and cut/fill volume calculations.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
            },
            applications: [
                { title: "Topographic Mapping", description: "Contour maps for engineering design." },
                { title: "Progress Monitoring", description: "Regular updates on construction sites." },
                { title: "Volumetric Analysis", description: "Stockpile and earthwork measurements." }
            ],
            benefits: [
                "Survey Large Areas Fast",
                "Centimeter-Level Accuracy",
                "Integrate with CAD/GIS",
                "Reduce Project Delays"
            ]
        }
    ],

    contact: {
        emails: ["hemal@varunaat.in", "Namaste@varunaat.in"],
        address: "310, Kalp Business Park, Odhav Industrial Estate, S P Ring Road, Ahmedabad, Gujarat – 382415",
        phones: ["+91 8320653318", "+91 9913874033"],
    },

    quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/contact" },
    ],

    footerServices: [
        "Solar Panel Inspection",
        "Windmill Inspection",
        "Powerline Inspection",
        "Pipeline Inspection",
        "Infrastructure Monitoring",
        "Surveillance",
        "Industrial Utility Inspection",
        "Inventory Management",
        "Topographic Survey"
    ]
};
