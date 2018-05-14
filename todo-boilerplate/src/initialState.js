export default function getInitialState(ctx){
  return {
    todos: [{
      text: 'Enable automatic locale redirects',
      completed: true,
      id: 0
    }, {
      text: 'Learn more at fusionjs.com',
      completed: false,
      id: 1
    }, {
      text: 'Try localization options for other languages',
      completed: false,
      id: 2
    }]
  };
}
