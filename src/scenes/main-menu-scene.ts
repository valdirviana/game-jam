import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',

};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
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

    this.add.text(100, 50, 'MANDIC Game', { fill: '#FFFFFF' }).setFontSize(24);

    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });

    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, 100, 250, 'Choose Char', () => {
      this.scene.start('ChooseChar', { start: 'teste' });
    });


    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));


  }

  public update(){
    // console.log('update')
  }
}
