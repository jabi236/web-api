import './App.css';
import { 
  currUser,
  signInUser,
  updateUser,
  signUpUser
} from './state';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { useState } from 'react';
let i = 0;
function Header(){
  return <header>
  <div class = "container">
    <h1 class="text-info">LoginCorp</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/#">Navagation</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item nav-link px-3">
                  <Link to = "/login">Login</Link>
              </li>
              <li class="nav-item nav-link px-3">
                <Link to = "/new">Register</Link>
              </li>
              <li class="nav-item nav-link px-3">
                <Link to = "/user">Account</Link>
              </li>
            </ul>
          </div>
          {currUser.username}
        </div>
      </nav>
       
  </div>
 </header>
}
function Footer(){
  return <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class = "container">
  <p class="col-md-4 mb-0 text-muted">&copy; 2022 Made by James Birch</p>

  {/*<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
  </a>*/}
  </div>
</footer>
}
function LoginPage(props){
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();

    console.log(username, password);

    props.toggleState();
    if(signInUser(username,password)){
      navigate('/user');
    }
  }
  return (<main>
      <form onSubmit={e => onSubmit(e)}>
      <div class = "container">
        <h2>Log In</h2>
        <div class="form-group">
          <label for="exampleInputUsername1">Username</label>
          <input type="text" class="form-control" id="exampleText1" placeholder="Enter username" value={username} onChange={e=>setUsername(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter username or email.
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" class="form-control" id="exampleText2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter password.
          </div>
          <label></label>
        </div>
      
        <button type="submit" class="btn btn-primary">Sign In</button>
      </div>
      </form>
  </main>
  );
}
function NewUserPage(props){
  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [vPassword, setvPassword]=useState('');
  const [phone, setPhone]=useState('');
  
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();

    i++;

    console.log(username, email, password, vPassword, phone, i);

    signUpUser(username, email, password, vPassword, phone, i);
    
    props.toggleState();

    navigate('/user');
  }
  return(<main>
    <form onSubmit={e => onSubmit(e)}>
      <div class = "container">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="exampleInputUsername1">Username</label>
          <input type="text" class="form-control" id="exampleInputText1" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter username.
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e@mail.com" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <div class="invalid-feedback">
            Please enter email.
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter password.
          </div>
        </div> 
        <div class="form-group">
          <label for="exampleInputPassword2">Re-enter Password</label>
          <input type="text" class="form-control" id="exampleInputPassword2" placeholder="Password" value={vPassword} onChange={e=>setvPassword(e.target.value)} required/>
          <div class="invalid-feedback">
            Please re-enter password.
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPhonenumber1">Phone Number</label>
          <input type="phonenumber" class="form-control" id="exampleInputPhonenumber1" placeholder="123-456-7890" value={phone} onChange={e=>setPhone(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter phone number.
          </div>
          <label></label>
        </div>
        
        
        <button type="submit" class="btn btn-primary">Sign Up</button>
        
        </div>
        
      </form>
  </main>
  );
}
function AccountPage(props){
  const [username, setUsername]=useState(currUser.username);
  const [email, setEmail]=useState(currUser.email);
  const [phone, setPhone]=useState(currUser.phone);
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();

    console.log(username, email, phone);

    updateUser(username, email, phone);
    
    props.toggleState();

    navigate('/user');
  }
  return(<main>
    <form onSubmit={e => onSubmit(e)}>
    <div class = "container">
      <h2>myAccount</h2>
        <div class="form-group">
          <label for="exampleInputUsername1">Username</label>
          <input type="text" class="form-control" id="exampleInputText1" defaultValue={username} onChange={e=>setUsername(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter username.
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={email} onChange={e=>setEmail(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter email.
          </div>
        </div>
        
        <div class="form-group">
          <label for="exampleInputPhonenumber3">Phone Number</label>
          <input type="text" class="form-control" id="exampleInputText3" defaultValue={phone} onChange={e=>setPhone(e.target.value)} required/>
          <div class="invalid-feedback">
            Please enter phone number.
          </div>
          <label></label>
        </div>
    
        <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </form>
  </main>

  );
}

function App() {
  const [toggle,setToggle]= useState(true);

  const toggleState = () => setToggle(!toggle);
  return (
    <Router>
      <div className = "container">
        <Header/>
        <Routes>
          <Route path="/login" element={<LoginPage toggleState={toggleState}/>}/>
          <Route path="/new" element={<NewUserPage toggleState={toggleState}/>}/>
          <Route path="/user" element={<AccountPage toggleState={toggleState}/>}/>
        </Routes>
       
        <Footer/>
      </div>
    </Router> 
  );
}

export default App;
