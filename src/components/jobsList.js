import React from 'react';
import Job from "./job";
import { FormattedMessage } from 'react-intl';

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "SchneiderElectric", 
    	  "salary": 4.5,
    	  "city": "Bogota",
        "date": "2019-03-26",
        "views": 15456932
      }, 
      {
        "id": "0002",
        "name": "SoftwareEngineer",
        "company": "GoogleInc", 
        "salary": 20,
        "city": "PaloAlto",
        "date": "2019-03-27",
        "views": 1354
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "LaAuroraHospital", 
        "salary": 1,
        "city": "Cali",
        "date": "2019-03-28",
        "views": 12675
      }
    ]
  };

  getClass() {
    let ans = "dark";
    let navLanguage = navigator.language || navigator.userLanguage;
    if(navLanguage.includes('es'))
      ans = "light";
    return ans;
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className={`thead-${this.getClass()}`}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Position" /></th>
              <th scope="col"><FormattedMessage id="Company" /></th>
              <th scope="col"><FormattedMessage id="Salary" /></th>
              <th scope="col"><FormattedMessage id="City" /></th>
              <th scope="col"><FormattedMessage id="PublicationDate" /></th>
              <th scope="col"><FormattedMessage id="Views" /></th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}