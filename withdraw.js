function Withdraw(){
  const [status, setStatus] = React.useState('');
  //const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  const [balance, setBalance] = React.useState(100);
  const ctx = React.useContext(UserContext);    

  function validate(field){ //WANT TO PULL OUT INTO SEPARATE FILE
    //console.log('validate ' + field + 'balance' + balance); //ok
    // if (!field) {
    //   document.getElementById('mybutton').disabled = true;
    //   return false;
    // } else {
    //   document.getElementById('mybutton').disabled = false;
    // };
    if (Number(field) > Number(balance)) { //not higher than balance, not non-number -- alert numerical values only
      setStatus('Error: Transaction failed');
      return false;
    };
    if (isNaN(field)) { //not higher than balance, not non-number -- alert numerical values only
      alert('Enter numerical values only'); //TODO: change to alert
      return false;
    };
    //console.log('my balance is ' + balance + ' and my amount is ' + amount);
    let mybalance = Number(balance) - Number(amount);
    setBalance(mybalance.toFixed(2)); 
    setStatus('Success'); 
    return true;
  }

  function handleCheck(){
    //console.log(email,password);
    if (!validate(amount)) return;
    //ctx.users.push({name,email,password,balance:100});
    //setShow(false);
    clearForm();
  }
  
  function clearForm(){
    setAmount(0);
    //setShow(true);
 
  }

  return (
    <Card 
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={
        <>
          Balance is: ${Number(balance).toFixed(2)}<br/><br/>
          Amount to withdraw<br/>
          <input type="input" className="form-control" id="amount" placeholder="100" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        
          <button type="submit" className="btn btn-light" id='mybutton' onClick={handleCheck} disabled={!amount}>Withdraw</button>

        </>
      }
    />
  );
}
