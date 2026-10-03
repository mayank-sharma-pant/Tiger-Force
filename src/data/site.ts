export const site = {
  name: 'Tiger Force Group',
  email: 'info@tigerforcegroup.com',
  emailAlt: 'tigerforce007@yahoo.com',
  phones: ['9266972224', '01146091507', '9811165954'],
  phoneDisplay: '9266972224 · 01146091507',
  offices: [
    { label: 'Delhi office', line: 'K-316, Lado Sarai, New Delhi 110 030' },
    { label: 'Head office', line: 'C-1/2796, Sushant Lok-I, Gurgaon, Haryana' },
  ],
  websites: ['www.tigerforcegroup.com', 'www.tigerforcesecurity.co'],
};

export const sectors = [
  'Government institutes',
  'Hospitals',
  'Retail',
  'Hotels',
  'Corporates',
  'Logistics and warehouses',
  'Manufacturing',
  'Residential complexes',
];

export const clientsNamed = [
  'Doordarshan',
  'Indian Oil Corporation',
  'All India Radio',
  'MTNL',
  'Army College of Medical Sciences',
  'Ambedkar University',
  'Jamia Millia Islamia',
  'Institute of Chartered Accountants of India',
  'National Small Industries Corporation',
  'National Institute of Open Schooling',
  'Aditi Mahavidyalaya',
  'LG Electronics India',
  'Videocon',
  'Honda',
  'Shoppers Stop',
  'Paras Hospital',
  'Sheraton New Delhi Hotel',
  'Stellar Gymkhana',
  'Linfox Logistics',
  'Daikin Air-Conditioning',
  'Fortis Escorts Hospital, Jaipur',
  'DLF Services',
  'Dixon Technologies',
  'Agility Logistics',
  'Honda Logistics',
  'Indian Coast Guard',
  'Hindustan Times',
  'Moserbaer',
];

export const aboutLinks = [
  { href: '/brief-profile', label: 'Brief profile' },
  { href: '/vision', label: 'Vision' },
  { href: '/mission', label: 'Mission' },
  { href: '/values', label: 'Values' },
  { href: '/ethos', label: 'Ethos' },
  { href: '/mds-profile', label: 'MD’s profile' },
  { href: '/mds-message', label: 'MD’s message' },
  { href: '/eds-profile', label: 'ED’s profile' },
  { href: '/why-tiger-force', label: 'Why Tiger Force' },
];

export const serviceLinks = [
  { href: '/security', label: 'Security' },
  { href: '/housekeeping', label: 'Housekeeping' },
  { href: '/manpower', label: 'Manpower' },
];

export type Block =
  | { kind: 'prose'; paragraphs: string[] }
  | { kind: 'list'; items: string[] }
  | { kind: 'defs'; items: { title: string; text: string }[] };

export type Section = {
  heading?: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  lede: string;
  description: string;
  image?: string;
  imageAlt?: string;
  sections: Section[];
};

