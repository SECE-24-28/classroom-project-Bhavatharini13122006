async function loadData() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users");
        var data = await res.json();
        console.log(data);  
    }
    catch (a) {
        console.log("failed");  
    }
}
loadData();

async function createData() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Bhavatharini",
                email: "bhava@example.com",
                phone: "9999999999"
            })
        });
        var data = await res.json();
        console.log( data);
    }
    catch (a) {
        console.log("Failed:");
    }
}
createData();

async function updateData() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Bhavatharini",
                email: "bhava@example.com",
                phone: "9999999999"
            })
        });
        var data = await res.json();
        console.log( "updated",data);
    }
    catch (a) {
        console.log("Failed:");
    }
}
updateData();


async function deleteData() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE",
        });
        var data = await res.json();
        console.log( "deleted");
    }
    catch (a) {
        console.log("Failed:");
    }
}
deleteData();

var p={name:"B",gender:"female",id:1}
const{name,gender}=p
console.log(p.name)
