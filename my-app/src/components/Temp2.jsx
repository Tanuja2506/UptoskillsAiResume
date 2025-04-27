// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import html2pdf from 'html2pdf.js';
// // import './Temp1.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


// // const Temp2 = () => {
// //     const [showButtons, setShowButtons] = useState(true);
// //     const [loading, setLoading] = useState(false);

// //     const [resume, setResume] = useState({
// //         name: "Your Name",
// //         role: "The role you are applying for?",
// //         phone: "Phone",
// //         email: "Email",
// //         linkedin: "Linkedin/Portfolio",
// //         location: "Location",
// //         summary: "Briefly explain why you are great fit for this role. Like-I am a strong fit for the web developer role because of my comprehensive understanding of both frontend and backend technologies, including expertise in JavaScript, React, Node.js, and modern web development frameworks. I have experience building responsive, user-friendly applications and working with APIs to create dynamic, scalable solutions. My problem-solving skills, attention to detail, and ability to adapt to new technologies enable ",
// //         experience: [
// //             {
// //                 title: 'Your Title',
// //                 companyName: 'Company Name',
// //                 date: 'Date',
// //                 companyLocation: 'Company Location',
// //                 description: 'Company Description. Like- web development company specializes in creating innovative, user-centric digital solutions that elevate brands and businesses. We offer end-to-end services including custom website development, e-commerce solutions, and mobile-responsive designs, ensuring seamless user experiences across all platforms. Leveraging the latest technologies like React, Node.js, and modern design principles, our team is committed to delivering ',
// //                 accomplishment: 'Your accomplishment. Like-In their time at the web development company, this individual has consistently demonstrated exceptional technical skills and leadership, contributing significantly to the successful delivery of numerous high-profile projects. They played a pivotal role in developing scalable, user-friendly web applications, '
// //             }
// //         ],
// //         education: [
// //             {
// //                 degree: 'Degree and Field of Study. Like- Btech/Information Technology',
// //                 institution: 'School or University',
// //                 duration: 'Date Period',
// //                 grade: "grade or percentage like GPA:8.5"
// //             }
// //         ],
// //         achievements: [
// //             {
// //                 keyAchievements: 'Your Achievement',
// //                 describe: "Describe what you did ? Like-Your accomplishment. Like-In their time at the web development company, this individual has consistently demonstrated exceptional technical skills and leadership, contributing significantly to the successful delivery of numerous high-profile projects. They played a pivotal role in developing scalable, user-friendly web applications,"
// //             }
// //         ],
// //         certifications: [{
// //             certificates: 'Course Name',
// //             link: 'link of your certificate'
// //         }],
// //         skills: ['Your skills. Like-HTML , CSS', "Accounting & Budgeting",
// //             "Proficient with POS systems",
// //             "Excellent interpersonal and communication skills",
// //             "Poised under pressure",
// //             "Experienced in most restaurant positions",
// //             "Fun and energetic"],
// //         projects: [{
// //             pname: 'Project Name',
// //             pdate: 'Date period',
// //             psummary: 'Summary of your work.A weather app built with React allows users to view real-time weather information. It fetches data from APIs, displaying current temperature, humidity, and forecasts. React components manage state and UI updates, while hooks like useState and useEffect handle data fetching and UI rendering efficiently.'
// //         }]
// //     });



// //     const [visibleSections, setVisibleSections] = useState({
// //         summary: true,
// //         experience: true,
// //         education: true,
// //         achievements: true,
// //         skills: true,
// //         certifications: true,
// //         projects: true,
// //     });



// //     const [isOpen, setIsOpen] = useState(false);

// //     const sections = [
// //         "Summary",
// //         "Experience",
// //         "Education",
// //         "Skills",
// //         "Projects",
// //         "Certifications",
// //         "Achievements",
// //     ];



// //     const removeBlock = (block) => {
// //         setVisibleSections({ ...visibleSections, [block]: false });
// //     };

    

// //     const handleUserContent = (section, key, value, index = null) => {
// //         const updatedResume = { ...resume };
// //         if (Array.isArray(updatedResume[section])) {
// //             if (index !== null) updatedResume[section][index][key] = value;
// //         } else {
// //             updatedResume[section] = value;
// //         }
// //         setResume(updatedResume);
// //     };

// //     const addNewEntry = (section) => {
// //         const updatedResume = { ...resume };
// //         const newEntry = section === "experience" ? {
// //             title: 'Your Title',
// //             companyName: 'Company Name',
// //             date: 'Date',
// //             companyLocation: 'Company Location',
// //             description: 'Company Description. Like- web development company specializes in creating innovative, user-centric digital solutions that elevate brands and businesses. We offer end-to-end services including custom website development, e-commerce solutions, and mobile-responsive designs, ensuring seamless user experiences across all platforms. Leveraging the latest technologies like React, Node.js, and modern design principles, our team is committed to delivering ',
// //             accomplishment: 'Your accomplishment. Like-In their time at the web development company, this individual has consistently demonstrated exceptional technical skills and leadership, contributing significantly to the successful delivery of numerous high-profile projects. They played a pivotal role in developing scalable, user-friendly web applications, '
// //         } : section === "education" ? {
// //             degree: 'Degree and Field of Study. Like- Btech/Information Technology',
// //             institution: 'School or University',
// //             duration: 'Date Period',
// //             grade: "grade or percentage like GPA:8.5"
// //         } :
// //             section === "certifications" ? {
// //                 certificates: 'Course Name',
// //                 link: 'link of your certificate'
// //             } :
// //                 section === "projects" ? {
// //                     pname: 'Project Name',
// //                     pdate: 'Date period',
// //                     psummary: 'Summary of your work.A weather app built with React allows users to view real-time weather information. It fetches data from APIs, displaying current temperature, humidity, and forecasts. React components manage state and UI updates, while hooks like useState and useEffect handle data fetching and UI rendering efficiently.'
// //                 } : {
// //                     keyAchievements: 'Your Achievement',
// //                     describe: "Describe what you did"
// //                 };

// //         updatedResume[section].push(newEntry);
// //         setResume(updatedResume);
// //     };

// //     // Remove Entry Function
// //     const removeEntry = (section, index) => {
// //         const updatedResume = { ...resume };
// //         updatedResume[section].splice(index, 1); // Remove the item at the specified index
// //         setResume(updatedResume);
// //     };



// //     const downloadPdf = async () => {
// //         // Select buttons to hide
// //         const buttons = document.querySelectorAll('.download-btn');
// //         const entryButtons = document.querySelectorAll('.add-btn, .remove-btn');
// //         const removeSectionButtons = document.querySelectorAll('.remove-section-btn');

// //         // Hide the buttons
// //         buttons.forEach(button => button.style.display = 'none');
// //         entryButtons.forEach(button => button.style.display = 'none');
// //         removeSectionButtons.forEach(button => button.style.display = 'none');

// //         // Color mapping for Tailwind classes
// //         const colorMap = {
// //             'blue': '#3b82f6',
// //             'purple': '#9333ea',
// //             'red': '#ef4444',
// //             'green': '#22c55e',
// //             'yellow': '#eab308',
// //             'gray': '#6b7280',
// //             'white': '#ffffff',
// //             'black': '#000000'
// //         };

// //         try {
// //             // Clone the element to avoid modifying the original
// //             const element = document.getElementById("resumeBody");
// //             const clone = element.cloneNode(true);

// //             // Process all elements with potentially problematic styles
// //             const allElements = clone.querySelectorAll('*');

