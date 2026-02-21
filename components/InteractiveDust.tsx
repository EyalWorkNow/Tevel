import React, { useEffect, useRef } from 'react';

const NUM_PARTICLES = 60;
const CONNECTION_DISTANCE = 150;
const MOUSE_ATTRACT_RADIUS = 200;

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseAlpha: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.4 + 0.1;
    }

    update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges softly
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${this.baseAlpha})`; // Emerald 500
        ctx.fill();
    }
}

const InteractiveDust: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Initialize sizing
        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight; // Fill viewport for hero background

            // Re-init particles on resize to avoid clustering
            particlesRef.current = [];
            for (let i = 0; i < NUM_PARTICLES; i++) {
                particlesRef.current.push(new Particle(canvas.width, canvas.height));
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave); // track leaving the window

        // Animation Loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear with slight trailing effect for smoothness
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Mouse Magnetism effect - subtle pull towards cursor
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < MOUSE_ATTRACT_RADIUS) {
                    const force = (MOUSE_ATTRACT_RADIUS - distMouse) / MOUSE_ATTRACT_RADIUS;
                    p.vx += (dxMouse / distMouse) * force * 0.05;
                    p.vy += (dyMouse / distMouse) * force * 0.05;
                }

                // Apply friction so they don't speed up infinitely
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Ensure random baseline speed if they slow down too much
                if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
                if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;


                p.update(canvas.width, canvas.height);
                p.draw(ctx);

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        const opacity = 1 - (distance / CONNECTION_DISTANCE);
                        // Boost opacity if near mouse to highlight "connections found"
                        let boost = 0;
                        if (distMouse < MOUSE_ATTRACT_RADIUS) {
                            boost = 0.2;
                        }

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(16, 185, 129, ${(opacity * 0.15) + boost})`;
                        ctx.lineWidth = distance < 50 ? 1 : 0.5;
                        ctx.stroke();
                    }
                }

                // Draw line to mouse
                if (distMouse < CONNECTION_DISTANCE) {
                    const opacityMouseLine = 1 - (distMouse / CONNECTION_DISTANCE);
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(16, 185, 129, ${opacityMouseLine * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default InteractiveDust;
