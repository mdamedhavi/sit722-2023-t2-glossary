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
  {
    id: 21,
    term: 'Agent',
    description: 'A program installed on specific physical servers to manage the execution of various processes on that server.',
    references: 'Inc., Dz. (2017a, July 24). 48 devops terms you should know (a DevOps glossary). Medium. https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752',
  },
  {
    id: 22,
    term: 'Autonomy',
    description: 'Autonomy refers to the ability to make decisions independently without waiting or delaying with someone higher in the hierarchy.',
    references: 'DevOps DevOps Terminology: A glossary. Plutora. (2021a, July 14). https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items',
  },
  {
     id: 23,
     term: 'Build Automation',
     description: 'Build automation includes scripting and automating the compilation of computer source code into binaries.',
     references: 'DevOps DevOps Terminology: A glossary. Plutora. (2021a, July 14). https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items', 
  },
  {
    id: 24,
    term: 'Commit',
    description: 'A way to record changes made to the repository and add log messages to describe the changes made.',
    references: 'Inc., Dz. (2017a, July 24). 48 devops terms you should know (a DevOps glossary). Medium. https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752',
  },
  {
    id: 25,
    term: 'Serverless',
    description: 'Cloud computing execution model in which the cloud provider dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application. This is often referred to as "Function as a Service".',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 26,
    term: 'Toolchain',
    description: 'Use a suite of built-in task-specific tools to automate the process from start to finish. Example: automated testing, publishing and deploying code',
    references: 'DevOps glossary of terms. Global Knowledge. (n.d.). https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/',
  },
  {
    id: 27,
    term: 'Technical Debt',
    description: 'A programming concept that reflects the additional development work that occurs when using short-term, easy-to-deploy code instead of adopting the best overall solution.',
    references: 'Inc., Dz. (2017a, July 24). 48 devops terms you should know (a DevOps glossary). Medium. https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752',
  },
  {
    id: 28,
    term: 'Test Environment',
    description: 'An environment that the test team uses to run test cases and fix bugs before release.',
    references: 'DevOps DevOps Terminology: A glossary. Plutora. (2021a, July 14). https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items',
  },
  {
    id: 29,
    term: 'Unit Testing',
    description: 'Unit testing is breaking down pieces of code into small pieces or units of code or logic that can be tested quickly and easily.',
    references: 'DevOps DevOps Terminology: A glossary. Plutora. (2021a, July 14). https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items',
  },
  {
    id: 30,
    term: 'WhiteBox Testing',
    description: 'A software testing method includes checking the internal structure, design and coding of the software. It differs from black box testing in that the code is visible or transparent to testers and is therefore "white box".',
    references: 'DevOps DevOps Terminology: A glossary. Plutora. (2021a, July 14). https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items',
  },
  {
    id: 31,
    term: 'Application Release Automation (ARA)',
    description: 'ARA involves using tools, scripts, or products to achieve a consistent and repeatable  packaging and deployment process from development to production.',
    references: 'Plutora 2021, DevOps DevOps Terminology: A Glossary - Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items.',
  },
  {
    id: 32,
    term: 'Behavior-Driven Development (BDD)',
    description: 'An evolution of test-driven development, focusing on collaboration between development and business stakeholders to identify user stories that determine the development of the application using a human-readable DSL',
    references: 'DZone Inc. 2018, 48 DevOps Terms You Should Know (A DevOps Glossary), Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.',
  },
  {
    id: 33,
    term: 'Continuous Delivery',
    description: 'A method for ensuring that  software remains ready for release throughout its lifecycle. The deployment process is iterative, delivering more frequent releases to your end users.',
    references: 'DevOps Glossary of Terms, https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/.',
  },
  {
    id: 34,
    term: 'Definition of Done',
    description: 'In software development, there is a shared understanding of what it means to get work done.',
    references: 'DevOps Glossary of Terms, https://www.globalknowledge.com/us-en/topics/devops/glossary-of-terms/.',
  },
  {
    id: 35,
    term: 'Everything as Code',
    description: 'Everything as Code treats the entire system as code, meaning  everything from the underlying server to the deployment configuration is stored in the repository as code and can be recreated or restored to Previous status is just a simple click away.',
    references: 'Plutora 2021b, DevOps DevOps Terminology: A Glossary - Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items.',
  },
  {
    id: 36,
    term: 'Fail Fast',
    description: 'A strategy in which you try something but fail, feedback is provided quickly, you adjust accordingly and try again.',
    references: 'DZone Inc. 2018b, 48 DevOps Terms You Should Know (A DevOps Glossary), Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.',
  },
  {
    id: 37,
    term: 'Functional Testing',
    description: 'A type of black box testing in which functions (also called features) are tested by giving them inputs and testing the output.',
    references: 'Plutora 2021c, DevOps DevOps Terminology: A Glossary - Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items.',
  },
  {
    id: 38,
    term: 'Issue Tracking',
    description: 'A process that allows programmers and quality assurance staff to track the flow of bugs and new features from identification to resolution.',
    references: 'DZone Inc. 2018c, 48 DevOps Terms You Should Know (A DevOps Glossary), Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.',
  },
  {
    id: 39,
    term: 'Mean Time Between Failures (MTBF)',
    description: 'Used to measure the reliability of a system or component, calculated by averaging the time between system failures.',
    references: 'DZone Inc. 2018c, 48 DevOps Terms You Should Know (A DevOps Glossary), Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.',
  },
  {
    id: 40,
    term: 'Governance',
    description: 'IT governance is a set of policies and procedures, typically defined at the board or executive level, designed so that IT assets can deliver maximum value to the company and its stakeholders. ',
    references: 'Plutora 2021d, DevOps DevOps Terminology: A Glossary - Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=DevOps%20Terminology%3A%20A%20Glossary%201%20A%20Agent%20A,...%208%20H%20Hybrid%20Cloud%20...%20More%20items.',
  },
];

const devOpsGlossaryService = {
  getAllTableRows() {
    return tableRows;
  },

};


module.exports = devOpsGlossaryService;