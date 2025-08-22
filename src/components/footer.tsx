import { CONTACT } from '../constants/contents';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm text-gray-600 max-lg:p-4 lg:px-20">
      <p>
        Contact: {CONTACT.email} | {CONTACT.phone}
      </p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Deepak VR. All rights reserved.
      </p>
    </footer>
  );
};
