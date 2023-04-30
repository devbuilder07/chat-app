import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div>Signup</div>
      <Link
        to='/'
        className='px-5 py-6 bg-green-200 text-green-700 inline-block'>
        go to login
      </Link>
    </>
  );
};
export default Signup;
