import React, { Component } from 'react';
import { fetchTeam, changeTeamName, getGroupTeam } from '../utils/http';
import './style/teamList.css'

class TeamList extends Component{
  state = {
    teams: [],
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
    let teamsCopy = this.state.teams
    if (event.keyCode === 13) {
      changeTeamName(name, event.target.value.trim())
        .then((res) => {
          if (!res) {
            this.setState({
              teams: res
            })
          }
          else {
            location.reload();
          }
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
        <input className='teamName' onKeyUp={this.handleChangeTeamName.bind(this, team.teamName)} defaultValue={team.teamName}></input>
        <div className='teamMember'>
          {
            team.teamStudent.map((student) => (
              <div key={student.id} className='teamStudent'>
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