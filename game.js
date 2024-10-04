const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

// Player class for controlled character
class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 5;
    }

    // Move player based on direction
    move(direction) {
        switch (direction) {
            case 'up':
                if (this.y - this.radius > 0) this.y -= this.speed;
                break;
            case 'down':
                if (this.y + this.radius < canvas.height) this.y += this.speed;
                break;
            case 'left':
                if (this.x - this.radius > 0) this.x -= this.speed;
                break;
            case 'right':
                if (this.x + this.radius < canvas.width) this.x += this.speed;
                break;
        }
    }

    // Draw the player on the canvas
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// NPC class for non-player characters
class NPC {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.eyes = { blink: false, angry: false, love: false };
        this.state = 'idle'; // idle, angry, love
        this.moving = false;
    }

    // Blink eyes randomly
    blinkEyes() {
        setInterval(() => {
            this.eyes.blink = !this.eyes.blink;
        }, 1000);
    }

    // AI's behavior based on interaction
    updateBehavior(player) {
        const distance = this.distanceTo(player);

        if (distance < 100) {
            this.state = 'love';
            this.eyes.love = true;
        } else if (distance < 50) {
            this.state = 'angry';
            this.eyes.angry = true;
        } else {
            this.state = 'idle';
            this.eyes.love = false;
            this.eyes.angry = false;
        }

        this.moveRandomly();
    }

    // Distance between NPC and player
    distanceTo(player) {
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // NPC random movement logic
    moveRandomly() {
        if (!this.moving) {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
    }

    // Draw NPC with emotions
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw eyes
        ctx.fillStyle = this.eyes.blink ? '#000' : '#FFF';
        ctx.beginPath();
        ctx.arc(this.x - 5, this.y - 10, 5, 0, Math.PI * 2);
        ctx.arc(this.x + 5, this.y - 10, 5, 0, Math.PI * 2);
        ctx.fill();

        // Emotions
        if (this.eyes.angry) {
            ctx.fillStyle = 'red';
            ctx.fillText('😡', this.x - 10, this.y + 20);
        } else if (this.eyes.love) {
            ctx.fillStyle = 'pink';
            ctx.fillText('❤️', this.x - 10, this.y + 20);
        }
    }
}

// Environment class for items in the city
class Item {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 'food', 'diamond', etc.
    }

    draw(ctx) {
        if (this.type === 'food') {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, 20, 20); // Drawing food
        } else if (this.type === 'diamond') {
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + 10, this.y + 20);
            ctx.lineTo(this.x - 10, this.y + 20);
            ctx.closePath();
            ctx.fill(); // Drawing a diamond shape
        }
    }
}

// Initialize player, NPCs, and items
let player = new Player(500, 400, 20, 'blue');
let npcs = [];
for (let i = 0; i < 5; i++) {
    let npc = new NPC(Math.random() * 1000, Math.random() * 800, 20, 'red');
    npc.blinkEyes(); // Start blinking eyes for NPCs
    npcs.push(npc);
}

let items = [
    new Item(200, 300, 'food'),
    new Item(600, 400, 'diamond')
];

// Touch controls for mobile
document.getElementById('up').addEventListener('touchstart', () => player.move('up'));
document.getElementById('down').addEventListener('touchstart', () => player.move('down'));
document.getElementById('left').addEventListener('touchstart', () => player.move('left'));
document.getElementById('right').addEventListener('touchstart', () => player.move('right'));

// Animation loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    player.draw(ctx);

    // Update and draw NPCs
    npcs.forEach(npc => {
        npc.updateBehavior(player);
        npc.draw(ctx);
    });

    // Draw items
    items.forEach(item => {
        item.draw(ctx);
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
