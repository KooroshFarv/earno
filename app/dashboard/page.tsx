'use client';
import React from 'react';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';

const Dashboard = () => {
  const { user } = useUser(); // Access the signed-in user's data

  return (
    <>
    <SignedIn>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.firstName || 'User'}!</h1>
        <p className="text-lg text-gray-600 mb-8">This is your dashboard.</p>
        <div className="space-y-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View Your Orders
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Go to Shop
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
            Account Settings
          </button>
        </div>
      </div>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </>
  );
};

export default Dashboard;