// //             allElements.forEach(el => {
// //                 // Handle background colors
// //                 if (el.classList) {
// //                     el.classList.forEach(className => {
// //                         // Process bg-color classes
// //                         if (className.startsWith('bg-')) {
// //                             // Extract color name (e.g., 'blue' from 'bg-blue-600')
// //                             const colorParts = className.split('-');
// //                             if (colorParts.length >= 2) {
// //                                 const colorName = colorParts[1];
// //                                 // Apply a safe color if we have a mapping
// //                                 if (colorMap[colorName]) {
// //                                     el.style.backgroundColor = colorMap[colorName];
// //                                     el.classList.remove(className);
// //                                 }
// //                             }
// //                         }

// //                         // Process text color classes
// //                         if (className.startsWith('text-')) {
// //                             const colorParts = className.split('-');
// //                             if (colorParts.length >= 2) {
// //                                 const colorName = colorParts[1];
// //                                 if (colorMap[colorName]) {
// //                                     el.style.color = colorMap[colorName];
// //                                     el.classList.remove(className);
// //                                 }
// //                             }
// //                         }
// //                     });
// //                 }
// //             });

// //             // Fix header alignment issues
// //             const headings = clone.querySelectorAll('.headings');
// //             headings.forEach(heading => {
// //                 // Apply explicit styles to ensure proper alignment
// //                 heading.style.textAlign = 'left';
// //                 heading.style.fontWeight = 'bold';
// //                 heading.style.fontSize = '18px';
// //                 heading.style.marginTop = '15px';
// //                 heading.style.marginBottom = '8px';
// //                 heading.style.borderBottom = '1px solid #ccc';
// //                 heading.style.paddingBottom = '5px';
// //                 heading.style.width = '100%';
// //                 heading.style.display = 'block';
// //             });

// //             // Fix first block alignment
// //             const firstBlock = clone.querySelector('.firstBlock');
// //             if (firstBlock) {
// //                 firstBlock.style.textAlign = 'left';
// //                 firstBlock.style.marginBottom = '20px';
// //             }

// //             // Fix section blocks alignment
// //             const sectionBlocks = clone.querySelectorAll('.summaryblock, .experienceblock, .educationblock, .achievementblock, .skillsblock, .certificationcourse, .projectblock');
// //             sectionBlocks.forEach(block => {
// //                 block.style.width = '100%';
// //                 block.style.marginBottom = '15px';
// //                 block.style.textAlign = 'left';
// //             });

// //             // Create a temporary container
// //             const tempContainer = document.createElement('div');
// //             tempContainer.style.position = 'absolute';
// //             tempContainer.style.left = '-9999px';
// //             tempContainer.appendChild(clone);
// //             document.body.appendChild(tempContainer);

// //             // Configure html2pdf options
// //             const options = {
// //                 margin: [0.5, 0.5, 0.5, 0.5],
// //                 filename: "resume.pdf",
// //                 image: { type: "jpeg", quality: 0.98 },
// //                 html2canvas: {
// //                     scale: 2,
// //                     logging: false,
// //                     useCORS: true,
// //                     // This can help with layout issues
// //                     windowWidth: 1024,
// //                     letterRendering: true
// //                 },
// //                 jsPDF: {
// //                     unit: "in",
// //                     format: "letter",
// //                     orientation: "portrait",
// //                     compress: true
// //                 }
// //             };

// //             // Generate PDF
// //             await html2pdf().from(clone).set(options).save();

// //             // Clean up
// //             document.body.removeChild(tempContainer);

// //         } catch (error) {
// //             console.error("Error generating PDF:", error);
// //             alert('Error generating PDF: ' + error.message);
// //         } finally {
// //             // Show buttons again
// //             buttons.forEach(button => button.style.display = 'block');
// //             entryButtons.forEach(button => button.style.display = 'block');
// //             removeSectionButtons.forEach(button => button.style.display = 'block');
// //         }
// //     };





// // // const resumeRef = useRef(null);
  
// // //   const handleAIEnhancement = async () => {
// // //     if (!resumeData._id) {
// // //       await createResume();
// // //       alert("Resume created. Click AI Assistant again.");
// // //       return;
// // //     }
// // //     setLoading(true); // Start loading
// // //     setShowEnhancementOptions(true);
// // //     setLoading(false); // End loading (remove this line if you want to show loading during the enhancement options display)
// // //   };


    
    
    
// //     // const downloadPDF = async () => {
// //     //     try {
// //     //       setLoading(true);
      
// //     //       // Send API request to generate PDF
// //     //       const response = await axios.post(
// //     //         "http://localhost:5000/api/resume1/generate-pdf",
// //     //         { resumeData },
// //     //         {
// //     //           responseType: "blob",  // Ensures response is treated as a file
// //     //           headers: { "Content-Type": "application/json" }
// //     //         }
// //     //       );
      
// //     //       // Validate Blob response
// //     //       if (!response || !response.data || !(response.data instanceof Blob)) {
// //     //         throw new Error("Invalid PDF response");
// //     //       }
      
// //     //       // Create and trigger download
// //     //       const url = window.URL.createObjectURL(response.data);
// //     //       const link = document.createElement("a");
// //     //       link.href = url;
// //     //       link.setAttribute("download", `resume_${Date.now()}.pdf`);
// //     //       document.body.appendChild(link);
// //     //       link.click();
      
// //     //       // Cleanup
// //     //       setTimeout(() => {
// //     //         document.body.removeChild(link);
// //     //         window.URL.revokeObjectURL(url);
// //     //         setLoading(false);
// //     //       }, 100);
      
// //     //     } catch (error) {
// //     //       console.error("Download failed:", error);
// //     //       alert("PDF generation failed. Please check your resume data.");
// //     //       setLoading(false);
// //     //     }
// //     //   };
      
      
// //     //   const handleSectionHover = (section) => {
// //     //     setHoveredSection(section);
// //     //   };
      
// //     //   const handleSectionLeave = () => {
// //     //     setHoveredSection(null);
// //     //   };
      
// //     //   const handleSectionClick = (section) => {
// //     //     setActiveSection(section === activeSection ? null : section);
// //     //   };
      
// //     //   const handleSettingChange = (section, key) => {
// //     //     setSectionSettings((prevSettings) => ({
// //     //       ...prevSettings,
// //     //       [section]: {
// //     //         ...prevSettings[section],
// //     //         [key]: !prevSettings[section][key],
// //     //       },
// //     //     }));
// //     //   };
    
// //     //   const createResume = async () => {
// //     //     try {
// //     //         const response = await axios.post('http://localhost:5000/api/resume1/create', { resumeData });
    
// //     //         if (response.data?.data?._id) {
// //     //             setResumeData(prev => ({ ...prev, _id: response.data.data._id }));
// //     //             alert("✅ Resume created successfully!");
// //     //         } else {
// //     //             console.error("❌ No _id returned from server:", response.data);
// //     //         }
// //     //     } catch (error) {
// //     //         console.error("❌ Resume Creation Error:", error.response ? error.response.data : error.message);
// //     //     }
// //     // };
    
// //     //   const saveResume = async () => {
// //     //     if (!resumeData) {
// //     //       alert("No resume data to save!");
// //     //       return;
// //     //     }
// //     //     try {
// //     //       const response = await axios.post("http://localhost:5000/api/resume1/save", {
// //     //         resumeData
// //     //     });
// //     //       if (response.data) {
// //     //         alert("Resume saved successfully!");
// //     //         console.log("✅ Resume saved:", response.data);
// //     //       }
// //     //     } catch (error) {
// //     //       console.error("❌ Error saving resume:", error);
// //     //       alert("Failed to save resume.");
// //     //     }
// //     //   };
    
