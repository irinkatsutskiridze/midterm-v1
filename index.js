/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];
  
  document.getElementById('button').addEventListener('click', function (event) {
    event.preventDefault;

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const avatar =document.getElementById('avatar').value;

    if(!id || !name || !email || !avatar) {
      alert("there are no users here");
      return;
    }
  
  const userDetails = document.createElement('div');
  userDetails.classList.add('userDetails');

  userDetails.innerHTML = '<div class="card">
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
  </div>';

  
  document.querySelector(.user-List).appendChild(userDetails);
  document.getElementById('id').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('avatar').value = '';

  })