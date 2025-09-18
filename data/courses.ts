const courses: Course[] = [
  {
    id: "C001",
    name: "Introduction to Algebra",
    weeks: 8,
    isActive: true,
    categories: ["Math"],
    eductor: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@school.com",
      phone: "123-456-7890",
    },
  },
  {
    id: "C002",
    name: "Creative Writing in English",
    weeks: 10,
    categories: ["English", "Art"],
    eductor: {
      firstName: "Mark",
      lastName: "Stevens",
      email: "mark.stevens@school.com",
    },
  },
  {
    id: "C003",
    name: "Swedish for Beginners",
    weeks: 6,
    isActive: true,
    categories: ["Swedish"],
    eductor: {
      firstName: "Eva",
      lastName: "Lund",
      email: "eva.lund@school.com",
      phone: "555-1122",
    },
  },
  {
    id: "C004",
    name: "History of Ancient Civilizations",
    weeks: 12,
    categories: ["History", "Philosophy"],
  },
  {
    id: "C005",
    name: "Physics: Mechanics & Motion",
    weeks: 14,
    isActive: false,
    categories: ["Science", "Math"],
    eductor: {
      firstName: "Daniel",
      lastName: "Kim",
      email: "daniel.kim@school.com",
    },
  },
  {
    id: "C006",
    name: "JavaScript Programming Bootcamp",
    weeks: 16,
    categories: ["Programming", "Math"],
    eductor: {
      firstName: "Sophia",
      lastName: "Nguyen",
      email: "sophia.nguyen@school.com",
    },
  },
  {
    id: "C007",
    name: "Music Theory & Composition",
    weeks: 9,
    categories: ["Music", "Art"],
    eductor: {
      firstName: "Leon",
      lastName: "Martinez",
      email: "leon.martinez@school.com",
      phone: "987-654-3210",
    },
  },
  {
    id: "C008",
    name: "Entrepreneurship and Startups",
    weeks: 11,
    isActive: true,
    categories: ["Business"],
    eductor: {
      firstName: "Clara",
      lastName: "Wang",
      email: "clara.wang@school.com",
    },
  },
  {
    id: "C009",
    name: "Sports Science & Nutrition",
    weeks: 7,
    categories: ["Sports", "Science"],
  },
  {
    id: "C010",
    name: "Ethics and Modern Philosophy",
    weeks: 13,
    isActive: true,
    categories: ["Philosophy", "History"],
    eductor: {
      firstName: "Michael",
      lastName: "Green",
      email: "michael.green@school.com",
    },
  },
];

export {
    courses
}