
class AuthException extends Error {
    constructor(code, message) {
      super(message ? `${code} : ${message}` : code);

      this.message = message || code;
    }
    
    toString() {
      return this.message;
    }
  }
  
  let isAuth = (auth)  => auth ?? false;
  let dialogBoxId=document.getElementById("dialogBox");

  const checkAuth = document.querySelector(".check-auth");

  checkAuth.addEventListener("click", function() {
    try {
        if (!isAuth()) {
            throw new AuthException("FORBIDDEN", "You don't have access to this page");
        } else {
            window.open("success.html", "_blank");
        }
    } catch (e) {
        showDialog(e.toString());
    }
});
  
  
 
  function showDialog(e){
    dialogBoxId.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDialog();
      }
    });
    
    dialogBoxId.showModal();
  }
  
  function closeDialog(){
    dialogBoxId.close(); 
  }
  showDialog();
  