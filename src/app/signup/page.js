'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function Page() {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChangeEmailPassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const signUpNewUser = async (e) => {
    e.preventDefault();
    const { email, password } = signUpData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      setSignUpData({ email: '', password: '' });
      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={signUpNewUser}>
        <input
          type='text'
          name='email'
          placeholder='email'
          value={signUpData.email}
          onChange={handleChangeEmailPassword}
        />
        <input
          type='text'
          name='password'
          placeholder='password'
          value={signUpData.password}
          onChange={handleChangeEmailPassword}
        />
        <button type='submit'>sign up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
