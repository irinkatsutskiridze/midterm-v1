document.getElementById('search').addEventListener('click', function(event) {
    event.preventDefault;

    const name = document.getElementById('name').value;

    if(!name) {
        alert("type a name")
        return;
    }

const newString = document.createElement('div');
newString.classList.add('newString');

newString.innerHTML = '<div class="card">
          <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="https://fakeimg.pl/150x150" alt="John Doe" />
              </div>
              <div class="user-details">
                <h3>John Doe</h3>
                <p class="user-email">john@example.com</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: 1</p>
          </div>
        </div> ';

document.querySelector(.users-List).appendChild(newString);
document.getElementById('name').value = '';
});
