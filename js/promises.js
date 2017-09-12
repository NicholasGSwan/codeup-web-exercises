(function(){
    function wait(number){
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                if(isNaN(number)){
                    reject()
                }else {
                    resolve()
                }
            }, number)
            });
        }

    // wait(2000).then(()=>console.log("this should appear after 2 seconds"));
    wait(4000).catch(()=>console.log("this shouldn't appear"));
    wait("poop").catch(()=>console.log("this should appear first"));

    function getUserCommitDate(username){
        return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 089d52a54ff138874ce239ce40f54fb0538a1932'}})
            .then((response) => response.json())
            .then((user)=> user[0].created_at)
            .then((date)=> console.log(`${username}'s last commit was at ${date}`))
    }
    getUserCommitDate("NicholasGSwan")


})();



//089d52a54ff138874ce239ce40f54fb0538a1932