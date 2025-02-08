function fetchUserData(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve({
                name: "saikat",
                url: "https://mh.com"
            })
        }, 3000)
    })
}

async function fetchingData(){
    try {
        console.log('Fetching data...');        
        const userData = await fetchUserData()
        console.log('User data fetched successfully');
        
        console.log('User data:', userData);
    } catch (error) {
        console.log("Error fetching data", error);
        
    }
}

fetchingData()