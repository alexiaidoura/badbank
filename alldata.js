function AllData(){
 
    const ctx = React.useContext(UserContext);    
  
    // let userName = JSON.stringify(ctx.users.name);
    // let userEmail = JSON.stringify(ctx.users.email);
    // let userPassword = JSON.stringify(ctx.users.password);

    return (
      <CardWide 
        bgcolor="primary"
        header="All Data"
        body={
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((data)=> {
                return (
                  
                <tr>
                <td>
                  {data.name}
                </td>
                <td>
                  {data.email}
                </td>
                <td>
                  {data.password}
                </td>
              </tr>
              
                )
              })}
              
            </tbody>
          </table>
        }
      />
    );
  }
  