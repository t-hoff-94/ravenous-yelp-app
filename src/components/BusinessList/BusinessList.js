import React from 'react';
import './BusinessList.scss'
import Business from '../Business/Business.js';


class BusinessList extends React.Component {
  render() {
    console.log(this.props.businesses)
    return(
      <div className="BusinessList">
        {this.props.businesses.map((business,index) => {
          return <Business key={business.id} business={business} />
        })}
      </div>
    )
  }
}

export default BusinessList;
