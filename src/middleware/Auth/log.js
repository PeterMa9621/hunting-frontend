/*
    Each middleware will have same parameters
*/
export default function log ({next}) {
    console.log("log middleware is working");
    return next();
}