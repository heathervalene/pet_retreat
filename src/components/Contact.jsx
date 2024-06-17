import  { useState, useEffect } from 'react';
import M from'materialize-css';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

emailjs.init('JaibVNv_h8LR8WUc4')



const Contact = () => {
  const [boardingType, setBoardingType] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dogInfo, setDogInfo] = useState([]);
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [owner, setOwner] = useState('');
  const [neutered, setNeutered] = useState(false);

  const navigate = useNavigate();

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
    if(!/^\d{10}$/.test(number)) {
      alert('Please enter a valid phone number with no dashes or spaces');
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
   
    const emailParams = {
      name: owner,
      number: number,
      email: email,
      boardingType: boardingType,
      pickUpTime: pickUpTime,
      dropOffTime: dropOffTime,
      
      dogInfo: dogInfo.map((dog, index) => {
        return `Dog ${index + 1}: 
          Name: ${dog.name}
          Age: ${dog.age}
          Breed: ${dog.breed}
          Sex: ${dog.sex}
          Weight: ${dog.weight}`;
      }).join('\n\n'),
      neutered: neutered ? 'Yes' : 'No', 
    };
  
   
    emailjs.send(
      'service_99o7qib',
      'template_z23gsqq',
      emailParams,
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/thanks');
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
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
      <h2 className="heading form-heading">Book at Tropic Tails Farm</h2>
      <div className="container form">
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
            <label >Drop Off</label>
          </div>
          <div className="input-field body-text">
            <input type="date" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
            <label >Pick Up</label>
          </div>
          <div>
            {dogInfo.map((dog, index) => (
              <div key={index}>
                <input type="text" value={dog.name} onChange={(e) => handleChangeDogInfo(index, 'name', e.target.value)} placeholder='Name'/>
                <input type="number" value={dog.age} onChange={(e) => handleChangeDogInfo(index, 'age', e.target.value)} placeholder='Age' />
                <input type="text" value={dog.breed} onChange={(e) => handleChangeDogInfo(index, 'breed', e.target.value)} placeholder='Breed' />
                <input type="text" value={dog.sex} onChange={(e) => handleChangeDogInfo(index, 'sex', e.target.value)} placeholder='Sex' />
                <input type="text" value={dog.weight} onChange={(e) => handleChangeDogInfo(index, 'weight', e.target.value)} placeholder='Weight' />
              </div>
            ))}
            <button type="button" onClick={handleAddDogInfo} className="btn btn-primary dog-info">Add Your Dog Info</button>
          </div>
          
          
          <div className="input-field body-text">
            <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
            <label >Owner Name</label>
          </div>
          <div className="input-field body-text">
            <input type='tel' value={number} onChange={(e) => setNumber(e.target.value)} />
            <label >Phone Number</label>
          </div>
          <div className="input-field body-text">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Email</label>
          </div>
          <div className="input-field body-text">
           
            <label>
              <input
                type="checkbox"
                checked={neutered}
                onChange={(e) => setNeutered(e.target.checked)}
              />
              <span className="form-label">Please confirm your dog is neutered</span>
            </label>
          </div>
          
          <div className="container book submit">
          <button className="btn btn-primary book" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
