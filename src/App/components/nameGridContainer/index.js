import React from 'react';
import DeleteModal from '../deleteModal';
import './nameGrid.css';

const NameContainer = ({people, handleInput, inputDisplay, handleDelete}) => (
  <div className='list'>
    {
      people.map((person) => (
        <div key={person.id} className='person'>
          <DeleteModal person={person} onOk={handleDelete}/>
        </div>
      ))
    }
    {inputDisplay && <input placeholder="+添加学员" className='person input' onKeyUp={handleInput} onClick={handleInput}/>}
  </div>
)

export default NameContainer;
