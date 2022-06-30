function Deposit(){
 
  const [status, setStatus] = React.useState('');
  //const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);    

  function validate(field){ //WANT TO PULL OUT INTO SEPARATE FILE
    //console.log('validate ' + field); //ok
    // if (!field) {
    //   document.getElementById('mybutton').disabled = true;
    //   return false;
    // } else {
    //   document.getElementById('mybutton').disabled = false;
    // };
    if (field < 0) { //not higher than balance, not non-number -- alert numerical values only
      alert('Enter positive numbers only');
      return false;
    };
    if (isNaN(field)) { //not higher than balance, not non-number -- alert numerical values only
      alert('Enter numerical values only'); //TODO: change to alert
      return false;
    };
    //console.log('my balance is ' + balance + ' and my amount is ' + amount);
    let mybalance = Number(balance) + Number(amount);
    setBalance(mybalance.toFixed(2)); 
    setStatus('Success'); 
    return true;
  }

  function handleCheck(){
    //console.log(email,password);
    if (!validate(amount)) return;
    //ctx.users.push({balance:{amount}});
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
      header="Deposit"
      status={status}
      body={
        <>
          Balance is: ${Number(balance).toFixed(2)}<br/><br/>
          Amount to deposit<br/>
          <input type="input" className="form-control" id="amount" placeholder="0.00" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        
          <button type="submit" className="btn btn-light" id='mybutton' onClick={handleCheck} disabled={!amount}>Deposit</button>

        </>
      }
    />
  );
}
