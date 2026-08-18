const express = require("express")
const app = express()
app.use(express.json())

let emps = [
    { id: 1, name: 'Aditya', department: 'Engineering', age: 25 },
    { id: 2, name: 'Siddarth', department: 'HR', age: 21 },
    
]

app.get("/emps", (req, resp) => {
    resp.json(emps)
})

app.get("/emps/:id", (req, resp) => {
    let eid = req.params.id
    const e = emps.find((e) => { return e.id == eid })
    if (e) {
        resp.json(e)
    } else {
        resp.status(404).json({ "message": "employee record not found" })
    }
})

app.post("/emps", (req, resp) => {
    let id = req.body.id
    let name = req.body.name
    let department = req.body.department
    let age = req.body.age
    let e = { id: id, name: name, department: department, age: age }
    emps.push(e)
    resp.status(201).json({ "message": "New employee created", "employee": e })
})

app.put("/emps/:id", (req, resp) => {
    let eid = req.params.id
    let index = emps.findIndex((e) => e.id == eid)
    if (index != -1) {
        let name = req.body.name
        let department = req.body.department
        let age = req.body.age   
        let e = { id: eid, name: name, department: department, age: age }
        emps[index] = e 
        resp.json({ "message": "employee record updated", "employee": e })
    } else {
        resp.status(404).json({ "message": "employee record not found" })
    }
})

app.delete("/emps/:id", (req, resp) => {
    let eid = req.params.id
    let e = emps.find((e) => { return e.id == eid })
    if (e) {
        emps = emps.filter((e) => { return e.id != eid })
        resp.status(202).json({ "message": "Employee record deleted" })
    } else {
        resp.status(404).json({ "message": "employee not found" })
    }
})

app.listen(3000, () => { console.log("Server Started") })