export type Bi<T = string> = { nl: T; en: T }

export const site = {
  name: "Afonso Matos da Cruz",
  shortName: "AMC",
  role: { nl: "Grafisch Ontwerper", en: "Graphic Designer" } as Bi,
  location: { nl: "Gent, België", en: "Ghent, Belgium" } as Bi,
  email: "afonso.matosdecruz@student.grafischetechnieken.be",
  cv: "/assets/cv-afonso-matos-da-cruz.pdf",
  socials: [
    { label: "Instagram", short: "Ig", href: "https://www.instagram.com/afonsomatosdacruz/" },
    { label: "Behance", short: "Be", href: "https://www.behance.net/afonsomatos" },
    { label: "LinkedIn", short: "Li", href: "https://www.linkedin.com/in/afonsomatos/" },
  ],
}

export const nav: { href: string; label: Bi }[] = [
  { href: "/", label: { nl: "Start", en: "Home" } },
  { href: "/work", label: { nl: "Werk", en: "Work" } },
  { href: "/about", label: { nl: "Over", en: "About" } },
  { href: "/photography", label: { nl: "Fotografie", en: "Photography" } },
  { href: "/contact", label: { nl: "Contact", en: "Contact" } },
]

export const hero = {
  availability: { nl: "Beschikbaar voor stage & freelance", en: "Available for internship & freelance" } as Bi,
  nameLines: ["AFONSO", "MATOS", "DA CRUZ"],
  roles: [
    {
      label: { nl: "Discipline", en: "Discipline" } as Bi,
      value: { nl: "Grafisch Ontwerper", en: "Graphic Designer" } as Bi,
    },
    {
      label: { nl: "Focus", en: "Focus" } as Bi,
      value: { nl: "Editorial & Typografie", en: "Editorial & Typography" } as Bi,
    },
    {
      label: { nl: "Locatie", en: "Location" } as Bi,
      value: { nl: "Gent, België", en: "Ghent, Belgium" } as Bi,
    },
  ],
  scroll: { nl: "Scroll", en: "Scroll" } as Bi,
  tagline: { nl: "Editorial — Branding — Motion — Web", en: "Editorial — Branding — Motion — Web" } as Bi,
}

export const marqueeItems: Bi[] = [
  { nl: "Editorial Design", en: "Editorial Design" },
  { nl: "Typografie", en: "Typography" },
  { nl: "Branding", en: "Branding" },
  { nl: "Visuele Identiteit", en: "Visual Identity" },
  { nl: "Art Direction", en: "Art Direction" },
  { nl: "Motion Design", en: "Motion Design" },
  { nl: "Webdesign", en: "Web Design" },
  { nl: "Gent, BE", en: "Ghent, BE" },
]

export type Project = {
  slug: string
  num: string
  year: string
  title: Bi
  sub: Bi
  tags: string[]
  img: string
  alt: string
}

export const projects: Project[] = [
  {
    slug: "smak",
    num: "01",
    year: "2025",
    title: { nl: "Beeld, Twijfel & Constructie", en: "Image, Doubt & Construction" },
    sub: { nl: "Tentoonstellingsontwerp — S.M.A.K. Gent", en: "Exhibition design — S.M.A.K. Ghent" },
    tags: ["Branding", "Print", "Motion", "Web"],
    img: "/assets/smak/poster.jpg",
    alt: "S.M.A.K. exhibition poster",
  },
  {
    slug: "disco",
    num: "02",
    year: "2025",
    title: { nl: "Project Disco", en: "Project Disco" },
    sub: { nl: "Multimediaal — Editorial, Video & Web", en: "Multimedia — Editorial, Video & Web" },
    tags: ["Editorial", "Motion", "Web"],
    img: "/assets/disco/spread.jpg",
    alt: "Project Disco editorial spread",
  },
  {
    slug: "oostende",
    num: "03",
    year: "2025",
    title: { nl: "Project Oostende", en: "Project Ostend" },
    sub: { nl: "Brand Identity — Visueel identiteitssysteem", en: "Brand identity — Visual identity system" },
    tags: ["Branding", "Identity", "Print"],
    img: "/assets/oostende/styleguide.jpg",
    alt: "Project Ostend styleguide",
  },
]

export const workSection = {
  label: { nl: "01 — Geselecteerd werk", en: "01 — Selected work" } as Bi,
  title: { nl: "Projecten", en: "Projects" } as Bi,
  viewProject: { nl: "Bekijk project", en: "View project" } as Bi,
}

export const interstitial = {
  text: { nl: "Design dat iets zegt.", en: "Design that says something." } as Bi,
  emphasis: { nl: "zegt.", en: "something." } as Bi,
}

