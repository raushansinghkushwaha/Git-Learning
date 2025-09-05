function showTime() {
      let now = new Date();
      document.getElementById("time").innerText = now.toLocaleTimeString();
    }

    setInterval(showTime, 1000); // har second update hoga
    showTime();