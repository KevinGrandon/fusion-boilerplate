import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Router, Route, Link, Switch, NotFound } from 'fusion-plugin-react-router';
import { withTranslations } from 'fusion-plugin-i18n-react';

import TextInput from '../components/TextInput';
import { addTodo } from '../actions';


class Header extends Component {
	state = {
		text: ''
	};

	render() {
		const { translate, addTodo } = this.props;
		const { text } = this.state;

    return (
      <header className="header">
  		  <h1>{translate('app_title')}</h1>
				<TextInput
					newTodo
					onSave={(text) => {
						if (text.length !== 0) {
							addTodo(text)
						}
					}}
					placeholder={translate('input_placeholder')}
				/>
      </header>
    );
	}
}

export default connect(null, { addTodo })
	(withTranslations([
		'input_placeholder',
		'app_title'
	])(Header));
