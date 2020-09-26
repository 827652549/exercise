try {
    setTimeout(()=>{
        throw new Error(222);
    },0)
}catch (e) {
    console.log(999);
}
