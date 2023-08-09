//https://teachablemachine.withgoogle.com/models/SR5JTWAU8/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById('camera');
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById('result').innerHTML = '<img id = "img" src = "'+data_uri+'"/>';
    });
}
console.log('ml5 versao: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SR5JTWAU8/model.json',carregado);
function carregado(){
    console.log('carregado');
}
function check(){
    img = document.getElementById('img');
classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById('resultObjectName').innerHTML = results[0].label;
    document.getElementById('resultObjectAccuracy').innerHTML = results[0].confidence.toFixed(3);

}
}