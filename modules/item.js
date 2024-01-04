export class conspiracyxItem extends Item {

    async prepareData() {
        super.prepareData()

        // Get the Item's data & Actor's data
        const itemData = this.system
        const actorData = this.actor ? this.actor.system : {}

        // Prepare Data based on item type
        if (itemData && actorData) {
            switch (this.type) {
                case 'quality':
                case 'drawback':
                case 'aspect':
                    this._prepareQualityDrawback(actorData, itemData)
                    break

                case 'skill':
                // case 'power':
                    this._prepareSkillPower(actorData, itemData)
                    break

                case 'weapon':
                    this._prepareWeaponItem(actorData, itemData)
                    break
                case 'locations':
                case 'facilities':
                case 'staff':
                case 'weaponery':
                case 'gear':
                case 'vehicles':
                case 'science':
                case 'medical':
                case 'restricted':
                    this._prepareGearItem(actorData, itemData)
                    break
            }
        }
    }

    _prepareQualityDrawback(actorData, itemData) {




        actorData.descriptionHTML = TextEditor.enrichHTML(itemData.description, {
          secrets: false,
          async: true
        });
  
  
  
  
  
    }

    _prepareSkillPower(actorData, itemData) {




        actorData.descriptionHTML = TextEditor.enrichHTML(itemData.description, {
          secrets: false,
          async: true
        });
  
  
  
  
  
    }

    _prepareGearItem(actorData, itemData) {




        actorData.descriptionHTML = TextEditor.enrichHTML(itemData.description, {
          secrets: false,
          async: true
        });
  
  
  
  
  
    }

    _prepareWeaponItem(actorData, itemData) {




        actorData.descriptionHTML = TextEditor.enrichHTML(itemData.description, {
          secrets: false,
          async: true
        });
  
  
  
  
  
        // Build Damage String by combining Damage Entry with Damage Multiplier Entry (Looks at Actor to grab Multiplier Value)
        // This does not apply to weapons on vehicles
        if (itemData.damage_cha_multiplier != "none" && this.isEmbedded && this.actor.type != 'vehicle') {
            itemData.damage_string = `${itemData.damage}*${actorData[itemData.damage_cha_multiplier].value + (itemData.damage_type == 1 ? 1 : 0)}`
        }
        else  {
            itemData.damage_string = itemData.damage
        }
    }
}
