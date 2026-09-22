import { 
  LineChart, 
  Users, 
  MessageSquare, 
  Megaphone, 
  Code, 
  Box, 
  Settings, 
  UserPlus, 
  Briefcase 
} from 'lucide-react';

export const departments = [
  {
    name: "Sales",
    icon: LineChart,
    useCases: [
      "Lead qualification & scoring",
      "Customer research",
      "Proposal generation",
      "Automated follow-ups",
      "Call summaries"
    ]
  },
  {
    name: "Customer Support",
    icon: MessageSquare,
    useCases: [
      "Conversation summaries",
      "Suggested replies",
      "Intent classification",
      "Sentiment analysis",
      "Knowledge assistant"
    ]
  },
  {
    name: "Marketing",
    icon: Megaphone,
    useCases: [
      "Campaign creation",
      "Audience analysis",
      "Content generation",
      "Campaign optimization",
      "WhatsApp/SMS copy"
    ]
  },
  {
    name: "Engineering",
    icon: Code,
    useCases: [
      "AI-assisted development",
      "Testing automation",
      "Code documentation",
      "Debugging assistance",
      "API assistance"
    ]
  },
  {
    name: "Product",
    icon: Box,
    useCases: [
      "Requirement analysis",
      "User research synthesis",
      "Feature documentation",
      "Product intelligence"
    ]
  },
  {
    name: "Operations",
    icon: Settings,
    useCases: [
      "Reporting & dashboards",
      "Data analysis",
      "Workflow automation",
      "Document processing",
      "SOP generation"
    ]
  },
  {
    name: "HR",
    icon: UserPlus,
    useCases: [
      "Job descriptions",
      "Resume screening",
      "Training content",
      "Employee knowledge",
      "Internal communication"
    ]
  },
  {
    name: "Management",
    icon: Briefcase,
    useCases: [
      "Executive summaries",
      "Decision support",
      "Business analysis",
      "AI dashboards",
      "Strategic research"
    ]
  }
];
