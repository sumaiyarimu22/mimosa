import SignupForm from './SignupForm';
import SignupPicture from './SignupPicture';

const SignIn = () => {
  return (
    <section className='sp container my-10 grid grid-cols-2 items-center gap-20 2xl:h-[calc(100vh-5rem)]'>
      <SignupPicture />
      <SignupForm />
    </section>
  );
};

export default SignIn;
