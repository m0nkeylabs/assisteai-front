export class Indication {
  url: string;
  rating: string;
  commentary?: string;

  constructor(url?: string, rating?: string, commentary?: string ) {
        this.url = url || null;
        this.rating = rating || null;
        this.commentary = commentary || null;
  }
}
