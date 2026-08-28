export const clinic = {
  name: 'ENT SOLUTION',
  doctor: 'Dr. Arijit Chakraborty',
  credentials: 'MBBS, DLO, MS (ENT)',
  title: 'Senior ENT Consultant',
  address: 'BC-36(A), East, Near Gate No-2, Shalimar Bagh, Delhi-110088',
  phone: '9810553371',
  phoneIntl: '+919810553371',
  whatsapp: '919810553371',
  email: 'arijitairis@yahoo.com',
  timings: [
    { slot: 'Morning', hours: '12:00 PM – 1:00 PM' },
    { slot: 'Evening', hours: '6:00 PM – 8:00 PM' },
  ],
  closed: 'Sunday Closed',
};

export const whatsappBookingMessage = `Hello ENT Solution, I would like to book an appointment with Dr. Arijit Chakraborty. My name is: 
Preferred date & time: 
Reason for visit: `;

export const whatsappLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  whatsappBookingMessage
)}`;

export const announcements = [
  'All patients seen by prior appointment.',
  'Enter clinic wearing a face mask.',
];

export type ServiceGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    eyebrow: 'Outpatient',
    title: 'OPD Procedures',
    description:
      'Diagnostic and minor procedures performed during regular consultation hours.',
    items: [
      'Ear cleaning — single / both ears',
      'Foreign body removal — ear, nose & throat',
      'Endoscopic foreign body removal',
      'Fibreoptic laryngoscopy',
      'Naso-endoscopy',
      'Oto-endoscopy',
      'Panendoscopy',
      'Audiometry',
      'Tympanometry',
      'Anterior nasal packing',
      'Vestibular exercises',
    ],
  },
  {
    eyebrow: 'Operative',
    title: 'ENT Surgeries',
    description: 'Surgical care for ear, sinus and voice-box conditions.',
    items: ['Micro ear surgery', 'Functional Endoscopic Sinus Surgery (FESS)', 'Microlaryngeal surgery'],
  },
  {
    eyebrow: 'Oncology screening',
    title: 'Head & Neck Services',
    description: 'Early detection is the single biggest factor in head & neck cancer outcomes.',
    items: [
      'Early detection & screening of head & neck cancers',
      'Endoscopic evaluation of suspicious lesions',
      'Assessment of persistent hoarseness, swallowing difficulty, neck swelling and non-healing oral/throat lesions',
    ],
  },
];

/**
 * Gallery images — drop files into /public/images using these filenames
 * (or edit the list below to match whatever you upload to the GitHub repo).
 * See /public/images/README.md for size and naming guidance.
 */
export const galleryImages = [
  { src: '/images/clinic-reception.jpg', alt: 'ENT Solution clinic reception' },
  { src: '/images/consultation-room.jpg', alt: 'Consultation room' },
  { src: '/images/endoscopy-setup.jpg', alt: 'Endoscopy and diagnostic setup' },
  { src: '/images/audiometry-room.jpg', alt: 'Audiometry testing room' },
  { src: '/images/waiting-area.jpg', alt: 'Patient waiting area' },
  { src: '/images/procedure-room.jpg', alt: 'Minor procedure room' },
];
