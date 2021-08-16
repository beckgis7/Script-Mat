function toDataURL() {
    async function getBase64ImageFromUrl(imageUrl) {
      var res = await fetch(imageUrl
        // , {
        // mode: 'no-cors',
        // headers: {'Access-Control-Allow-Origin':'*'}
        // }
      );
      var blob = await res.blob();

      return new Promise((resolve, reject) => {
        var reader  = new FileReader();
        reader.addEventListener("load", () => {
            resolve(reader.result);
        }, false);

        reader.onerror = () => {
          return reject(this);
        };
        reader.readAsDataURL(blob);
      })
    }

    // getBase64ImageFromUrl('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
    getBase64ImageFromUrl(sessionStorage.getItem("tenant_header"))
    .then(dataUrl => {
      this.tenant_header = dataUrl;
      console.log('RESULT:', dataUrl)
    }).catch(err => console.error(err));
  }


function toDataURL2(){
    function getBase64ImageFromUrl() {
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
          var reader = new FileReader();
          reader.onloadend = this.touchup.bind(this);
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }
      function touchup(data) {
        const binaryString = data.target.result;
          this.comlogo = binaryString;
          console.log(this.comlogo)
      }
    touchup();
    getBase64ImageFromUrl();
}
