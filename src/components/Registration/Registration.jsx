import React from 'react';
import './Registration.css';
import { tableData } from '../../assets/assets';
import { datesTable } from '../../assets/assets';
import accountImage from '../../assets/Account.png';  // Import the image

function Registration() {
  return (
    <>
      <div className="registration" id="registration">
        <div className="registration-fees">
          <h2>IMPORTANT DATES</h2>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
  {datesTable.map((item, index) => (
    <tr key={index}>
      <td>{item.event}</td>
      <td>
        {index === 0 ? (
          <span dangerouslySetInnerHTML={{ __html: item.date }} />
        ) : (
          item.date
        )}
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
        <div className="registration-fees">
          <h2>REGISTRATION FEES</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Participants of India</th>
                <th>Participants out of India</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.category}</td>
                  <td>{item.members}</td>
                  <td>{item.nonMembers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="payment-mode">
          <h2>PAYMENT MODE</h2>
          <p>
            After acceptance of the paper, the authors can make Payment for registration to the conference at the following account:
          </p>
          {/* Use imported image */}
          <img src={accountImage} alt="Payment Details" className="payment-image" style={{ width: '50%', height: 'auto' }} />

        </div>
      </div>
    </>
  );
}

export default Registration;
