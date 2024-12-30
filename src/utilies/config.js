const coreUrl = "https://osama-mart-server-backend.vercel.app/";
// const coreUrl = "http://localhost:7000/";

export function baseUrl(route){
    return `${coreUrl}${route}` ;
}


