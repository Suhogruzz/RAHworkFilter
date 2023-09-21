import { Component } from 'react'
import Toolbar from './toolbar'
import ProjectList from './projectList'
import projects from './projects'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "All" };
    this.filters = [ "All", "Websites", "Flayers", "Business Cards" ];
    this.projects = projects;
    this.projectsFiltered = null;
  }
  
  onSelectedFilter = (category) => {
    this.setState((prev) => (prev.selected = category));
    const filteredList = this.projects.filter((project) => project.category === category);
    if (filteredList.length !== 0) {
        this.projectsFiltered = filteredList;
    } else {
        this.projectsFiltered = this.projects;
    }
  }
  
  render() {
    return (
        <main>
            <Toolbar
                filters={this.filters}
                selected={this.state.selected}
                onSelectedFilter={this.onSelectedFilter} />
            <ProjectList projects={this.projectsFiltered || this.projects} />
        </main>
    )
  }
}
