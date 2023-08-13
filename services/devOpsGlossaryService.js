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
  {
    id: 11,
    term: 'Agile Organization',
    description: 'A flexible company can react quickly and adapt to both expected and unexpected opportunities and threats.',
    references: 'Agile Organization	A flexible company can react quickly and adapt to both expected and unexpected opportunities and threats.	DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 12,
    term: 'Build Automation',
    description: 'Build automation involves generating scripts and automating the process of compiling computer source code into binaries.',
    references: 'Plutora. (2021, July 14). DevOps DevOps Terminology: A Glossary - Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary',
  },
  {
    id: 13,
    term: 'Environment',
    description: 'All the server resources needed to run the software at various stages of its lifecycle.',
    references: '13	Environment	All the server resources needed to run the software at various stages of its lifecycle.	Fedak, V. (2023). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. IT Outsourcing Company ★ IT Svit. https://www.itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/',
  },
  {
    id: 14,
    term: 'Flow',
    description: 'How people or products move through a process. DevOps "first way" involves optimizing threaded systems.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 15,
    term: 'Governance',
    description: 'IT governance is a set of policies and procedures, often established at the board or executive level, designed to ensure that IT assets can deliver maximum value to the business. and stakeholders.',
    references: 'Plutora. (2021, July 14). DevOps DevOps Terminology: A Glossary - Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary',
  },
  {
    id: 16,
    term: 'Kanban',
    description: 'Kanban is a visual workflow management method typically managed using a whiteboard layout, with tasks written on sticky notes that move from column to column.',
    references: 'Plutora. (2021, July 14). DevOps DevOps Terminology: A Glossary - Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary',
  },
  {
    id: 17,
    term: 'Microservices',
    description: 'A software development technique aligned to a service-oriented architecture (SOA) that structures an application as a loosely coupled set of services. In microservices architecture, services are even better.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 18,
    term: 'Node',
    description: 'A physical or virtual machine in a Kubernetes cluster, used to host pods running Docker containers.',
    references: 'Fedak, V. (2023). DevOps glossary: 78 basic DevOps terms explained in simple words | IT Svit. IT Outsourcing Company ★ IT Svit. https://www.itsvit.com/blog/devops-glossary-78-basic-devops-terms-in-simple-words/',
  },
  {
    id: 19,
    term: 'Toolchain',
    description: 'Use an integrated suite of task-specific tools to automate the process from start to finish. For example automated code testing, release and deployment.',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.-a). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 20,
    term: 'Production',
    description: 'Production, also known as live, is an environment in which users can access an application or functionality.',
    references: 'Plutora. (2021, July 14). DevOps DevOps Terminology: A Glossary - Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary',
  },
];

const devOpsGlossaryService = {
  getAllTableRows() {
    return tableRows;
  },

};


module.exports = devOpsGlossaryService;