export const about = {
  label: { nl: "02 — Over mij", en: "02 — About me" } as Bi,
  title: { nl: "Wie ik ben", en: "Who I am" } as Bi,
  heading: { nl: "Design dat iets zegt.", en: "Design that says something." } as Bi,
  photoLabel: { nl: "Don Bosco SDW · Gent · 2025", en: "Don Bosco SDW · Ghent · 2025" } as Bi,
  intro: {
    nl: "Ik ben Afonso Matos da Cruz — grafisch ontwerper vanuit Gent met een scherp oog voor typografie, editorial design en visuele identiteit. Elk ontwerp heeft iets te zeggen, en de manier waarop het dat zegt is minstens zo belangrijk als de boodschap zelf.",
    en: "I'm Afonso Matos da Cruz — a graphic designer from Ghent with a sharp eye for typography, editorial design and visual identity. Every design has something to say, and the way it says it matters just as much as the message itself.",
  } as Bi,
  secondary: {
    nl: "Momenteel in opleiding Grafische Technieken (4D A-GT) aan Don Bosco Sint-Denijs-Westrem. Naast schoolprojecten werk ik aan persoonlijke werken en bouw ik aan Rich Minds.",
    en: "Currently studying Graphic Techniques (4D A-GT) at Don Bosco Sint-Denijs-Westrem. Alongside school projects I work on personal pieces and am building Rich Minds.",
  } as Bi,
  table: [
    {
      key: { nl: "Opleiding", en: "Education" } as Bi,
      value: {
        nl: "Grafische Technieken (4D A-GT) — Don Bosco SDW, Gent",
        en: "Graphic Techniques (4D A-GT) — Don Bosco SDW, Ghent",
      } as Bi,
    },
    {
      key: { nl: "Expertise", en: "Expertise" } as Bi,
      value: {
        nl: "Editorial · Typografie · Branding · Visual Identity · Webdesign · Motion",
        en: "Editorial · Typography · Branding · Visual Identity · Web Design · Motion",
      } as Bi,
    },
    {
      key: { nl: "Software", en: "Software" } as Bi,
      value: {
        nl: "Illustrator · Photoshop · InDesign · Premiere · After Effects · HTML · CSS · JS",
        en: "Illustrator · Photoshop · InDesign · Premiere · After Effects · HTML · CSS · JS",
      } as Bi,
    },
    {
      key: { nl: "Locatie", en: "Location" } as Bi,
      value: { nl: "Gent, België", en: "Ghent, Belgium" } as Bi,
    },
  ],
  downloadCv: { nl: "CV Downloaden", en: "Download CV" } as Bi,
  collaborate: { nl: "Samenwerken", en: "Let's collaborate" } as Bi,
  pillars: [
    {
      num: { nl: "01 — Concept", en: "01 — Concept" } as Bi,
      title: { nl: "Concept boven esthetiek", en: "Concept over aesthetics" } as Bi,
      text: {
        nl: "Design dat alleen mooi is, is incompleet. Elk visueel besluit verdient een reden.",
        en: "Design that is only beautiful is incomplete. Every visual decision deserves a reason.",
      } as Bi,
    },
    {
      num: { nl: "02 — Typografie", en: "02 — Typography" } as Bi,
      title: { nl: "Type als architectuur", en: "Type as architecture" } as Bi,
      text: {
        nl: "Lettertype, witruimte en hiërarchie vormen de structuur van elke communicatie.",
        en: "Typeface, whitespace and hierarchy form the structure of every communication.",
      } as Bi,
    },
    {
      num: { nl: "03 — Precisie", en: "03 — Precision" } as Bi,
      title: { nl: "Minder is preciezer", en: "Less is more precise" } as Bi,
      text: {
        nl: "Minder keuzes, scherpere intenties. Witruimte is een designbeslissing, geen tekort.",
        en: "Fewer choices, sharper intentions. Whitespace is a design decision, not a shortage.",
      } as Bi,
    },
  ],
}

export type ArchiveItem = { img: string; name: Bi; type: Bi }

