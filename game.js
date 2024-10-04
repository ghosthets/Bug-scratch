const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 2;
        this.inventory = { diamonds: 0, food: 0 };
    }

    move(direction) {
        if (direction === 'up') this.y -= this.speed;
        if (direction === 'down') this.y += this.speed;
        if (direction === 'left') this.x -= this.speed;
        if (direction === 'right') this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    addItem(item) {
        if (item.type === 'diamond') this.inventory.diamonds++;
        if (item.type === 'food') this.inventory.food++;
        updateInventoryDisplay();
    }
}

class NPC {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.friend = false;
    }

    updateBehavior(player) {
        const distance = this.distanceTo(player);

        if (distance < 100 && !this.friend) {
            this.friend = true;
            player.addItem({ type: 'diamond' });
            console.log('NPC became friend and gave diamond!');
        }
    }

    distanceTo(player) {
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Item {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    draw(ctx) {
        ctx.fillStyle = this.type === 'diamond' ? 'blue' : 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize
let player = new Player(500, 400, 20, 'red');
let npcs = [new NPC(600, 400, 20, 'green')];
let items = [new Item(300, 400, 'diamond'), new Item(700, 500, 'food')];

// Inventory display
function updateInventoryDisplay() {
    document.getElementById('diamondsCount').innerText = player.inventory.diamonds;
    document.getElementById('foodCount').innerText = player.inventory.food;
}

// Handle movement
let movingDirection = null;

document.getElementById('outerCircle').addEventListener('touchmove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left - rect.width / 2;
    const y = e.touches[0].clientY - rect.top - rect.height / 2;
    
    const angle = Math.atan2(y, x);

    if (angle >= -Math.PI / 4 && angle < Math.PI / 4) movingDirection = 'right';
    else if (angle >= Math.PI / 4 && angle < 3 * Math.PI / 4) movingDirection = 'down';
    else if (angle >= -3 * Math.PI / 4 && angle < -Math.PI / 4) movingDirection = 'up';
    else movingDirection = 'left';
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move player
    if (movingDirection) player.move(movingDirection);

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