// //     //   const enhanceSingleField = async (field) => {
// //     //     if (!resumeData._id) {
// //     //         alert("Please save your resume before enhancing a field.");
// //     //         return;
// //     //     }
// //     //     try {
// //     //         setLoading(true); // Start loading
// //     //         console.log("Enhancing field:", field, "with resume ID:", resumeData._id);
// //     //         const response = await axios.post('http://localhost:5000/api/resume1/enhanceField', { resumeId: resumeData._id, field });
    
// //     //         if (response.data?.data) {
// //     //             setResumeData(response.data.data);
// //     //             alert(`${field} enhanced successfully!`);
// //     //         }
// //     //     } catch (error) {
// //     //         console.error(`Error enhancing ${field}:`, error);
// //     //     } finally {
// //     //         setLoading(false); // End loading
// //     //     }
// //     // };
    





// //     return (
// //         <div className="flex gap-4 main">

// //             <div className="hidden md:block w-1/6 bg-gray-800 text-white p-4 min-h-screen">
// //                 <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" >

// //                     🤖 AI Assistant
// //                 </button>
// //                {/* {showEnhancementOptions && (
// //           <div className="ai-field-enhancement">
// //             <h4>Enhance Specific Field</h4>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("summary")}>
// //               Enhance Summary
// //             </button>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("skills")}>
// //               Enhance Skills
// //             </button>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("experience")}>
// //               Enhance Experience
// //             </button>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("achievements")}>
// //               Enhance Achievements
// //             </button>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("courses")}>
// //               Enhance Courses
// //             </button>
// //             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("projects")}>
// //               Enhance Projects
// //             </button>
// //           </div>
// //         )} */}
// //                 <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors" >
// //                     Save Resume
// //                 </button>
// //                 <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
// //                     onClick={downloadPdf}>
// //                     ⬇️ Download
// //                 </button>
// //             </div>

// //             {/* Mobile Menu */}
// //             <div className="md:hidden fixed left-4 right-2 z-50">
// //                 <button
// //                     className=" bg-gray-800 text-white p-3 rounded "
// //                     onClick={() => setIsOpen(!isOpen)}
// //                 >
// //                     ☰ Menu
// //                 </button>

// //                 {/* Dropdown Menu */}
// //                 {isOpen && (
// //                     <div className="absolute left-0 right-0 bg-gray-800 p-2 rounded shadow-lg mt-2">
// //                         <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors">
// //                             🤖 AI Assistant
// //                         </button>
// //                         <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors">
// //                             Save Resume
// //                         </button>
// //                         <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors" onClick={downloadPdf}>
// //                             ⬇️ Download
// //                         </button>
// //                     </div>
// //                 )}
// //             </div>
// //             <div className="editResume w-6/7 bg-white p-4 ml-24"  >
// //                 <div id="resumeBody">
// //                     <div className="firstBlock"
// //                         contentEditable
// //                         suppressContentEditableWarning>
// //                         <div
// //                             className="user-name"
// //                             contentEditable
// //                             suppressContentEditableWarning