export const archive = {
  label: { nl: "03 — Losse werken", en: "03 — Loose works" } as Bi,
  title: { nl: "Overige Werken", en: "Other Works" } as Bi,
  count: "07",
  note: {
    nl: "Experimentele posters, persoonlijke projecten en grafische werken buiten de grote projecten.",
    en: "Experimental posters, personal projects and graphic works beyond the major projects.",
  } as Bi,
  items: [
    {
      img: "/assets/algemeen/travis-scott.jpg",
      name: { nl: "Travis Scott Poster", en: "Travis Scott Poster" },
      type: { nl: "Typografische Poster", en: "Typographic Poster" },
    },
    {
      img: "/assets/algemeen/silent-spring.jpg",
      name: { nl: "Silent Spring", en: "Silent Spring" },
      type: { nl: "Grafische Compositie", en: "Graphic Composition" },
    },
    {
      img: "/assets/algemeen/waveform-ticket.jpg",
      name: { nl: "Waveform Ticket", en: "Waveform Ticket" },
      type: { nl: "Drukwerk", en: "Print" },
    },
    {
      img: "/assets/algemeen/english-breakfast.jpg",
      name: { nl: "English Breakfast", en: "English Breakfast" },
      type: { nl: "Illustratieve Poster", en: "Illustrative Poster" },
    },
    {
      img: "/assets/algemeen/verbondenheid.jpg",
      name: { nl: "Verbondenheid", en: "Connectedness" },
      type: { nl: "Conceptuele Poster", en: "Conceptual Poster" },
    },
    {
      img: "/assets/algemeen/kaart-vis.jpg",
      name: { nl: "Visitekaartje", en: "Business Card" },
      type: { nl: "Drukwerk · Kaart", en: "Print · Card" },
    },
    {
      img: "/assets/algemeen/afonso-logo.jpg",
      name: { nl: "Personal Branding", en: "Personal Branding" },
      type: { nl: "Logo · Identiteit", en: "Logo · Identity" },
    },
  ] as ArchiveItem[],
}

export type Photo = { src: string; alt: Bi; tall?: boolean }

export const photography = {
  label: { nl: "04 — Fotografie & Video", en: "04 — Photography & Video" } as Bi,
  title: { nl: "Oog voor het beeld", en: "An eye for the image" } as Bi,
  heading: { nl: "Straat. Architectuur. Moment.", en: "Street. Architecture. Moment." } as Bi,
  emphasis: { nl: "Moment.", en: "Moment." } as Bi,
  text: {
    nl: "Naast grafisch ontwerp fotografeer ik — straatfotografie, architectuur, portret. Op zoek naar de spanning tussen licht, compositie en het vluchtige moment.",
    en: "Beyond graphic design I photograph — street photography, architecture, portrait. Searching for the tension between light, composition and the fleeting moment.",
  } as Bi,
  filmIntro: { nl: "Film: een kortfilm als visueel experiment.", en: "Film: a short film as visual experiment." } as Bi,
  film: {
    href: "https://youtu.be/1lDdIhFydRo?si=eWvjdmAVv6zohz67",
    thumb: "https://img.youtube.com/vi/1lDdIhFydRo/mqdefault.jpg",
    label: { nl: "Kortfilm", en: "Short Film" } as Bi,
    title: { nl: "Visueel Experiment 2025", en: "Visual Experiment 2025" } as Bi,
  },
  photos: [
    { src: "/assets/fotografie/foto1.jpg", alt: { nl: "Straatfotografie", en: "Street photography" }, tall: true },
    { src: "/assets/fotografie/foto3.jpg", alt: { nl: "Sfeerbeelden", en: "Atmosphere" } },
    { src: "/assets/fotografie/foto2.jpg", alt: { nl: "Licht en compositie", en: "Light and composition" } },
    { src: "/assets/fotografie/foto_9335.jpg", alt: { nl: "Straatfoto Gent", en: "Street photo Ghent" } },
    { src: "/assets/fotografie/foto4.jpg", alt: { nl: "Detail en textuur", en: "Detail and texture" } },
    { src: "/assets/fotografie/foto_9358.jpg", alt: { nl: "Architectuurstudie", en: "Architecture study" } },
    { src: "/assets/misc/woordwolk.jpg", alt: { nl: "Woordwolk — Illustrator", en: "Word cloud — Illustrator" }, tall: true },
    { src: "/assets/fotografie/foto_9421.jpg", alt: { nl: "Fotostudie", en: "Photo study" } },
    { src: "/assets/fotografie/foto_9460.jpg", alt: { nl: "Kleur en sfeer", en: "Color and mood" } },
  ] as Photo[],
}

