


import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);
  const [balance, setBalance] = useState(100); // Sample starting balance

  const handleLogin = (username, password) => {
    // Call API to authenticate and set user
    setUser(username);
  };

  const createTeam = () => {
    // Logic to create a fantasy team
    setTeams([...teams, { name: 'Team 1', points: 0 }]);
  };

  const joinContest = (contestId) => {
    // Call backend to join contest
    console.log(`Joined contest: ${contestId}`);
  };

  return (
    <div className="App">
      <h1>Fantasy Sports</h1>
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome, {user}</h2>
          <h3>Balance: ₹{balance}</h3>
          <button onClick={createTeam}>Create Team</button>

          <div>
            <h3>My Teams:</h3>
            {teams.map((team, idx) => (
              <div key={idx}>
                <h4>{team.name}</h4>
                <p>Points: {team.points}</p>
              </div>
            ))}
          </div>

          <button onClick={() => joinContest('1234')}>Join Contest</button>
        </div>
      )}
    </div>
  );
}

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
