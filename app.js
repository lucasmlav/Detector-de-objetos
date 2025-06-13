const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const webcam = document.getElementById('webcam');
const webcamBtn = document.getElementById('webcamBtn');
const stopWebcamBtn = document.getElementById('stopWebcamBtn');
const saveBtn = document.getElementById('saveBtn');
const objectsList = document.getElementById('objectsList');
let model, stream, detectInterval;

async function loadModel() {
  model = await cocoSsd.load();
  console.log('Modelo COCO-SSD carregado!');
}
loadModel();

imageUpload.addEventListener('change', handleImageUpload);
webcamBtn.addEventListener('click', startWebcam);
stopWebcamBtn.addEventListener('click', stopWebcam);
saveBtn.addEventListener('click', saveCanvas);

async function handleImageUpload(event) {
  stopWebcam();
  const file = event.target.files[0];
  if (!file) return;
  const img = new Image();
  img.onload = async () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    await detectObjects(img);
  };
  img.src = URL.createObjectURL(file);
}

async function detectObjects(source) {
  const predictions = await model.detect(source);
  drawPredictions(predictions);
  showObjectsList(predictions);
}

function drawPredictions(predictions) {
  predictions.forEach(pred => {
    ctx.strokeStyle = "#00FFFF";
    ctx.lineWidth = 2;
    ctx.strokeRect(...pred.bbox);
    ctx.font = "18px Arial";
    ctx.fillStyle = "#00FFFF";
    ctx.fillText(`${pred.class} (${(pred.score * 100).toFixed(1)}%)`, pred.bbox[0], pred.bbox[1] > 20 ? pred.bbox[1] - 5 : 10);
  });
}

function showObjectsList(predictions) {
  if (predictions.length === 0) {
    objectsList.innerHTML = "<p>Nenhum objeto detectado.</p>";
    return;
  }
  objectsList.innerHTML = "<h3>Objetos Detectados:</h3><ul>" +
    predictions.map(pred => `<li>${pred.class} - ${(pred.score * 100).toFixed(1)}%</li>`).join('') +
    "</ul>";
}

async function startWebcam() {
  stopWebcam();
  stream = await navigator.mediaDevices.getUserMedia({ video: true });
  webcam.srcObject = stream;
  webcam.style.display = 'block';
  canvas.style.display = 'none';
  webcamBtn.style.display = 'none';
  stopWebcamBtn.style.display = 'inline';
  detectInterval = setInterval(async () => {
    ctx.drawImage(webcam, 0, 0, canvas.width, canvas.height);
    await detectObjects(webcam);
  }, 300);
}

function stopWebcam() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  clearInterval(detectInterval);
  webcam.style.display = 'none';
  canvas.style.display = 'block';
  webcamBtn.style.display = 'inline';
  stopWebcamBtn.style.display = 'none';
}

function saveCanvas() {
  const link = document.createElement('a');
  link.download = 'detected_objects.png';
  link.href = canvas.toDataURL();
  link.click();
}
