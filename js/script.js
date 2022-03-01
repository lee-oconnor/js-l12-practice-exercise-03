const notRegistered = document.querySelector(".not-registered");

getRegistrationData = async function () {
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await request.json();
    console.log(data);
    displayContactList(data);
};


const displayContactList = function (data) {
    for (const name of data) {
        if (name.registered === "no") {
        const listItem = document.createElement("li");
        listItem.innerText = name.name;
        notRegistered.append(listItem);
        };
    };
    
};
getRegistrationData();