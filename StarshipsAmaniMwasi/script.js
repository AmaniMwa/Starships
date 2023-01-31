function show_films_names(films)
{
    var str='';
    for (let film of films.split(',')) {

        fetch(film).then((data1)=>{
            return data1.json();
        }).then((objectData1)=>{
        //console.log(objectData1.title);
         str += objectData1.title + " | ";  
        //console.log(str);    
        });
        }
        setTimeout(()=>{alert(str);}, 5000);
    }

fetch("https://swapi.dev/api/starships/").then((data)=>{
    return data.json();
}).then((objectData)=>{
//console.log(objectData.results);
let tableData="";
objectData.results.map((values, index)=>{
    //console.log(values.films);
    tableData+=` <tr>
    <td>${index+1}</td>
    <td>${values.name}</td>
    <td>${values.model}</td>
    <td>${values.starship_class}</td>
    <td>${values.manufacturer}</td>
    <td>${values.length}</td>
    <td>${values.crew}</td>
    <td>${values.passengers}</td>
    <td><button type="button" class="btn btn-info" onclick='show_films_names("${values.films}")'>Show</button></td>
    </tr>`;
});
document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})