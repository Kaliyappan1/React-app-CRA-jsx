import Student from './student'
function App() {
  return (
    <>
      <Student name= "kaliyappan" age={20} student={true} contact={935905855}/>
      <Student name= "muruganantham" age={50} student={false}/>
      <Student name= "appu" age={15} student={true} contact="xxxxxxxxxxxx"/>
      <Student/>
    </>
  );
}

export default App;
