const tableRows = [
  {
    id: 1,
    term: 'Culture',
    description: 'The set of ideas, values, beliefs, practices, and behaviors shared by the employees of an organization. That is the attitude of sharing responsibility in a DevOps environment.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 2,
    term: 'Deployment',
    description: 'A term that refers to the grouping of each activity that makes a program available for use and transfers that program to the target environment.',
    references: 'Inc., Dz. (2017, July 24). 48 devops terms you should know (a DevOps glossary). Medium. https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752',
  },
  {
    id: 3,
    term: 'Iterations',
    description: 'A single development cycle, usually measured over a week or two.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 4,
    term: 'Lean',
    description: 'A production philosophy focused on reducing waste and improving process flow to enhance customer value.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 5,
    term: 'Release',
    description: 'One or more system changes are built, tested, and deployed together.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 6,
    term: 'Scrum',
    description: 'An incremental, iterative, time-bound Agile framework for executing complex projects.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 7,
    term: 'Time to Value',
    description: 'A measure of the time it takes for a business to realize the value of a feature.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a).  https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 8,
    term: 'Value Stream Mapping',
    description: 'Lean tools visualize the flow of data, materials, and labor through a process with a focus on waste identification and quantification.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 9,
    term: 'Waste (Lean)',
    description: "Anything that doesn't add value to the product.",
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 10,
    term: 'Work in Progress (WIP)',
    description: 'All work has been started but not completed.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
];

const devOpsGlossaryService = {
  getAllTableRows() {
    return tableRows;
  },

};


module.exports = devOpsGlossaryService;