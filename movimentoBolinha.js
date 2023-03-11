function moveDots() {
    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        const dots = document.querySelectorAll(".dot");
        
        dots.forEach(function(dot) {
            const dotX = dot.offsetLeft + 10;
            const dotY = dot.offsetTop + 10;
            
            const dx = x - dotX;
            const dy = y - dotY;
            
            const distance = Math.sqrt(dx*dx + dy*dy);
            
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                const newX = dotX - (Math.cos(angle) * 10);
                const newY = dotY - (Math.sin(angle) * 10);
                
                dot.style.left = newX + "px";
                dot.style.top = newY + "px";
            }
        });
    });
}

moveDots();