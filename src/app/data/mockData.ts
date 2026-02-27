export interface User {
  id: string;
  username: string;
  fullName: string;
  address: string;
  contactNumber: string;
  voterStatus: string;
  accountStatus: "Active" | "Inactive";
  profilePicture?: string;
}

export interface ServiceRequest {
  id: string;
  serviceName: string;
  dateRequested: string;
  purpose: string;
  status: "Pending" | "Approved" | "Rejected";
  otp?: string;
  estimatedProcessing: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  description: string;
  fullContent: string;
}

export const mockUser: User = {
  id: "1",
  username: "juan.delacruz",
  fullName: "Juan Dela Cruz",
  address: "123 Mabini Street, Zone 1, Barangay San Isidro",
  contactNumber: "+63 912 345 6789",
  voterStatus: "Registered Voter",
  accountStatus: "Active",
};

export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Community Clean-Up Drive",
    date: "February 25, 2026",
    description: "Join us in our monthly community clean-up drive this Saturday at 7:00 AM.",
    fullContent: "Join us in our monthly community clean-up drive this Saturday at 7:00 AM. Meeting point is at the Barangay Hall. Please bring your own cleaning materials.",
  },
  {
    id: "2",
    title: "Free Medical Mission",
    date: "February 20, 2026",
    description: "Free check-up and medicines available for senior citizens and PWDs.",
    fullContent: "Free check-up and medicines available for senior citizens and PWDs. Bring your valid ID and medical records. First come, first served.",
  },
  {
    id: "3",
    title: "Barangay Assembly Meeting",
    date: "February 15, 2026",
    description: "All residents are invited to attend the monthly barangay assembly.",
    fullContent: "All residents are invited to attend the monthly barangay assembly. Important matters regarding the community will be discussed. Your presence matters.",
  },
];

export const mockRequests: ServiceRequest[] = [
  {
    id: "1",
    serviceName: "Barangay Clearance",
    dateRequested: "February 20, 2026",
    purpose: "Employment",
    status: "Approved",
    estimatedProcessing: "3-5 business days",
  },
  {
    id: "2",
    serviceName: "Barangay Indigency",
    dateRequested: "February 22, 2026",
    purpose: "Medical Assistance",
    status: "Pending",
    estimatedProcessing: "3-5 business days",
  },
];

export const barangayInfo = {
  name: "Barangay San Isidro",
  captain: "Hon. Maria Santos",
  address: "San Isidro, Makati City, Metro Manila, Philippines",
  contactNumber: "+63 (02) 8123 4567",
  email: "sanisidro.barangay@gov.ph",
  mission: "To provide excellent public service and promote community development through transparent governance, active citizen participation, and sustainable programs that enhance the quality of life of all residents.",
  vision: "A progressive, peaceful, and united Barangay San Isidro where every resident lives in dignity, prosperity, and harmony.",
};

export const services = [
  {
    id: "barangay-clearance",
    name: "Barangay Clearance",
    description: "Certificate of Residency for various purposes",
    icon: "FileText",
  },
  {
    id: "barangay-residency",
    name: "Barangay Residency",
    description: "Proof of residency certificate",
    icon: "Home",
  },
  {
    id: "barangay-indigency",
    name: "Barangay Indigency",
    description: "Certificate of Indigency for financial assistance",
    icon: "Heart",
  },
  {
    id: "barangay-business",
    name: "Barangay Business Clearance",
    description: "Business permit clearance",
    icon: "Briefcase",
  },
  {
    id: "vaccination",
    name: "Vaccination Certificate",
    description: "COVID-19 vaccination records",
    icon: "Syringe",
  },
];

export const purposeOptions = [
  "Employment",
  "School Requirement",
  "Business Requirement",
  "Medical Assistance",
  "Financial Assistance",
  "Personal Use",
  "Others",
];
