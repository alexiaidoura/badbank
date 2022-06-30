function Home(){
  return (
   <Card 
      bgcolor="success"
      txtcolor="white"
      header="Welcome to Bad Bank"
      title="What can I do here?"
      text="You can create an account here to deposit or withdraw funds, or to steal passwords"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
