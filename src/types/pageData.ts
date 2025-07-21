import { ReactNode } from 'react';

// Tipos para os dados das páginas
export interface AccordionItem {
  id: string;
  title: string;
  icon?: string;
  content: ReactNode; // Permite JSX e strings
  isExpanded?: boolean;
}

export interface LinkItem {
  href: string;
  title: string;
  external?: boolean;
  icon?: string;
  description?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  relato: string;
  objetivo: string;
  image?: string;
  points: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
}

export interface PageData {
  seo: PageSEO;
  accordionItems?: AccordionItem[];
  links?: LinkItem[];
  caseStudies?: CaseStudyItem[];
  quizQuestions?: QuizQuestion[];
}
