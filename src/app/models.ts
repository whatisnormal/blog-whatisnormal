import { SafeHtml } from "@angular/platform-browser";

export interface Article{
  articleType: string;
  title : string;
  fileName: string;
  coverImgPath: string;
  publishedDate:string;
  intro?:SafeHtml;
  tags?:string[]
}
