<script>
  const scanButton = document.getElementById('startScanBtn');
  const video = document.getElementById('camerafeed');

  scanButton.addEventListener('click', () => {
    // Request camera access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(error => {
        console.error("Camera access error:", error);
        alert("Camera access denied or not available.");
      });
  });
</script>
