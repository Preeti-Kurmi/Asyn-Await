console.log("Person1:show ticket");
console.log("Person2:show ticket");
const promisewifebringticket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("ticket")},3000)

});
const getpopcorn=promisewifebringticket.then((t)=>{
    console.log("wife:i have tics")
    console.log("husband:we should go in");
    console.log("wife:no i am hungry");
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));

})
const getbutter=promisewifebringticket.then((t)=>{
    console.log("husband: i have popcorn");
    console.log("husband:we should go in");
    console.log("wife:i need butter on my popcorn");
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
    
})
const premovie= async()=>{
    const  promisewifebringticket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })
    const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const addbuttrer=new Promise((resolve,reject)=>resolve('butter'));
    let ticket  = await promisewifebringticket;
    console.log(`wife:i have ${ticket}`);
    console.log("husband:we should go in");
    console.log("wife:no i am hungry");
    let popcorn=await getpopcorn;
    console.log(`husband: i have ${popcorn}`);
    console.log("husband:we should go in");
    console.log("wife:i need butter on my popcorn");
    let butter=await addbuttrer;
    console.log(`husband: i have ${butter}`);
   
       
    
    return ticket;
}
console.log("Person4:show ticket");
console.log("Person5:show ticket");