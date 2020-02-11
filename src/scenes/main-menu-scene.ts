import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',

};

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
    console.log('constructor')
    console.log(this.data)
  }

  public init(config) {
    console.log('init')
    console.log(this.data)
    console.log(config)
    this.data.set("valueMenu", config);
    this.data.set("valueMenu1", config);
  }

  public preload() {
    console.log('preload')
    console.log(this.data)
  }

  public create(config) {
    console.log('create')
    console.log(this.data)
    console.log(config)
    this.add.image(0,0,'background').setOrigin(0,0);

    this.add.text(100, 50, 'MANDIC Game', { fill: '#FFFFFF' }).setFontSize(24);

    let buttonStartGame = new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('ChooseChar');
    });

    let buttonInfos = new MenuButton(this, 100, 250, 'Infos', () => {
      this.scene.start('ChooseChar', { start: 'teste' });
    });

    let buttonAbout = new MenuButton(this, 100, 350, 'About', () => console.log('help button clicked'));

    
  }

  public update(){
    // console.log('update')
  }
}
