import React from 'react';
import kakasaheb_img from '../../assets/kakasaheb.jpg';
import udeshi_img from '../../assets/Udeshi.jpg';
import bhau_img from '../../assets/Bhau.jpg';
import './Society.css'

function Society() {
  return (
    <div>
      <div className="inspiration">
        <div className="inspiration-heading">
          <h1>Our Inspiration</h1>
        </div>
        <div className="inspiration-images">
          <div className="inspiration-left-img">
            <img src={kakasaheb_img} alt="Padmashree Karmaveer KakaSaheb Wagh" />
            <p>Padmashree Karmaveer KakaSaheb Wagh</p>
          </div>
          <div className="inspiration-center-img">
            <img src={udeshi_img} alt="Late Shri. RatanSeth Haridas Udeshi (Kakuseth)" />
            <p>Late Shri. RatanSeth Haridas Udeshi (Kakuseth)</p>
          </div>
          <div className="inspiration-right-img">
            <img src={bhau_img} alt="Late Shri. Balasaheb Wagh" />
            <p>Late Shri. Balasaheb Wagh</p>
          </div>
        </div>
      </div>
      <div className="our-society">
        <div className="our-society-heading">
          <h1>About K.K.Wagh Education Society</h1>
          <p>
            K. K. Wagh Education Society is a leading educational trust in Nashik District. It was established in 1970
            by the visionary leader Late Padmashree Karmaveer Kakasaheb Wagh. He realized the importance of education for
            the upliftment of rural masses and started with a school in Niphad Taluka. The education society later on
            received a land of 23 acres from the well-known philanthropist Late Kakuseth Udeshi, Director of Hansaraj
            Surji Charitable Trust, Nashik. It was utilized by K. K. Wagh Education Society to establish an ideal
            Technical Campus known as 'Hirabai Haridas Vidyanagari'. This picturesque Campus houses the Engineering
            College, Polytechnics, and Pharmacy College. Later on, other educational institutes in the fields of
            Agriculture, Agricultural Engineering, Education, Nursing, Fine Arts, and Performing Arts were started in
            the campus at Saraswatinagar, Nashik. English Medium Schools, Junior Colleges, and CBSE Schools are also run
            by the trust in Nashik City and Niphad Taluka.
          </p>
          <p>
            With the vision of empowering the youth through quality education, K.K. Wagh Education Society started
            colleges with faculties like Arts, Science, Commerce, and Computer Science at Nashik, Pimplas (Ramache),
            Kakasahebnagar, and Chandori. These colleges are useful for the children of farmers who were deprived of
            higher education due to the non-availability of colleges in their native places. A Pharmacy Institute was
            established in Chandori village to provide professional education for rural students.
          </p>
          <p>
            The objective of K. K. Wagh Education Society is to provide quality education at affordable cost. The quality
            culture has been developed in all the institutes. All institutes have state-of-the-art laboratories with
            the latest equipment, computers, and internet connectivity. Other facilities provided to students include
            gymnasium and sports facilities, hostels for boys and girls, mess and canteen, and transportation facility.
            Highly motivated and qualified faculty engaged in teaching, research, consultancy, training, testing, and
            designing is a major strength of all the institutes.
          </p>
          <p>
            A small sapling planted by Karmaveer Kakasaheb Wagh has grown into a big tree with 36 branches and over
            21,000 students engaged in studies from K.G. to Ph.D. in various fields. There are over 1,900 dedicated
            employees following Indian ethics and striving hard towards developing world-class institutes. Over 50,000
            alumni members spread across the globe are the brand ambassadors for K.K.Wagh Education Society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Society;
