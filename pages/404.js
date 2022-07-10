import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  //store a hook inside router variable
  //returns a router object which contains a method that we can use
  //to redirect the user
  useEffect(() => {
    setTimeout(() => {
      //method allows go back and forth through the history
      // router.go(1)
      //redirect to the home page
      router.push('/');
    }, 3000);
  });
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
