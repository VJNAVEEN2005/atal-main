const Navbar_menu = [
  {
    Title: "Home",
    link: "/",
    drop: null,
  },
  {
    Title: `Portfolio `,
    link: "/",
    drop: "active",
    dropList: [
      {
        title: "Startup Details",
        link: "/startupDetail",
      },
      {
        title: "Students Projects",
        link: "/studentProject",
      },
    ],
  },
  {
    Title: "Programs",
    link: "/",
    drop: "active",
    dropList: [
      {
        title: "Pre-Incubate",
        link: "/",
      },
      {
        title: "Incubate",
        link: "/",
      },
      {
        title: "Incubation",
        link: "/",
      },
      {
        title: "IP Facilities",
        link: "/",
      },
    ],
  },
  {
    Title: "Partners",
    link: "/partners",
    drop: "active",
    dropList: [
      {
        title: "Academic Partners",
        link: "/academicPartners",
      },
      {
        title: "Co-operative Parnters",
        link: "/cooperativePartners",
      },
      {
        title: "IP Supporterns",
        link: "/ipSupporters",
      },
      {
        title: "Networking Partners",
        link: "/networkingPartners",
      },
      {
        title: "Investment Partners",
        link: "/investmentPartner",
      },
    ],
  },
  {
    Title: "Events",
    link: "/events",
    dropList: null,
  },
  {
    Title: "Funding",
    link: "/fundng",
    drop: "active",
    dropList: [
      {
        title: "SISFS",
        link: "/sisfs",
      },
      {
        title: "PROPLEX",
        link: "/proplex",
      },
      {
        title: "Aim Seed Investments",
        link: "/aimseed",
      },
      {
        title: "External Funding Support",
        link: "/external",
      },
    ],
  },
  {
    Title: "Tenders",
    link: "/tenders",
    dropList: null,
  },
  {
    Title: "Contact Us",
    link: "/contact",
    drop: null,
  },
];

export default Navbar_menu;
