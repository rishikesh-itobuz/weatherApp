import { dataBase } from "./weatherDb.mjs";
import * as fs from 'node:fs';
import * as path from 'path';
const filePath = new URL('weatherDb.txt', import.meta.url);

//Create database

function createDb(countryName,tempValue,feelsValue){
    dataBase.push({
        location:countryName,
        temp:tempValue,
        feelsLike:feelsValue
    });
    fs.writeFileSync(filePath, JSON.stringify(dataBase));
}

//Delete database


function deleteDb(countryName){
   for(let i=0;i<dataBase.length;i++){
    if(dataBase[i].location==countryName){
        dataBase.splice(i,1);
    }
   }
   fs.writeFile(filePath,JSON.stringify(dataBase),(err)=>{
    console.log("Deleted Successfully");
   })
}

//Update database

function updateDb(countryName,newTemp,newFeelsValue) {
    for(let i=0;i<dataBase.length;i++){
        if(dataBase[i].location==countryName){
            dataBase[i].location=countryName;
            dataBase[i].temp=newTemp;
            dataBase[i].feelsLike=newFeelsValue;
        }
    }
    fs.writeFile(filePath,JSON.stringify(dataBase),(err)=>{
        console.log("Update Successfull");
    })
}

//Read database

function readDb() {
    fs.readFile(filePath,"UTF-8",(err,data)=>{
        console.log(data);
    })
}


// createDb("india",13,19);
//  createDb("china",23,29);
//  deleteDb("india");
// updateDb("india",28,13);
// readDb();


export {createDb,deleteDb,updateDb,readDb};
