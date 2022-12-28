import {Component} from "react";

import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Gleb A.', salary: 800, increase: false, rise: false, id: 1},
        {name: 'John C.', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Alex W.', salary: 15000, increase: false, rise: false, id: 3}
      ],
      currentID: 4,
      rise: false,
      increase: false,
      term: '',
      filter: 'all'
    }
  }

  deleteItem = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addItem = item => {
    this.setState(() => {
      const {currentID, data, increase, rise} = this.state;

      return {
        currentID: currentID + 1,
        data: [...data, {...item, increase, rise, id: currentID}]
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onSearch = (term) => {
    this.setState({
      term
    });
  }

  filterList = (items, filter) => {
    if (filter === 'increased') {
      return items.filter(item => item.increase);
    }

    if (filter === 'higherThanThousand') {
      return items.filter(item => item.salary >= 1000);
    }

    return items;
  }

  onChangeFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase).length;

    return (
      <div className='app'>
        <AppInfo employees={employees}
                 increased={increased}
        />

        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch}/>
          <AppFilter
            activeFilter={filter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>

        <EmployeesList
          data={this.filterList(this.searchEmp(data, term), filter)}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          onSubmit={this.addItem}
        />
      </div>
    );
  }
}

export default App;
