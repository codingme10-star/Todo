// تشغيل الساعة وتحديثها كل ثانية
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('clock-display').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock(); // استدعاء فوري لعدم انتظار الثانية الأولى

// تشغيل المؤقت
let timerInterval;

function startTimer() {
  // إيقاف أي مؤقت سابق إذا تم الضغط على "ابدأ" مرة أخرى
  clearInterval(timerInterval);
  
  const minutesInput = document.getElementById('timer-input').value;
  let timeInSeconds = Math.floor(minutesInput * 60);

  if (timeInSeconds <= 0 || isNaN(timeInSeconds)) {
    alert("الرجاء إدخال عدد دقائق صحيح.");
    return;
  }

  const display = document.getElementById('timer-display');

  timerInterval = setInterval(() => {
    const m = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const s = String(timeInSeconds % 60).padStart(2, '0');
    
    display.innerText = `${m}:${s}`;

    if (timeInSeconds <= 0) {
      clearInterval(timerInterval);
      
      // الإشعار عند انتهاء الوقت
      alert("⏰ انتهى الوقت المخصص للمهمة!");
      
      // تشغيل صوت تنبيه بسيط (اختياري)
      let audio = new Audio('[https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3](https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3)');
      audio.play();
    }
    
    timeInSeconds--;
  }, 1000);
}