export const contact = {
  label: { nl: "05 — Contact", en: "05 — Contact" } as Bi,
  title: { nl: "Samenwerken", en: "Get in touch" } as Bi,
  heading: { nl: "Laten we iets maken dat telt.", en: "Let's make something that matters." } as Bi,
  sub: {
    nl: "Beschikbaar voor stage, freelance en creatieve samenwerkingen.",
    en: "Available for internships, freelance and creative collaborations.",
  } as Bi,
  form: {
    name: { nl: "Naam", en: "Name" } as Bi,
    namePlaceholder: { nl: "Jouw naam", en: "Your name" } as Bi,
    nameError: { nl: "Vul je naam in", en: "Please enter your name" } as Bi,
    email: { nl: "E-mail", en: "Email" } as Bi,
    emailPlaceholder: { nl: "jouw@email.be", en: "you@email.com" } as Bi,
    emailError: { nl: "Geldig e-mailadres vereist", en: "Valid email required" } as Bi,
    subject: { nl: "Onderwerp", en: "Subject" } as Bi,
    subjectPlaceholder: { nl: "Stage · Freelance · Samenwerking", en: "Internship · Freelance · Collaboration" } as Bi,
    message: { nl: "Bericht", en: "Message" } as Bi,
    messagePlaceholder: { nl: "Vertel me over jouw project of idee…", en: "Tell me about your project or idea…" } as Bi,
    messageError: { nl: "Schrijf een bericht", en: "Please write a message" } as Bi,
    note: { nl: "Door in te dienen ga je akkoord met het privacybeleid.", en: "By submitting you agree to the privacy policy." } as Bi,
    submit: { nl: "Bericht versturen", en: "Send message" } as Bi,
    success: { nl: "Bedankt! Je bericht is geopend in je mailprogramma.", en: "Thanks! Your message has opened in your mail app." } as Bi,
  },
}

export const footer = {
  bigLine1: { nl: "LATEN WE", en: "LET'S" } as Bi,
  bigLine2: { nl: "SAMENWERKEN.", en: "WORK TOGETHER." } as Bi,
  bigEmphasis: { nl: "WERKEN", en: "TOGETHER" } as Bi,
  blurb: {
    nl: "Grafisch ontwerper beschikbaar voor stage, freelance en creatieve samenwerkingen. Vanuit Gent, bereikbaar voor de wereld.",
    en: "Graphic designer available for internships, freelance and creative collaborations. Based in Ghent, reachable for the world.",
  } as Bi,
  navTitle: { nl: "Navigatie", en: "Navigation" } as Bi,
  projectsTitle: { nl: "Projecten", en: "Projects" } as Bi,
  contactTitle: { nl: "Contact", en: "Contact" } as Bi,
  rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." } as Bi,
  legal: [
    { href: "/privacy", label: { nl: "Privacy", en: "Privacy" } as Bi },
    { href: "/cookies", label: { nl: "Cookies", en: "Cookies" } as Bi },
    { href: "/disclaimer", label: { nl: "Disclaimer", en: "Disclaimer" } as Bi },
  ],
}

/* ── PROJECT DETAIL CONTENT ─────────────────────────────────────── */

export type ProjectMeta = { key: Bi; value: Bi }
export type ProjectBlock =
  | { type: "image"; src: string; alt: Bi; caption?: Bi; full?: boolean }
  | { type: "gallery"; images: { src: string; alt: Bi }[] }
  | { type: "quote"; text: Bi; cite: Bi }
  | { type: "text"; heading?: Bi; paragraphs: Bi[] }

export type ProjectDetail = {
  slug: string
  index: number
  kicker: Bi
  titleLines: Bi[]
  titleEmphasis: Bi
  summaryMeta: ProjectMeta[]
  fullMeta: ProjectMeta[]
  source: { label: Bi; href: string }
  intro: Bi[]
  blocks: ProjectBlock[]
  prev?: { slug: string; title: Bi }
  next?: { slug: string; title: Bi }
}

