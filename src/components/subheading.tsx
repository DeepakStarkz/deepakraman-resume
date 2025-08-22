import React from 'react';

type SubheadingProps = {
  title: string;
};

const SubHeading = ({ title }: SubheadingProps) => {
  return (
    <h2 className="text-xl font-bold mt-4 mb-2 underline underline-offset-10 decoration-gray-300 decoration-3">
      {title}
    </h2>
  );
};

export default SubHeading;
