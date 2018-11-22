import React from 'react';
import './SearchBar.scss'

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption=> {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
              className={this.getSortByClass(sortByOptionValue)}
              onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
              key={sortByOptionValue}>
              {sortByOption}</li>
    });
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>

          <form className="SearchBar-fields" onSubmit={this.handleSearch}>
            <input onChange={this.handleTermChange} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} placeholder="Where?" />
            <div className="SearchBar-submit">
            <button type="submit">Let's Go</button>
            </div>
          </form>
      </div>
    )
  }
}

export default SearchBar;
