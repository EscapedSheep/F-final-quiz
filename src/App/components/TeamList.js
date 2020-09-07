import React, { Component } from 'react';
import { fetchTeam, changeTeamName, getGroupTeam } from '../utils/http';
import './style/teamList.css'

class TeamList extends Component{
  state = {
    teams: [],
    newName: ''
  }

  componentDidMount() {
    fetchTeam()
      .then((res) => {
        if(res[0].teamStudent.length > 0) {
          this.setState({
            teams: res
          })
        }
    })
      .catch((error) => {
        console.log(error)
      })
  }

  handleGroupStudent() {
    getGroupTeam()
      .then((res) => {
        this.setState({
          teams: res
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChangeTeamName = (name, event) => {
    if (event.keyCode === 13) {
      changeTeamName(name, event.target.value)
        .then((res) => {
          this.setState({
            teams: res
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  TeamSection = (props) => {
    const { team } = props;
    return (
      <div className='teamSection'>
        <textarea className='teamName' rows='1' cols='auto' onKeyUp={this.handleChangeTeamName.bind(this, team.teamName)} defaultValue={team.teamName}></textarea>
        <div className='teamMember'>
          {
            team.teamStudent.map((student) => (
              <div key={student.id} className='student'>
                <label>{student.id}. </label>
                {student.name}
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <header>
          <h1>分组列表</h1>
          <button onClick={() => this.handleGroupStudent()}>分组学员</button>
        </header>
        <main>
          {
            this.state.teams.map((team) => (
              <this.TeamSection team={team} key={team.teamName}/>
            ))
          }
        </main>
      </div>
    )
  }
}

export default TeamList;