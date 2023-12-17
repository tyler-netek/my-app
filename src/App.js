import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [typedUsername, setTypedUsername] = useState('Username: ');
  const [showPassword, setShowPassword] = useState(false);
  const [typedPassword, setTypedPassword] = useState('Password: ');
  const [showAccessGranted, setShowAccessGranted] = useState(false);
  const [showMatrixWarning, setShowMatrixWarning] = useState(true);

  useEffect(() => {
    const usernameText = 'Tyler.Netek';
    let i = 0;

    const typeUsernameText = () => {
      if (i < usernameText.length) {
        setTypedUsername(() =>'Username: ' + usernameText.charAt(i));
        i++;
        setTimeout(typeUsernameText, 90);
      } else {
        setShowPassword(true);
      }
    };

    typeUsernameText();
  }, []);

  useEffect(() => {
    if (showPassword) {
      const passwordText = '***********';
      let i = 0;

      const typePasswordText = () => {
        if (!showAccessGranted && i < passwordText.length) {
          setTypedPassword((prevText) => prevText + passwordText.charAt(i));
          i++;
          setTimeout(typePasswordText, 90);
        } else {
          setShowAccessGranted(true);
          setShowMatrixWarning(false);
        }
      };

      typePasswordText();
    }
  }, [showPassword, showAccessGranted]);

  return (
    <div className="App">
      <header id="home" className="App-header">
        {showMatrixWarning && (
          <div className="matrix-warning">
            Welcome back, Tyler. Please verify your identity by logging in.
          </div>
        )}
        <h5 className="matrix-title">Login:</h5>
        <p className="matrix-text">
          <span>{typedUsername}</span>
          <br />
          <span>***********</span>
          <span className="matrix-cursor">_</span>
        </p>
        {showAccessGranted && (
          <div className="access-granted">Access Granted.</div>
        )}
      </header>
    </div>
  );
}

export default App;







