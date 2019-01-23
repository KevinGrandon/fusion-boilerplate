import React from 'react';
import {Grid, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const content = `.container {
  max-width: 24rem;
  margin: 1rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.remove-btn {
  margin-right: 0.5rem;
}

.fade-enter {
  opacity: 0.01;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0.01;
  transition: opacity 500ms ease-in;
}`;

class TodoList extends React.Component {
  state = {
    items: [
      {id: uuid(), text: 'Buy eggs'},
      {id: uuid(), text: 'Pay bills'},
      {id: uuid(), text: 'Invite friends over'},
      {id: uuid(), text: 'Fix the TV'},
    ],
  };

  render() {
    const {items} = this.state;
    return (
      <div>
        <style type="text/css">{content}</style>
        <Grid>
          <ListGroup>
            <TransitionGroup className="todo-list">
              {items.map(({id, text}) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      type="button"
                      bsStyle="danger"
                      bsSize="xs"
                      onClick={() => {
                        this.setState(state => ({
                          items: state.items.filter(item => item.id !== id),
                        }));
                      }}
                    >
                      &times;
                    </Button>
                    {text}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
          <Button
            type="button"
            onClick={() => {
              const text = prompt('Enter some text');
              if (text) {
                this.setState(state => ({
                  items: [...state.items, {id: uuid(), text}],
                }));
              }
            }}
          >
            Add Item
          </Button>
        </Grid>
      </div>
    );
  }
}
// const Home = () => <div>Foobar</div>;

export default TodoList;
