import React from 'react';
import DeleteModal from '../deleteModal';
import './nameGrid.css';

const NameContainer = ({people, handleInput, inputDisplay, handleDelete, handleClick, placeHolder}) => (
  <div className='list'>
    {
      people.map((person) => (
        <div key={person.id} className='person'>
          <DeleteModal person={person} onOk={handleDelete} title={placeHolder}/>
        </div>
      ))
    }
    {inputDisplay && <input placeholder={`+添加${placeHolder}`} className='person input' onKeyUp={handleInput} onClick={handleClick}/>}
  </div>
)

export default NameContainer;
