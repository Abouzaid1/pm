
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
        title: "Materials",
        items: [
            {
                name: "Cement",
                details: "Portland cement, used in the construction of buildings, roads, and other infrastructure.",
            },
            {
                name: "Aggregates",
                details: "Coarse and fine aggregates used in the production of concrete, including sand, gravel, and crushed stone.",
            },
            {
                name: "Admixtures",
                details: "Chemical additives used to enhance or modify the properties of concrete, such as accelerators, retarders, and plasticizers.",
            },
            {
                name: "Reinforcement_Bars",
                details: "Steel bars (rebar) used to reinforce concrete in structural applications.",
            },
            {
                name: "Bricks",
                details: "Building blocks made from fired clay or concrete used in masonry construction.",
            },
        ],
    },
    {
        title: "Suppliers",
        items: [
            {
                name: "Material_Suppliers",
                details: "Companies providing construction materials such as cement, aggregates, and steel.",
            },
            {
                name: "Equipment_Suppliers",
                details: "Suppliers of construction machinery, tools, and equipment used on construction sites.",
            },
            {
                name: "Safety_Gear_Suppliers",
                details: "Suppliers of safety equipment such as helmets, gloves, high-visibility clothing, and harnesses.",
            },
        ],
    },
    {
        title: "Activities",
        items: [
            {
                name: "Excavation",
                details: "Digging and moving earth for foundations, trenches, and other construction purposes.",
            },
            {
                name: "Concrete_Pouring",
                details: "The process of mixing and placing concrete in forms for structural components.",
            },
            {
                name: "Masonry_Work",
                details: "Construction using bricks, stones, or concrete blocks to build walls, foundations, and other structures.",
            },
            {
                name: "Steel_Framework",
                details: "Construction of buildings and bridges using steel columns, beams, and reinforcements.",
            },
            {
                name: "Electrical_Installation",
                details: "Installation of electrical systems, including wiring, outlets, switches, and lighting.",
            },
            {
                name: "Plumbing",
                details: "Installation of water supply, drainage, and sewerage systems within a building.",
            },
            {
                name: "Roofing",
                details: "Construction of roofs using various materials such as shingles, tiles, and metal.",
            },
        ],
    },
    {
        title: "Equipment",
        items: [
            {
                name: "Excavators",
                details: "Large construction machines used for digging and moving earth or material.",
            },
            {
                name: "Cranes",
                details: "Heavy equipment used to lift and move materials or heavy objects on construction sites.",
            },
            {
                name: "Bulldozers",
                details: "Powerful machines used for pushing earth and material around on construction sites.",
            },
            {
                name: "Concrete_Mixers",
                details: "Machines used for mixing concrete ingredients such as cement, sand, and water.",
            },
            {
                name: "Generators",
                details: "Portable or stationary devices used to provide power to construction sites.",
            },
        ],
    },
    {
        title: "Labor",
        items: [
            {
                name: "Construction_Workers",
                details: "Skilled and unskilled laborers who perform various construction tasks such as bricklaying, carpentry, and site preparation.",
            },
            {
                name: "Engineers",
                details: "Professionals responsible for planning, designing, and overseeing the construction project, ensuring it is built to specifications.",
            },
            {
                name: "Architects",
                details: "Design professionals who develop the plans and designs for the construction project.",
            },
            {
                name: "Safety_Inspectors",
                details: "Professionals who ensure that construction sites comply with health and safety regulations.",
            },
            {
                name: "Project_Managers",
                details: "Individuals responsible for overseeing the entire construction project, managing timelines, budgets, and resources.",
            },
        ],
    },
];
