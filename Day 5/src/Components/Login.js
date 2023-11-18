import '../Assests/Login.css';
// import {ArrowRight} from 'lucide-react';
const Login = () => {
  const sub = () => {
        <alert>Login successfull</alert>    
  }
  return (
    <div>
      <div className='con'>
        <div className='inu'>
            <h1 className='h11'>WELCOME PAGE</h1>
            <p className='para'>sign in to <br/> continue access</p>
            <a href='www.google.com' className='h3'>www.vedapu.com</a>
        </div>
        <div className='ano'>
        <form>
            <h1 className='h1'>Sign In</h1>
        <input type='text' className='usernm' placeholder = '                           Enter your username' /><br/><br/><br/>
            <input type="password" className='usernm' placeholder = '                           Enter your Password'/>
            <input type='button' className='but1' onclick = {sub} value='continue                                                                                                                             '></input>
        </form>
        <button className='gle'>Sign with Google</button>
        <button className='insta'>Sign with Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default Login;