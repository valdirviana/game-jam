import { MenuButton } from '../ui/menu-button';
import { GameObjects } from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Points',
};

export class PointsScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public create() {
        let returnButton = new MenuButton(this, 10, 50, 'Voltar', () => {
            this.scene.start('ChooseChar');
        });

        this.add.text(150, 150, 'Distribua os pontos', { fill: '#FFFFFF' }).setFontSize(24);
    }

    public update() {


    }


}
