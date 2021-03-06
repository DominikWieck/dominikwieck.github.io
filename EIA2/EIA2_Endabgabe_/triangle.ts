namespace PaintIt {
    export class Triangle extends Figure {

        constructor(_type: string, _position: Vector, _velocity: Vector, _rotation: number, _color: string, _size: number) {
            super (_type, _position, _velocity, _rotation, _color, _size);
        }

        draw(): void {
            if (this.rotation == 0)
                crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, -25 * this.size);
            crc2.lineTo(-30 * this.size, 25 * this.size);
            crc2.lineTo(30 * this.size, 25 * this.size);
            crc2.lineTo(0, -25 * this.size);
            crc2.scale(this.size, this.size);
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineCap = "round";
            crc2.lineWidth = 5;
            crc2.lineJoin = "round";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.resetTransform();
        }
    }
}