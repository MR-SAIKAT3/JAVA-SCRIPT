function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isData = true;
            if (isData) {
                resolve('Data fetched successfully')
            } else{
                reject('Error fetching Data')
            }
        }, 3000)
    })
}

fetchData()
    .then( (data) => {
        console.log(data);
        return data.toUpperCase()
    })
    .then( (value) => console.log(value)
    )
    .catch( (error) => console.log(error))