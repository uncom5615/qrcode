const text = `
單位: 205廠    
姓名: 王大明     
兵籍: AA002    
階級: 中士   
性別: 男 
血型: O型    
病史: 高血壓
用藥史: OOOO
過敏史: 無          
宗教: 佛教`;

QRCode.toCanvas(
  document.getElementById("qrcode"),
  text,
  {
    width: 300, // 3cm 大約等於 300px
    errorCorrectionLevel: "H",
  },
  function (error) {
    if (error) console.error(error);
    console.log("QR code successfully generated!");
  }
);
