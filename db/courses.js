const courses =  
[
    {
        id: 1,
        name: "JavaScript",
        type: "Frontend",
        duration: 8,
        required: ["HTML", "CSS"],
        url: "https://www.coderhouse.com/online/javascript",
        allow_scholarship: true,
        dedication: "high",
        price: 25000
    },
    {
        id: 2,
        name: "React Js",
        type: "Frontend Web",
        duration: 8,
        required: ["HTML", "CSS", "JavaScript"],
        url: "https://www.coderhouse.com/online/reactjs",
        allow_scholarship: true,
        dedication: "high",
        price: 24000
    },
    {   
        id: 3,
        name: "React Native",
        type: "Frontend Mobile",
        duration: 9,
        required: ["HTML", "CSS", "JavaScript"],
        url: "https://www.coderhouse.com/online/desarrollo-aplicaciones",
        allow_scholarship: false,
        dedication: "high",
        price: 30000
    },
    {   
        id: 4,
        name: "Programación Backend",
        type: "Backend Web",
        duration: 24,
        required: ["HTML", "CSS", "JavaScript", "React Js"],
        url: "https://www.coderhouse.com/online/programacion-backend",
        allow_scholarship: false,
        dedication: "high",
        price: 50000
    }
]


module.exports.courses = courses;