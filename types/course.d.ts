//Type alias - A set of values
type CourseCategory = 
  | "Math" 
  | "Swedish" 
  | "English" 
  | "Science" 
  | "History" 
  | "Programming" 
  | "Art" 
  | "Music" 
  | "Business" 
  | "Philosophy" 
  | "Sports";

type Eductor = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

//Types - Template for an object
type Course = {
  id: string;
  name: string;
  weeks: number;
  isActive?: boolean; // Optional - Param
  categories: CourseCategory[];
  eductor?: Eductor; // Nested types for more complex data
};