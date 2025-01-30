function updateUTCTime() {
    const currentTimeElement = document.getElementById("currentTime")
    const now = new Date()
    const utcTimeString = now.toUTCString()
    currentTimeElement.textContent = `Current Time: ${utcTimeString}`
  }
  
  // Update the time immediately and then every second
  updateUTCTime()
  setInterval(updateUTCTime, 1000)
  
  