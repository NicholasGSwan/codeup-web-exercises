
function trollHunterTwo (string){
    string = string.replace(/a/g, "");
    string = string.replace(/A/g, "");
    string = string.replace(/E/g, "");
    string = string.replace(/e/g, "");
    string = string.replace(/I/g, "");
    string = string.replace(/i/g, "");
    string = string.replace(/O/g, "");
    string = string.replace(/o/g, "");
    string = string.replace(/u/g, "");
    string = string.replace(/U/g, "");
    return string
}



function dnaStranded (string){
    for(var i; i< string.length; i++){
        string = string.toUpperCase();
        switch(string.charAt(i)){
            case "A":
                string = string.replace(string.charAt(i), )
        }
    }

}