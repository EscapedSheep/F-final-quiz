import React from 'react';
import DeleteModal from '../deleteModal';
import './nameGrid.css';

const NameContainer = ({people, handleInput, inputDisplay, handleDelete, handleClick, placerHolder}) => (
  <div className='list'>
    {
      people.map((person) => (
        <div key={person.id} className='person'>
          <DeleteModal person={person} onOk={handleDelete} title={placerHolder}/>
        </div>
      ))
    }
    {inputDisplay && <input placeholder={`+添加${placerHolder}`} className='person input' onKeyUp={handleInput} onClick={handleClick}/>}
  </div>
)

export default NameContainer;
