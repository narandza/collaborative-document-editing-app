export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Proposal</h1>
    <p>Submitted by: [Your Company Name]</p>
    <p>Date: [Insert Date]</p>
    
    <h2>Client Information</h2>
    <p><strong>[Client Name]</strong></p>
    <p>[Client Title]</p>
    <p>[Client Company]</p>
    <p>[Client Address]</p>
    <p>Email: [Client Email] | Phone: [Client Phone]</p>
    
    <h2>Proposal Overview</h2>
    <p>[Provide a brief overview of the software solution you are proposing, including its purpose and the problem it aims to solve.]</p>
    
    <h2>Objectives</h2>
    <p>[List the main objectives of the software solution, such as improving efficiency, reducing costs, or enhancing user experience.]</p>
    
    <h2>Proposed Solution</h2>
    <p>[Describe the software solution in detail, including its features, functionalities, and technologies to be used.]</p>
    
    <h2>Implementation Plan</h2>
    <p>[Outline the steps involved in implementing the software, including timelines, key milestones, and resources required.]</p>
    
    <h2>Cost Estimate</h2>
    <p>[Provide an estimate of the costs associated with the development, deployment, and maintenance of the software.]</p>
    
    <h2>Benefits</h2>
    <p>[Highlight the key benefits the client will gain by adopting your software solution.]</p>
    
    <h2>Conclusion</h2>
    <p>[Summarize the proposal and express your interest in working with the client on this project.]</p>
    
    <h2>Contact Information</h2>
    <p><strong>[Your Name]</strong></p>
    <p>[Your Title]</p>
    <p>[Your Company Name]</p>
    <p>Email: [Your Email] | Phone: [Your Phone]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
   <h1>Project Proposal</h1>
    <p>Submitted by: [Your Name or Company Name]</p>
    <p>Date: [Insert Date]</p>
    
    <h2>Project Title</h2>
    <p>[Insert the title of the project]</p>
    
    <h2>Client or Stakeholder Information</h2>
    <p><strong>[Client or Stakeholder Name]</strong></p>
    <p>[Client or Stakeholder Title]</p>
    <p>[Organization Name]</p>
    <p>Email: [Email Address] | Phone: [Phone Number]</p>
    
    <h2>Introduction</h2>
    <p>[Provide a brief introduction to the project, including the purpose and background information.]</p>
    
    <h2>Project Objectives</h2>
    <p>[List the specific objectives you aim to achieve with this project.]</p>
    
    <h2>Scope of Work</h2>
    <p>[Describe the scope of the project, including what is and is not included in the work to be performed.]</p>
    
    <h2>Methodology</h2>
    <p>[Outline the approach or methodology that will be used to complete the project successfully.]</p>
    
    <h2>Timeline</h2>
    <p>[Provide a timeline with key milestones and deadlines for project completion.]</p>
    
    <h2>Budget</h2>
    <p>[Include a budget breakdown detailing costs associated with the project, such as labor, materials, and other expenses.]</p>
    
    <h2>Expected Outcomes</h2>
    <p>[Highlight the expected outcomes or deliverables of the project.]</p>
    
    <h2>Conclusion</h2>
    <p>[Summarize the proposal and reinforce the value of the project. Express your enthusiasm for collaboration.]</p>
    
    <h2>Contact Information</h2>
    <p><strong>[Your Name]</strong></p>
    <p>[Your Title]</p>
    <p>[Your Organization Name]</p>
    <p>Email: [Your Email] | Phone: [Your Phone]</p>
`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Company Name</h1>
    <p>123 Business Road, City, Country</p>
    <p>Email: info@company.com | Phone: +1 234 567 890</p>
    
    <h2>Date</h2>
    <p>[Insert Date]</p>
    
    <h2>Recipient Details</h2>
    <p><strong>Recipient Name</strong></p>
    <p>[Recipient Title]</p>
    <p>[Company Name]</p>
    <p>[Recipient Address]</p>
    
    <h2>Subject</h2>
    <p>[Subject of the Letter]</p>
    
    <h2>Body</h2>
    <p>Dear [Recipient Name],</p>
    <p>[Insert your letter content here. Explain the purpose of the letter clearly and provide any necessary details.]</p>
    <p>Sincerely,</p>
    
    <h2>Signature</h2>
    <p><strong>Your Name</strong></p>
    <p>[Your Title]</p>
    <p>[Your Contact Information]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <h1>Company Name</h1>
    <p>123 Business Road, City, Country</p>
    <p>Email: info@company.com | Phone: +1 234 567 890</p>
    
    <h2>Date</h2>
    <p>[Insert Date]</p>
    
    <h2>Recipient Details</h2>
    <p><strong>Recipient Name</strong></p>
    <p>[Recipient Title]</p>
    <p>[Company Name]</p>
    <p>[Recipient Address]</p>
    
    <h2>Subject</h2>
    <p>[Subject of the Letter]</p>
    
    <h2>Body</h2>
    <p>Dear [Recipient Name],</p>
    <p>[Insert your letter content here. Explain the purpose of the letter clearly and provide any necessary details.]</p>
    <p>Sincerely,</p>
    
    <h2>Signature</h2>
    <p><strong>Your Name</strong></p>
    <p>[Your Title]</p>
    <p>[Your Contact Information]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
     <h1>Company Name</h1>
    <p>123 Business Road, City, Country</p>
    <p>Email: info@company.com | Phone: +1 234 567 890</p>
    
    <h2>Date</h2>
    <p>[Insert Date]</p>
    
    <h2>Recipient Details</h2>
    <p><strong>[Recipient Name]</strong></p>
    <p>[Recipient Title]</p>
    <p>[Company Name]</p>
    <p>[Recipient Address]</p>
    
    <h2>Subject</h2>
    <p>[Subject of the Letter]</p>
    
    <h2>Body</h2>
    <p>Dear [Recipient Name],</p>
    <p>[Insert your letter content here. Clearly state the purpose of the letter and include any relevant details or requests.]</p>
    <p>Sincerely,</p>
    
    <h2>Signature</h2>
    <p><strong>[Your Name]</strong></p>
    <p>[Your Title]</p>
    <p>[Your Contact Information]</p>
    `,
  },
];
