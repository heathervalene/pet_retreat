import React, { useState } from 'react';

const Contact = () => {
  const [boardingType, setBoardingType] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dogInfo, setDogInfo] = useState([]);
  const [message, setMessage] = useState('');

  const handleAddDogInfo = () => {
    setDogInfo([...dogInfo, { name: '', breed: '', age: '', sex: '', weight: '' }]);
  };

  const handleChangeDogInfo = (index, key, value) => {
    const updatedDogInfo = [...dogInfo];
    updatedDogInfo[index][key] = value;
    setDogInfo(updatedDogInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <select value={boardingType} onChange={(e) => setBoardingType(e.target.value)}>
            <option value="" disabled selected>Select Boarding Type</option>
            <option value="long-term">Long Term Boarding</option>
            <option value="day-care">Day Care</option>
          </select>
          <label>Boarding Type</label>
        </div>

        <div className="input">
          <input type="date" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />
          <label>Drop Off</label>
        </div>
        <div className="input">
          <input type="date" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
          <label>Pick Up</label>
        </div>
        <div>
          <h4>Dog Information</h4>
          {dogInfo.map((dog, index) => (
            <div key={index}>
              <input type="text" value={dog.name} onChange={(e) => handleChangeDogInfo(index, 'name', e.target.value)} placeholder='Name'/>
              <input type="number" value={dog.age} onChange={(e) => handleChangeDogInfo(index, 'age', e.target.value)} placeholder='Age' />
              <input type="text" value={dog.breed} onChange={(e) => handleChangeDogInfo(index, 'breed', e.target.value)} placeholder='Breed' />
              <input type="text" value={dog.sex} onChange={(e) => handleChangeDogInfo(index, 'sex', e.target.value)} placeholder='Sex' />
              <input type="text" value={dog.weight} onChange={(e) => handleChangeDogInfo(index, 'weight', e.target.value)} placeholder='Weight' />
            </div>
          ))}
          <button type="button" onClick={handleAddDogInfo}>Add Your Dog Info</button>
        </div>
        <div className="input-field">
          <textarea className="materialize-textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message'></textarea>
          
        </div>
        <button className="btn waves-effect waves-light" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
