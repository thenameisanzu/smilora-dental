export const clinic = {
  name: "Smilora Dental Care",
  shortName: "Smilora",
  tagline: "Gentle dentistry for a brighter smile.",
  subtitle:
    "Smilora Dental Care offers modern, painless, family-friendly dental care in the heart of Edappally, Kochi — from routine cleanings to smile makeovers.",
  city: "Edappally, Kochi, Kerala",
  address: "2nd Floor, Skyline Arcade, NH 66 Bypass, Edappally, Kochi, Kerala 682024",
  phone: "+91 98765 43210",
  tel: "+919876543210",
  whatsapp: "919876543210",
  email: "care@smiloradental.com",
  googleRating: 4.9,
  reviewCount: 1240,
  hours: [
    ["Monday – Saturday", "9:00 AM – 8:00 PM"],
    ["Sunday", "10:00 AM – 2:00 PM (Emergency & Morning Consultations)"]
  ],
  map: "https://www.google.com/maps?q=Edappally,Kochi,Kerala&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Edappally,Kochi,Kerala",
};

export const services = [
  {
    title: "Teeth Whitening",
    desc: "Safe, in-clinic whitening that removes years of coffee and tea stains in a single visit.",
    icon: "sparkles",
    duration: "45 mins",
  },
  {
    title: "General Dentistry & RCT",
    desc: "Cleanings, tooth fillings, painless microscopic root canals and check-ups — the foundation of oral health.",
    icon: "shield",
    duration: "45 mins",
  },
  {
    title: "Cosmetic & Veneers",
    desc: "Reshape, align and restore your smile with tailored ultra-thin porcelain veneers and digital smile design.",
    icon: "gem",
    duration: "2 sessions",
  },
  {
    title: "Digital X-Ray & 3D Scans",
    desc: "Low-radiation digital imaging and intraoral 3D scanning for pinpoint accuracy and clear treatment plans.",
    icon: "scan",
    duration: "15 mins",
  },
  {
    title: "Kids Dentistry",
    desc: "A calm, playful experience with fluoride protection so your little ones grow up loving the dentist.",
    icon: "baby",
    duration: "30 mins",
  },
  {
    title: "Implants & Aligners",
    desc: "Advanced titanium implants, clear aligners and ceramic orthodontics from experienced clinical specialists.",
    icon: "smile",
    duration: "Custom plan",
  },
] as const;

export const whyUs = [
  {
    title: "Experienced specialists",
    desc: "A team of qualified dentists, orthodontists and implantologists with 15+ years of combined experience.",
    icon: "award",
  },
  {
    title: "Modern technology",
    desc: "Digital X-rays, intraoral scanners and painless techniques for faster, more accurate treatment.",
    icon: "cpu",
  },
  {
    title: "Comfort-first care",
    desc: "Warm, unhurried appointments in a spotless clinic — because dentistry shouldn't feel scary.",
    icon: "heart",
  },
];

export const whiteningShowcase = {
  badge: "Transform Your Smile",
  title: "Teeth Whitening Showcase",
  description:
    "Our professional, in-clinic teeth whitening treatments utilize advanced, light-activated gel technology to remove deep enamel stains. Safe, comfortable, and highly effective.",
  features: [
    {
      title: "Up to 8 Shades Brighter",
      desc: "See instant results in just a single 45-minute dental session.",
    },
    {
      title: "Painless Enamel-Safe Gel",
      desc: "Specially formulated buffer ingredients to guarantee zero teeth sensitivity.",
    },
    {
      title: "Long-Lasting Radiance",
      desc: "Professional results that stay bright for up to 2 years with simple hygiene care.",
    },
  ],
};

export const doctors = [
  {
    name: "Dr. Anjali Menon",
    role: "Cosmetic & Restorative Dentist",
    credentials: "BDS, MDS (Aesthetic Dentistry)",
    specialty: "Digital Smile Design, Veneers & Teeth Whitening",
    experience: "12+ Years Experience",
    image: "/images/dr-anjali.jpg",
  },
  {
    name: "Dr. Rahul Nair",
    role: "Oral Surgeon & Implantologist",
    credentials: "BDS, MDS (Maxillofacial Surgery), FICOI",
    specialty: "Complex Extractions, Bone Grafting & Dental Implants",
    experience: "14+ Years Experience",
    image: "/images/dr-rahul.jpg",
  },
  {
    name: "Dr. Tobin Thomas",
    role: "Orthodontist & Dentofacial Orthopedist",
    credentials: "BDS, MDS (Orthodontics)",
    specialty: "Invisalign Certified, Ceramic Braces & Aligners",
    experience: "10+ Years Experience",
    image: "/images/dr-tobin.jpg",
  },
  {
    name: "Dr. Rose Maria Joseph",
    role: "Pediatric Dental Specialist",
    credentials: "BDS, MDS (Pedodontics)",
    specialty: "Preventive Pediatric Care & Gentle Child Dentistry",
    experience: "9+ Years Experience",
    image: "/images/dr-rose.jpg",
  },
];

export const reviews = [
  {
    name: "Anjali Menon",
    place: "Edappally, Kochi",
    rating: 5,
    treatment: "Microscopic Root Canal",
    text: "Dr. Rahul and the team were so gentle with my root canal — I felt zero pain. Genuinely the best dental experience I've had in Kochi.",
  },
  {
    name: "Rahul Thomas",
    place: "Kakkanad, Kochi",
    rating: 5,
    treatment: "Clear Aligners",
    text: "Got my clear aligners done here. Clean clinic, transparent consultations, and the results speak for themselves.",
  },
  {
    name: "Meera Krishnan",
    place: "Aluva, Kochi",
    rating: 5,
    treatment: "Kids Dentistry",
    text: "My kids actually look forward to their check-ups now. Super patient staff, lovely relaxing ambience, and very gentle care.",
  },
  {
    name: "Joseph Varghese",
    place: "Ernakulam, Kochi",
    rating: 5,
    treatment: "Laser Teeth Whitening",
    text: "Professional, punctual, and modern equipment. Done with whitening in under an hour. I've been recommending Smilora to my entire family.",
  },
];

export const faqs = [
  {
    q: "Is teeth whitening safe for enamel and sensitive teeth?",
    a: "Yes. We use EU-certified dental grade whitening gels combined with desensitizing agents that protect enamel integrity while lifting stubborn stains safely."
  },
  {
    q: "Are root canal treatments painful at Smilora?",
    a: "No. With computerized local anesthesia delivery and rotary apex locators, 98% of our patients report feeling nothing more than slight vibration during the procedure."
  },
  {
    q: "Do you offer zero-cost EMI or payment installments?",
    a: "Yes, we provide 0% interest EMI options on major credit cards and partner finance for treatments such as dental implants, clear aligners, and smile makeovers."
  },
  {
    q: "How soon can I get an appointment for an emergency toothache?",
    a: "We prioritize emergency toothache and trauma cases. Call our emergency helpline directly or book online, and we will fit you in promptly."
  }
];

export const slots = ["Morning", "Afternoon", "Evening"];
