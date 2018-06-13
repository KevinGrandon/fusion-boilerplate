import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const Home = ({ todosCount, completedCount, actions }) => {
  return (
    <section className="main">
      {
        !!todosCount && <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  );
}

Home.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default Home;
