const apiUrl = "http://www.recipepuppy.com/api/";
const corsOriginUrl = "https://cors-anywhere.herokuapp.com/";

export const rightInputs = (inputs) => {
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

export async function getRecipies(inputs) {
  if(inputs.length<3) {
    alert("Please insert more than 3 characters");
  return
  };
  const parameters = rightInputs(inputs);
  const fetchUrl = `${corsOriginUrl}${apiUrl}?i=${parameters}&p=1`
  const response = await fetch(fetchUrl, {referrerPolicy: "no-referrer-when-downgrade"})
    .then(res => res.json())
    .catch(error => console.log(error));
  return response      
}