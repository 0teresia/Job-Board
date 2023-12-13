import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import app from '../firebas/firebase.config';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const auth = getAuth(app);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setPasswordError('');
    setUsernameError('');

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        navigate('/'); // Redirect after successful signup
      }
    } catch (err) {
      setLoading(false);
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please log in.');
        // Redirect to login page when signup fails due to existing email
        navigate('/login');
      } else {
        setError(err.message);
        console.error(err);
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
    <div className="w-96 bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <input
            className="w-full border rounded-md p-2"
            type="text"
            placeholder="Enter Name"
            required={true}
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && (
            <span className="flex font-medium tracking-wide text-red-500 text-xs mt-1">
              {usernameError}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="w-full border rounded-md p-2"
            type="email"
            placeholder="Enter E-mail"
            required={true}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <span className="flex font-medium tracking-wide text-red-500 text-xs mt-1">
              {emailError}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="w-full border rounded-md p-2"
            type="password"
            placeholder="Enter Password"
            required={true}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span className="flex font-medium tracking-wide text-red-500 text-xs mt-1">
              {passwordError}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="w-full border rounded-md p-2"
            type="password"
            placeholder="Confirm Password"
            required={true}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        <label className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={agree}
            onChange={handleAgreeChange}
            className="rounded border-gray-300 text-emerald-400 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the terms and conditions
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Loading...' : 'Submit Now'}
        </button>
        
        {error && (
          <p className="text-lg bg-red-400 text-white mt-3 p-2 rounded">
            {error}
          </p>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500">
            Login here
          </NavLink>
        </p>
      </form>
    </div>
  </div>
);
};

export default Signup;

