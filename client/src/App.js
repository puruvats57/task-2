import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);


function App() {
  const [data, setData] = useState([]);
  const [insert, setInsert] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getAll');
        setData(response.data.d);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function Add() {
    try {
      const response = await axios.post("http://localhost:5000/register", { text: insert });
      setData(prevData => ([...prevData, response.data.data]));
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote(index, id) {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      setData(prevData => prevData.filter((_, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='body'>
      <div className='nav'>
        <p>notes</p>
      </div>
      <div className='content'>
        <input type='text' onChange={(e) => setInsert(e.target.value)}></input>
        <button onClick={Add}>Add Notes</button>
        <div className='card-container'>
          {data && data.length > 0 && data.map((item, index) => (
            <div className='card' key={index}>
              <p>{item.text}</p>
              <FontAwesomeIcon icon={['fas', 'trash-alt']} onClick={() => deleteNote(index, item.id)}
              className="delete-icon"/>

            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
