import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DateFormatter {
  formatDateFr(date: Date): string {
    const formatter = new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    return formatter.format(date);
  }
  sortableDate(date: string): Date {
    const dateArray = date.split(" ");
    const monthString = dateArray[1].toLowerCase();
    const day = parseInt(dateArray[0]);
    const year = parseInt(dateArray[2]);
    switch (monthString) {
      case 'janvier':
        return new Date(year, 0, day);
      case 'février':
        return new Date(year, 1, day);
      case 'mars':
        return new Date(year, 2, day);
      case 'avril':
        return new Date(year, 3, day);
      case 'mai':
        return new Date(year, 4, day);
      case 'juin':
        return new Date(year, 5, day);
      case 'juillet':
        return new Date(year, 6, day);
      case 'aout':
        return new Date(year, 7, day);
      case 'septembre':
        return new Date(year, 8, day);
      case 'octobre':
        return new Date(year, 9, day);
      case 'novembre':
        return new Date(year, 10, day);
      case 'décembre':
        return new Date(year, 11, day);
      default:
        throw new Error('Invalid month');
    }
  }

}
