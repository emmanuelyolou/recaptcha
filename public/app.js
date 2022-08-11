document.querySelector('.submit').addEventListener('click', submitForm);

const firebaseKey = '6LdrCGUhAAAAAMjcnina0bHg4tEttexgtlgj1tcE';
const localKey = '6Lfr1mQhAAAAAI4kRKYeCtY8QfmtznPpi6eiUgqm';

function submitForm(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute(localKey, {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
        console.log(token);
    });
  });
}


// document.querySelector(".submit").addEventListener("click", function (){  console.log("fuck")});
