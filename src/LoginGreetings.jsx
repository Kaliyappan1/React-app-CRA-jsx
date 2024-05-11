function LoginGreetings(props) {
    if(props.Login){
        return <h1 className="Login">welcome to {props.username}</h1>
    }
    else {
     return   <h1 className="error">please login</h1>
}
    }

export default LoginGreetings;