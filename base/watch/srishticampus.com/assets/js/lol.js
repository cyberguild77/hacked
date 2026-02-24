    function playSound() {
      document.querySelector("audio").play();
     }
    const canvas = document.getElementById('x');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const chars = 'マジで？爆笑';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    function drawx() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffffff';
      ctx.font = fontSize + 'px buda';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    setInterval(drawx, 50);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
        async function fetchIP() {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                document.getElementById('ipContainer').innerText = "IP: " + data.ip;
            } catch (error) {
                document.getElementById('ipContainer').innerText = 'Error fetching IP';
            }
        }
        
        function fetchUserAgent() {
            const userAgent = navigator.userAgent;
            document.getElementById('userAgentContainer').innerText = "User Agent: " + userAgent;
        }
        
        fetchIP();
        fetchUserAgent();
    document.addEventListener('keydown', function(e) {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ['W', 'U', 'R', 'A'].includes(e.key.toUpperCase()))/* ||
        (e.ctrlKey && ['R', 'A'].includes(e.key.toUpperCase())) */
      ) {
        e.preventDefault();
        alert('Access Denied');
      }
    });
    window.onbeforeunload = function () {
      return "This domain is under investigation. Are you sure you want to leave?";
    };
    setInterval(() => {
      window.focus();
    }, 1000);
