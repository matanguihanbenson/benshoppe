const userProfileContainer = document.getElementById("user-profile-container");
const username = sessionStorage.getItem("username");
fetch("user.json")
  .then((response) => response.json())
  .then((user) => {
    if (username && username === user.username) {
      userProfileContainer.innerHTML = `
                <div class="user-profile">
                    <a href="profile.html"><img src="${user.profilePic}" alt="${user.name}"></a>
                    
                </div>
            `;
    } else {
      userProfileContainer.innerHTML = '<a href="login.html">Login</a>';
    }
  })
  .catch((error) => console.error("Error fetching user:", error));
