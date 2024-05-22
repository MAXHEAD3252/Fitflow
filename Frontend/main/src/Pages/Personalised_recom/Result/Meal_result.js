import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../../../Stylesheet/Personalised_recom_stylesheet/Result/Meal_result.css'
import back from '../../../Assets/Images/Icons/backward-solid-blue.svg'

function Meal_result() {

    const navigate = useNavigate()
    function onback(){navigate('/mealform')}
  
  const [data, setData] = useState(null);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await axios.post('http://localhost:5000/api/display');
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
    
  return (
    <>
    <div className='main'>
    <div className="back">
    <img src={back} alt="loading" onClick={onback}/>
    </div>
    <div className="display">
        {data ? (
            <>
                <p className='foodtitle'> FOOD SUGGESTIONS  </p>
                <div className="list-container">
                    <ul className="food-list">
                        {data.message.split(',').map((item, index) => (
                            <li key={index} className='food'>{item.trim()}</li>
                        ))}
                    </ul>
                </div>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    
        </div>
    </>
  )
}

export default Meal_result
