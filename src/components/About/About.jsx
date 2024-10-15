import React from 'react'
import './About.css'
import CollegeFrontImage from '../../assets/KKw-front-pic.jpeg'
import NashikImage from '../../assets/nashik-pic.jpeg'
import { HotelDetails } from '../../assets/assets.js'
import Society from '../Society/Society.jsx'

function About() {
    const isFirstDiv = true;
  return (
    <>
        <div className="about" id="about">
            <Society/>
            <div className="about-clg">
                <div className="about-clg-left">
                    <h2 className="about-clg-heading">About our Institute</h2>
                    <p className="about-clg-desc">
                    K. K. Wagh Institute of Engineering Education and Research, Nashik, was established in 1984 in a small town known as Bhausahebnagar near Nashik. It was relocated to Nashik in 1986 and has since been serving society by imparting quality technical education. The institute spans 23-acre campus. Being in the league of Autonomous Engineering Colleges in Maharashtra, the Institute now can design its curriculum, and academic calendar, conduct examinations and declare results. As an autonomous institution, it has developed state-of-the-art laboratories for various courses, including Computer, Electronics and Telecommunication, Mechanical, Civil, Chemical, Electrical, Robotics and Automation, Computer Science and Design, Artificial Intelligence and Data Science (AIDS), and Information Technology. The institute also offers MCA, MBA, and postgraduate and research programs in Electrical, Civil, and E&TC Engineering. Programs in Electrical, Civil, E&TC, Computer, Mechanical, Chemical Engineering and MCA are accredited by the National Board of Accreditation (NBA). The institute is located in Nashik City on NH 3 (Mumbai - Agra National Highway), about 4 km from Nashik Central Bus Stand (CBS), 10 km from Nashik Road Railway Station, and 26 km from Ojhar Airport.
                    </p>
                </div>
                <div className="about-clg-right">
                    <img src={CollegeFrontImage} alt="" />
                </div>
            </div>

            <div className="about-nashik">
                <div className="about-nashik-img">
                    <img src={NashikImage} alt="Nashik" />
                </div>
                <div className="about-nashik-left">
                    <h2 className="about-nashik-heading">
                        About Nashik
                    </h2>
                    <p className="about-nashik-desc">
                        Nashik is one of the most important cities in Northern Maharashtra. Nashik, in Maharashtra, is situated at a distance of 200 km from Mumbai (Bombay) as well as Pune. The city has become the centre of attraction because of its beautiful surroundings and cool and pleasant climate. Nashik has a personality of its own due to its mythological, historical, social and cultural importance. The city, vibrant and active on the industrial, political, social and cultural fronts, has influenced the lives of many great personalities. The river Godavari flows through the city. Temples and ghats on the banks of Godavari have made Nashik one of the holiest places for Hindus all over the World. Places to visit in and around Nashik are Panchavati, Muktidham, Kapaleshwar Temple, Pandavleni Caves, Kalaram Temple, Sita Gufa, Trimbakeshwar Temple, Anjaneri Hills, Nandur Madhmeshwar Bird Sanctuary, Harihar Fort, Igatpuri Hill Station, Sula Vineyard, Dugarwadi Waterfall, Salher Peak, etc. <br /><br /> For more information please visit 
                    </p>
                    <a href="https://nashik.com/about-city/" className="about-nashik-link">Nashik</a>
                </div>
            </div>
            <div className="accomodation">
                <h2>Accomodations</h2>
                <p>The cost of the hotel accommodation and travel is not included in the registration fee but accommodation can be made available on a payment basis with the confirmation of payment well in advance. A list of some hotels will be provided for the convenience of participants to facilitate hotel booking at Nashik. Otherwise, also the participants are also free to book their place of stay as per their own choice.</p>
            </div>
            <div className="hotel-card">
                {
                    HotelDetails.map((item, index) => {
                        return (
                            <>
                                <div className="hotel-info">
                                    <h2>{item.name}</h2>
                                    <h4>{item.address}</h4>
                                    <p>{item.phone}</p>
                                </div>
                                <div className="hotel-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="about-iceisf">
                <h2>ABOUT CONFERENCE</h2>
                <p>The International Conference on Engineering Innovations for a Sustainable Future (ICEISF 2025) will be held in Nashik, India from January 6th-7th, 2025. ICEISF 2025 aims to bring together researchers, scientists, engineers, industrial professionals and research scholars in their domain of interest for the dissemination of original research results, new ideas and practical development experiences that concentrate on both theory and practices from around the world in all the areas of Engineering. The Conference will thus provide a platform for researchers and practitioners from both academia as well as industry to meet and share cutting-edge developments in the field. The conference will have Keynote Speeches, Oral Presentations, and Best Paper Awards. accepted and presented in the conference will be published in the conference proceedings with ISBN number and will be available online.</p>
            </div>
        </div>
    </>
  )
}

export default About
