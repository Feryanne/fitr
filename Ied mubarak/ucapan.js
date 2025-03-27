class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.particles = [];
    this.exploded = false;
  }

  launch() {
    this.y -= 7;
    if (this.y < Math.random() * 200 + 20) {
      this.explode();
    }
  }

  explode() {
    if (!this.exploded) {
      for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle(this.x, this.y, this.color));
      }
      playFireworkSound();
      this.exploded = true;
    }
  }

  draw(ctx) {
    if (!this.exploded) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 5, 5);
    } else {
      this.particles.forEach((particle) => particle.update(ctx));
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.life = 100;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };
  }

  update(ctx) {
    if (this.life > 0) {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 3, 3);
      this.life--;
    }
  }
}

function playFireworkSound() {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(0, context.currentTime);
  gainNode.gain.setValueAtTime(2, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 1);
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 1);
}

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const fireworks = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.1) {
    fireworks.push(
      new Firework(
        Math.random() * canvas.width,
        canvas.height,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      )
    );
  }
  fireworks.forEach((firework, index) => {
    firework.launch();
    firework.draw(ctx);
    if (firework.exploded && firework.particles.every((p) => p.life <= 0)) {
      fireworks.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}

setTimeout(() => {
  document.getElementById("qrisContainer").style.display = "block";
}, 9000);

animate();

function closeContainer() {
  document.getElementById("qrisContainer").style.display = "none";
}

function openContainer() {
  document.getElementById("qrisContainer").style.display = "block";
}

// Menampilkan QRIS
function showQris() {
    document.getElementById("qrisModal").style.display = "flex";
}

// Menutup QRIS
function closeQris() {
    document.getElementById("qrisModal").style.display = "none";
}


// Music Player Feature

const audio = document.getElementById("audio");
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function increaseSpeed() {
    audio.playbackRate += 0.1;
}

function decreaseSpeed() {
    audio.playbackRate = Math.max(0.5, audio.playbackRate - 0.1);
}

// Style for Music Player
document.head.innerHTML += `
    <style>
        #musicPlayer {
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            padding: 10px;
            border-radius: 10px;
            text-align: center;
            color: white;
        }
        #musicPlayer button {
            margin: 5px;
            padding: 5px 10px;
            font-weight:1000;
            color: white;
            cursor: pointer;
            background-color:black;
        }
    </style>
`;

function submit() {
  window.location.href = "thunder-text.html";
}
