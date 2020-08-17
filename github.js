class Github {
    constructor() {
        this.client_id = '7c26a4b98222d96ef405';
        this.client_secret = '9f3afc82f65ef31fd841e06f17b21fd14619ae64';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&repos_sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile,
            repos
        }
    }
}