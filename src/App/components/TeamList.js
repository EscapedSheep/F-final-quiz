import React, { Component } from 'react';
import { fetchTeam } from '../utils/http';
import './style/teamList.css'

class TeamList extends Component{
  state = {
    teams: []
  }

  handleGroupStudent() {
    fetchTeam()
      .then((res) => {
        this.setState({
          teams: res
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  TeamSection = (props) => {
    const { team } = props;
    return (
      <div className='teamSection'>
        <h1 className='teamName'>{team.teamName}</h1>
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