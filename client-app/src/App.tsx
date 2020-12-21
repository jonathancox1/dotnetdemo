import React from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

function App() {
  const [values, setValues] = React.useState<any>([]);

  React.useEffect(() => {;
    axios.get('http://localhost:5000/api/values')
      .then((response) => 
      {
        setValues(response.data)
      })
    }, []);


  return (
    <div className="App">
        <Header as='h2' icon>
          <Icon name='settings' />
          reactivities
        </Header>
          <List>
            {values.map((value: any) => <List.Item>{value.name}</List.Item>)}
          </List>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
