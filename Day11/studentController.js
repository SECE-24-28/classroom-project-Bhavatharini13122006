const Student = require("../models/Student");

// CREATE student
exports.createStudent = async (req, res) => {
    try {
        const totalCount=await Student.countDocuments({})
        req.body['rollno']=totalCount+1
        const student = await Student.create(req.body);
        res.json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET all students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET single student
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findOne({
            rollno: Number(req.params.rollno)
        });

        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// UPDATE student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { rollno: Number(req.params.rollno) },
      req.body,
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//delete student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({
            rollno: Number(req.params.rollno)
        });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get all students
exports.getAllStudents=async(req,res)=>{
    try{
        const students=await Student.find()
        res.json(students)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}