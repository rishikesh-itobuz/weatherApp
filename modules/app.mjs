import { dataBase } from "./weatherAppDb.mjs";



function createDb(countryName,tempValue,feelsValue){
    dataBase.push({
        location:countryName,
        temp:tempValue,
        feelsLike:feelsValue
    });
}


function deleteDb(countryName){
   for(let i=0;i<dataBase.length;i++){
    if(dataBase[i].location==countryName){
        dataBase.splice(i,1);
    }
   }
}

function updateDb(countryName,newTemp,newFeelsValue) {
    for(let i=0;i<dataBase.length;i++){
        if(dataBase[i].location==countryName){
            dataBase[i].location=countryName;
            dataBase[i].temp=newTemp;
            dataBase[i].feelsLike=newFeelsValue;
        }
       }
}

function getDb(countryName) {
    for(let i=0;i<dataBase.length;i++){
        if(dataBase[i].location==countryName){
            console.log(dataBase[i]);
        }
       }
}



createDb("pakistan",23,20);
// deleteDb("srilanka");
// updateDb("pakistan",28,13);
// getDb("india");
console.log(dataBase);

export {createDb,deleteDb,updateDb,getDb};
