function LoginGreetings(props) {
    const Login = <h1 className="Login">welcome to {props.username}</h1>;
    const error = <h1 className="error">please login</h1>;
    
    return(
        <>
       {props.Login ? Login :error}
        </>
    )
}

export default LoginGreetings;