async function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({userId, name: "John Doe", age: 30});
        }, 1000);
    });
}

// To test error handling

// async function fetchUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof userId !== 'number' || userId < 0) {
//                 reject(new Error("Failed to fetch user profile"));
//             } else {
//                 resolve({userId, name: "John Doe", age: 30});
//             }
//         }, 1000);
//     });
// }

async function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {postID: 1, content: "Hello, World!"},
                {postID: 2, content: "Loving this app!"}
            ]);
        }, 2000);
    });
}

// To test error handling

// async function fetchUserPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof userId !== 'number' || userId < 0) {
//                 reject(new Error("Failed to fetch user posts"));
//             } else {
//                 resolve([
//                     {postID: 1, content: "Hello, World!"},
//                     {postID: 2, content: "Loving this app!"}
//                 ]);
//             }
//         }, 2000);
//     });
// }

async function loadUserProfile(userId) {
    try {
        const userProfile = await fetchUserProfile(userId);
        const userPosts = await fetchUserPosts(userId);

        const data = {profile: userProfile, posts: userPosts};
        return data;
    } catch (error) {
        console.error("Error loading user data", error);
        throw error;
    }            
}

loadUserProfile(1)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));