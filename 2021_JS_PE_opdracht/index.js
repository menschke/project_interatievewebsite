const form = document.getElementById('form');
const VoorNaam = document.getElementById('voornaam');
const Naam = document.getElementById('naam');
const GebruikersNaam = document.getElementById('gebruikersnaam');
const Email = document.getElementById('email');
const Wachtwoord = document.getElementById('wachtwoord');
const HerhaalWachtwoord = document.getElementById('herhaalwachtwoord');
const Postcode = document.getElementById('postcode');
const Adres = document.getElementById('adres');
const Land = document.getElementById('inputland');
const Provincie = document.getElementById('inputprovincie');
const Akkoord = document.getElementById('algemeenvoorwaarde');

//voor de submit tegen te gaan als niet alles in orde is 
//maar ik had geen idee hoe ik dit beter had kunnen maken want nu vraag die 1 voor 1 de fout op als je if statment
//weg haal en je zet de e.preventDefault() eerst en dan de validation() daar onder dan roept die wel alle fouten op.
form.addEventListener('submit', (e) => {
    if (validation() === false) {
        e.preventDefault();
    }
});
function validation() {
    //value op halen
    const voornaamvalue = VoorNaam.value;
    const naamvalue = Naam.value;
    const gebruikersnaamvalue = GebruikersNaam.value;
    const emailvalue = Email.value;
    const wachtwoordvalue = Wachtwoord.value;
    const herhaalwachtwoordvalue = HerhaalWachtwoord.value;
    const postcodevalue = Postcode.value;
    const adresvalue = Adres.value;
    const Landvalue = Land.value;
    const Provincievalue = Provincie.value;
    //patronnen voor wachtwoord, mail en gebruikersnaam
    //https://www.w3resource.com/javascript/form/email-validation.php
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //gebruikers naam krijg ik niet meer gevonden
    const gebruikersnaamPattern = /^(?=[a-zA-Z0-9._]{1,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    //https://www.w3resource.com/javascript/form/password-validation.php
    const paswoordcheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/;
    // (?=.*\d) is kijken of er aan getal in zit  
    // (?=.*[A-Z]) kijk of er hoofde letter in zitten
    // {7,} staat voor hoe lang het paswoord minstes moet zijn

    //controle voornaam leeg is of niet 
    if (voornaamvalue === "") {
        setError(VoorNaam, "vooraam is verplicht");
        return false;
    } else {
        setSuccess(VoorNaam);
    }
    //controle naam leeg is of niet 
    if (naamvalue === "") {
        setError(Naam, "naam is verplicht");
        return false;
    } else {
        setSuccess(Naam);
    }
    //controle gebruikersnaam leeg is of niet 
    if (gebruikersnaamvalue === "") {
        setError(GebruikersNaam, "gebruikersnaam is verplicht");
        return false;
    } else if (!gebruikersnaamvalue.match(gebruikersnaamPattern)) {
        setError(GebruikersNaam, "gebruikersnaam is niet geldig");
        return false;
    } else {
        setSuccess(GebruikersNaam);
    }
    //controle dat email leeg is of niet en kijken dat email geldig is
    if (emailvalue === "") {
        setError(Email, "email is verplicht");
        return false;
    } else if (!emailvalue.match(mailformat)) {
        setError(Email, "email is niet geldig");
        return false;
    } else {
        setSuccess(Email);
    }
    //controle dat wachtwoord leeg is of niet en dan kijken of het hoofdletter heeft of niet 
    if (wachtwoordvalue === "") {
        setError(Wachtwoord, "wachtwoord is verplicht");
        return false;
    } else if (wachtwoordvalue.match(paswoordcheck)) {
        setSuccess(Wachtwoord);
    } else {
        setError(Wachtwoord, "wachtwoord moet minstes 7 karakters hebben en 1 hoofdletter en 1 getal hebben ");
        return false;
    }
    //controle dat het wachtwoord het zelfde is als wachtwoord en controleren dat het niet leeg is 
    if (herhaalwachtwoordvalue === "") {
        setError(HerhaalWachtwoord, "herhaal wachtwoord is verplicht");
        return false;
    } else if (herhaalwachtwoordvalue === wachtwoordvalue) {
        setSuccess(HerhaalWachtwoord);
    } else {
        setError(HerhaalWachtwoord, "herhaal wachtwoord is niet het zelfde als wachtwoord");
        return false;
    }
    //controle dat poostcode leef is of niet en dan kijken of het tussen 1000 en 9999 is
    if (postcodevalue === "") {
        setError(Postcode, "postcode is verplicht");
        return false;
    } else {
        if (isNaN(postcodevalue)) {
            setError(Postcode, "postcode is niet nummeriek");
            return false;
        } else if (postcodevalue <= 1000 || postcodevalue >= 9999) {
            setError(Postcode, "postcode is niet tussen 1000 en 9999");
            return false;
        } else {
            setSuccess(Postcode);
        }
    }
    //controle dat adres leeg is of niet 
    if (adresvalue === "") {
        setError(Adres, "adres is verplicht");
        return false;
    } else {
        setSuccess(Adres);
    }
    //controle het land leeg is of niet 
    if (Landvalue == "") {
        setError(Land, "postcode is verplicht");
        return false;
    } else {
        setSuccess(Land);
    }
    //controle dat provincie leeg is of niet
    if (Provincievalue == "") {
        setError(Provincie, "adres is verplicht");
        return false;
    } else {
        setSuccess(Provincie);
    }
}
//voor de error te laten zien als je het niet juist heb ingegoven
const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
}
//voor de error weg te doen als het juist is ingegoven
const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.remove('error')
};
// dropdown menu in selectbox
function dynamicdropdown(listindex) {
    switch (listindex) {
        case "België":
            document.getElementById("inputprovincie").options[0] = new Option("Selecter provincie")
            document.getElementById("inputprovincie").options[1] = new Option("Antwerpen")
            document.getElementById("inputprovincie").options[2] = new Option("Henegouwen")
            document.getElementById("inputprovincie").options[3] = new Option("Limburg")
            document.getElementById("inputprovincie").options[4] = new Option("Luik")
            document.getElementById("inputprovincie").options[5] = new Option("Luxemburg")
            document.getElementById("inputprovincie").options[6] = new Option("Namen")
            document.getElementById("inputprovincie").options[7] = new Option("Oost-Vlaanderen")
            document.getElementById("inputprovincie").options[8] = new Option("Vlaams-Brabant")
            break;
        case "Nederland":
            document.getElementById("inputprovincie").options[0] = new Option("Selecter provincie")
            document.getElementById("inputprovincie").options[1] = new Option("Groningen")
            document.getElementById("inputprovincie").options[2] = new Option("Friesland")
            document.getElementById("inputprovincie").options[3] = new Option("Drenthe")
            document.getElementById("inputprovincie").options[4] = new Option("Overijssel")
            document.getElementById("inputprovincie").options[5] = new Option("Flevoland")
            document.getElementById("inputprovincie").options[6] = new Option("Gelderland")
            document.getElementById("inputprovincie").options[7] = new Option("Utrecht")
            document.getElementById("inputprovincie").options[8] = new Option("Noord-Holland")
            document.getElementById("inputprovincie").options[9] = new Option("Zuid-Holland")
            document.getElementById("inputprovincie").options[10] = new Option("Zeeland")
            document.getElementById("inputprovincie").options[11] = new Option("Noord-Brabant")
            document.getElementById("inputprovincie").options[12] = new Option("Limburg")
            break;
        case "Duitsland":
            document.getElementById("inputprovincie").options[0] = new Option("Selecter provincie")
            document.getElementById("inputprovincie").options[1] = new Option("Baden-Württemberg")
            document.getElementById("inputprovincie").options[2] = new Option("Beieren")
            document.getElementById("inputprovincie").options[3] = new Option("Berlijn")
            document.getElementById("inputprovincie").options[4] = new Option("Brandenburg")
            document.getElementById("inputprovincie").options[5] = new Option("Bremen")
            document.getElementById("inputprovincie").options[6] = new Option("Hamburg")
            document.getElementById("inputprovincie").options[7] = new Option("Hessen")
            document.getElementById("inputprovincie").options[8] = new Option("Mecklenburg-Voor-Pommeren")
            document.getElementById("inputprovincie").options[9] = new Option("Nedersaksen")
            document.getElementById("inputprovincie").options[10] = new Option("Noordrijn-Westfalen")
            document.getElementById("inputprovincie").options[11] = new Option("Rijnland-Palts")
            document.getElementById("inputprovincie").options[12] = new Option("Saarland")
            document.getElementById("inputprovincie").options[13] = new Option("Saksen")
            document.getElementById("inputprovincie").options[14] = new Option("Saksen-Anhalt")
            document.getElementById("inputprovincie").options[15] = new Option("Sleeswijk-Holstein")
            document.getElementById("inputprovincie").options[16] = new Option("Thüringen")
            break;
    }
    return true;
}