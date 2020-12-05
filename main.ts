// https://fontawesome.com/cheatsheet for icon namespace
 
 
 declare enum Pins {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P3 = 4,
    P4 = 5,
    P5 = 17,
    P6 = 12,
    P7 = 11,
    P8 = 18,
    P9 = 10,
    P10 = 6,
    P11 = 26,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
    P16 = 16,
    P19 = 0,
    P20 = 30,
    }

    declare enum RemoteButton {
    A= 0x45,
	B= 0x46,
	C= 0x47,
	D= 0x44,
	E= 0x43,
	F= 0xD,
    Haut = 0x40,
    Gauche = 0x7,
    Bas = 0x19,
    Droite = 0x9,
	Parametre = 0x15,
	Touche_0 = 0x16,
	Touche_1 = 0xC,
	Touche_2 = 0x18,
	Touche_3 = 0x5E,
	Touche_4 = 0x8,
	Touche_5 = 0x1C,
	Touche_6 = 0x5A,
	Touche_7 = 0x42,
	Touche_8 = 0x52,
	Touche_9 = 0x4A,
    }




//% weight=1000 color=#00aced icon="\uf1b9"
namespace portail{
	/**
	 * P0 = haut parleur --
	 * P14 = Moteur du portail --
	 * P1 = Fin de course ouvert --
	 * P15 = Fin de course fermé --
	 * P2 = non utilise --
	 * P16 = non utilise --
	 * P12 = gyrophare -- 
	 * P13 = Recepteur infrarouge --
	 * P8 = barrière infrarouge --
	 */
    //% blockId=portail_descriptif
    //% block="Descriptif branchement portail"
	//% weight=99 blockGap=24
    //% group="Descriptif du branchement du portail en commentaire du bloc ci-dessous"
    export function portail_descriptif(): void {
    }



	/**
     * Ouvrir le portail (moteur sur P14)
     */
    //% blockId=portail_ouvrir
    //% block="Ouvrir le portail"
	//% weight=95 blockGap=2
    //% group="Chaîne d'énergie - distribuer l'énergie"
    export function ouvrir_portail(): void {
        pins.servoWritePin(AnalogPin.P14, 0);
    }

    /**
     * Fermer le portail (moteur sur P14)
     */
    //% blockId=portail_fermer
    //% block="Fermer le portail"
	//% weight=94 blockGap=2
    //% group="Chaîne d'énergie - distribuer l'énergie"
    export function fermer_portail(): void {
        pins.servoWritePin(AnalogPin.P14, 180);
    }
	
	/**
     * Arrêter le portail (moteur sur P14)
     */
    //% blockId=portail_arreter
    //% block="Arreter le portail"
	//% weight=93 blockGap=16
    export function arreter_portail(): void {
        //pins.servoWritePin(AnalogPin.P14, 90);
		pins.digitalWritePin(DigitalPin.P14, 0)
    }

/**
     * Allumer le gyrophare (branché sur P12)
     */
    //% blockId=allum_gyro
    //% block="Allumer le gyrophare"
	//% weight=85 blockGap=2
    //% group="Chaîne d'information - communiquer"
    export function allumer_gyro(): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
	
	/**
     * Eteindre le gyrophare (branché sur P12)
     */
    //% blockId=etein_gyro
    //% block="Eteindre le gyrophare"
	//% weight=84 blockGap=12
    //% group="Chaîne d'information - communiquer"
    export function eteindre_gyro(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }

/**
     * Faire sonner le buzzer  (branché sur P0)
     */
    //% blockId=allum_hp
    //% block="Faire sonner le buzzer"
	//% weight=83 blockGap=2
    //% group="Chaîne d'information - communiquer"
    export function allumer_hp(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }

/**
     * Arreter la sonnerie du buzzer (branché sur P0)
     */
    //% blockId=etein_hp
    //% block="Arreter la sonnerie du buzzer"
	//% weight=82 blockGap=12 color=#00acff
    //% group="Chaîne d'information - communiquer"
    export function eteindre_hp(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }

	
	/**
     * Etat du fin de course ouvert sur P1
     */
    //% blockId=FCO
    //% block="Etat fin de course ouvert (0 ou 1)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function FCO(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * Renvoie vrai si le portail est ouvert en entier (FCO sur	 P1)
     */
    //% blockId=PO_entier
    //% block="Le portail est ouvert en entier (vrai ou faux)"
	//% weight=77 blockGap=12
    //% group="Chaîne d'information - acquérir"
    export function portail_ouvert(): boolean {
		 if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            return true;
        } else return false;
    }
	
	/**
     * Etat du fin de course fermé sur P15
     */
    //% blockId=FCF
    //% block="Etat fin de course fermé (0 ou 1)"
	//% weight=76 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function FCF(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	/**
     * Renvoie vrai si le portail est fermé est entier (FCF sur P15)
     */
    //% blockId=PF_entier
    //% block="Le portail est fermé en entier (vrai ou faux)"
	//% weight=75 blockGap=12
    //% group="Chaîne d'information - acquérir"
    export function portail_ferme(): boolean {
		if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            return true;
        } else return false;
    }
	
	/**
     * Etat de la barriere infrarouge sur P8
     */
    //% blockId=bar_inf
    //% block="Etat de la barriere infrarouge (0 ou 1)"
	//% weight=74 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function etat_barriere(): number {
		return pins.digitalReadPin(DigitalPin.P8);
    }
	
	/**
     * Renvoie vrai si la barriere infra rouge est coupé (sur P8)
     */
    //% blockId=bar_inf_vrai
    //% block="La barriere infrarouge est coupé (vrai ou faux)"
	//% weight=73 blockGap=12
    //% group="Chaîne d'information - acquérir"
    export function barriere_coupe(): boolean {
		if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            return true;
        } else return false;
}

/**
     * Lorsque le bouton de la telecommande du robot mbot est appuyé. Attention à initialiser le port du recepteur infrarouge.
     */
    //% blockId=ir_received_left_event
    //% block="Lorsque le signal du bouton |%btn| de la télécommande est reçu" shim=IR::onPressEvent
    //% weight=73 blockGap=12
    //% group="Chaîne d'information - acquérir - IHM"
   function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialisation du port du recepteur infrarouge. A mettre au début du programme.
     */
    //% blockId=ir_init
    //% block="Initialisation de la connexion du capteur infrarouge sur le port %pin" shim=IR::init
    //% weight=73 blockGap=12
    //% group="Chaîne d'information - acquérir - IHM"
    function init(pin: Pins): void;

    }

       

