import PropTypes from 'prop-types'

function Student(Props) {
    return (
        <div className="student">
            <p>Name: {Props.name}</p>
            <p>Age: {Props.age}</p>
            <p>Student: {Props.student ? 'Yes': 'No'}</p>
            <p>contact: {Props.contact}</p>
        </div>
    )
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
    contact: PropTypes.number
};
Student.defaultProps = {
    name: "Guest",
    age: 0,
    student: false,
    contact: false,

}


export default Student