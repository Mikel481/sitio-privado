function GetCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character/?page=19");
}
 document.addEventListener('DOMContentLoaded', () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'dashboard.html';
    }

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.7html';
    });
});
