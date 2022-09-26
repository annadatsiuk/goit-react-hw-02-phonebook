import { Component } from 'react';
import InputForm from "./InputForm";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return <div>
      <InputForm />
    </div>;
  }
}
