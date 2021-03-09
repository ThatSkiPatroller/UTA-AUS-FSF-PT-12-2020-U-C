class Letter {
  constructor (input) {
      this.input = input; 
      
      const validChars = 'abcdefghijklmnopqrstuvwcyz1234567890';
      if (validChars.includes(input) || validChars.includes(char.toLowerCase())) {
          this.visible = false;
      } else {
          this.visible = true; 
      }
    }
  }
  guess () {
    
  }
  getSolution () {

  }
}

module.exports = Letter;
