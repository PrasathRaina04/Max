export function LoginPage()
{
    return(
        <>
        
        <h1> <h1>Welcome to Login Page</h1></h1>
        <form>
  <fieldset>
    <legend>Legend</legend>
    
    <div>
      <label for="exampleInputEmail1" className="form-label col-xs-3">User ID</label>
      <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter UserID" />
    </div>
    <div>
      <label for="exampleInputEmail1" className="form-label col-xs-3">Password</label>
      <input type="password" className="form-control" placeholder="Enter UserID" autocomplete="off"/>
    </div>
    <br></br>
    <button type="button" className="btn btn-success">Login</button>
    <br></br>
    <br></br>

    <p><a href="#">Forget Password</a></p>
    </fieldset>
    </form>
        </>
    )
}