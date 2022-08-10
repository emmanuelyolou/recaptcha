function enableRecaptcha(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
    });
  });
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
const firebaseKey = '6LdrCGUhAAAAAMjcnina0bHg4tEttexgtlgj1tcE';
const localKey = '6Lfr1mQhAAAAAI4kRKYeCtY8QfmtznPpi6eiUgqm';

// document.querySelector(".submit").addEventListener("click", function (){  console.log("fuck")});
