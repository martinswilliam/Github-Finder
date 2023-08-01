const USER = {
    login: String,
    name: String,
    bio: String,
    avatar_url: String,
    public_repos: Number,
    followers: Number,
    following: Number,
    repos: Array,
}

const QUERY = document.querySelector(".query");

async function getUSer() {
    //getRepos();
    const URL = `https://api.github.com/users/${QUERY.value}`;
    const DATA = await fetch(URL);
    const USER_DATA = await DATA.json();
    
    if (USER_DATA.message === "Not Found") {
    alert("User not Found");
    return;
    }

    USER.login = USER_DATA.login;
    USER.name = USER_DATA.name;
    USER.bio =USER_DATA.bio;
    USER.avatar_url = USER_DATA.avatar_url;
    USER.public_repos = USER_DATA.public_repos;
    USER.followers = USER_DATA.followers;
    USER.following = USER_DATA.following;

    console.table(USER);

    //getAllData()
}

async function getRepos() {
    const URL = `https://api.github.com/users/`
}
