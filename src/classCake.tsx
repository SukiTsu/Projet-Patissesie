export class ClassCake {
    imgSrc: string;
    content: string;
    group:string
  
    constructor(imgsrc: string, content: string) {
        this.imgSrc = imgsrc
        this.content = content;
        this.group = ""
    }
    setGroup(group:string){
      this.group = group
    }

    getImgSrc(){
      if (this.imgSrc === undefined){
        console.log("errreuuuur")
        return ""
      } 
      return this.imgSrc
    }
  
    getSummary() {
      return `Groupe: ${this.group}, lien img: ${this.imgSrc}, content: ${this.content}`;
    }
  }