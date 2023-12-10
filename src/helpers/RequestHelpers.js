const post = async (PostData) => {


    const baseUrl = process.env.BASE_URL;
    const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(PostData)
    });

    const data = res.json();

    return data;

    

};


export const RequestHelpers = {
    post
}