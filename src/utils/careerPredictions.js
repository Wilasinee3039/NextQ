// Simple career prediction logic - can be expanded
export const predictCareer = (answers) => {
    // This is simplified logic - you would expand this with more sophisticated analysis
    const answerValues = Object.values(answers);
    
    if (answerValues.includes('Math/Science') && answerValues.includes('Independently')) {
      return {
        title: "Software Engineer",
        description: "Your analytical mind and love for problem-solving make you perfect for a career in software development!",
      };
    } else if (answerValues.includes('Arts/Literature') && answerValues.includes('Creative freedom')) {
      return {
        title: "Creative Writer",
        description: "Your imagination and way with words will take you far in the world of creative writing!",
      };
    } // Add more career options...
    
    // Default return
    return {
      title: "Business Consultant",
      description: "Your diverse skills and interests make you well-suited for helping businesses solve complex problems!",
    };
  };