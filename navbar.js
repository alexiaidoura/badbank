// $(function(){
//   $('[data-toggle="tooltip"]').tooltip();
// });

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="#" title="Return to home page">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/createaccount/" title="Create your account to start managing your money">Create Account</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Deposit your money here">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="Withdraw your money here">Withdraw</a>
          </li>
           
          
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="Get a list of users with password info to exploit!">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}