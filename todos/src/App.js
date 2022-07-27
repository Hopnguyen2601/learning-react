import { useState } from 'react';
import Pagination from './components/Pagination/pagination';
import TodoList from './components/TodoList/todoList';
import Header from './layout/Header/header';
import Sidebar from './layout/Sidebar/sidebar';
import { MODE } from './constants';
import AddNewForm from './shared/Form';
import './App.css';


function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
    setRenderMode(mode);
  };

  return (
    <div className="App">
      <Header handleCreateNewTask={() => handleChangeRenderMode(MODE.ADD_NEW)} />

      <div className='container'>
        <Sidebar handleListProducts={() => handleChangeRenderMode(MODE.SHOW_LIST)} />
        <div className='main-content'>
         {renderMode === MODE.SHOW_LIST ?
          (
            <>
              <TodoList />
              <Pagination />
            </>
          ) : <AddNewForm handleSubmit={() => {}} /> }
        </div>
      </div>

    </div>
  );
}

export default App;