// //                             onBlur={(e) => handleUserContent("name", e.target.textContent)}
// //                         >
// //                             <h2 className='res-h2'> {resume.name}</h2>
// //                         </div>
// //                         <div
// //                             className="user-role"
// //                             contentEditable
// //                             suppressContentEditableWarning
// //                             onBlur={(e) => handleUserContent("role", e.target.textContent)}
// //                         >
// //                             {resume.role}
// //                         </div>
// //                         <div className="user-contacts">
// //                             <div
// //                                 className="user-phone"
// //                                 contentEditable
// //                                 suppressContentEditableWarning
// //                                 onBlur={(e) => handleUserContent("phone", e.target.textContent)}
// //                             >
// //                                 <FontAwesomeIcon icon={faPhone} />  {resume.phone} |
// //                             </div>
// //                             <div
// //                                 className="user-email"
// //                                 contentEditable
// //                                 suppressContentEditableWarning
// //                                 onBlur={(e) => handleUserContent("email", e.target.textContent)}
// //                             >
// //                                 <FontAwesomeIcon icon={faEnvelope} />  {resume.email} |
// //                             </div>
// //                             <div
// //                                 className="user-linkedin"
// //                                 contentEditable
// //                                 suppressContentEditableWarning
// //                                 onBlur={(e) => handleUserContent("linkedin", e.target.textContent)}
// //                             >
// //                                 {resume.linkedin} |
// //                             </div>
// //                             <div
// //                                 className="user-location"
// //                                 contentEditable
// //                                 suppressContentEditableWarning
// //                                 onBlur={(e) => handleUserContent("location", e.target.textContent)}
// //                             >
// //                                 <FontAwesomeIcon icon={faMapMarkerAlt} /> {resume.location}
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {visibleSections.summary && (
// //                         <div>
// //                             <div className="summaryblock">
// //                                 <h3 className="headings">Summary</h3>
// //                                 <div className="user-summary" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("summary", e.target.textContent)}>
// //                                     {resume.summary}
// //                                 </div>
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto" onClick={() => removeBlock("summary")}>Remove Summary</button>
// //                         </div>
// //                     )}



// //                     {visibleSections.experience && (
// //                         <div>
// //                             <div className="experienceblock">
// //                                 <h3 className="headings">Experience</h3>

// //                                 {resume.experience.map((exp, idx) => (
// //                                     <div key={idx} className="user-experience">
// //                                         <div className="exp1">
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("experience", "companyName", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para1'>{exp.companyName}</p>
// //                                             </div>
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("experience", "companyLocation", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para2'>{exp.companyLocation}</p>
// //                                             </div>
// //                                         </div>
// //                                         <div className="exp1">
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("experience", "title", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para1'>{exp.title}</p>
// //                                             </div>
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("experience", "date", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para2'>{exp.date}</p>
// //                                             </div>
// //                                         </div>
// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("experience", "description", e.target.textContent, idx)}
// //                                         >
// //                                             {exp.description}
// //                                         </div>
// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("experience", "accomplishment", e.target.textContent, idx)}
// //                                         >
// //                                             {exp.accomplishment}
// //                                         </div>
// //                                         {resume.experience.length > 1 && (
// //                                             <button onClick={() => removeEntry("experience", idx)}
// //                                                 className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto" >
// //                                                 Remove
// //                                             </button>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                                 <button onClick={() => addNewEntry("experience")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                     + New Entry
// //                                 </button>

// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto"
// //                                 onClick={() => removeBlock("experience")} style={{ margin: "10px 0px" }}>Remove Experience</button>
// //                         </div>
// //                     )}


// //                     {visibleSections.education && (
// //                         <div>
// //                             <div className="educationblock">
// //                                 <h3 className="headings">Education</h3>

// //                                 {resume.education.map((edu, idx) => (
// //                                     <div key={idx} className="user-education">
// //                                         <div className="exp1">
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) =>
// //                                                     handleUserContent("education", "institution", e.target.textContent, idx)
// //                                                 }
// //                                             >
// //                                                 <p className='para1'>{edu.institution}</p>
// //                                             </div>
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("education", "grade", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para3'>{edu.grade}</p>
// //                                             </div>
// //                                         </div>

// //                                         <div className="exp1">
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("education", "degree", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para2'>{edu.degree}</p>
// //                                             </div>
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("education", "duration", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para3'>{edu.duration}</p>
// //                                             </div>
// //                                         </div>

// //                                         {resume.education.length > 1 && (
// //                                             <button onClick={() => removeEntry("education", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                                 Remove
// //                                             </button>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                                 <button onClick={() => addNewEntry("education")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                     + New Entry
// //                                 </button>
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto"
// //                                 onClick={() => removeBlock("education")} style={{ margin: "10px 0px" }}>Remove Education</button>
// //                         </div>
// //                     )}

// //                     {visibleSections.achievements && (
// //                         <div>
// //                             <div className="achievementblock">
// //                                 <h3 className="headings">Key Achievements</h3>
// //                                 {resume.achievements.map((ach, idx) => (
// //                                     <div key={idx} className="user-achievements">
// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("achievements", "keyAchievements", e.target.textContent, idx)}
// //                                         >
// //                                             <p className='para4'>{ach.keyAchievements}</p>
// //                                         </div>

// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("achievements", "describe", e.target.textContent, idx)}
// //                                         >
// //                                             <p className='para5 '>{ach.describe}</p>
// //                                         </div>
// //                                         {resume.achievements.length > 1 && (
// //                                             <button onClick={() => removeEntry("achievements", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                                 Remove
// //                                             </button>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                                 <button onClick={() => addNewEntry("achievements")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                     + New Entry
// //                                 </button>
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto"
// //                                 onClick={() => removeBlock("achievements")} style={{ margin: "10px 0px" }}>Remove Achievements</button>
// //                         </div>)}

// //                     {visibleSections.skills && (
// //                         <div className="skillsblock">
// //                             <h3 className="headings">Skills</h3>
// //                             <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("skills", null, e.target.textContent.split(", "))}>
// //                                 {resume.skills.join(", ")}
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto"
// //                                 onClick={() => removeBlock("skills")}>Remove Skills</button>
// //                         </div>
// //                     )}

// //                     {visibleSections.certifications && (
// //                         <div>
// //                             <div className="certificationcourse">
// //                                 <h3 className="headings">Certification</h3>
// //                                 {resume.certifications.map((cer, idx) => (
// //                                     <div key={idx} className="user-certificate">
// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("certifications", "certificates", e.target.textContent, idx)}
// //                                         >
// //                                             <p className='para2'>{cer.certificates}</p>
// //                                         </div>

// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("certifications", "link", e.target.textContent, idx)}
// //                                         >
// //                                             <p className='para3'>{cer.link}</p>
// //                                         </div>
// //                                         {resume.certifications.length > 1 && (
// //                                             <button onClick={() => removeEntry("certifications", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                                 Remove
// //                                             </button>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                                 <button onClick={() => addNewEntry("certifications")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                     + New Entry
// //                                 </button>
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto"
// //                                 onClick={() => removeBlock("certifications")} style={{ margin: "10px 0px" }}>Remove Certifications</button>
// //                         </div>
// //                     )}

// //                     {visibleSections.projects && (
// //                         <div>
// //                             <div className="projectblock">
// //                                 <h3 className="headings">Projects</h3>
// //                                 {resume.projects.map((prj, idx) => (
// //                                     <div key={idx} className="user-project">
// //                                         <div className="exp1">
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) =>
// //                                                     handleUserContent("projects", "pname", e.target.textContent, idx)
// //                                                 }
// //                                             >
// //                                                 <p className='para1'>{prj.pname}</p>
// //                                             </div>
// //                                             <div
// //                                                 contentEditable
// //                                                 suppressContentEditableWarning
// //                                                 onBlur={(e) => handleUserContent("projects", "pdate", e.target.textContent, idx)}
// //                                             >
// //                                                 <p className='para2'>{prj.pdate}</p>
// //                                             </div>
// //                                         </div>
// //                                         <div
// //                                             contentEditable
// //                                             suppressContentEditableWarning
// //                                             onBlur={(e) => handleUserContent("projects", "psummary", e.target.textContent, idx)}
// //                                         >
// //                                             <p className='para2'>{prj.psummary}</p>
// //                                         </div>

// //                                         {resume.projects.length > 1 && (
// //                                             <button onClick={() => removeEntry("projects", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto ">
// //                                                 Remove
// //                                             </button>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                                 <button onClick={() => addNewEntry("projects")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto">
// //                                     + New Entry
// //                                 </button>
// //                             </div>
// //                             <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 ease-in-out  sm:w-auto" onClick={() => removeBlock("projects")} style={{ margin: "10px 0px" }}>Remove Projects</button>
// //                         </div>)}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Temp2;



// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import './Temp1.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// const Temp2 = () => {
//   const [showButtons, setShowButtons] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [showEnhancementOptions, setShowEnhancementOptions] = useState(false);
//   const [resumeData, setResumeData] = useState({
//     name: "Your Name",
//     role: "The role you are applying for?",
//     phone: "Phone",
//     email: "yourname@example.com",
//     linkedin: "Linkedin/Portfolio",
//     location: "Location",
//     summary: "Briefly explain why you are a great fit for this role. I am a strong fit for the web developer role because of my comprehensive understanding of both frontend and backend technologies, including expertise in JavaScript, React, Node.js, and modern web development frameworks.",
//     experience: [{
//       title: 'Your Title',
//       companyName: 'Company Name',
//       date: 'Date',
//       companyLocation: 'Company Location',
//       description: 'Company Description. Web development company specializing in creating innovative, user-centric digital solutions.',
//       accomplishment: 'Your accomplishment. Contributed significantly to high-profile projects.'
//     }],
//     education: [{
//       degree: 'Btech/Information Technology',
//       institution: 'School or University',
//       duration: 'Date Period',
//       grade: "GPA:8.5"
//     }],
//     achievements: [{
//       keyAchievements: 'Your Achievement',
//       describe: "Describe what you did. Consistently demonstrated exceptional technical skills and leadership."
//     }],
//     courses: [{
//       title: 'Course Name',
//       description: 'Course Description'
//     }],
//     skills: ['HTML, CSS', "Accounting & Budgeting", "Proficient with POS systems", "Excellent interpersonal and communication skills"],
//     projects: [{
//       title: 'Project Name',
//       duration: 'Date period',
//       description: 'Summary of your work. A weather app built with React to display real-time weather information.'
//     }]
//   });

//   const isValidEmail = (email) => {
//     const trimmedEmail = email.trim(); // Remove leading/trailing spaces
//     const re = /^[^\s@]+@[^\s@]+\.[^@\s]+$/;
//     return re.test(trimmedEmail);
//   };
//   useEffect(() => {
//     const loadSavedResume = async () => {
//       if (resumeData.email === "yourname@example.com") return; // Skip if placeholder email
//       if (!isValidEmail(resumeData.email)) return; // Skip if email is invalid
//       try {
//         const response = await axios.get('http://localhost:5000/api/resume11/load', {
//           params: { email: resumeData.email },
//         });
//         if (response.data?.data) {
//           setResumeData(response.data.data);
//         }
//       } catch (error) {
//         console.error("Failed to load saved resume:", error);
//       }
//     };
//     loadSavedResume();
//   }, [resumeData.email]);

//   const [visibleSections, setVisibleSections] = useState({
//     summary: true,
//     experience: true,
//     education: true,
//     achievements: true,
//     skills: true,
//     courses: true,
//     projects: true,
//   });

//   const [isOpen, setIsOpen] = useState(false);

//   const removeBlock = (block) => {
//     setVisibleSections({ ...visibleSections, [block]: false });
//   };

//   const handleUserContent = (section, key, value, index = null) => {
//     let sanitizedValue = value;
//     if (section === "email") {
//       sanitizedValue = value.replace(/[^\w@.-]/g, '').trim(); // Remove all non-alphanumeric, non-@, non-., non-- characters
//     }
//     setResumeData(prevData => {
//       const updatedData = { ...prevData };
//       if (section === "skills") {
//         updatedData.skills = sanitizedValue.split(",").map(skill => skill.trim());
//       } else if (Array.isArray(updatedData[section])) {
//         updatedData[section] = [...updatedData[section]];
//         updatedData[section][index] = { ...updatedData[section][index], [key]: sanitizedValue };
//       } else {
//         updatedData[section] = sanitizedValue;
//       }
//       console.log("Updated resumeData:", updatedData);
//       return updatedData;
//     });
//   };
  

//   const addNewEntry = (section) => {
//     setResumeData(prevData => {
//       const updatedResumeData = { ...prevData };
//       const newEntry = section === "experience" ? {
//         title: 'Your Title',
//         companyName: 'Company Name',
//         date: 'Date',
//         companyLocation: 'Company Location',
//         description: 'Company Description',
//         accomplishment: 'Your accomplishment'
//       } : section === "education" ? {
//         degree: 'Degree and Field of Study',
//         institution: 'School or University',
//         duration: 'Date Period',
//         grade: "GPA:8.5"
//       } : section === "courses" ? {
//         title: 'Course Name',
//         description: 'Course Description'
//       } : section === "projects" ? {
//         title: 'Project Name',
//         duration: 'Date period',
//         description: 'Project Summary'
//       } : section === "achievements" ? {
//         keyAchievements: 'Achievement Title',
//         describe: 'Describe the achievement'
//       } : null;

//       if (newEntry) {
//         updatedResumeData[section] = [...(updatedResumeData[section] || []), newEntry];
//       }
//       return updatedResumeData;
//     });
//   };

//   const removeEntry = (section, index) => {
//     setResumeData(prevData => {
//       const updatedData = { ...prevData };
//       updatedData[section] = updatedData[section].filter((_, i) => i !== index);
//       return updatedData;
//     });
//   };
//   const resumeRef = useRef(null);

//   const handleAIEnhancement = async () => {
//     if (!resumeData._id) {
//       await createResume();
//       alert("Resume created. Click AI Assistant again.");
//       return;
//     }
//     setShowEnhancementOptions(true);
//   };

//   const downloadPdf = async () => {
//     try {
//         setLoading(true);

//         // Send API request to generate PDF
//         const response = await axios.post(
//             "http://localhost:5000/api/resume11/generate-pdf", // Ensure this is the correct endpoint
//             { resumeData },
//             {
//                 responseType: "blob",  // Ensures response is treated as a file
//                 headers: { "Content-Type": "application/json" }
//             }
//         );

//         // Validate Blob response
//         if (!response || !response.data || !(response.data instanceof Blob)) {
//             throw new Error("Invalid PDF response");
//         }

//         // Create and trigger download
//         const url = window.URL.createObjectURL(response.data);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", `resume_${Date.now()}.pdf`);
//         document.body.appendChild(link);
//         link.click();

//         // Cleanup
//         setTimeout(() => {
//             document.body.removeChild(link);
//             window.URL.revokeObjectURL(url);
//             setLoading(false);
//         }, 100);

//     } catch (error) {
//         console.error("Download failed:", error);
//         alert("PDF generation failed. Please check your resume data.");
//         setLoading(false);
//     }
// };


//   const createResume = async () => {
//     if (!isValidEmail(resumeData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/api/resume11/create', { resumeData });
//       if (response.data?.data?._id) {
//         setResumeData(prev => ({ ...prev, _id: response.data.data._id }));
//         alert("✅ Resume created successfully!");
//       }
//     } catch (error) {
//       if (error.response?.status === 409) {
//         setResumeData(error.response.data.data);
//         alert("Resume already exists. Loaded existing resume.");
//       } else {
//         console.error("❌ Resume Creation Error:", error);
//         alert("Failed to create resume.");
//       }
//     }
//   };

//   const saveResume = async () => {
//     if (!resumeData) {
//       alert("No resume data to save!");
//       return;
//     }
//     try {
//       const response = await axios.post("http://localhost:5000/api/resume11/save", { resumeData });
//       if (response.data?.data?._id) {
//         setResumeData(prev => ({ ...prev, _id: response.data.data._id }));
//         alert("Resume saved successfully!");
//       }
//     } catch (error) {
//       console.error("❌ Error saving resume:", error);
//       alert("Failed to save resume.");
//     }
//   };

//   const enhanceSingleField = async (field) => {
//     if (!resumeData._id) {
//       alert("Please save your resume before enhancing a field.");
//       return;
//     }
//     try {
//       setLoading(true);
//       console.log(`🔹 Sending request to enhance ${field}:`, resumeData[field]);
  
//       const response = await axios.post('http://localhost:5000/api/resume11/enhanceField', {
//         resumeId: resumeData._id,
//         field,
//       });
  
//       if (response.data?.data) {
//         console.log(`✅ Field ${field} enhanced:`, response.data.data);
//         setResumeData(response.data.data);
//         alert(`${field} enhanced successfully!`);
//       }
//     } catch (error) {
//       console.error(`❌ Error enhancing ${field}:`, error);
//       alert(`Failed to enhance ${field}.`);
//     } finally {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="flex gap-4">
//       <div className="hidden md:block w-1/6 bg-gray-800 text-white p-4 min-h-screen">
//         <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={handleAIEnhancement}>
//           🤖 AI Assistant
//         </button>
//         {showEnhancementOptions && (
//           <div className="ai-field-enhancement">
//             <h4>Enhance Specific Field</h4>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("summary")}>
//               Enhance Summary
//             </button>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("skills")}>
//               Enhance Skills
//             </button>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("experience")}>
//               Enhance Experience
//             </button>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("achievements")}>
//               Enhance Achievements
//             </button>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("courses")}>
//               Enhance Courses
//             </button>
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("projects")}>
//               Enhance Projects
//             </button>
//           </div>
//         )}
//         <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors" onClick={saveResume}>
//           Save Resume
//         </button>
//         <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors" onClick={downloadPdf}>
//           ⬇️ Download
//         </button>
//       </div>

//       <div className="md:hidden fixed left-4 right-2 z-50">
//         <button className="bg-gray-800 text-white p-3 rounded" onClick={() => setIsOpen(!isOpen)}>
//           ☰ Menu
//         </button>
//         {isOpen && (
//           <div className="absolute left-0 right-0 bg-gray-800 p-2 rounded shadow-lg mt-2">
//             <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={handleAIEnhancement}>
//               🤖 AI Assistant
//             </button>
//             <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors" onClick={saveResume}>
//               Save Resume
//             </button>
//             <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors" onClick={downloadPdf}>
//               ⬇️ Download
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="editResume w-6/7 bg-white p-4 ml-24"> 
//     <div id="resumeBody">
//         <div className="firstBlock">
//             {/* Name */}
//             <div className="user-name" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("name", null, e.target.textContent)}>
//                 <h2 className='res-h2'>{resumeData?.name}</h2>
//             </div>
//             {/* Role */}
//             <div className="user-role" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("role", null, e.target.textContent)}>
//                 {resumeData?.role}
//             </div>
//             {/* Contact Details */}
//             <div className="user-contacts">
//                 {/* Phone */}
//                 {resumeData?.phone && (
//                     <div className="user-phone">
//                         <FontAwesomeIcon icon={faPhone} />{" "}
//                         <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("phone", null, e.target.textContent)}>
//                             {resumeData.phone}
//                         </span>
//                         {" | "}
//                     </div>
//                 )}
//                 {/* Email */}
//                 {resumeData?.email && (
//                     <div className="user-email">
//                         <FontAwesomeIcon icon={faEnvelope} />{" "}
//                         <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("email", null, e.target.textContent)}>
//                             {resumeData.email}
//                         </span>
//                         {" | "}
//                     </div>
//                 )}
//                 {/* LinkedIn */}
//                 {resumeData?.linkedin && (
//                     <div className="user-linkedin">
//                         <FontAwesomeIcon icon={faLinkedin} />{" "}
//                         <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("linkedin", null, e.target.textContent)}>
//                             {resumeData.linkedin}
//                         </span>
//                         {" | "}
//                     </div>
//                 )}
//                 {/* Location */}
//                 {resumeData?.location && (
//                     <div className="user-location">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
//                         <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("location", null, e.target.textContent)}>
//                             {resumeData.location}
//                         </span>
//                     </div>
//                 )}
//             </div>
//         </div>

//           {visibleSections.summary && (
//             <div>
//               <div className="summaryblock">
//                 <h3 className="headings">Summary</h3>
//                 <div className="user-summary" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("summary", null, e.target.textContent)}>
//                   {resumeData?.summary}
//                 </div>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("summary")}>
//                 Remove Summary
//               </button>
//             </div>
//           )}

//           {visibleSections.experience && (
//             <div>
//               <div className="experienceblock">
//                 <h3 className="headings">Experience</h3>
//                 {resumeData?.experience?.map((exp, idx) => (
//                   <div key={idx} className="user-experience">
//                     <div className="exp1">
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "companyName", e.target.textContent, idx)}>
//                         <p className='para1'>{exp.companyName}</p>
//                       </div>
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "companyLocation", e.target.textContent, idx)}>
//                         <p className='para2'>{exp.companyLocation}</p>
//                       </div>
//                     </div>
//                     <div className="exp1">
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "title", e.target.textContent, idx)}>
//                         <p className='para1'>{exp.title}</p>
//                       </div>
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "date", e.target.textContent, idx)}>
//                         <p className='para2'>{exp.date}</p>
//                       </div>
//                     </div>
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "description", e.target.textContent, idx)}>
//                       {exp.description}
//                     </div>
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "accomplishment", e.target.textContent, idx)}>
//                       {exp.accomplishment}
//                     </div>
//                     {resumeData?.experience?.length > 1 && (
//                       <button onClick={() => removeEntry("experience", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={() => addNewEntry("experience")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                   + New Entry
//                 </button>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("experience")} style={{ margin: "10px 0px" }}>
//                 Remove Experience
//               </button>
//             </div>
//           )}

