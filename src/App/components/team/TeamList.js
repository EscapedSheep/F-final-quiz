import React, { Component } from 'react';
import { fetchTeam, autoGrouping, changeTeamName } from '../../utils/http';
import NameContainer from '../nameGridContainer';
import { message } from 'antd';
import './teamList.css';

class TeamList extends Component{
  state = {
    teams: [],
  }

  componentDidMount() {
    fetchTeam()
      .then((res) => {
        if(res.length > 0) {
          this.setState({
            teams: res
          })
        }
    })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChangeTeamName = (id, event) => {
    if (event.keyCode === 13) {
      changeTeamName(id, event.target.value.trim())
        .then((res) => {
          if (res.messages !== undefined) {
            message.error(res.message)
          } else {
            location.reload()
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
      <div className='team-section'>
        <div className="team-header">
        <input className='name-input' defaultValue={team.name} onKeyUp={this.handleChangeTeamName.bind(this, team.id)}/>
        <div className="team-trainer">
          <NameContainer people={team.trainers} placeHolder="讲师"/>
        </div>
        </div>
          <NameContainer
            people={team.trainees}
            placeHolder="学员"
          />
      </div>
    )
  };

  handleGroupStudent() {
    autoGrouping()
      .then((res) => {
        if (res.messages !== undefined) {
          message.error(res.message)
        } else {
          location.reload()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="grouping-title">分组列表</h1>
          <button onClick={() => this.handleGroupStudent()}>分组学员</button>
        </header>
        <main>
          {
            this.state.teams.map((team) => (
              <this.TeamSection team={team} key={team.id}/>
            ))
          }
        </main>
      </div>
    )
  }
}

export default TeamList;
