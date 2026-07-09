export interface RoiMetrics {
  employees: number;
  hoursPerDay: number;
  hourlySalary: number;
  manualHoursMonthly: number;
  currentCostMonthly: number;
  optimizedCostMonthly: number;
  monthlySavings: number;
  annualSavings: number;
  breakEvenMonths: number;
}

export interface AssessmentInput {
  name: string;
  email: string;
  businessName: string;
  primaryPain: string;
  customDescription: string;
}

export interface BlueprintStep {
  nodeId: string;
  title: string;
  description: string;
  status: 'PENDING' | 'RUNNING' | 'COMPLETED';
}

export interface AssessmentResult {
  score: number; // 0-100 automation score
  hoursLost: number; // estimated hours lost per month
  financialLeakage: number; // estimated dollars lost per month
  summary: string;
  pipeline: BlueprintStep[];
  suggestedStack: string[];
}
