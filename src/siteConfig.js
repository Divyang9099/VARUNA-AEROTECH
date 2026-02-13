import { Camera, Shield, Zap, BarChart3, Globe, Cpu, Wind, Activity, Eye, FileText, Map, Settings, CheckCircle, Users, Layers, Award, FileCheck } from "lucide-react";

// Cloudinary URLs for service/industry images
const pipelineImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030411/varuna-aerotech/assets/pipeline_inspection_drone.jpg";
const solarImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030414/varuna-aerotech/assets/solar_panel_inspection_drone.jpg";
const windImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030417/varuna-aerotech/assets/windmill_inspection_drone.jpg";
const powerlineImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030422/varuna-aerotech/assets/powerline_inspection_drone.jpg";
const infrastructureImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030424/varuna-aerotech/assets/infrastructure_monitoring_drone.jpg";
const surveillanceImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030427/varuna-aerotech/assets/surveillance_drone.jpg";
const utilityImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030433/varuna-aerotech/assets/industrial_utility_drone.jpg";
const inventoryImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030442/varuna-aerotech/assets/inventory_management_drone.jpg";
const topoImg = "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770030446/varuna-aerotech/assets/topographic_survey_drone.jpg";

export const siteConfig = {
    name: "VARUNA AEROTECH",
    tagline: "Aerial Data Intelligence",
    description: "Advanced diagnostics and asset reliability solutions for the renewable energy sector.",
    logo: "/logo.png",

    hero: {
        title: "Aerial Data Acquisition",
        subtitle: "Drone Thermography • EL Testing • Barcode Scanning • Transmission-Line Inspection. Reports compliant with IEC 62446-3:2022.",
        bullets: ["Aerial Data Intelligence", "On Demand Aerial Data Acquisition"]
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        {
            label: "Services",
            href: "/#services",
            dropdown: [
                "Aerial Data Acquisition",
                "Solar Panel Inspection",
                "Windmill Inspection",
                "Powerline Inspection",
                "Pipeline/Utility Inspection",
                "Infrastructure Progress Monitoring",
                "Industrial Surveillance",
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
            id: "aerial-data-acquisition",
            title: "Aerial Data Acquisition",
            description: "High-resolution aerial imagery and data capture for comprehensive site analysis.",
            image: inventoryImg, // Reusing inventory image as it fits general data capture
            overview: {
                title: "Aerial Data Acquisition Overview",
                content: "We provide on-demand aerial data acquisition services using state-of-the-art drones equipped with high-resolution RGB, thermal, and multispectral sensors. Whether for mapping, modeling, or inspection, our data provides the foundation for informed decision-making.",
                image: inventoryImg
            },
            benefits: [
                { title: "High Resolution", description: "Capture details invisible to the naked eye." },
                { title: "Rapid Deployment", description: "Survey large areas in a fraction of the time." },
                { title: "Multi-Sensor", description: "RGB, Thermal, and LiDAR capabilities." },
                { title: "Actionable Data", description: "Process-ready data for engineering and analysis." },
                { title: "Cost Effective", description: "Significantly cheaper than manned aircraft survey." },
                { title: "Safety", description: "Remote operation keeps personnel out of harm's way." }
            ],
            process: [
                { title: "Flight Planning", description: "Define area of interest and required resolution." },
                { title: "Data Capture", description: "Systematic automated flight execution." },
                { title: "Processing", description: "image stitching and data calibration." },
                { title: "Delivery", description: "Cloud-based delivery of raw and processed assets." }
            ],
            deliverables: [
                { title: "Orthomosaics", description: "High-res stitched maps." },
                { title: "Raw Imagery", description: "Original uncompressed sensor data." },
                { title: "3D Models", description: "Photogrammetric reconstructions." },
                { title: "Point Clouds", description: "Dense 3D data points." }
            ]
        },
        {
            id: "solar-panel-inspection",
            title: "Solar Panel Inspection",
            description: "Maximize energy yield with IEC-compliant thermal inspections.",
            image: solarImg,
            overview: {
                title: "Solar Thermography Overview",
                content: "Drone Thermography employs UAV-mounted, high-resolution infrared sensors to perform rapid, non-invasive surveys of the entire PV array. By capturing precise thermal data under stable irradiance conditions, we detect and map temperature anomalies—such as hotspots, bypass-diode failures, string imbalances, and cell-level defects—before they adversely impact energy yield or escalate into safety hazards.",
                image: solarImg
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
            image: windImg,
            overview: {
                title: "Wind Turbine Inspection Overview",
                content: "Our autonomous drone inspections capture high-resolution imagery of wind turbine blades, nacelles, and towers. We identify cracks, erosion, lightning strikes, and composite delamination with millimeter precision, enabling preventative maintenance and maximizing turbine uptime.",
                image: windImg
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
            image: powerlineImg,
            overview: {
                title: "Transmission Line Overview",
                content: "We provide comprehensive monitoring for transmission and distribution lines. Our sensors detect corona discharges, identify vegetation encroachment, and inspect insulator health, helping utilities prevent outages and ensure grid reliability.",
                image: powerlineImg
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
            id: "pipeline-utility-inspection",
            title: "Pipeline/Utility Inspection",
            description: "Monitor pipeline integrity and industrial utilities with thermal precision.",
            image: pipelineImg,
            overview: {
                title: "Pipeline & Utility Overview",
                content: "Our combined pipeline and utility inspection services ensure the security and efficiency of critical transport and processing infrastructure. We monitor for leaks, RoW encroachments, and utility insulation failures using dual-sensor drones.",
                image: pipelineImg
            },
            benefits: [
                { title: "Dual Detection", description: "Simultaneous leak detection and visual security." },
                { title: "Heat Loss Analysis", description: "Identify insulation failures in utility piping." },
                { title: "RoW Monitoring", description: "Detect unauthorized construction or excavation." },
                { title: "Environmental Safety", description: "Prevent contamination through early warning." },
                { title: "Cost Efficiency", description: "Combined survey reduces mobilization costs." },
                { title: "Regulatory Compliance", description: "Adhere to safety and environmental standards." }
            ],
            process: [
                { title: "Route Planning", description: "Define linear flight plans for pipelines and utility corridors." },
                { title: "Sensor Acquisition", description: "Capture high-res thermal and RGB data." },
                { title: "Anomaly Analysis", description: "Flag leaks, encroachments, and thermal defects." },
                { title: "Reporting", description: "Comprehensive reporting for maintenance action." }
            ],
            deliverables: [
                { title: "Leak/Fault Report", description: "GPS coordinates of suspected leaks or defects." },
                { title: "RoW Video", description: "Full high-definition flyover video." },
                { title: "Thermal Analysis", description: "Temperature gradient maps of utilities." },
                { title: "GIS Layer", description: "Integration ready files for asset maps." }
            ]
        },
        {
            id: "infrastructure-progress-monitoring",
            title: "Infrastructure Progress Monitoring",
            description: "Track construction and structural health over time.",
            image: infrastructureImg,
            overview: {
                title: "Progress Monitoring Overview",
                content: "We provide detailed visual and thermal tracking of infrastructure projects. From construction progress to structural health monitoring of bridges and dams, our digital twins and reports ensure projects stay on track and assets remain safe.",
                image: infrastructureImg
            },
            benefits: [
                { title: "Visual Timeline", description: "Compare site status across different dates." },
                { title: "Remote Access", description: "Reach hard-to-access areas safely." },
                { title: "High Resolution", description: "Capture sub-millimeter details." },
                { title: "Digital Archiving", description: "Maintain a visual history of the asset." },
                { title: "Stakeholder Updates", description: "Share progress easily with investors/owners." },
                { title: "Delay Mitigation", description: "Identify bottlenecks early." }
            ],
            process: [
                { title: "Mission Scoping", description: "Identify key areas for progress tracking." },
                { title: "Regular Flights", description: "Scheduled data capture at fixed intervals." },
                { title: "3D Reconstruction", description: "Create photogrammetric models." },
                { title: "Timeline Generation", description: "Compile data into a progress report." }
            ],
            deliverables: [
                { title: "Progress Report", description: "Visual comparison of planned vs actual." },
                { title: "3D Cloud/Mesh", description: "Interactable model of the site." },
                { title: "Orthomosaic Map", description: "Top-down high-res view." },
                { title: "Measurement Data", description: "Volume and dimensional checks." }
            ]
        },
        {
            id: "industrial-surveillance",
            title: "Industrial Surveillance",
            description: "Aerial security and perimeter monitoring for critical assets.",
            image: surveillanceImg,
            overview: {
                title: "Industrial Surveillance Overview",
                content: "Our surveillance drones provide real-time aerial situational awareness for large industrial plants, construction sites, and event venues. We offer active monitoring to deter intrusion, document progress, and ensure site safety compliance.",
                image: surveillanceImg
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
            id: "topographic-survey",
            title: "Topographic Survey",
            description: "High-precision mapping for land development and engineering.",
            image: topoImg,
            overview: {
                title: "Topographic Mapping Overview",
                content: "We deliver CAD-ready topographic maps and Digital Terrain Models (DTM) for construction, mining, and urban planning. Our aerial surveys cover huge areas rapidly, capturing every terrain feature with high geometric fidelity.",
                image: topoImg
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
        "Aerial Data Acquisition",
        "Solar Panel Inspection",
        "Windmill Inspection",
        "Powerline Inspection",
        "Pipeline/Utility Inspection",
        "Infrastructure Progress Monitoring",
        "Industrial Surveillance",
        "Topographic Survey"
    ]
};
