
type dataTypes = {
    title: string;
    items: dataTypesDetails[];
}
type dataTypesDetails = {
    name: string;
    details: string;
}
export const data: dataTypes[] = [
    {
        title: "Construction_Materials",
        items: [
            {
                name: "Cement",
                details: "A key ingredient in concrete, cement is used in construction for its strong bonding properties.",
            },
            {
                name: "Steel_Reinforcement",
                details: "Steel bars and mesh used to reinforce concrete structures, providing strength and flexibility.",
            },
            {
                name: "Timber",
                details: "Wood used for framing, flooring, and other construction purposes, prized for its versatility and ease of use.",
            },
            {
                name: "Insulation_Materials",
                details: "Materials such as foam, fiberglass, and cellulose used to reduce heat loss or gain in buildings.",
            },
            {
                name: "Glass",
                details: "Used in windows, facades, and interior finishes for its transparency and aesthetic appeal.",
            },
        ],
    },
    {
        title: "Suppliers_and_Contractors",
        items: [
            {
                name: "Building_Material_Suppliers",
                details: "Companies that provide essential construction materials like concrete, cement, wood, and aggregates.",
            },
            {
                name: "Electrical_Suppliers",
                details: "Suppliers of wiring, electrical components, and lighting systems for residential and commercial buildings.",
            },
            {
                name: "Construction_Contractors",
                details: "General contractors or specialized contractors who handle the actual construction work and project management.",
            },
            {
                name: "Masonry_Suppliers",
                details: "Suppliers that provide bricks, stones, and other materials for masonry work.",
            },
        ],
    },
    {
        title: "Construction_Activities",
        items: [
            {
                name: "Foundation_Laying",
                details: "The first step in construction where the foundation is dug and reinforced with concrete to support the structure.",
            },
            {
                name: "Structural_Framing",
                details: "The process of building the frame of the structure, including columns, beams, and floors, often with steel or wood.",
            },
            {
                name: "Electrical_Work",
                details: "Involves the installation of electrical wiring, panels, outlets, and other systems for power distribution.",
            },
            {
                name: "Interior_Finishing",
                details: "The work done on the inside of the building, including drywall, flooring, painting, and the installation of fixtures.",
            },
            {
                name: "Landscaping",
                details: "The exterior work, including planting, lawn care, and the installation of outdoor structures like fences and pathways.",
            },
        ],
    },
    {
        title: "Construction_Finance",
        items: [
            {
                name: "Project_Budgeting",
                details: "The process of estimating and managing the costs of the construction project, from materials to labor.",
            },
            {
                name: "Cost_Tracking",
                details: "Monitoring the ongoing costs of the project to ensure it stays within the allocated budget.",
            },
            {
                name: "Payment_Schedule",
                details: "Agreed-upon milestones for releasing payments to contractors and suppliers based on completed work.",
            },
            {
                name: "Tax_Considerations",
                details: "Understanding the tax implications of construction projects, including sales tax on materials and labor.",
            },
            {
                name: "Insurance",
                details: "Construction insurance covers risks such as property damage, injury, and other liabilities during the project.",
            },
        ],
    },
    {
        title: "Equipment_and_Tools",
        items: [
            {
                name: "Excavators",
                details: "Heavy machinery used for digging and moving earth, ideal for site preparation and trenching.",
            },
            {
                name: "Concrete_Pumps",
                details: "Equipment used to transport liquid concrete from the mixer to the desired location on the construction site.",
            },
            {
                name: "Forklifts",
                details: "Used for lifting and moving heavy materials and supplies around the construction site.",
            },
            {
                name: "Welding_Equipment",
                details: "Tools used for joining metal parts through heating and melting processes, commonly used in steel structures.",
            },
            {
                name: "Power_Tools",
                details: "Various hand-held tools powered by electricity or battery used in construction, such as drills and saws.",
            },
        ],
    },
    {
        title: "Labor_and_Management",
        items: [
            {
                name: "Skilled_Labor",
                details: "Laborers with specialized skills, such as electricians, plumbers, and welders, who work on specific tasks.",
            },
            {
                name: "Unskilled_Labor",
                details: "General laborers who perform tasks such as lifting, cleaning, and assisting skilled workers on the construction site.",
            },
            {
                name: "Project_Managers",
                details: "Individuals responsible for overseeing the entire project, ensuring that timelines, budgets, and quality standards are met.",
            },
            {
                name: "Construction_Supervisors",
                details: "Supervise the day-to-day work on-site, ensuring safety and quality control for all tasks performed.",
            },
            {
                name: "Safety_Officers",
                details: "Ensure compliance with safety regulations, conduct risk assessments, and provide training on safety protocols.",
            },
        ],
    },
    {
        title: "Safety_and_Regulations",
        items: [
            {
                name: "Workplace_Safety_Guidelines",
                details: "Set of procedures to ensure the well-being of workers, including hazard identification, protective equipment, and emergency procedures.",
            },
            {
                name: "Fire_Safety",
                details: "Regulations and precautions taken to prevent fires on the construction site, including the installation of fire alarms and extinguishers.",
            },
            {
                name: "Environmental_Regulations",
                details: "Laws and guidelines that govern the impact of construction on the environment, including waste disposal and emission controls.",
            },
            {
                name: "Construction_Standards",
                details: "A set of technical specifications and quality standards that must be adhered to for structural integrity and safety.",
            },
            {
                name: "Permits_and_Licenses",
                details: "Government approvals required before construction can begin, including building permits, zoning approvals, and environmental clearances.",
            },
        ],
    },
];
