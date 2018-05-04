import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';

class App extends Component {
  state = { projects: [] }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    axios.get('http://localhost:5000/api/projects')
      .then(res => {
        this.setState({ projects: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Projects">
          {this.state.projects.map(project => <ProjectCard project={project}/>)}
        </div>
      </div>
    );
  }
}

export default App;
