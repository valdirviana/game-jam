import * as Phaser from 'phaser';

const padding = 10;
const minimumWidth = 120;
const minimumHeight = 70;

export class CharCard extends Phaser.GameObjects.Rectangle {
    private label: Phaser.GameObjects.Text;
    private sprite1: Phaser.GameObjects.Sprite;
    private selected: boolean = false;

    private normalColor: number = 0x888888;
    private hoverColor: number = 0x666666;
    private pressedColor: number = 0x555555;
    private selectedColor: number = 0x444444;

    constructor(scene: Phaser.Scene, image: string, x: number, y: number) {
        super(scene, x, y);
        scene.add.existing(this);
        this.setOrigin(0, 0);

        this.sprite1 = scene.add.sprite(x + padding, y + padding, image, 0).setOrigin(0, 0);

        const labelWidth = this.sprite1.width + padding;
        const labelHeight = this.sprite1.height + padding;

        this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;

        this.setInteractive({ useHandCursor: true })
            .on('pointerover', this.pointerOver)
            .on('pointerout', this.pointerOut)
            .on('pointerdown', this.pointerDown)
            .on('pointerup', this.pointerUp);


        this.setFillStyle(this.normalColor);
        this.setDataEnabled();
    }

    private pointerOver() {
        console.log('hover');
        this.setFillStyle(this.selected ? this.selectedColor : this.hoverColor);
    }

    private pointerOut() {
        console.log('out');
        this.setFillStyle(this.selected ? this.selectedColor : this.normalColor);
    }

    private pointerDown() {
        console.log('click press');
        this.setFillStyle(this.selected ? this.selectedColor : this.pressedColor);
    }

    private pointerUp() {
        console.log('click up');
        this.selected = !this.selected;
        this.setData({ selected: this.selected })
        this.setFillStyle(this.selected ? this.selectedColor : this.normalColor);
    }
}
