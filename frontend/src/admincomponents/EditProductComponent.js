//core functionality from react.
import React, { Component } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//material-ui styling stuff.
const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    margin: 10,
    marginTop: 9,
    overflowX: 'auto',
  },
});

class EditProductComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectsSelected:[],
      employee: '',
      client: '',
      project: '',
      status: '',
    }
  }

  //handeles all the input field data changes from form and updates the employee, client, project and task states.
  handleInputChange = field => event => {
    const state = {};
    state[field] = event.target.value;
    this.setState(state);
  }

  handleInputChangeCleint  = (e) => {
    if (e.target.value === ''){
      this.setState({
        client:e.target.value,
        projectsSelected:''
      })
    } else {
      let match = this.props.clientsProjectsArray.filter(item => item.clientName === e.target.value);
      this.setState({
        client: e.target.value,
        projectsSelected: match[0].clientProjects
      })
    }
  }

  //handles the filter function.
  onFilterEarlyWarnings = event => {
    event.preventDefault();
    const obj = {
      employee: this.state.employee,
      client:this.state.client,
      project:this.state.project,
      status: this.state.status
    }
    this.props.onFilterEarlyWarnings(obj);
  }

  onFilterTasksComponent  = event => {
    event.preventDefault();
    const obj = {
      employee: String(this.state.employee).trim(),
      client: this.state.client,
      project: this.state.project,
      status: this.state.status
    }
    this.props.onFilterTasksComponent(obj, 0, this.state.projectsSelected);
  }

  render() {
    const { employee, client, project,status,projectsSelected } = this.state;
    const { classes,  employees, clientsProjectsArray, allProjects, statuses, showFilterBtn } = this.props;
    const allClients = [];
    clientsProjectsArray.forEach(item => allClients.push(item.clientName));
    let projects = [];
    if (projectsSelected.length > 0) {
      projects = projectsSelected;
    } else {
      projects = allProjects;
    }


    return (
      <div>
        <form className={classes.root} autoComplete='off'>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='employee'>Employee</InputLabel>
            <Select value={employee} onChange={this.handleInputChange('employee')} input={<OutlinedInput labelWidth={70} name='employee' id='employee'/>}>
              <MenuItem value=''><em>All Employees</em></MenuItem>
              {employees.map((employeeName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'employee' + index} value={employeeName}>{employeeName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel  htmlFor='client'>Client</InputLabel>
            <Select value={client} onChange={this.handleInputChangeCleint} input={<OutlinedInput labelWidth={40} name='client' id='client'/>}>
              <MenuItem value=''><em>All Clients</em></MenuItem>
              {allClients.map((clientName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'client' + index} value={clientName}>{clientName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='project'>Project</InputLabel>
            <Select value={project} onChange={this.handleInputChange('project')} input={<OutlinedInput labelWidth={50} name='project' id='project'/>}>
              <MenuItem value=''><em>All Projects</em></MenuItem>
              {projects.map((projectName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'project' + index} value={projectName}>{projectName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel  htmlFor='timeRegistrations'>Statuses</InputLabel>
            <Select value={status} onChange={this.handleInputChange('status')} input={<OutlinedInput labelWidth={132} name='timeRegistrations' id='timeRegistrations'/>}>
              <MenuItem value=''><em>All statuses</em></MenuItem>
              {statuses.map((statusName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'task' + index} value={statusName.props.string}>{statusName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          {showFilterBtn?
            <button className='filterBTN' onClick={this.onFilterEarlyWarnings}>Filter</button>
          : <button className='filterBTN' onClick={this.onFilterTasksComponent}>Filter</button>
          }
        </form>
      </div>
    )
  }
}
export default withStyles(styles)(EditProductComponent);
