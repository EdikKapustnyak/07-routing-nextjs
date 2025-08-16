import React from 'react';


const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
          <h1>ProfileLayout</h1>
        <br/>
     { children }
    </div>
  );
};

export default ProfileLayout;