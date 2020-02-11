import { MenuButton } from '../ui/menu-button';
import { GameObjects } from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'ChooseChar',
};

export class ChooseCharScene extends Phaser.Scene {
    constructor(
        private hasSelectChar: boolean,
        private sprite1: Phaser.GameObjects.Sprite,
        private sprite2: Phaser.GameObjects.Sprite,
        private sprite3: Phaser.GameObjects.Sprite,
        private returnButton: MenuButton,
        private nextButton: MenuButton,
    ) {
        super(sceneConfig);
    }

    public create() {      
        this.add.text(150, 150, 'Escolha seu personagem', { fill: '#FFFFFF' }).setFontSize(24);

        this.returnButton = new MenuButton(this, 10, 50, 'Voltar', () => {
            this.scene.start('MainMenu', {value: 'voltou'});
        });

        this.sprite1 = this.add.sprite(200, 300, 'chars', 0);
        this.sprite2 = this.add.sprite(300, 300, 'chars', 1);
        this.sprite3 = this.add.sprite(400, 300, 'chars', 2);
        // var test3 = this.add.sprite(350, 300, 'chars', 3);
        // var test4 = this.add.sprite(450, 300, 'chars', 4);
        // var test5 = this.add.sprite(50, 450, 'chars', 5);
        // var test6 = this.add.sprite(150, 450, 'chars', 6);
        // var test7 = this.add.sprite(250, 450, 'chars', 7);
        // var test8 = this.add.sprite(350, 450, 'chars', 8);
        // var test9 = this.add.sprite(450, 450, 'chars', 9);

        this.sprite1.setInteractive({ useHandCursor: true })
        this.sprite1.on('pointerover', (event: Phaser.Input.Pointer) => {
            // console.log('hover in');
            // console.log(event);
            // console.log(this.sprite1.state);
        });
        this.sprite1.on('pointerout', () => {
            // console.log('hover out');

        });
        this.sprite1.on('pointerdown', (event: Phaser.Input.Pointer) => {

            this.hasSelectChar = !this.hasSelectChar;
            this.sprite1.setState(this.hasSelectChar ? 1 : 0);
        });

        this.nextButton = new MenuButton(this, 200, 540, 'Próximo', () => {
            this.scene.start('Points');
        }).setVisible(false);
    }

    public update() {
        this.nextButton.setVisible(this.hasSelectChar);

        if (this.sprite1.state === 1) {
            this.sprite1.tint = 111111;
        } else if (this.sprite1.state === 0) {
            this.sprite1.clearTint();
        }

    }

}
