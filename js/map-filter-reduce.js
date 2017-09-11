(function(){
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];
    //create an array where all the users have 3 or more languages
    let usersWithThreeLanguages = users.filter(n => n.languages.length >= 3);
    console.log(usersWithThreeLanguages);


    //create array of the email addresses
    let arrayOfUsersEmails = users.map(n => n.email);
    console.log(arrayOfUsersEmails);


    //turn the array into an object where the id's are the properties with the info from each user inside the object.
    let usersOtherObject = users.map(n => n.id);

    //usersOtherObject === [1, 2, 3, 4, 5]



    let usersObject = usersOtherObject.reduce((userOb, userId)=>{
        userOb[userId] = users[userId];

        return userOb
    }, {});
    console.log(usersObject)



}());