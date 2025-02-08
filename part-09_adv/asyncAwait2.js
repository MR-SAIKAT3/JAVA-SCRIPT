function fetchPostData(){
    return new Promise( (resolve) => {
        setTimeout(()=> {
            resolve("Post Data Fetched");
        }, 3000)
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment Data Fetched");
      }, 3000);
    });
}

async function getBolckData(){
    try {
        console.log('Fetching Data...');
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData()

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log('fetch Complete');
        console.log(postData);
        console.log(commentData);
        
        
        
    } catch (error) {
        console.error(`Error fetching blog data ${error}`);
        
    }
}

getBolckData()