export const projectDetails: Record<string, ProjectDetail> = {
  smak: {
    slug: "smak",
    index: 0,
    kicker: { nl: "Cultureel identiteitssysteem", en: "Cultural identity system" },
    titleLines: [
      { nl: "Beeld, Twijfel", en: "Image, Doubt" },
      { nl: "& Constructie", en: "& Construction" },
    ],
    titleEmphasis: { nl: "& Constructie", en: "& Construction" },
    summaryMeta: [
      { key: { nl: "Opdrachtgever", en: "Client" }, value: { nl: "S.M.A.K. Gent", en: "S.M.A.K. Ghent" } },
      { key: { nl: "Type", en: "Type" }, value: { nl: "Cultureel identiteitssysteem", en: "Cultural identity system" } },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: { nl: "Affiche · Uitnodigingen · Animatie · Website", en: "Poster · Invitations · Animation · Website" },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    fullMeta: [
      {
        key: { nl: "Opdrachtgever", en: "Client" },
        value: {
          nl: "S.M.A.K. — Stedelijk Museum voor Actuele Kunst, Gent",
          en: "S.M.A.K. — Municipal Museum of Contemporary Art, Ghent",
        },
      },
      {
        key: { nl: "Kunstenaar", en: "Artist" },
        value: { nl: "Marc De Blieck — Point de voir", en: "Marc De Blieck — Point de voir" },
      },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: {
          nl: "Visuele identiteit · Affiche · Uitnodigingen · Animaties · Website · Archiefdoos · Pixelbeelden",
          en: "Visual identity · Poster · Invitations · Animations · Website · Archive box · Pixel imagery",
        },
      },
      {
        key: { nl: "Software", en: "Software" },
        value: {
          nl: "Illustrator · Photoshop · InDesign · After Effects · Premiere · HTML/CSS",
          en: "Illustrator · Photoshop · InDesign · After Effects · Premiere · HTML/CSS",
        },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    source: {
      label: { nl: "Cursusbron · grafischetechnieken.be", en: "Course source · grafischetechnieken.be" },
      href: "https://grafischetechnieken.be",
    },
    intro: [
      {
        nl: "Een cultureel identiteitssysteem voor de tentoonstelling Point de voir van Marc De Blieck in het S.M.A.K. te Gent. Centrale vraag: wanneer geloven we een beeld?",
        en: "A cultural identity system for the exhibition Point de voir by Marc De Blieck at S.M.A.K. in Ghent. Central question: when do we believe an image?",
      },
      {
        nl: "Marc De Blieck (°1958, Sint-Niklaas) benadert fotografie als een nexus van technologische processen, culturele conventies en esthetische normen. Het integraal tentoonstellingsontwerp vertaalt twijfel als constructief designprincipe.",
        en: "Marc De Blieck (°1958, Sint-Niklaas) approaches photography as a nexus of technological processes, cultural conventions and aesthetic norms. The integral exhibition design translates doubt into a constructive design principle.",
      },
      {
        nl: "Typografie die balanceert op de grens van leesbaarheid, beelden die fragmenteren en herrijzen. Elk onderdeel spreekt dezelfde taal van spanning en onzekerheid.",
        en: "Typography balancing on the edge of legibility, images that fragment and re-emerge. Every element speaks the same language of tension and uncertainty.",
      },
    ],
    blocks: [
      {
        type: "image",
        src: "/assets/smak/poster.jpg",
        alt: { nl: "Tentoonstellingsaffiche A1", en: "Exhibition poster A1" },
        caption: { nl: "Tentoonstellingsaffiche — A1", en: "Exhibition poster — A1" },
      },
      {
        type: "quote",
        text: {
          nl: "Wanneer geloven we een beeld? Het moment van twijfel is het moment van grafisch denken.",
          en: "When do we believe an image? The moment of doubt is the moment of graphic thinking.",
        },
        cite: { nl: "Conceptuele basis · S.M.A.K. 2025", en: "Conceptual basis · S.M.A.K. 2025" },
      },
      {
        type: "image",
        src: "/assets/smak/affiche_schaduw.jpg",
        alt: { nl: "Affiche in context", en: "Poster in context" },
        caption: { nl: "Affiche in context", en: "Poster in context" },
        full: true,
      },
      {
        type: "image",
        src: "/assets/smak/pixelbeeld.jpg",
        alt: { nl: "Pixelwerk — algoritmische beeldconstructie", en: "Pixel work — algorithmic image construction" },
        caption: { nl: "Pixelwerk — Algoritmische beeldconstructie", en: "Pixel work — Algorithmic image construction" },
      },
      {
        type: "image",
        src: "/assets/smak/foto_affiche.jpg",
        alt: { nl: "Fotografische studie", en: "Photographic study" },
        caption: { nl: "Fotografische studie", en: "Photographic study" },
      },
      {
        type: "gallery",
        images: [
          { src: "/assets/smak/uitnodiging1.jpg", alt: { nl: "Uitnodiging 1", en: "Invitation 1" } },
          { src: "/assets/smak/uitnodiging2.jpg", alt: { nl: "Uitnodiging 2", en: "Invitation 2" } },
        ],
      },
      {
        type: "text",
        heading: { nl: "Archief & Research", en: "Archive & Research" },
        paragraphs: [
          {
            nl: "Een archiefdoos en research-materiaal vormen de fysieke neerslag van het onderzoek naar twijfel en beeldconstructie.",
            en: "An archive box and research material form the physical trace of the investigation into doubt and image construction.",
          },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "/assets/smak/archiefdoos.jpg", alt: { nl: "Archiefdoos", en: "Archive box" } },
          { src: "/assets/smak/archief_foto.jpg", alt: { nl: "Archief foto", en: "Archive photo" } },
        ],
      },
    ],
    next: { slug: "disco", title: { nl: "Project Disco", en: "Project Disco" } },
  },

  disco: {
    slug: "disco",
    index: 1,
    kicker: { nl: "Multimediaal Project", en: "Multimedia Project" },
    titleLines: [
      { nl: "Disco", en: "Disco" },
      { nl: "Revisited", en: "Revisited" },
    ],
    titleEmphasis: { nl: "Revisited", en: "Revisited" },
    summaryMeta: [
      { key: { nl: "Type", en: "Type" }, value: { nl: "Multimediaal Project", en: "Multimedia Project" } },
      {
        key: { nl: "Opleiding", en: "Education" },
        value: { nl: "Grafische Technieken · Don Bosco SDW", en: "Graphic Techniques · Don Bosco SDW" },
      },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: { nl: "Spread · Sfeerfilm · Website", en: "Spread · Atmosphere film · Website" },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    fullMeta: [
      {
        key: { nl: "Volledige titel", en: "Full title" },
        value: { nl: "Disco Revisited: From Memphis to Motion", en: "Disco Revisited: From Memphis to Motion" },
      },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: {
          nl: "Onderzoek · Moodboards · Editorial spread · Sfeerfilm · HTML/CSS website",
          en: "Research · Moodboards · Editorial spread · Atmosphere film · HTML/CSS website",
        },
      },
      {
        key: { nl: "Software", en: "Software" },
        value: {
          nl: "InDesign · Illustrator · Photoshop · Premiere Pro · HTML · CSS · JS",
          en: "InDesign · Illustrator · Photoshop · Premiere Pro · HTML · CSS · JS",
        },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    source: {
      label: { nl: "Cursusbron · grafischetechnieken.be", en: "Course source · grafischetechnieken.be" },
      href: "https://grafischetechnieken.be",
    },
    intro: [
      {
        nl: "Disco Revisited: From Memphis to Motion vertrekt bij Saturday Night Fever (1977) en onderzoekt hoe ritme, licht en kleur uit de discoscene voortleven in design.",
        en: "Disco Revisited: From Memphis to Motion starts from Saturday Night Fever (1977) and explores how rhythm, light and color from the disco scene live on in design.",
      },
      {
        nl: "Die energie leefde voort in de Memphis-beweging (Milaan, 1981): Ettore Sottsass en zijn groep vertaalden de vrijheid van de dansvloer naar meubels, patronen en visuele taal. Het project bundelt onderzoek en moodboards met een editorial spread, sfeerfilm en website — één coherente visuele stem.",
        en: "That energy lived on in the Memphis movement (Milan, 1981): Ettore Sottsass and his group translated the freedom of the dance floor into furniture, patterns and visual language. The project combines research and moodboards with an editorial spread, atmosphere film and website — one coherent visual voice.",
      },
    ],
    blocks: [
      {
        type: "image",
        src: "/assets/disco/spread.jpg",
        alt: { nl: "Editorial spread — dubbele pagina", en: "Editorial spread — double page" },
        caption: { nl: "Editorial Spread — InDesign · Dubbele pagina", en: "Editorial Spread — InDesign · Double page" },
        full: true,
      },
      {
        type: "image",
        src: "/assets/disco/hero.jpg",
        alt: { nl: "Hero compositie", en: "Hero composition" },
        caption: { nl: "Hero Compositie", en: "Hero Composition" },
      },
      {
        type: "quote",
        text: {
          nl: "Van de dansvloer naar het designbureau — ritme is overal.",
          en: "From the dance floor to the design studio — rhythm is everywhere.",
        },
        cite: { nl: "Project Disco · From Memphis to Motion · 2025", en: "Project Disco · From Memphis to Motion · 2025" },
      },
      {
        type: "text",
        heading: { nl: "Moodboards — Onderzoek & Referenties", en: "Moodboards — Research & References" },
        paragraphs: [],
      },
      {
        type: "gallery",
        images: [
          { src: "/assets/disco/moodboard1.jpg", alt: { nl: "Moodboard 1", en: "Moodboard 1" } },
          { src: "/assets/disco/moodboard2.jpg", alt: { nl: "Moodboard 2", en: "Moodboard 2" } },
        ],
      },
      {
        type: "image",
        src: "/assets/disco/djplaat.jpg",
        alt: { nl: "Illustratie — DJ plaat", en: "Illustration — DJ record" },
        caption: { nl: "Illustratie — DJ Plaat", en: "Illustration — DJ Record" },
      },
      {
        type: "image",
        src: "/assets/disco/video-poster.jpg",
        alt: { nl: "Sfeerfilm — video still", en: "Atmosphere film — video still" },
        caption: { nl: "Sfeerfilm · Adobe Premiere Pro · 2025", en: "Atmosphere film · Adobe Premiere Pro · 2025" },
        full: true,
      },
    ],
    prev: { slug: "smak", title: { nl: "Beeld, Twijfel & Constructie", en: "Image, Doubt & Construction" } },
    next: { slug: "oostende", title: { nl: "Project Oostende", en: "Project Ostend" } },
  },

  oostende: {
    slug: "oostende",
    index: 2,
    kicker: { nl: "Brand Identity & Webdesign", en: "Brand Identity & Web Design" },
    titleLines: [
      { nl: "Badcultuur", en: "Seaside Culture" },
      { nl: "aan Zee", en: "by the Sea" },
    ],
    titleEmphasis: { nl: "aan Zee", en: "by the Sea" },
    summaryMeta: [
      { key: { nl: "Type", en: "Type" }, value: { nl: "Brand Identity & Webdesign", en: "Brand Identity & Web Design" } },
      { key: { nl: "Thema", en: "Theme" }, value: { nl: "Badcultuur in Oostende", en: "Seaside culture in Ostend" } },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: { nl: "Styleguide · Spread · Animatie · Website", en: "Styleguide · Spread · Animation · Website" },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    fullMeta: [
      {
        key: { nl: "Categorie", en: "Category" },
        value: { nl: "Brand Identity · Webdesign · Animatie", en: "Brand Identity · Web Design · Animation" },
      },
      {
        key: { nl: "Deliverables", en: "Deliverables" },
        value: {
          nl: "Visuele identiteit · Styleguide · Editorial Spread · Character Animatie · Toeristische Website",
          en: "Visual identity · Styleguide · Editorial Spread · Character Animation · Tourist Website",
        },
      },
      {
        key: { nl: "Software", en: "Software" },
        value: {
          nl: "Illustrator · InDesign · Photoshop · After Effects · HTML · CSS · JS",
          en: "Illustrator · InDesign · Photoshop · After Effects · HTML · CSS · JS",
        },
      },
      { key: { nl: "Jaar", en: "Year" }, value: { nl: "2025", en: "2025" } },
    ],
    source: {
      label: { nl: "Cursusbron · Don Bosco SDW, Gent", en: "Course source · Don Bosco SDW, Ghent" },
      href: "https://grafischetechnieken.be",
    },
    intro: [
      {
        nl: "Oostende als koningin der badsteden. Dit project bouwt een volledig visueel identiteitssysteem op rond de historische badcultuur: van de Belle Époque tot vandaag.",
        en: "Ostend as the queen of seaside resorts. This project builds a complete visual identity system around the historic seaside culture: from the Belle Époque to today.",
      },
      {
        nl: "Strandcabines, de zeedijk, de Ensor-esthetiek en de maritieme sfeer als visueel bronmateriaal. Een kleurenpalet dat refereert aan badkarren en zilte lucht. Typografie die de grandeur van de belle époque echoot maar volledig hedendaags blijft.",
        en: "Beach cabins, the promenade, the Ensor aesthetic and the maritime atmosphere as visual source material. A color palette referencing bathing machines and salty air. Typography that echoes the grandeur of the belle époque while staying entirely contemporary.",
      },
      {
        nl: "Het systeem omvat een volledige styleguide, een editorial spread, een geanimeerd Ensor-personage en een toeristische HTML/CSS website.",
        en: "The system includes a complete styleguide, an editorial spread, an animated Ensor character and a tourist HTML/CSS website.",
      },
    ],
    blocks: [
      {
        type: "image",
        src: "/assets/oostende/styleguide.jpg",
        alt: { nl: "Visuele identiteit — volledige styleguide", en: "Visual identity — complete styleguide" },
        caption: { nl: "Visuele Identiteit — Volledige Styleguide", en: "Visual Identity — Complete Styleguide" },
        full: true,
      },
      {
        type: "quote",
        text: {
          nl: "Een locatie is meer dan een plek — het is een identiteitssysteem wachtend om ontdekt te worden.",
          en: "A location is more than a place — it is an identity system waiting to be discovered.",
        },
        cite: { nl: "Project Oostende · Badcultuur aan Zee · 2025", en: "Project Ostend · Seaside Culture · 2025" },
      },
      {
        type: "image",
        src: "/assets/oostende/spread.jpg",
        alt: { nl: "Editorial spread — InDesign", en: "Editorial spread — InDesign" },
        caption: { nl: "Editorial Spread — InDesign", en: "Editorial Spread — InDesign" },
      },
      {
        type: "image",
        src: "/assets/oostende/ensor_personage.jpg",
        alt: { nl: "Character design — James Ensor personage", en: "Character design — James Ensor character" },
        caption: { nl: "Character Design — James Ensor Personage", en: "Character Design — James Ensor Character" },
      },
      {
        type: "text",
        heading: { nl: "Toeristische Website — HTML/CSS/JS", en: "Tourist Website — HTML/CSS/JS" },
        paragraphs: [
          {
            nl: "De toeristische website Oostende — Stad aan Zee is opgebouwd in HTML, CSS en JavaScript met eigen animaties. Secties voor strand, zeedijk, culturele bezienswaardigheden, een moodgalerij en contactformulier.",
            en: "The tourist website Ostend — City by the Sea is built in HTML, CSS and JavaScript with custom animations. Sections for the beach, promenade, cultural landmarks, a mood gallery and contact form.",
          },
          {
            nl: "Stack: HTML5 · CSS3 · Google Fonts (Bodoni Moda, Lora) · Flexbox · CSS Animations.",
            en: "Stack: HTML5 · CSS3 · Google Fonts (Bodoni Moda, Lora) · Flexbox · CSS Animations.",
          },
        ],
      },
    ],
    prev: { slug: "disco", title: { nl: "Project Disco", en: "Project Disco" } },
  },
}

export const projectDetailUi = {
  back: { nl: "← Alle projecten", en: "← All projects" } as Bi,
  projectInfo: { nl: "Project info", en: "Project info" } as Bi,
  prevLabel: { nl: "← Vorig project", en: "← Previous project" } as Bi,
  nextLabel: { nl: "Volgend project →", en: "Next project →" } as Bi,
  videoNote: {
    nl: "Video beschikbaar in de volledige versie.",
    en: "Video available in the full version.",
  } as Bi,
}

/* ── LEGAL PAGES ────────────────────────────────────────────────── */

export type LegalDoc = {
  slug: string
  title: Bi
  updated: Bi
  sections: { heading: Bi; body: Bi[] }[]
}

export const legalPages: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: { nl: "Privacybeleid", en: "Privacy Policy" },
    updated: { nl: "Laatst bijgewerkt — 2025", en: "Last updated — 2025" },
    sections: [
      {
        heading: { nl: "Welke gegevens", en: "What data" },
        body: [
          {
            nl: "Deze portfoliosite verzamelt geen persoonsgegevens automatisch. Wanneer je het contactformulier gebruikt, opent dit je eigen e-mailprogramma — er wordt niets op deze site opgeslagen.",
            en: "This portfolio site does not automatically collect personal data. When you use the contact form, it opens your own email client — nothing is stored on this site.",
          },
        ],
      },
      {
        heading: { nl: "Hosting", en: "Hosting" },
        body: [
          {
            nl: "De site wordt gehost op Vercel. De hostingprovider kan technische logbestanden bijhouden voor beveiliging en prestaties.",
            en: "The site is hosted on Vercel. The hosting provider may keep technical logs for security and performance.",
          },
        ],
      },
      {
        heading: { nl: "Contact", en: "Contact" },
        body: [
          {
            nl: "Vragen over privacy? Neem contact op via het e-mailadres onderaan deze pagina.",
            en: "Questions about privacy? Get in touch via the email address at the bottom of this page.",
          },
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    title: { nl: "Cookiebeleid", en: "Cookie Policy" },
    updated: { nl: "Laatst bijgewerkt — 2025", en: "Last updated — 2025" },
    sections: [
      {
        heading: { nl: "Cookies", en: "Cookies" },
        body: [
          {
            nl: "Deze site plaatst geen tracking- of marketingcookies. Enkel strikt noodzakelijke voorkeuren, zoals je taalkeuze, worden lokaal in je browser bewaard.",
            en: "This site sets no tracking or marketing cookies. Only strictly necessary preferences, such as your language choice, are stored locally in your browser.",
          },
        ],
      },
      {
        heading: { nl: "Beheer", en: "Control" },
        body: [
          {
            nl: "Je kan lokale opslag op elk moment wissen via de instellingen van je browser.",
            en: "You can clear local storage at any time through your browser settings.",
          },
        ],
      },
    ],
  },
  disclaimer: {
    slug: "disclaimer",
    title: { nl: "Disclaimer", en: "Disclaimer" },
    updated: { nl: "Laatst bijgewerkt — 2025", en: "Last updated — 2025" },
    sections: [
      {
        heading: { nl: "Auteursrecht", en: "Copyright" },
        body: [
          {
            nl: "Al het getoonde werk is gemaakt door Afonso Matos da Cruz in een educatieve context. Beeldmateriaal en ontwerpen mogen niet zonder toestemming worden hergebruikt.",
            en: "All work shown is created by Afonso Matos da Cruz in an educational context. Imagery and designs may not be reused without permission.",
          },
        ],
      },
      {
        heading: { nl: "Bronnen", en: "Sources" },
        body: [
          {
            nl: "Sommige projecten zijn gebaseerd op opdrachten van grafischetechnieken.be. Merknamen en logo's behoren toe aan hun respectieve eigenaars.",
            en: "Some projects are based on assignments from grafischetechnieken.be. Brand names and logos belong to their respective owners.",
          },
        ],
      },
    ],
  },
}

export const legalUi = {
  back: { nl: "← Terug naar start", en: "← Back to home" } as Bi,
}
