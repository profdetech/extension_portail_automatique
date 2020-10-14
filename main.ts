//% weight=1000 color=#00aced icon="\uf1b9"
namespace portail_moteur{

	
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
    export function portail_descriptif(): void {
    }
	
	
	
	/**
     * ouvrir le portail (moteur sur P14)
     */
    //% blockId=portail_ouvrir
    //% block="Ouvrir le portail"
	//% weight=95 blockGap=8
    export function ouvrir_portail(): void {
        pins.servoWritePin(AnalogPin.P14, 0);
    }

    /**
     * fermer le portail (moteur sur P14)
     */
    //% blockId=portail_fermer
    //% block="Fermer le portail"
	//% weight=94 blockGap=8
    export function fermer_portail(): void {
        pins.servoWritePin(AnalogPin.P14, 180);
    }
	
	/**
     * arrêter le portail (moteur sur P14)
     */
    //% blockId=portail_arreter
    //% block="Arreter le portail"
	//% weight=93 blockGap=24
    export function arreter_portail(): void {
        //pins.servoWritePin(AnalogPin.P14, 90);
		pins.digitalWritePin(DigitalPin.P14, 0)
    }


}

//% weight=999 color=#00aced icon="\uf1b9"
namespace portail_actionneurs{
/**
     * allumer le gyrophare (branché sur P12)
     */
    //% blockId=allum_gyro
    //% block="Allumer le gyrophare"
	//% weight=85 blockGap=8
    export function allumer_gyro(): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
	
	/**
     * éteindre le gyrophare (branché sur P12)
     */
    //% blockId=etein_gyro
    //% block="Eteindre le gyrophare"
	//% weight=84 blockGap=24
    export function eteindre_gyro(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }

}

//% weight=998 color=#00aced icon="\uf1b9"
namespace portail_capteurs{
	
	
	/**
     * Etat du fin de course ouvert sur P1
     */
    //% blockId=FCO
    //% block="Etat fin de course ouvert (0 ou 1)"
	//% weight=78 blockGap=8
    export function FCO(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * renvoie vrai si le portail est ouvert en entier (FCO sur	 P1)
     */
    //% blockId=PO_entier
    //% block="Le portail est ouvert en entier (vrai ou faux)"
	//% weight=77 blockGap=24
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
	//% weight=76 blockGap=8
    export function FCF(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	/**
     * renvoie vrai si le portail est fermé est entier (FCF sur P15)
     */
    //% blockId=PF_entier
    //% block="Le portail est fermé en entier (vrai ou faux)"
	//% weight=75 blockGap=24
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
	//% weight=74 blockGap=8
    export function etat_barriere(): number {
		return pins.digitalReadPin(DigitalPin.P8);
    }
	
	/**
     * renvoie vrai si la barriere infra rouge est coupé (sur P8)
     */
    //% blockId=bar_inf_vrai
    //% block="La barriere infrarouge est coupé (vrai ou faux)"
	//% weight=73 blockGap=24
    export function barriere_coupe(): boolean {
		if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            return true;
        } else return false;
}



    }