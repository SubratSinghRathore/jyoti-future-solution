import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const HomePage = () => {
  const courses = [
    'BCA, MCA, B.Tech, M.Tech, BBA, MBA',
    'B-Pharma, D-Pharma, M-Pharma, ANM, GNM, BSc Nursing, MSc Nursing, BAMS, OT, DMLT, BDS',
    'B.Ed, M.Ed, LLB, BA-LLB, BA, BSc, B.Com, MA, MSc, M.Com, ITI (All Branch Polytechnic)',
  ];

  const institutions = [
    'Allen House Group of Institutions, Rooma, Kanpur',
    'Axis College, Rooma, Kanpur',
    'Krishna Group of Institutions',
    'Vidhya Bhawan College of Pharmacy',
    'Indus Institute of Technology and Management',
    'Yashraj College of Pharmacy',
    'Accurate institute of management noida',
    'NIET college noida',
    'Lloyd college  noida',
    'Maharishi University Lucknow and Noida',
    'SRM University Lucknow',
    'Swami Vivekanand Subharati University merut',
    'Mangalathan University',
  ];

  const sliderImages = [image1, image2, image3, image5, image6];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };



  return (
    <div>
      {/* Slider Section */}
      <section className="slider-section">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </section>
      {/* Institutions Section */}
      <section className="institutions-section">
        <h2>Our Institutions</h2>
        <ul className="institutions-list">
          {institutions.map((institution, index) => (
            <li key={index}>{institution}</li>
          ))}
        </ul>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>Courses Offered</h2>
        <div className="course-cards">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <p>{course}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At <strong>Jyoti Future Solutions</strong>, we are committed to revolutionizing the way students approach education and career planning. We bridge the gap between aspiring learners and world-class educational institutions, providing a streamlined platform for academic and professional growth.
        </p>
        <p>
          Our platform offers personalized guidance, connecting students with top institutions, ensuring they embark on a journey that aligns with their dreams and aspirations. With an emphasis on excellence and accessibility, we strive to empower students to unlock their full potential.
        </p>
        <p>
          Backed by a team of experienced counselors and a network of trusted academic partners, Jyoti Future Solutions has established itself as a beacon of reliability and success in the educational sector.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and enable every student to achieve their educational and career aspirations by:
        </p>
        <ul>
          <li>Providing expert counseling and resources for informed decision-making.</li>
          <li>Collaborating with prestigious institutions to deliver top-notch academic opportunities.</li>
          <li>Creating a seamless, student-centric platform for course selection, admission assistance, and guidance.</li>
        </ul>
        <p>
          We believe in nurturing talent, fostering innovation, and building pathways to success, making quality education accessible to all.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To become a globally recognized platform that transforms educational aspirations into meaningful achievements through:
        </p>
        <ul>
          <li>Innovative solutions that enhance the educational experience.</li>
          <li>Fostering partnerships with leading academic institutions worldwide.</li>
          <li>Empowering students to embrace lifelong learning and professional growth.</li>
        </ul>
        <p>
          Our vision is to be a leader in the education sector, driving progress and setting new benchmarks for excellence in academic and career support services.
        </p>
      </section>
      

    </div>
  );
};

export default HomePage;
