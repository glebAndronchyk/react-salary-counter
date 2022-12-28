import { Component } from "react";
import './search-panel.css';

class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onSearch(term);
  }

  render() {
    const {term} = this.state;
    return (
      <input
        type="text"
        className='form-control search-input'
        placeholder="Найти сотрудника"
        value={term}
        onChange={this.onSearch}
      />
    );
  }
};

export default SearchPanel;
