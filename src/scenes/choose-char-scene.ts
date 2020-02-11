import { MenuButton } from '../ui/menu-button';
import { CharCard } from '../ui/char-card'
import { GameObjects } from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'ChooseChar',
};

export class ChooseCharScene extends Phaser.Scene {
    constructor(
        private hasSelectChar: boolean,
        private card1: CharCard,
        private sprite2: Phaser.GameObjects.Sprite,
        private sprite3: Phaser.GameObjects.Sprite,
        private returnButton: MenuButton,
        private nextButton: MenuButton,
    ) {
        super(sceneConfig);
    }

    public create() {      
        this.add.image(0,0,'background').setOrigin(0,0);
        this.add.text(150, 150, 'Escolha seu personagem', { fill: '#FFFFFF' }).setFontSize(24);

        this.returnButton = new MenuButton(this, 10, 50, 'Voltar', () => {
            this.scene.start('MainMenu', {value: 'voltou'});
        });

        this.card1 = new CharCard(this, 'chars', 200, 200);

        this.nextButton = new MenuButton(this, 200, 540, 'Próximo', () => {
            this.scene.start('Points');
        }).setVisible(false);
    }

    public update() {
        this.nextButton.setVisible(this.card1.getData('selected'));

        // console.log(this.card1.getData('selected'))
    }

}
