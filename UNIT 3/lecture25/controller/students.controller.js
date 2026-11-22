const Student = require('../model/student.model');

const getStudents= async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const getStudentById=  async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const addStudent=async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const updateStudent=async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true});
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const deleteStudent=async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}   