import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {

    const data = [
        {name: 'Gleb A.', salary: 800, increase: true},
        {name: 'John C.', salary: 3000, increase: false},
        {name: 'Alex W.', salary: 15000, increase: false}
    ];

    return (
      <div className='app'>
        <AppInfo />

        <div className="search-panel">
            <SearchPanel></SearchPanel>
            <AppFilter></AppFilter>
        </div>

        <EmployeesList data={data}></EmployeesList>
        <EmployeesAddForm></EmployeesAddForm>
      </div>
    );
}

export default App;