//           {visibleSections.education && (
//             <div>
//               <div className="educationblock">
//                 <h3 className="headings">Education</h3>
//                 {resumeData?.education?.map((edu, idx) => (
//                   <div key={idx} className="user-education">
//                     <div className="exp1">
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "institution", e.target.textContent, idx)}>
//                         <p className='para1'>{edu.institution}</p>
//                       </div>
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "grade", e.target.textContent, idx)}>
//                         <p className='para3'>{edu.grade}</p>
//                       </div>
//                     </div>
//                     <div className="exp1">
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "degree", e.target.textContent, idx)}>
//                         <p className='para2'>{edu.degree}</p>
//                       </div>
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "duration", e.target.textContent, idx)}>
//                         <p className='para3'>{edu.duration}</p>
//                       </div>
//                     </div>
//                     {resumeData?.education?.length > 1 && (
//                       <button onClick={() => removeEntry("education", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={() => addNewEntry("education")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                   + New Entry
//                 </button>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("education")} style={{ margin: "10px 0px" }}>
//                 Remove Education
//               </button>
//             </div>
//           )}

//           {visibleSections.achievements && (
//             <div>
//               <div className="achievementblock">
//                 <h3 className="headings">Key Achievements</h3>
//                 {resumeData?.achievements?.map((ach, idx) => (
//                   <div key={idx} className="user-education">
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("achievements", "keyAchievements", e.target.textContent, idx)}>
//                       <p className='para2'>{ach.keyAchievements}</p>
//                     </div>
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("achievements", "describe", e.target.textContent, idx)}>
//                       <p className='para3'>{ach.describe}</p>
//                     </div>
//                     {resumeData?.achievements?.length > 1 && (
//                       <button onClick={() => removeEntry("achievements", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={() => addNewEntry("achievements")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                   + New Entry
//                 </button>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("achievements")} style={{ margin: "10px 0px" }}>
//                 Remove Achievements
//               </button>
//             </div>
//           )}

