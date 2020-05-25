const apiUrl = "http://www.recipepuppy.com/api/";
const corsOriginUrl = "https://cors-anywhere.herokuapp.com/";

//to test, example considered 
  // let str1 ="onion"
  // let str2 = ".onion garlic"
  // let str3 = "onion, garlic"
  // let str4 = " onion,garlic"
  // let str5 = 2

const rightInputs = (inputs) => {
  let res =[];
  if (typeof inputs !== "string") throw new Error('Wrong type of input');
  let inpWithoutSpecialChar = inputs.replace(/[^a-zA-Z ]/g, " ");
  let arrInputs = inpWithoutSpecialChar.split(" ");
  for (let i = 0; i<arrInputs.length; i++){
    if (arrInputs[i]!== "") {
      res.push(arrInputs[i])
    }
   }
   return res.join();
}

export default async function getRecipies(inputs) {
  inputs.length<3 && alert("Please insert more than 3 characters");
  const parameters = rightInputs(inputs);
  const fetchUrl = `${corsOriginUrl}${apiUrl}?i=${parameters}&p=1`
  const response = await fetch(fetchUrl, {referrerPolicy: "no-referrer-when-downgrade"})
    .then(res => res.json())
    .catch(error => console.log(error));
  console.log(response)
  return response      
}