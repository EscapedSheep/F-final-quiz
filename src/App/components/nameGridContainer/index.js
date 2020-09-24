import React, { Component } from 'react';
import './nameGrid.css';

const NameContainer = ({people, handleInput, inputDisplay}) => (
  <div className='list'>
    {
      people.map((person) => (
        <div key={person.id} className='person'>
          <p className='person-name'>{person.id}. {person.name}</p>
        </div>
      ))
    }
    {inputDisplay && <input placeholder="+添加学员" className='person input' onKeyUp={handleInput} onClick={handleInput}/>}
  </div>
)

export default NameContainer;
