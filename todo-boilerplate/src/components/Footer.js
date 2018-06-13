import React from 'react';
import PropTypes from 'prop-types';
import { Translate, withTranslations } from 'fusion-plugin-i18n-react';
import FilterLink from '../containers/FilterLink';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const Footer = ({ activeCount, completedCount, onClearCompleted, translate }) => {
  const FILTER_TITLES = {
    [SHOW_ALL]: translate('show_all_button'),
    [SHOW_ACTIVE]: translate('show_active_button'),
    [SHOW_COMPLETED]: translate('show_completed_button')
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        { activeCount > 0 ?
          <Translate id="items_left" data={{ num_items: activeCount }} /> :
          <Translate id="no_items_left" />
        }
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </ul>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          <Translate id="clear_completed_button" />
        </button>
      }
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default withTranslations([
  'show_all_button',
  'show_active_button',
  'show_completed_button'
])(Footer);
