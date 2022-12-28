import {Component} from "react";

import buttons from "./all-filter.config";

import './app-filter.css';

class AppFilter extends Component {

  changeFilter = (event) => {
    this.props.onChangeFilter(event.currentTarget.getAttribute('data-filter'));
  }

  render() {
    const {activeFilter} = this.props;

    const checkActive = {
      all: activeFilter === 'all' ? 'btn-light' : 'btn-outline-light',
      increased: activeFilter === 'increased' ? 'btn-light' : 'btn-outline-light',
      higherThanThousand: activeFilter === 'higherThanThousand' ? 'btn-light' : 'btn-outline-light'
    }

    console.log(checkActive);

    return (
      <div className="btn-group">
        {buttons.map(button => {
          const {id, buttonLabel, dataFilter} = button;

          return(
            <button
              key={id}
              className={`btn ${checkActive[dataFilter]}`}
              data-filter={dataFilter}
              type="button"
              onClick={this.changeFilter}
            >
              {buttonLabel}
            </button>
          )
        })}
      </div>
    );
  }
}

export default AppFilter;
