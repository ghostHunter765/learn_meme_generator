import React,{Component} from "react"
import './App.css';
import Header from './components/header'
import Form from './components/form'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Header></Header>
        <main>
          <Form></Form>
        </main>
      </div>
     );
  }
}
 
export default App;
