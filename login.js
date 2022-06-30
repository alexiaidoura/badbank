function Login(){
  
  const [status, setStatus] = React.useState('');
  //const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);    

  function validate(field){ //WANT TO PULL OUT INTO SEPARATE FILE
    console.log('validate ' + field); //ok
    if (!field) {
      setStatus('Error: Enter email and password');
      setTimeout(() => setStatus(''),3000);
      return false;
    };
    if (field) { //limit to email
      console.log("exists in ctx? " + ctx.users.map(item => email === item.email)); //USE FOR BUG SCREENCAST
      console.log("ctx is " + JSON.stringify(ctx));
      return ctx.users.map(item => email === item.email);
    };
  
    //BACK UP AND MAKE SURE I'M SOLVING THE RIGHT PROBLEM, TRY STUFF -- 1 THING AT A TIME AND USE CONSOLE.LOG SO I KNOW WHAT CHANGE MADE A DIFF, REVIEW WHAT WE'VE DONE, GOOGLE THE ISSUE.

    //add  function userExists(user) 
    //{console.log(`userExists user is: ${user}`); //undefined
    //return ctx.users(item => user.email === item.email);
    //}
    return true;
  }

  function handleCheck(){
    //console.log(email,password);
    if (!validate(email)) return;
    if (!validate(password)) return;
    //ctx.users.push({name,email,password,balance:100});
    //setShow(false);
  }
  
  function clearForm(){
    setEmail('');
    setPassword('');
    //setShow(true);
 
  }

  return (
    <Card 
      bgcolor="primary"
      header="Log In"
      status={status}
      body={
        <>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-light" onClick={handleCheck}>Submit</button>

        </>
      }
    />
  );
}