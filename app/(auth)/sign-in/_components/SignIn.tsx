import SignInForm from './SignInForm';
import SignInPicture from './SignInPicture';

const SignIn = () => {
  return (
    <section className='sp container my-10 grid grid-cols-2  items-center gap-20 2xl:h-[calc(100vh-5rem)]'>
      <SignInPicture />
      <SignInForm />
    </section>
  );
};

export default SignIn;
