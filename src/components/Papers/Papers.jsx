import React from 'react'
import './Papers.css'
import bgImg from '../../assets/papers-bg-img.jpg'
 

function Papers() {
  return (
    <>
      <div className="papers" id="papers">
        <div className="papers-upper-div">
            <div className="papers-bg-img">
                <img src={bgImg} alt="bg" />
            </div>
            <div className="papers-img-content">
                <h1>CALL FOR PAPERS</h1>
            </div>
        </div>
        <div className="papers-call-for-papers">
            <h2>CALL FOR PAPERS</h2>
            <p>
                Prospective authors can submit papers based on one of the following tracks given below.
                <ul>
                    <li>Theme 1: Sustainable Engineering and Technology</li>
                    <li>Theme 2: Industry 4.0</li>
                    <li>Theme 3: Digital Transformation and AI </li>
                    <li>Theme 4: Engineering Education and Practice</li>
                    <li>Theme 5: Data Analytics and its Applications</li>
                </ul>
            </p>
        </div>
        <div className="papers-info-for-authors">
            <h2>INFORMATION TO AUTHORS</h2>
            <ul>
                <p>All papers submitted to the ICEISF 2025 will be peer reviewed by the technical experts. The paper must be written in English and formatted in the format as per the template mentioned in the link below:  </p>
                <li>The length of the papers is limited to six pages only.  </li>
                <li>If a paper is accepted, at least one of the authors listed on the paper must attend the conference and present the paper according to the schedule. </li>
                <li>Here is the template:<a href="https://docs.google.com/document/d/1p2S2PBQQCKsC08gTmT6PvCVSgGY1Pa1G/edit?usp=sharing&ouid=105476196515762730459&rtpof=true&sd=true"> Paper Template</a></li>
                <li>The manuscript should be submitted online through <a href='2)Paper Submission Link:https://cmt3.research.microsoft.com/ICEISF2025/Submission/Manage'>Paper Submission Link</a></li>
            </ul>
        </div>
        <div className="papers-paper-presentation">
            <h2>PAPER PRESENTATION</h2>
            <ul>
                <li>The conference hall at the venue will be equipped with a laptop having a USB port. Presenters are required to bring their presentation as a hard copy and PPT on a pen drive and save it on the laptop before the presentation.</li>
                <li>The time allotted for a presentation is 15 minutes including 5 minutes of Question and Answer session.</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Papers
