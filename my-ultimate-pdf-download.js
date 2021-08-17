function openPDF(){
    let DATA = document.getElementById('printThis');
    // let row = document.getElementsByClassName('row').style.pageBreakAfter="always";
    DATA.style.padding = "10px";
    html2canvas(DATA, {
      scale: 2 // make better quality ouput
    }).then(canvas => {
    let doc = new jsPDF('p', 'pt', 'a4');
    // let imgWidth = 210;
    // let pageHeight = 297;
    let imgWidth = 595;
    let pageHeight = 842;
    let ratio = 2; // scale for higher image's dpi
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    let imgData = canvas.toDataURL("image/JPEG", 3.0);
    doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while(heightLeft >= 0){
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;}
    let date = new Date().toLocaleDateString("en-GB");
    doc.save(`${this.Case} Report - ${this.tenant_name} - [${date}]`);
    document.body.removeChild(canvas);
    })
    DATA.style.padding = "10px";
  };