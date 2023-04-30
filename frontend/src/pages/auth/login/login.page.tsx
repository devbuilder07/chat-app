import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>Login</div>
      <Link
        to='/signup'
        className='px-5 py-6 bg-green-200 text-green-700 inline-block'>
        go to signup
      </Link>
    </>
  );
};
export default Login;