export const articles: Article[] = [
  {
    slug: 'brief-profile',
    title: 'A licensed company with three divisions.',
    kicker: 'Brief profile',
    lede: 'Tiger Force Group places trained people into security, housekeeping, and manpower, and stays on the site after they arrive.',
    description:
      'Tiger Force Group is a licensed security, housekeeping, and manpower company registered with the Directorate General Resettlement.',
    image: '/media/gallery/picture-1.jpg',
    imageAlt: 'Tiger Force guards assembled outdoors for parade.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Tiger Force Group supplies highly motivated, alert, and responsible people, trained for the post they will actually hold. The company is licensed and registered, and is registered with the Directorate General Resettlement, Ministry of Defence, New Delhi.',
              'The work runs across government and semi-government offices, corporates, and multinational organisations. PSARA licences cover various states. ISO certifications sit alongside them.',
              'Clients include Doordarshan, Indian Oil Corporation, All India Radio, MTNL, Army College of Medical Sciences, Ambedkar University, Jamia Millia Islamia, the Institute of Chartered Accountants of India, National Small Industries Corporation, the National Institute of Open Schooling, and Aditi Mahavidyalaya. Private clients include LG Electronics India, Videocon, Honda, Shoppers Stop, Paras Hospital, Sheraton New Delhi Hotel, Stellar Gymkhana, Linfox Logistics, and Daikin Air-Conditioning.',
              'The same standard covers industrial houses, five-star hotels, hospitals, corporate offices, educational institutes, and residential complexes.',
            ],
          },
        ],
      },
      {
        heading: 'Three divisions',
        blocks: [
          {
            kind: 'list',
            items: [
              'Tiger Force Security Services',
              'Tiger Force Housekeeping Services',
              'Tiger Force Manpower Solutions',
            ],
          },
        ],
      },
      {
        heading: 'Training',
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Training is treated as part of the service, not a preface to it. People are trained for the assignment, vetted, and verified by the police before deployment. Specific posts get additional training. Qualified training staff run that work.',
            ],
          },
        ],
      },
      {
        heading: 'Deployment',
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Pre-deployment, deployment, and post-deployment each have a written procedure. A professional survey of the premises comes first, with a written report and recommendations for security and housekeeping.',
              'Duties and instructions are written for each post. Operational staff supervise by day and by night. The promise is plain: the service that was described is the service that is delivered.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'vision',
    title: 'Quality manpower, in the places people depend on.',
    kicker: 'Vision',
    lede: 'Touching lives by providing quality manpower solutions — on the sites where a missed post is felt immediately.',
    description: 'Tiger Force Group’s vision: quality manpower solutions that hold up where people depend on them.',
    image: '/media/gallery/wa.jpg',
    imageAlt: 'A briefing beside trucks at a logistics yard.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'The stated vision is to touch lives by providing quality manpower solutions. In practice that means the guard at a hospital entrance, the housekeeping team on a hotel floor, and the desk that a visitor actually meets.',
              'The highest standard in security, housekeeping, and manpower is the work. Clients are treated as partners. Demand is taken as it is, then met with trained people, timely delivery, and constant monitoring.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'mission',
    title: 'Exceed the brief. Keep the people who can do it.',
    kicker: 'Mission',
    lede: 'Tiger Force Group aims to lead in security, housekeeping, and manpower by exceeding what the client expected, and by keeping a workforce worth deploying.',
    description:
      'The Tiger Force mission: quality manpower, constant improvement, and a workforce that is recruited, trained, and retained.',
    image: '/media/gallery/picture-12.jpg',
    imageAlt: 'A firefighting drill during training.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'The mission is to be the security, housekeeping, and manpower company clients return to — by exceeding expectations and delivering durable value. The means are quality manpower, constant improvement, grass-roots attention to the site, and research that changes the procedure.',
              'The other half of the mission is the workforce. Tiger Force sets out to attract, train, retain, and develop strong people by giving them a workplace that is disciplined and fair.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'values',
    title: 'Nine commitments, used on the site.',
    kicker: 'Values',
    lede: 'These are the working rules: how Tiger Force treats clients, staff, and the post itself.',
    description: 'Tiger Force values: teamwork, response, passion, discipline, trust, value, integrity, research, and custom work.',
    image: '/media/gallery/picture-20.jpg',
    imageAlt: 'Tiger Force staff at a reception desk.',
    sections: [
      {
        blocks: [
          {
            kind: 'defs',
            items: [
              {
                title: 'Teamwork',
                text: 'Ideas move. People cooperate. Internal teams and clients are treated as mates on the same job.',
              },
              {
                title: 'Response and care',
                text: 'Clients get a fast answer, with respect and attention to what the site actually needs.',
              },
              {
                title: 'Passion',
                text: 'The work is aimed at a result, including the extra mile when the post requires it.',
              },
              {
                title: 'Discipline',
                text: 'Deadlines are kept. Delivery is on time because the roster says so.',
              },
              {
                title: 'Trust',
                text: 'Clients and employees see a transparent account of what is being done.',
              },
              {
                title: 'Value',
                text: 'More of the service, at a fair cost, with the next improvement anticipated rather than requested.',
              },
              {
                title: 'Integrity',
                text: 'Decisions and actions stay honest toward every person they affect.',
              },
              {
                title: 'Research',
                text: 'Procedures are revised against what is changing in security, housekeeping, and manpower.',
              },
              {
                title: 'Custom work',
                text: 'A hospital, a warehouse, and a hotel do not get the same written order. The solution is built for the site.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ethos',
    title: 'A partner who is still there at the difficult hour.',
    kicker: 'Ethos',
    lede: 'Understand the requirement first. Survey the site. Then place people — and keep senior staff close while the routine settles.',
    description: 'The Tiger Force ethos: operational support, custom demand, and supervision that continues after deployment.',
    image: '/media/gallery/picture-19.jpg',
    imageAlt: 'Guards posted at an exhibition stand.',
    sections: [
      {
        blocks: [
          {
            kind: 'list',
            items: [
              'An operational support system that stands with the client when the site is under pressure.',
              'Manpower systems revised as the corporate environment changes.',
              'Quality inside the budget, and value that can be pointed at.',
              'The highest standard aimed at in security, housekeeping, and manpower.',
              'Work done as teammates and loyal business partners.',
              'The client’s requirement understood before anyone is placed.',
              'A consistent record of service, not a single good month.',
              'Dedicated people for operations, administration, and HR.',
              'Timely delivery, value for money, and constant monitoring.',
              'A professional survey before deployment, then senior operational staff on the client’s location while the environment, process, and procedures settle.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'mds-profile',
    title: 'Col K. K. Nanda (Retd), Managing Director.',
    kicker: 'MD’s profile',
    lede: 'Thirty-two years in the Indian Army. A second career built on audit, training, and event security — and on Tiger Force itself.',
    description:
      'Profile of Col K. K. Nanda (Retd), Managing Director of Tiger Force Security Services.',
    image: '/media/gallery/picture-19.jpg',
    imageAlt: 'Guards posted at an exhibition stand.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Tiger Force Security Services is headed by Col K. K. Nanda (Retd), a known name in the security industry. He served in the Indian Army for 32 years, including as an instructor at the National Defence Academy and Chief Instructor at WOTS, and he commanded an infantry battalion.',
              'His further study includes an MBA from IMM, Delhi; PGDBIM from IMDR, Pune; export marketing management from IIFT, New Delhi; an advanced diploma in systems management from NIIT; a senior executives management course; and a full-time course in industrial security and fire safety.',
              'Col Nanda works as a security consultant and auditor for multinational companies. He has organised security for major events in the country, including provision of security to Mr Bill Gates, and he specialises in event security. He has written security manuals, trained senior executives from the industry, and set down standard operating procedures across the field.',
              'He built Tiger Force Group into a disciplined, result-oriented company whose attention stays on the client: a clear security solution, and close support after the people are on post.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'mds-message',
    title: 'A note from the Managing Director.',
    kicker: 'MD’s message',
    lede: 'Two decades of clients, paid on time, surveyed before anyone is placed.',
    description: 'Message from Col K. K. Nanda (Retd), Managing Director of Tiger Force Group.',
    image: '/media/gallery/picture-1.jpg',
    imageAlt: 'Tiger Force guards assembled outdoors for parade.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'It is a privilege to present Tiger Force Group, and to thank the clients who have stayed with the company for the past nineteen years — two decades of continuous work.',
              'The endeavour has been the highest standard in security, housekeeping, and manpower. Clients are partners. The requirement is understood first, then met in the form the site actually needs.',
              'The client list crosses sectors: LG Electronics India, Videocon, Honda, Shoppers Stop, Paras Hospital, Sheraton New Delhi Hotel, Stellar Gymkhana, Linfox Logistics, and Daikin Air-Conditioning, alongside government and semi-government organisations including Doordarshan, Indian Oil Corporation, All India Radio, MTNL, Army College of Medical Sciences, Ambedkar University, Jamia Millia Islamia, the Institute of Chartered Accountants of India, National Small Industries Corporation, the National Institute of Open Schooling, and Aditi Mahavidyalaya.',
              'Dedicated people cover operations, administration, and HR. Delivery is on time. The service is monitored. A professional survey comes before personnel are placed, and senior operational staff stay at the client’s location in the early days so the environment and the procedures settle.',
              'The approach with clients and with staff has been an honest one. That is what has distinguished the company. Personnel are paid on time. Their welfare is part of the work. Many of the officers come from an army background. The security personnel are the strength of the company.',
              'We look forward to you as a client.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'eds-profile',
    title: 'Executive Director.',
    kicker: 'ED’s profile',
    lede: 'This profile has not been published.',
    description: 'The Executive Director profile at Tiger Force Group is not yet published.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'The current Tiger Force website reserves this page and does not publish a biography. Nothing has been invented to fill it. When the company releases the Executive Director’s profile, it belongs here.',
              'For the published leadership record, read the Managing Director’s profile.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'why-tiger-force',
    title: 'Choose the company that can name its standard.',
    kicker: 'Why Tiger Force',
    lede: 'Tiger Force calls that standard the Star: know the client, cover the post, and stay inside a budget without dropping the procedure.',
    description:
      'Why organisations choose Tiger Force for security, housekeeping, and manpower.',
    image: '/media/gallery/wa.jpg',
    imageAlt: 'A briefing beside trucks at a logistics yard.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Many companies offer security, housekeeping, and manpower. The useful question is which standard they can actually keep. Tiger Force answers with what it calls the Star — a core strength it is willing to state in plain terms. The company holds itself among the most cost-effective providers in these three fields, and it says so as a claim the work has to support.',
            ],
          },
        ],
      },
      {
        heading: 'Strengths',
        blocks: [
          {
            kind: 'list',
            items: [
              'The client’s vision, culture, and needs are identified before a roster is written.',
              'Key result areas, concerns, and actions are named against those needs.',
              'Security, housekeeping, and manpower are offered as a whole, not as three unrelated vendors.',
              'People on post are motivated, alert, responsible, and trained for the requirement.',
              'An operational support system stays available after deployment.',
              'Procedures are revised as the corporate environment changes.',
              'The company stands with the client in the difficult hour.',
              'Quality is held inside the budget. Value for money is a working rule, not a slogan.',
            ],
          },
        ],
      },
      {
        heading: 'Deployment, in three stages',
        blocks: [
          {
            kind: 'defs',
            items: [
              {
                title: 'Pre-deployment',
                text: 'Survey the premises. Write the requirement. Train for the specific post. Verify people before they are sent.',
              },
              {
                title: 'Deployment',
                text: 'Place people against written duties. Put senior operational staff on the location while the routine settles.',
              },
              {
                title: 'Post-deployment',
                text: 'Supervise by day and by night. Monitor the service. Correct what the site reveals.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security that is briefed, verified, and checked.',
    kicker: 'Security services',
    lede: 'Uniformed guarding, events, audit, VIP cover, investigations, and night patrol — headed by Col K. K. Nanda (Retd).',
    description:
      'Tiger Force Security Services: guarding, event security, audit, VIP cover, investigations, and night patrol. DGR registered.',
    image: '/media/gallery/picture-19.jpg',
    imageAlt: 'Guards posted at an exhibition stand.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Tiger Force Security Services fields guarding personnel who are motivated, alert, and trained for the requirement in front of them. The company is registered with the Directorate General Resettlement, Ministry of Defence, New Delhi.',
              'Security has been provided to government organisations including Doordarshan, All India Radio, Indian Oil Corporation, and MTNL, and to companies including LG Electronics, Shoppers Stop, Ambience Facilities, JM Morgan Stanley, Paras Hospital, DLF Services, Videocon, Fortis Escorts Hospital in Jaipur, Stellar Gymkhana, Honda Logistics, C&C Constructions, Daikin, ILJIN Electronics, Army College of Medical Sciences, ITC Sheraton New Delhi, Moserbaer, Hindustan Times, the Indian Coast Guard, Ambedkar University, the Institute of Chartered Accountants of India, and Jamia Millia Islamia.',
              'The division is headed by Col K. K. Nanda (Retd), a security auditor and consultant whose work has been called on by multinational companies. Industrial houses, five-star hotels, hospitals, corporate offices, and residential complexes are covered by experienced, trained staff.',
            ],
          },
        ],
      },
      {
        heading: 'Uniformed guarding',
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Selection, recruitment, training, and control are held to a strict criteria. The qualitative requirement of the site decides who is sent.',
            ],
          },
          {
            kind: 'defs',
            items: [
              {
                title: 'Hospitals',
                text: 'Security at Paras Hospital, Gurgaon, Fortis Escorts, and other hospitals, with procedures written for emergency, ICU, lifts, and OPD.',
              },
              {
                title: 'Hotels',
                text: 'Five-star work includes the Sheraton, part of the ITC group. Guards are trained for the porch, vehicle checks, baggage scanning, the time office, and for greeting and guiding guests.',
              },
              {
                title: 'Manufacturing',
                text: 'Gate registers, visitor and employee checks, and material in and out. Sites include Daikin Air-Conditioning, LG Electronics, and Dixon Technologies.',
              },
              {
                title: 'Logistics and warehouses',
                text: 'Incoming material, storage, and distribution, with guards trained not to let material be stacked or released against the procedure. Sites include LG warehouses, Agility Logistics, Honda Logistics, and Linfox Logistics.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Training and supervision',
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Personnel are trained for security assignments, vetted, and verified by the police before deployment. Further training covers the client’s specific duties: gate house, authorised entry of people, vehicles, and stores, patrolling, firefighting, first aid, emergencies, documents, communication systems, and manner.',
              'The programme runs 14 days, including 2 days of specialised training for corporate, hospitality, industry, or residential segments. On-the-job training follows, supervised by the training officer and operational officers, focused on the post itself.',
            ],
          },
          {
            kind: 'list',
            items: [
              'Area officers visit a location at least four times a week and sign the daily muster and the unit visit register.',
              'Night checks run at least three times a week, at varied hours, sometimes twice, so the check stays a surprise.',
              'Security personnel are briefed for 15 minutes before duty and debriefed for 15 minutes after.',
              'Senior staff visit on a rhythm: the area officer weekly, the operations manager fortnightly, another senior officer monthly.',
            ],
          },
        ],
      },
      {
        heading: 'Events, audit, and special cover',
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Event security runs from the day infrastructure is laid down through the close of the event, including escort of guests and hosts. Assignments have included Bridal Asia, a B.A. fashion show, Bride and Groom shows, an art and design show, an Indian Oil loud show, the India Gold Fair, a motor car rally, Petrotech Asia — 120 guards across four days — and the Amway Show in 2011.',
              'Security audit and consultancy is an in-depth reading of the premises and a recommendation that reduces risk and cost. The division also provides security cover for VIPs, investigations, and night patrol.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'housekeeping',
    title: 'Housekeeping written for the surface, not just the room.',
    kicker: 'Housekeeping services',
    lede: 'Custom cleaning for offices, hospitals, hotels, factories, and public areas — with the chemical matched to the surface.',
    description:
      'Tiger Force Housekeeping: offices, hospitals, hotels, public areas, factories, malls, IT parks, and warehouses.',
    image: '/media/housekeeping-2.jpg',
    imageAlt: 'Hotel room housekeeping.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Tiger Force Housekeeping offers custom, integrated housekeeping at a price the site can sustain. The aim is a workspace that is safe and hygienic for employees, customers, and visitors.',
              'Machines are used where they make the work faster and more consistent. Different surfaces take different chemicals. The wrong chemical on an expensive finish is treated as damage, not as cleaning.',
            ],
          },
        ],
      },
      {
        heading: 'How the service is held',
        blocks: [
          {
            kind: 'list',
            items: [
              'Commercial cleaning is tailored. An office, a ward, and a factory floor are not the same brief.',
              'The company works in an environment-friendly way.',
              'The expectation to beat is the client’s, not an internal checklist alone.',
              'Staff are trained again after the specific gap is identified.',
              'Sites are audited, with a relationship manager assigned.',
            ],
          },
        ],
      },
      {
        heading: 'Where the teams work',
        blocks: [
          {
            kind: 'list',
            items: [
              'Offices',
              'Hospitals',
              'Hotels',
              'Public areas',
              'Factories',
              'Shopping malls',
              'IT parks',
              'Warehouses',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'manpower',
    title: 'People for the desk, the floor, and the back office.',
    kicker: 'Manpower solutions',
    lede: 'Hospitality-led manpower under Mr Aditya Nanda, with the group’s direction from Col K. K. Nanda (Retd).',
    description:
      'Tiger Force Manpower Solutions: food and beverage, reception, IT desk, back office, accounts, and call centre staff.',
    image: '/media/gallery/picture-20.jpg',
    imageAlt: 'Tiger Force staff at a reception desk.',
    sections: [
      {
        blocks: [
          {
            kind: 'prose',
            paragraphs: [
              'Under the guidance of Col K. K. Nanda (Retd), the manpower wing is headed by Mr Aditya Nanda, who specialises in hospitality. The work is talent-led outsourcing of sales and operations: more output, at a cost the organisation can carry.',
            ],
          },
          {
            kind: 'list',
            items: [
              'Food and beverage service',
              'Kitchen stewarding',
              'Reception desk and receptionists',
              'IT desk solutions',
              'Computer operators',
              'Back-office staff',
              'Accounts executives',
              'Call centre solutions',
            ],
          },
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
