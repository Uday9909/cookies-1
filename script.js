document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Initialize or get the count cookie
  let count = getCookie('count');
  
  if (count === null) {
    // Cookie doesn't exist - initialize with 1
    count = 1;
    setCookie('count', count, 7); // Expires in 7 days
  } else {
    // Cookie exists - increment and update
    count = parseInt(count) + 1;
    setCookie('count', count, 7); // Expires in 7 days
  }

  // Display the count
  document.getElementById('countDisplay').textContent = count;
});
