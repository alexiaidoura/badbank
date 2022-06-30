function Balance(){
  const ctx = React.useContext(UserContext);    
  return (
    <Card 
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Balance"
      title="View Your Balance Here"
      text="You can view your balance"
    />
  )
}
