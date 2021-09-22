function onInstall() {
  onOpen();
}

function onOpen(e) {
var ui = SpreadsheetApp.getUi();
  
  ui.createAddonMenu()
  .addItem("Apelare SMSMarketingAddon", "showSidebar")
  .addToUi(); 
}

function showSidebar() {
  var html = HtmlService.createTemplateFromFile("smsmarketingaddon")
    .evaluate()
    .setTitle("SMSMarketing Addon "); // The title shows in the sidebar
   var ss = SpreadsheetApp.getUi();
  ss.showSidebar(html);
}

function generate() {  
var sheet = SpreadsheetApp.getActive().getSheetByName("Foaie1");
  var data = sheet.getDataRange().getValues();
  var latime=data.length-1;
  var lungime=0;
  while(data[0][lungime])
  {
    lungime++;
  }
//Logger.log(lungime);
 //Logger.log(latime);
 var sheet2 = SpreadsheetApp.getActive().getSheetByName("Foaie2");
 var data2=sheet2.getDataRange().getValues();
  var mesaje=new Array(60);
  var telefon=new Array(60);
  var i=0;
  var j=1;
  var m=1,n=1;
  var copie;
  for(m=1;m<=latime;m++){
    n=1;
    i=0;
    copie=data2[0][0];
  while(data2[0][0][i])
  { if(data2[0][0][i]=="&")
  { 
     data2[0][0]=data2[0][0].toString().replace(data2[0][0][i],data[m][n]);
    n++;
  }
    //sheet2.replaceText(data2[0][0][i],data[1][1]);
    //data2[0][0][i]=data[1][1];
    //Logger.log(data2[0][0][i]);
   i++;
  }
  mesaje[m]=data2[0][0];
    
  data2[0][0]=copie;
  }
 //Logger.log(data2[0][0]); 
 //Logger.log(data[1][1]);
  
  for(n=1;n<=latime;n++){
  Logger.log(mesaje[n]);
  }
  for(n=1;n<=latime;n++)
  {telefon[n]=data[n][3];
  }
  for(n=1;n<=latime;n++){
  Logger.log(telefon[n]);
  }

  
  for(n=1;n<=latime;n++){
  var url="http://api.smssphere.com/v2.1/webapp/sms";
    var payload= "msg="+mesaje[n]+"&typ=Notificare&des="+telefon[n]+"&origin=SMSMarketing&deviceid=&nam=Marincas%20Andrei&undefined=";
    Logger.log(payload);
    var headers = {
        'userKey': "e69kwgc32q7hqreh",
        'Content-Type': "application/x-www-form-urlencoded",
        'cache-control': "no-cache",
        'Postman-Token': "ce818659-baa4-48b8-9be2-64b5977da779"
    }; 
   
        var options = {
          'method':'POST',
  'payload': payload,
  'headers' : headers};
   var response =UrlFetchApp.fetch(url, options);  
    
   
  }
 Logger.log(response);
/*var url=UrlFetchApp.fetch("http://api.smssphere.com/v2.1/webapp/sms");
var payload = "msg=Mesaj%20de%20%20bun%20venit%20la%20aplicatia%20SMSSphere!&typ=Notificare&des=0700111222&origin=postman&deviceid=6e6a5bf083d15c81&nam=Popescu%20Ion&undefined="
var headers = {
    'userKey': "vqp3zg5wxrmjndnv",
    'Content-Type': "application/x-www-form-urlencoded",
    'cache-control': "no-cache",
    'Postman-Token': "ce818659-baa4-48b8-9be2-64b5977da779"
    }

var response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)*/
}


function getResponse(){
var url="https://api.smssphere.com/v2.1/webapp/sms/pending/con_t/b/con_v/mesaj/limit/25/offset/0";
var payload = ""
headers = {
    'userKey': "vqp3zg5wxrmjndnv",
    'cache-control': "no-cache",
    'Postman-Token': "ce818659-baa4-48b8-9be2-64b5977da779"
    }
var response = UrlFetchApp.fetch(url);
Logger.log(response.getContentText())
}