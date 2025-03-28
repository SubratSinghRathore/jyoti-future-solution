
import React, { useState } from 'react';


const CoursesPage = () => {
  const [filter, setFilter] = useState('All'); // State for selected filter

  const courseDetails = [
    {
      title: 'BCA (Bachelor of Computer Applications)',
      description: 'A three-year undergraduate course focused on computer applications, software development, and programming.',
      duration: '3 years',
      eligibility: '10+2 with Mathematics or Computer Science as a subject',
    },
    {
      title: 'MCA (Master of Computer Applications)',
      description: 'A postgraduate course designed to prepare students for advanced roles in computer science and IT.',
      duration: '2 years',
      eligibility: 'Bachelor\'s degree in Computer Applications or equivalent',
    },
    {
      title: 'B.Tech (Bachelor of Technology)',
      description: 'An engineering degree focused on core technical and engineering skills.',
      duration: '4 years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics',
    },
    {
      title: 'M.Tech (Master of Technology)',
      description: 'A postgraduate engineering course to deepen technical expertise in specialized fields.',
      duration: '2 years',
      eligibility: 'B.Tech/B.E. degree or equivalent',
    },
    {
      title: 'BBA (Bachelor of Business Administration)',
      description: 'An undergraduate business course aimed at building management and entrepreneurial skills.',
      duration: '3 years',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'MBA (Master of Business Administration)',
      description: 'A postgraduate course focused on advanced management and leadership skills.',
      duration: '2 years',
      eligibility: 'Bachelor\'s degree in any discipline',
    },
    {
      title: 'B-Pharma (Bachelor of Pharmacy)',
      description: 'A four-year undergraduate course focused on pharmaceutical sciences.',
      duration: '4 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics',
    },
    {
      title: 'D-Pharma (Diploma in Pharmacy)',
      description: 'A two-year course providing basic knowledge about pharmaceuticals.',
      duration: '2 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics',
    },
    {
      title: 'M-Pharma (Master of Pharmacy)',
      description: 'A postgraduate course offering advanced knowledge in pharmaceutical sciences.',
      duration: '2 years',
      eligibility: 'B.Pharm degree or equivalent',
    },
    {
      title: 'ANM (Auxiliary Nurse Midwifery)',
      description: 'A diploma course in nursing that focuses on midwifery and healthcare services.',
      duration: '2 years',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'GNM (General Nursing and Midwifery)',
      description: 'A diploma course in nursing that prepares students for healthcare services.',
      duration: '3.5 years',
      eligibility: '10+2 with Biology',
    },
    {
      title: 'BSc Nursing',
      description: 'A four-year undergraduate course in nursing and healthcare.',
      duration: '4 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology',
    },
    {
      title: 'MSc Nursing',
      description: 'A postgraduate course offering advanced nursing knowledge and skills.',
      duration: '2 years',
      eligibility: 'B.Sc Nursing degree or equivalent',
    },
    {
      title: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
      description: 'A five-year course in Ayurvedic medicine.',
      duration: '5.5 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology',
    },
    {
      title: 'OT (Occupational Therapy)',
      description: 'A professional course in rehabilitation and therapy.',
      duration: '4 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology',
    },
    {
      title: 'DMLT (Diploma in Medical Laboratory Technology)',
      description: 'A two-year course focusing on laboratory and diagnostic skills.',
      duration: '2 years',
      eligibility: '10+2 with Science',
    },
    {
      title: 'BDS (Bachelor of Dental Surgery)',
      description: 'A five-year course in dental surgery and oral healthcare.',
      duration: '5 years',
      eligibility: '10+2 with Physics, Chemistry, and Biology',
    },
    {
      title: 'B.Ed (Bachelor of Education)',
      description: 'A two-year degree course to become a professional teacher.',
      duration: '2 years',
      eligibility: 'Bachelor\'s degree in any discipline',
    },
    {
      title: 'M.Ed (Master of Education)',
      description: 'A postgraduate course focused on advanced teaching methodologies.',
      duration: '2 years',
      eligibility: 'B.Ed degree or equivalent',
    },
    {
      title: 'LLB (Bachelor of Laws)',
      description: 'A professional law course.',
      duration: '3 years',
      eligibility: 'Bachelor\'s degree in any discipline',
    },
    {
      title: 'BA-LLB (Integrated Bachelor of Arts and Law)',
      description: 'A five-year integrated course combining Arts and Law.',
      duration: '5 years',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'ITI (Industrial Training Institute)',
      description: 'A skill-based training program for various technical trades.',
      duration: '6 months - 2 years',
      eligibility: '10th or 12th pass',
    },
  ];

 const sortedCourses = [...courseDetails].sort((a, b) => a.title.localeCompare(b.title));

 // Get unique, sorted titles for filtering
 const uniqueTitles = [...new Set(sortedCourses.map(course => course.title))].sort();

 // Filtered courses based on the selected filter
 const filteredCourses = filter === 'All' 
   ? sortedCourses 
   : sortedCourses.filter(course => course.title === filter);

   return (
    <div className="courses-page">
      <h2>Course Details</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <label htmlFor="filter">Filter by Course: </label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          {uniqueTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      {/* Course List */}
      <div className="course-list">
        {filteredCourses.map((course, index) => (
          <div 
            key={index} 
            className="course-card" 
            onClick={() => window.open(course.brochureLink, '_blank')}
          >
            <h3>{course.title}</h3>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Eligibility:</strong> {course.eligibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

  
  
export default CoursesPage;
