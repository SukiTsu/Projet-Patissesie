export class ClassCake {
  title:string
  imgSrc: string;
  content: string;
  categories:string[]

  constructor(title:string, imgsrc: string, content: string, categories: string[]) {
    this.title = title
    this.imgSrc = imgsrc
    this.content = content;
    this.categories = [...categories]
  }
  
  addGroup(category:string){
    this.categories.push(category)
  }

  getImgSrc(){
    if (this.imgSrc === undefined){
      return ""
    } 
    return this.imgSrc
  }

  getSummary() {
    return `Categories: ${this.categories}, Titre: ${this.title}`;
  }
}