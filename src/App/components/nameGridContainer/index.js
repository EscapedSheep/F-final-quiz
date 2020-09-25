import React from 'react';
import DeleteModal from '../deleteModal';
import './nameGrid.css';

// TODO Feedback: 虽然在这个需求下抽取整个Container为组件可以接受，但通常还是建议抽取Item为组件，Item抽象的职责更明确一些
const NameContainer = ({people, handleInput, inputDisplay, handleDelete, handleClick, placeHolder}) => (
  <div className='list'>
    {
      people.map((person) => (
        <div key={person.id} className='person'>
          <DeleteModal person={person} onOk={handleDelete} title={placeHolder}/>
        </div>
      ))
    }
    {/*// TODO Feedback:不建议把添加抽象到该组件内，这是独立的逻辑*/}
    {inputDisplay && <input placeholder={`+添加${placeHolder}`} className='person input' onKeyUp={handleInput} onClick={handleClick}/>}
  </div>
)

export default NameContainer;
