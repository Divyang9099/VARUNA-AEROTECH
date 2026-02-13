
import { Thermometer, Camera, Layers, Cloud, Compass, FileText, Activity, Zap, Search, Map } from 'lucide-react';

export const heroFeaturesData = {
    // Slide 1: Aerial Data Acquisition
    "thermal-data": {
        title: "Thermal Data Acquisition",
        description: "Detect anomalies and varying temperatures across large-scale assets with high-precision radiometric thermal imaging. Our thermal drones identify inefficiencies in solar panels, electrical transmission lines, and industrial equipment invisible to the naked eye.",
        features: [
            "Radiometric JPEG & TIFF support",
            "Hotspot & Coldspot detection",
            "Temperature variance analysis",
            "Automated reporting"
        ],
        icon: Thermometer,
        color: "blue",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109446/varuna-aerotech/mockups/thermal_analysis_mockup.jpg"
    },
    "rgb-data": {
        title: "RGB Data Acquisition",
        description: "Capture high-resolution visual data for comprehensive asset inspection, mapping, and documentation. We utilize high-megapixel sensors to provide crystal-clear imagery for detailed analysis and digital twin creation.",
        features: [
            "4K/8K Video & 45MP+ Stills",
            "Orthomosaic mapping",
            "Visual defect identification",
            "Asset digitization"
        ],
        icon: Camera,
        color: "emerald",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109458/varuna-aerotech/mockups/visual_inspection_mockup.jpg"
    },
    "lidar-data": {
        title: "LiDAR Data Collection",
        description: "Penetrate vegetation and capture precise elevation data with Light Detection and Ranging (LiDAR). Ideal for topographical surveys, forestry management, and complex terrain mapping where photogrammetry falls short.",
        features: [
            "High point-density clouds",
            "Vegetation penetration",
            "Digital Terrain Models (DTM)",
            "3D City modeling"
        ],
        icon: Layers,
        color: "purple",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109431/varuna-aerotech/mockups/mapping_3d_mockup.jpg"
    },

    // Slide 2: Renewable Energy
    "solar-plant-inspection": {
        title: "Solar Plant Inspection",
        description: "Maximize energy output by identifying defective cells, bypass diode failures, and soiling issues. Our IEC 62446-3 compliant inspections ensure your solar assets are performing at peak efficiency.",
        features: [
            "IEC 62446-3 Compliant",
            "Module-level defect detection",
            "Geo-tagged anomaly reports",
            "Yield loss estimation"
        ],
        icon: Thermometer,
        color: "orange",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109441/varuna-aerotech/mockups/solar_inspection_mockup.jpg"
    },
    "windmill-inspection": {
        title: "Windmill Inspection",
        description: "Safely inspect wind turbine blades, nacelles, and towers without rope access. We detect cracks, erosion, lightning strikes, and delamination with autonomous drone flight paths.",
        features: [
            "Blade erosion detection",
            "Lightning strike assessment",
            "High-res visual & thermal",
            "Automated flight patterns"
        ],
        icon: Cloud,
        color: "sky",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109427/varuna-aerotech/mockups/infrastructure_audit_mockup.jpg"
    },
    "solar-project-tracking": {
        title: "E2E Solar Project Tracking",
        description: "Monitor the entire lifecycle of your solar plant construction from land grading to commissioning. Get weekly or monthly progress updates compared against design plans (CAD overlays).",
        features: [
            "Construction vs Design comparison",
            "Timeline verification",
            "Material stockpile measurement",
            "Regular progress reports"
        ],
        icon: Compass,
        color: "yellow",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109439/varuna-aerotech/mockups/project_progress_mockup.jpg"
    },

    // Slide 3: Power Sector
    "transmission-tower-inspection": {
        title: "Transmission Tower Inspection",
        description: "Inspect high-voltage transmission towers for structural integrity, rust, missing components, and insulator damage. Our drones operate safely in high-interference electromagnetic environments.",
        features: [
            "Isolator & Insulator checks",
            "Rust & Corrosion detection",
            "Loose hardware identification",
            "Safe standoff distances"
        ],
        icon: Layers,
        color: "cyan",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109455/varuna-aerotech/mockups/transmission_tower_mockup.jpg"
    },
    "power-line-inspection": {
        title: "Power Line Inspection",
        description: "Survey miles of power lines rapidly to detect sagging, vegetation encroachment, and hotspots. We help utility companies prevent outages and forest fires through proactive vegetation management.",
        features: [
            "Sag analysis",
            "Vegetation encroachment (ROW)",
            "Corona discharge detection",
            "Thermal hotspot monitoring"
        ],
        icon: FileText,
        color: "teal",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109437/varuna-aerotech/mockups/power_line_mockup.jpg"
    },

    // Slide 4: Industrial | Utility
    "pipeline-inspection": {
        title: "Pipeline Inspection",
        description: "Monitor oil, gas, and water pipelines for leaks, corrosion, and unauthorized activity. Our long-range drones cover vast distances to ensure pipeline integrity and security.",
        features: [
            "Leak detection (Gas/Liquid)",
            "Right-of-Way monitoring",
            "Corrosion assessment",
            "Security surveillance"
        ],
        icon: Compass,
        color: "rose",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109434/varuna-aerotech/mockups/pipeline_inspection_mockup.jpg"
    },
    "surveillance": {
        title: "Aerial Surveillance",
        description: "Enhance perimeter security for large industrial complexes with aerial patrols. We provide real-time video feeds and day/night monitoring to detect customized threats and intrusions.",
        features: [
            "Day & Night vision (Thermal)",
            "Real-time video streaming",
            "Perimeter security",
            "Event monitoring"
        ],
        icon: Camera,
        color: "red",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109458/varuna-aerotech/mockups/visual_inspection_mockup.jpg"
    },
    "utility-inspection": {
        title: "Utility Infrastructure Inspection",
        description: "Broad-spectrum inspection services for varying utility assets including cooling towers, smokestacks, and water tanks. Detect structural cracks and wear before they become critical failures.",
        features: [
            "Concrete crack detection",
            "Rust & wear analysis",
            "Confined space entry (optional)",
            "Asset lifecycle management"
        ],
        icon: FileText,
        color: "blue",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109427/varuna-aerotech/mockups/infrastructure_audit_mockup.jpg"
    },

    // Slide 5: Infrastructure | Land
    "project-progress-monitoring": {
        title: "Project Progress Monitoring",
        description: "Keep your infrastructure projects on track with regular aerial updates. We provide stakeholders with a transparent view of site progress, reducing travel time and improving decision-making.",
        features: [
            "Time-lapse generation",
            "Side-by-side timeline view",
            "Remote stakeholder updates",
            "Dispute resolution evidence"
        ],
        icon: FileText,
        color: "indigo",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109439/varuna-aerotech/mockups/project_progress_mockup.jpg"
    },
    "volume-estimation": {
        title: "Volume Estimation",
        description: "Accurate stockpile measurement for mining and construction. We calculate volumes of piles (gravel, coal, sand) and cut/fill requirements with high precision using photogrammetry.",
        features: [
            "99% Volumetric accuracy",
            "Cut & Fill calculations",
            "Inventory management",
            "Reporting in PDF/Excel"
        ],
        icon: Layers,
        color: "violet",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109439/varuna-aerotech/mockups/project_progress_mockup.jpg"
    },
    "topographical-survey": {
        title: "Topographical Survey",
        description: "Generate detailed contour maps and topographic surveys for land development, road planning, and urban design. Our aerial surveys are faster and more dense than traditional land surveying methods.",
        features: [
            "Contour mapping",
            "Land classification",
            "Ortho-rectified imagery",
            "GIS integration"
        ],
        icon: Compass,
        color: "fuchsia",
        mockupImg: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109431/varuna-aerotech/mockups/mapping_3d_mockup.jpg"
    }
};
