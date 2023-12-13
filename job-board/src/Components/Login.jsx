import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import app from '../firebas/firebase.config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        setLoading(false);
        navigate('/'); // Redirect after successful login
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error(err);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
        <form onSubmit={handleEmailSignIn}>
          <div className="mb-4">
            <input
              className="w-full border rounded-md p-2"
              type="email"
              placeholder="Enter E-mail"
              required={true}
              value={email}
              onChange={handleEmailChange}
            />
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
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>

          {error && (
            <p className="text-lg bg-red-400 text-white mt-3 p-2 rounded">
              {error}
            </p>
          )}

          <p className="mt-4 text-sm text-gray-600">
            Dont have an account?{' '}
            <NavLink to="/signup" className="text-blue-500">
              Sign up here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