//           {visibleSections.skills && (
//             <div className="skillsblock">
//               <h3 className="headings">Skills</h3>
//               <div contentEditable suppressContentEditableWarning onBlur={(e) => {console.log("Skills input:", e.target.textContent); handleUserContent("skills", null, e.target.textContent); }}>
//                 {resumeData?.skills?.join(", ")}
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("skills")}>
//                 Remove Skills
//               </button>
//             </div>
//           )}

//           {visibleSections.courses && (
//             <div>
//               <div className="coursesblock">
//                 <h3 className="headings">Courses</h3>
//                 {resumeData?.courses?.map((course, idx) => (
//                   <div key={idx} className="user-course">
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("courses", "title", e.target.textContent, idx)}>
//                       <p className='para2'>{course.title}</p>
//                     </div>
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("courses", "description", e.target.textContent, idx)}>
//                       <p className='para3'>{course.description}</p>
//                     </div>
//                     {resumeData?.courses?.length > 1 && (
//                       <button onClick={() => removeEntry("courses", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={() => addNewEntry("courses")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                   + New Entry
//                 </button>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("courses")} style={{ margin: "10px 0px" }}>
//                 Remove Courses
//               </button>
//             </div>
//           )}

//           {visibleSections.projects && (
//             <div>
//               <div className="projectblock">
//                 <h3 className="headings">Projects</h3>
//                 {resumeData?.projects?.map((prj, idx) => (
//                   <div key={idx} className="user-project">
//                     <div className="exp1">
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "title", e.target.textContent, idx)}>
//                         <p className='para1'>{prj.title}</p>
//                       </div>
//                       <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "duration", e.target.textContent, idx)}>
//                         <p className='para2'>{prj.duration}</p>
//                       </div>
//                     </div>
//                     <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "description", e.target.textContent, idx)}>
//                       <p className='para2'>{prj.description}</p>
//                     </div>
//                     {resumeData?.projects?.length > 1 && (
//                       <button onClick={() => removeEntry("projects", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={() => addNewEntry("projects")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
//                   + New Entry
//                 </button>
//               </div>
//               <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("projects")} style={{ margin: "10px 0px" }}>
//                 Remove Projects
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Temp2;

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Temp1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Temp2 = () => {
  const [showEnhancementOptions, setShowEnhancementOptions] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: "Your Name",
    role: "The role you are applying for?",
    phone: "Phone",
    email: "yourname@example.com",
    linkedin: "Linkedin/Portfolio",
    location: "Location",
    summary: "Briefly explain why you are a great fit for this role. I am a strong fit for the web developer role because of my comprehensive understanding of both frontend and backend technologies, including expertise in JavaScript, React, Node.js, and modern web development frameworks.",
    experience: [{
      title: 'Your Title',
      companyName: 'Company Name',
      date: 'Date',
      companyLocation: 'Company Location',
      description: 'Company Description. Web development company specializing in creating innovative, user-centric digital solutions.',
      accomplishment: 'Your accomplishment. Contributed significantly to high-profile projects.'
    }],
    education: [{
      degree: 'Btech/Information Technology',
      institution: 'School or University',
      duration: 'Date Period',
      grade: "GPA:8.5"
    }],
    achievements: [{
      keyAchievements: 'Your Achievement',
      describe: "Describe what you did. Consistently demonstrated exceptional technical skills and leadership."
    }],
    courses: [{
      title: 'Course Name',
      description: 'Course Description'
    }],
    skills: ['HTML, CSS', "Accounting & Budgeting", "Proficient with POS systems", "Excellent interpersonal and communication skills"],
    projects: [{
      title: 'Project Name',
      duration: 'Date period',
      description: 'Summary of your work. A weather app built with React to display real-time weather information.'
    }]
  });
  const [showButtons, setShowButtons] = useState(true);
  const [loading, setLoading] = useState(false);
  const isValidEmail = (email) => {
    const trimmedEmail = email.trim(); // Remove leading/trailing spaces
    const re = /^[^\s@]+@[^\s@]+\.[^@\s]+$/;
    return re.test(trimmedEmail);
  };
  useEffect(() => {
    const loadSavedResume = async () => {
      if (resumeData.email === "yourname@example.com") return; // Skip if placeholder email
      if (!isValidEmail(resumeData.email)) return; // Skip if email is invalid
      try {
        const response = await axios.get('http://localhost:5000/api/resume1/load', {
          params: { email: resumeData.email },
        });
        if (response.data?.data) {
          setResumeData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to load saved resume:", error);
      }
    };
    loadSavedResume();
  }, [resumeData.email]);

  const [visibleSections, setVisibleSections] = useState({
    summary: true,
    experience: true,
    education: true,
    achievements: true,
    skills: true,
    courses: true,
    projects: true,
  });

  const [isOpen, setIsOpen] = useState(false);

  const removeBlock = (block) => {
    setVisibleSections({ ...visibleSections, [block]: false });
  };

  const handleUserContent = (section, key, value, index = null) => {
    let sanitizedValue = value;
    if (section === "email") {
      sanitizedValue = value.replace(/[^\w@.-]/g, '').trim(); // Remove all non-alphanumeric, non-@, non-., non-- characters
    }
    setResumeData(prevData => {
      const updatedData = { ...prevData };
      if (section === "skills") {
        updatedData.skills = sanitizedValue.split(",").map(skill => skill.trim());
      } else if (Array.isArray(updatedData[section])) {
        updatedData[section] = [...updatedData[section]];
        updatedData[section][index] = { ...updatedData[section][index], [key]: sanitizedValue };
      } else {
        updatedData[section] = sanitizedValue;
      }
      console.log("Updated resumeData:", updatedData);
      return updatedData;
    });
  };
  

  const addNewEntry = (section) => {
    setResumeData(prevData => {
      const updatedResumeData = { ...prevData };
      const newEntry = section === "experience" ? {
        title: 'Your Title',
        companyName: 'Company Name',
        date: 'Date',
        companyLocation: 'Company Location',
        description: 'Company Description',
        accomplishment: 'Your accomplishment'
      } : section === "education" ? {
        degree: 'Degree and Field of Study',
        institution: 'School or University',
        duration: 'Date Period',
        grade: "GPA:8.5"
      } : section === "courses" ? {
        title: 'Course Name',
        description: 'Course Description'
      } : section === "projects" ? {
        title: 'Project Name',
        duration: 'Date period',
        description: 'Project Summary'
      } : section === "achievements" ? {
        keyAchievements: 'Achievement Title',
        describe: 'Describe the achievement'
      } : null;

      if (newEntry) {
        updatedResumeData[section] = [...(updatedResumeData[section] || []), newEntry];
      }
      return updatedResumeData;
    });
  };

  const removeEntry = (section, index) => {
    setResumeData(prevData => {
      const updatedData = { ...prevData };
      updatedData[section] = updatedData[section].filter((_, i) => i !== index);
      return updatedData;
    });
  };
  const resumeRef = useRef(null);

  const handleAIEnhancement = async () => {
    if (!resumeData._id) {
      await createResume();
      alert("Resume created. Click AI Assistant again.");
      return;
    }
    setLoading(true); // Start loading
    setShowEnhancementOptions(true);
    setLoading(false); 
  };

  const downloadPdf = async () => {
    try {
        setLoading(true);

        // Send API request to generate PDF
        const response = await axios.post(
            "http://localhost:5000/api/resume1/generate-pdf", // Ensure this is the correct endpoint
            { resumeData },
            {
                responseType: "blob",  // Ensures response is treated as a file
                headers: { "Content-Type": "application/json" }
            }
        );

        // Validate Blob response
        if (!response || !response.data || !(response.data instanceof Blob)) {
            throw new Error("Invalid PDF response");
        }

        // Create and trigger download
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `resume_${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();

        // Cleanup
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            setLoading(false);
        }, 100);

    } catch (error) {
        console.error("Download failed:", error);
        alert("PDF generation failed. Please check your resume data.");
        setLoading(false);
    }
};


  const createResume = async () => {
    if (!isValidEmail(resumeData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/resume1/create', { resumeData });
      if (response.data?.data?._id) {
        setResumeData(prev => ({ ...prev, _id: response.data.data._id }));
        alert("✅ Resume created successfully!");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setResumeData(error.response.data.data);
        alert("Resume already exists. Loaded existing resume.");
      } else {
        console.error("❌ Resume Creation Error:", error);
        alert("Failed to create resume.");
      }
    }
  };

  const saveResume = async () => {
    if (!resumeData) {
      alert("No resume data to save!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/resume1/save", { resumeData });
      if (response.data?.data?._id) {
        setResumeData(prev => ({ ...prev, _id: response.data.data._id }));
        alert("Resume saved successfully!");
      }
    } catch (error) {
      console.error("❌ Error saving resume:", error);
      alert("Failed to save resume.");
    }
  };

  const enhanceSingleField = async (field) => {
    if (!resumeData._id) {
      alert("Please save your resume before enhancing a field.");
      return;
    }
    try {
      setLoading(true);
      console.log(`🔹 Sending request to enhance ${field}:`, resumeData[field]);
  
      const response = await axios.post('http://localhost:5000/api/resume1/enhanceField', {
        resumeId: resumeData._id,
        field,
      });
  
      if (response.data?.data) {
        console.log(`✅ Field ${field} enhanced:`, response.data.data);
        setResumeData(response.data.data);
        alert(`${field} enhanced successfully!`);
      }
    } catch (error) {
      console.error(`❌ Error enhancing ${field}:`, error);
      alert(`Failed to enhance ${field}.`);
    } finally {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    }
  };
  

  return (
    <div className="flex gap-4">
      <div className="hidden md:block w-1/6 bg-gray-800 text-white p-4 min-h-screen">
      {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Added z-index: 50 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-lg font-semibold text-gray-700">Loading...</p>
              </div>
            </div>
      )}
        <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={handleAIEnhancement}>
          🤖 AI Assistant
        </button>
        {showEnhancementOptions && (
          <div className="ai-field-enhancement">
            <h4>Enhance Specific Field</h4>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("summary")}>
              Enhance Summary
            </button>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("skills")}>
              Enhance Skills
            </button>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("experience")}>
              Enhance Experience
            </button>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("achievements")}>
              Enhance Achievements
            </button>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("courses")}>
              Enhance Courses
            </button>
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={() => enhanceSingleField("projects")}>
              Enhance Projects
            </button>
          </div>
        )}
        <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors" onClick={saveResume}>
          Save Resume
        </button>
        <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors" onClick={downloadPdf}>
          ⬇️ Download
        </button>
      </div>

      <div className="md:hidden fixed left-4 right-2 z-50">
        <button className="bg-gray-800 text-white p-3 rounded" onClick={() => setIsOpen(!isOpen)}>
          ☰ Menu
        </button>
        {isOpen && (
          <div className="absolute left-0 right-0 bg-gray-800 p-2 rounded shadow-lg mt-2">
            <button className="w-full bg-gray-700 text-white p-2 mb-2 rounded hover:bg-gray-600 transition-colors" onClick={handleAIEnhancement}>
              🤖 AI Assistant
            </button>
            <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600 transition-colors" onClick={saveResume}>
              Save Resume
            </button>
            <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors" onClick={downloadPdf}>
              ⬇️ Download
            </button>
          </div>
        )}
      </div>

      <div className="editResume w-6/7 bg-white p-4 ml-24"> 
    <div id="resumeBody">
        <div className="firstBlock">
            {/* Name */}
            <div className="user-name" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("name", null, e.target.textContent)}>
                <h2 className='res-h2'>{resumeData?.name}</h2>
            </div>
            {/* Role */}
            <div className="user-role" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("role", null, e.target.textContent)}>
                {resumeData?.role}
            </div>
            {/* Contact Details */}
            <div className="user-contacts">
                {/* Phone */}
                {resumeData?.phone && (
                    <div className="user-phone">
                        <FontAwesomeIcon icon={faPhone} />{" "}
                        <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("phone", null, e.target.textContent)}>
                            {resumeData.phone}
                        </span>
                        {" | "}
                    </div>
                )}
                {/* Email */}
                {resumeData?.email && (
                    <div className="user-email">
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("email", null, e.target.textContent)}>
                            {resumeData.email}
                        </span>
                        {" | "}
                    </div>
                )}
                {/* LinkedIn */}
                {resumeData?.linkedin && (
                    <div className="user-linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                        <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("linkedin", null, e.target.textContent)}>
                            {resumeData.linkedin}
                        </span>
                        {" | "}
                    </div>
                )}
                {/* Location */}
                {resumeData?.location && (
                    <div className="user-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                        <span contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("location", null, e.target.textContent)}>
                            {resumeData.location}
                        </span>
                    </div>
                )}
            </div>
        </div>

          {visibleSections.summary && (
            <div>
              <div className="summaryblock">
                <h3 className="headings">Summary</h3>
                <div className="user-summary" contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("summary", null, e.target.textContent)}>
                  {resumeData?.summary}
                </div>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("summary")}>
                Remove Summary
              </button>
            </div>
          )}

          {visibleSections.experience && (
            <div>
              <div className="experienceblock">
                <h3 className="headings">Experience</h3>
                {resumeData?.experience?.map((exp, idx) => (
                  <div key={idx} className="user-experience">
                    <div className="exp1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "companyName", e.target.textContent, idx)}>
                        <p className='para1'>{exp.companyName}</p>
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "companyLocation", e.target.textContent, idx)}>
                        <p className='para2'>{exp.companyLocation}</p>
                      </div>
                    </div>
                    <div className="exp1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "title", e.target.textContent, idx)}>
                        <p className='para1'>{exp.title}</p>
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "date", e.target.textContent, idx)}>
                        <p className='para2'>{exp.date}</p>
                      </div>
                    </div>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "description", e.target.textContent, idx)}>
                      {exp.description}
                    </div>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("experience", "accomplishment", e.target.textContent, idx)}>
                      {exp.accomplishment}
                    </div>
                    {resumeData?.experience?.length > 1 && (
                      <button onClick={() => removeEntry("experience", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => addNewEntry("experience")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  + New Entry
                </button>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("experience")} style={{ margin: "10px 0px" }}>
                Remove Experience
              </button>
            </div>
          )}

          {visibleSections.education && (
            <div>
              <div className="educationblock">
                <h3 className="headings">Education</h3>
                {resumeData?.education?.map((edu, idx) => (
                  <div key={idx} className="user-education">
                    <div className="exp1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "institution", e.target.textContent, idx)}>
                        <p className='para1'>{edu.institution}</p>
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "grade", e.target.textContent, idx)}>
                        <p className='para3'>{edu.grade}</p>
                      </div>
                    </div>
                    <div className="exp1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "degree", e.target.textContent, idx)}>
                        <p className='para2'>{edu.degree}</p>
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("education", "duration", e.target.textContent, idx)}>
                        <p className='para3'>{edu.duration}</p>
                      </div>
                    </div>
                    {resumeData?.education?.length > 1 && (
                      <button onClick={() => removeEntry("education", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => addNewEntry("education")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  + New Entry
                </button>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("education")} style={{ margin: "10px 0px" }}>
                Remove Education
              </button>
            </div>
          )}

          {visibleSections.achievements && (
            <div>
              <div className="achievementblock">
                <h3 className="headings">Key Achievements</h3>
                {resumeData?.achievements?.map((ach, idx) => (
                  <div key={idx} className="user-education">
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("achievements", "keyAchievements", e.target.textContent, idx)}>
                      <p className='para2'>{ach.keyAchievements}</p>
                    </div>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("achievements", "describe", e.target.textContent, idx)}>
                      <p className='para3'>{ach.describe}</p>
                    </div>
                    {resumeData?.achievements?.length > 1 && (
                      <button onClick={() => removeEntry("achievements", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => addNewEntry("achievements")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  + New Entry
                </button>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("achievements")} style={{ margin: "10px 0px" }}>
                Remove Achievements
              </button>
            </div>
          )}

          {visibleSections.skills && (
            <div className="skillsblock">
              <h3 className="headings">Skills</h3>
              <div contentEditable suppressContentEditableWarning onBlur={(e) => {console.log("Skills input:", e.target.textContent); handleUserContent("skills", null, e.target.textContent); }}>
                {resumeData?.skills?.join(", ")}
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("skills")}>
                Remove Skills
              </button>
            </div>
          )}

          {visibleSections.courses && (
            <div>
              <div className="coursesblock">
                <h3 className="headings">Courses</h3>
                {resumeData?.courses?.map((course, idx) => (
                  <div key={idx} className="user-course">
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("courses", "title", e.target.textContent, idx)}>
                      <p className='para2'>{course.title}</p>
                    </div>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("courses", "description", e.target.textContent, idx)}>
                      <p className='para3'>{course.description}</p>
                    </div>
                    {resumeData?.courses?.length > 1 && (
                      <button onClick={() => removeEntry("courses", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => addNewEntry("courses")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  + New Entry
                </button>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("courses")} style={{ margin: "10px 0px" }}>
                Remove Courses
              </button>
            </div>
          )}

          {visibleSections.projects && (
            <div>
              <div className="projectblock">
                <h3 className="headings">Projects</h3>
                {resumeData?.projects?.map((prj, idx) => (
                  <div key={idx} className="user-project">
                    <div className="exp1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "title", e.target.textContent, idx)}>
                        <p className='para1'>{prj.title}</p>
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "duration", e.target.textContent, idx)}>
                        <p className='para2'>{prj.duration}</p>
                      </div>
                    </div>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => handleUserContent("projects", "description", e.target.textContent, idx)}>
                      <p className='para2'>{prj.description}</p>
                    </div>
                    {resumeData?.projects?.length > 1 && (
                      <button onClick={() => removeEntry("projects", idx)} className="remove-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => addNewEntry("projects")} className="add-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  + New Entry
                </button>
              </div>
              <button className="remove-section-btn bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => removeBlock("projects")} style={{ margin: "10px 0px" }}>
                Remove Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Temp2;
