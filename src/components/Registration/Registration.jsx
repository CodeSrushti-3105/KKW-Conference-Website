import React from 'react'
import './Registration.css'
import { tableData } from '../../assets/assets'
import { datesTable } from '../../assets/assets'

function Registration() {
  return (
    <>
      <div className="registration" id="registration">
        <div className="registration-fees">
          <h2>IMPORTANT DATES </h2>
          <table>
            <thead>
            <tr>
                <th>Event</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              {
                datesTable.map((item, index) => (
                  <tr key={index}>
                    <td>{item.event}</td>
                    <td>{item.date}</td>
                  </tr>
                ))
              }
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
              {
                tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.members}</td>
                    <td>{item.nonMembers}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="payment-mode">
          <h2>PAYMENT MODE</h2>
          <ul>
            <p>After acceptance of the paper, the authors can make Payment for registration to the conference at following account:  </p>
            <li>Name of account: Principal, K. K. Wagh Institute of Engineering and Research, Nashik.</li>
            <li>Name of the Bank: Bank of India</li>
            <li>Address of bank: Adgaon Naka, Nashik</li>
            <li>Account Number: 081021110000008</li>
            <li>Account type: Current</li>
            <li>IFSC code: BKID0000810</li>
            <li>MICR Code: 422013007</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Registration
