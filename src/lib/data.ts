export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    logo: string;
    overview?: string;
    role?: string;
    technologies?: string[];
    challenges?: string;
    outcome?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        slug: "dccc",
        title: "DCCC",
        description: "A digital portal for the Dnipro Center for Contemporary Culture, created to showcase regional art and enhance community engagement.",
        tags: ["React", "Next.js", "Tailwind", "Contentful", "GraphQL"],
        link: "https://dniproccc.org/en-US",
        logo: "/projects/logo-dccc.png",
        overview: "The Dnipro Center for Contemporary Culture (DCCC) faced a critical need to digitize their presence to maintain relevance and accessibility in a rapidly evolving cultural landscape. They required a robust, bilingual platform capable of handling high-resolution media galleries and dynamic event schedules without compromising on performance or SEO. The objective was to architect a solution that not only reflected their avant-garde brand identity but also provided an intuitive content management workflow for non-technical staff.",
        role: "Lead Frontend Engineer. I spearheaded the frontend architecture, utilizing Next.js for server-side rendering to ensure optimal SEO and initial load performance. I led the component design system development, ensuring consistency and reusability across the platform, and orchestrated the integration with Contentful CMS via GraphQL for efficient data fetching.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Contentful CMS", "GraphQL", "Vercel"],
        challenges: "A primary technical hurdle was engineering a seamless bilingual experience (English/Ukrainian) that supported deep-linking and preserved SEO metadata across language variants. Furthermore, rendering high-density image galleries and complex layout transitions demanded rigorous performance optimization. We had to ensure Core Web Vitals remained green despite the heavy media load.",
        outcome: "Delivered a high-performance, fully responsive platform that saw a 40% increase in user engagement and a 25% uptick in event attendance post-launch. The architecture enabled the content team to publish real-time updates for exhibitions and events solely through the CMS, eliminating engineering bottlenecks. The project established a new digital standard for cultural institutions in the region.",
        images: ["/projects/dccc-1.png"]
    },
    {
        slug: "custom-field-calculator",
        title: "Custom Field Calculator",
        description: "A Google Chrome extension for calculating custom fields in Pipedrive CRM.",
        tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express.js"],
        link: "https://www.pipedrive.com/",
        logo: "/projects/logo-cfcalc.png",
        overview: "Enterprise sales teams using Pipedrive CRM were struggling with data integrity and manual calculation errors, costing hundreds of man-hours monthly. The Custom Field Calculator was conceived as a sophisticated middleware solution—a Chrome extension injecting a calculation engine directly into the CRM interface to automate complex arithmetic logic between custom data fields in real-time.",
        role: "Full Stack Engineer & Architect. I designed and implemented the end-to-end solution, building the React-based extension frontend for DOM manipulation and the Node.js/Express backend for secure calculation logic and state synchronization.",
        challenges: "The most significant engineering challenge was achieving seamless, real-time synchronization with Pipedrive's dynamic DOM without introducing latency or stability issues. We had to reverse-engineer parts of the CRM's event loop to trigger calculations reliably upon field updates while ensuring the extension remaining lightweight and non-intrusive.",
        outcome: "The solution revolutionized the workflow for sales teams, saving an estimated 500+ hours of manual data entry per month for key clients and reducing calculation-related errors to near zero. It became an essential utility for high-volume sales operations, significantly improving data accuracy and forecasting reliability.",
        images: ["/projects/cfc-1.png"]
    },
    {
        slug: "batchapp",
        title: "BatchApp",
        description: "A web application and Google chrome extension for batch processing of orders in Katana MRP.",
        tags: ["React", "Next.js", "Node.js", "Vite", "Tailwind", "TypeScript"],
        link: "https://katanamrp.com/",
        logo: "/projects/logo-batch.png",
        overview: "Manufacturing businesses scaling their operations on Katana MRP faced a severe bottleneck: the inability to process print and fulfillment orders in bulk. BatchApp was developed as an enterprise-grade extension to bridge this gap, providing a unified dashboard for mass order selection, status updates, and document generation.",
        role: "Senior Frontend Engineer. I took ownership of the dashboard interface and the Chrome extension connection layer, focusing on creating a high-performance data grid capable of handling thousands of order rows without UI lag.",
        challenges: "The core complexity lay in handling large datasets entirely client-side to ensure responsiveness, while carefully managing API rate limits imposed by the Katana platform. Implementing a robust queue system for batch operations was essential to prevent timeouts and ensure data consistency during bulk updates.",
        outcome: "BatchApp was adopted as a mission-critical tool by several mid-sized manufacturers, streamlining their daily fulfillment workflows by over 60%. The tool transformed a disjointed, manual process into a streamlined, one-click operation, enabling clients to scale their order volume without proportional increases in administrative staff.",
        images: ["/projects/abx-1.png"]
    }
];
