//high order function

const interviewQuestions = (name) => {
    if (name === "mandira"){
        return function(topic) { //ye anonymouse function h
            console.log(`Hi ${name}. What is ${topic}?. Explain us.`)
        }
        
    }if (name === "nikita"){
        return function(topic) { //ye anonymouse function h
            console.log(`Hi ${name}. What is ${topic}?. Explain us.`)
        }
        
    }if (name === "shibi"){
        return function(topic) { //ye anonymouse function h
            console.log(`Hi ${name}. What is ${topic}?. Explain us.`)
        }
        
    }else {
        console.log("welcome to interview");
    }
}

interviewQuestions("mandira")("UI");
interviewQuestions("nikita")("Spring");
interviewQuestions("shibi")("abcd");

console.log("2nd way");
const cand1 = interviewQuestions("mandira");  //ek candidate se jyada puchne k liye
cand1("UI");
cand1("react");
cand1("js");

//yaha pe har ek individual k liye alag topic chahiye tha
//ya pe interviewQuestion func anonymous func return kr rha h ..isko boolte h higher order function


