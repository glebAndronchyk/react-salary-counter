import { Component } from "react";

import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Gleb A.', salary: 800, increase: true, id: 1},
                {name: 'John C.', salary: 3000, increase: false, id: 2},
                {name: 'Alex W.', salary: 15000, increase: false, id: 3}
            ],
            currentID: 4
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
      const {currentID, data} = this.state
      this.setState(() => {
        return {
          currentID: currentID + 1,
          data: [...data, {...item, id: currentID + 1}]
        }
      });
    }

    render() {
        return (
          <div className='app'>
              <AppInfo />

              <div className="search-panel">
                  <SearchPanel></SearchPanel>
                  <AppFilter></AppFilter>
              </div>

              <EmployeesList data={this.state.data}
                             onDelete={this.deleteItem}
              />
              <EmployeesAddForm
                onSubmit={this.addItem}
              />
          </div>
        );
    }
}

export default App;
