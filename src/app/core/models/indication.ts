export class Indication {
  url: string;
  rating: string;
  comment?: string;

  constructor(url?: string, rating?: string, comment?: string ) {
        this.url = url || null;
        this.rating = rating || null;
        this.comment = comment || null;
  }
}
