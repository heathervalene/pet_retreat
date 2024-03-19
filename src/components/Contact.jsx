import  { useState } from 'react';

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

    // Need to add emailJS logic here to send form data
    
  };

  return (
    <div>
      <h2 className="heading">Contact The Pet Retreat</h2>
      <div className="container">
      <form onSubmit={handleSubmit}>
      <div>
  <label>Boarding Type:</label>
  <select value={boardingType} onChange={(e) => setBoardingType(e.target.value)}>
    <option value="" disabled>Select Boarding Type</option>
    <option value="long-term">Long Term Boarding</option>
    <option value="day-care">Day Care</option>
  </select>
</div>
        <div>
        <label>Drop Off</label>
          <input type="date" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />
        </div>
        <div>
        <label>Pick Up</label>
          <input type="date" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
        </div>
        <div>
          <h6>Dog Information</h6>
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
        <div>
        <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Share a little bit about your dog and why they would have a great time at the Pet Retreat' ></textarea>
          
        </div>
        <button className="btn waves-effect waves-light" type="submit">Send</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
