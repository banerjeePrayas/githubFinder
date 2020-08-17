class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display Profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" class="img-fluid mb-2">
                <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-info">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-danger">Followers: ${user.followers}</span>
                <span class="badge badge-warning">Following: ${user.following}</span>

                <ul class="list-group mt-5">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog}</a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
            <br><br>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `
    }

    // Show Alert
    showAlert(message, className) {

        // Remove any Remaining Alert
        this.clearAlert();

        // Create a DIV
        const div = document.createElement('div');

        // Add Class
        div.className = className;

        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.searchContainer');

        // Get Search Box
        const search = document.querySelector('.search');

        // Insert ALert
        container.insertBefore(div, search);

        // Timeout after 3sec
        setTimeout(() => {
            this.clearAlert();
        }, 2000);


    }

    // Show Repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-danger">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output Repos
        document.getElementById('repos').innerHTML = output;
    }

    // Clear Alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}