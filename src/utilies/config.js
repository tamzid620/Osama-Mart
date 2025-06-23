// const coreUrl = "https://osama-mart-server.onrender.com/";
const coreUrl = "https://osama-mart-server.vercel.app/";
// const coreUrl = "http://localhost:7000/";

export function baseUrl(route){
    return `${coreUrl}${route}` ;
}


