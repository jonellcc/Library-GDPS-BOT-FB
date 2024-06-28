document.addEventListener('DOMContentLoaded', function () {
    axios.get('/api/library')
        .then(function (response) {
            const libraryList = document.getElementById('library-list');
            response.data.forEach(item => {
                const row = document.createElement('tr');
                const titleCell = document.createElement('td');
                const linkCell = document.createElement('td');
                const link = document.createElement('a');

                titleCell.textContent = item.title;
                link.href = item.finalUrl;
                link.textContent = 'Download';
                link.className = 'btn btn-primary';

                linkCell.appendChild(link);
                row.appendChild(titleCell);
                row.appendChild(linkCell);
                libraryList.appendChild(row);
            });
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });

    window.addEventListener('scroll', function () {
        document.querySelectorAll('.fade-in').forEach(function (element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.style.animationPlayState = 'running';
            }
        });
    });
});

function redirect() {
    window.location.href = 'https://www.facebook.com/propertynilove.magallnes';
}
