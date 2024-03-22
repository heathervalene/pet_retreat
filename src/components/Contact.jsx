import  { useState, useEffect } from 'react';
import M from'materialize-css';

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

  useEffect(() => {
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
    const datepickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickers, {
      format: 'yyyy-mm-dd',
      showClearBtn: true,
      autoClose: true,
    });
  }, [])

  return (
    <div>
      <h2 className="heading">Book at the Pet Retreat</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-field body-text">
            <select value={boardingType} onChange={(e) => setBoardingType(e.target.value)}>
              <option value="" disabled>Select Boarding Type</option>
              <option value="long-term">Long Term Boarding</option>
              <option value="day-care">Day Care</option>
            </select>
            <label>Boarding Type</label>
          </div>
          <div className="input-field body-text">
            <input type="date" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />
            <label>Drop Off</label>
          </div>
          <div className="input-field body-text">
            <input type="date" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
            <label>Pick Up</label>
          </div>
          <div>
            <h6 className="body-text">Dog Information</h6>
            {dogInfo.map((dog, index) => (
              <div key={index}>
                <input type="text" value={dog.name} onChange={(e) => handleChangeDogInfo(index, 'name', e.target.value)} placeholder='Name'/>
                <input type="number" value={dog.age} onChange={(e) => handleChangeDogInfo(index, 'age', e.target.value)} placeholder='Age' />
                <input type="text" value={dog.breed} onChange={(e) => handleChangeDogInfo(index, 'breed', e.target.value)} placeholder='Breed' />
                <input type="text" value={dog.sex} onChange={(e) => handleChangeDogInfo(index, 'sex', e.target.value)} placeholder='Sex' />
                <input type="text" value={dog.weight} onChange={(e) => handleChangeDogInfo(index, 'weight', e.target.value)} placeholder='Weight' />
              </div>
            ))}
            <button type="button" onClick={handleAddDogInfo} className="btn btn-primary book">Add Your Dog Info</button>
          </div>
          <div className="input-field body-text">
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className="materialize-textarea"></textarea>
            <label>Share a little bit about your dog and why they would have a great time at the Pet Retreat</label>
          </div>
          <div className="container book">
          <button className="btn btn-primary book" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
