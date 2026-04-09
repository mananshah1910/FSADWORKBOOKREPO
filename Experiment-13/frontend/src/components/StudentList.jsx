import { useEffect,useState } from "react"
import axios from "axios"

function StudentList(){

const [students,setStudents] = useState([])
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [course,setCourse] = useState("")

const loadStudents = ()=>{

axios.get("http://localhost:8080/api/students")
.then(res=>{
setStudents(res.data)
})

}

useEffect(()=>{
loadStudents()
},[])

const addStudent = ()=>{

axios.post("http://localhost:8080/api/students",{
name,email,course
}).then(()=>{
loadStudents()
})

setName("")
setEmail("")
setCourse("")
}

return(

<div>

<h3>Add Student</h3>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Course"
value={course}
onChange={(e)=>setCourse(e.target.value)}
/>

<button onClick={addStudent}>Add</button>

<h3>Student List</h3>

<ul>

{students.map(student=>(
<li key={student.id}>
{student.name} - {student.email} - {student.course}
</li>
))}

</ul>

</div>

)

}

export default StudentList