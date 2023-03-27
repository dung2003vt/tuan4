let Student = [["Nê Anh Tuấn", "18", "Nữ"],["Nguyễn Văn Thái", "23", "Lam"],["Nê Văn Đức", "28", "Trai Hàn"]]
let demo;

function displayAllStudent() {
    let data = `<table>
                    <tr>
                        <th>StudentName</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th colspan="2" style="text-align: center">Action</th>
                        <th style="color: red">` + Student.length + " student" + `</th>
                    </tr>`
    for (let i = 0; i < Student.length; i++) {
        for (let j = 0; j < Student[i]; j++)
        data += "<tr>"
        data += "<td>" + Student[i][j] + "</td>"
        data += "<td>" + Student[i][j+1] + "</td>"
        data += "<td>" + Student[i][j+2] + "</td>"
        data += "<td><button onclick='updateStudent(" + i + ")'>Update</button></td>"
        data += "<td><button onclick='deleteStudent(" + i + ")'>Delete</button></td>"
        data += "<td></td>"
        data += "</tr>"
    }
    data += `</table>`
    document.getElementById("display").innerHTML = data
}

function updateStudent(index) {
    document.getElementById("update").value = Student[index]
    demo = index
}

function updateStudent2() {
    let updateStudent = document.getElementById("update").value
    Student[demo] = updateStudent
    displayAllStudent()
}

function addStudent() {
    let student = document.getElementById("add").value
    console.log(student)
    if (student !== undefined && student !== "") {
        Student.push(student)
        displayAllStudent()
    }
    document.getElementById("add").value = ""
}


function deleteStudent(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + Student[index] + " ?")) {
        Student.splice(index, 1)
        displayAllStudent()
    }
}