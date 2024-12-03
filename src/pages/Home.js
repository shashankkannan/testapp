import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{

        const navigate = useNavigate();

        return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the JSON Manager</h1>
            <button onClick={() => navigate('/add-json')} style={{ margin: '10px', padding: '10px 20px' }}>
              Add JSON
            </button>
            <button onClick={() => navigate('/view-json')} style={{ margin: '10px', padding: '10px 20px' }}>
              View Existing JSON
            </button>
          </div>
        );
      };
      
      export default Home;

