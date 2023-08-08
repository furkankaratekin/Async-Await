/* async function test(data){
    //Promise return new Promise
    //return data;

    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir");
        },5000);
    });
    let response = await promise; //5 saniye bekleyecek

    return response;

}

test("Merhaba").then(response => console.log(response)); */



///////////////////////////////////////////////////////////////////////////


/* async function testData(data) {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen string bir değer girin."));
            }
        },5000);
    });

    const response = await promise;

    return response;
}
testData("thriller")
.then(data => console.log(data))
.catch(err => console.log(err)); */

///////////////////////////////////////////////////////////////////////

async function getCurrency(url){

    const response = await fetch(url);  //Response Object
    console.log(response);

    const data  = await response.json(); //Json objesi


    console.log(data);
}
getCurrency("https://jsonplaceholder.typicode.com/albums");








