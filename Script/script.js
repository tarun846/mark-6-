const textareainput = document.querySelector("textarea");
const translatebtn = document.querySelector('.translate-btn');
const languageinput = document.querySelector('.language');
 
async function languageconvertor(val) {
     try {
        const data = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${val}`)
        const datavalue  = await data.json()
        languageinput.textContent =  datavalue.contents.translated
         console.log(value);
    } catch (error) {
        alert("some error occured")
        console.log(error);
        
     }
 }

translatebtn.addEventListener('click' ,(e) => {
    const inputval = textareainput.value
    languageconvertor(inputval)
} )