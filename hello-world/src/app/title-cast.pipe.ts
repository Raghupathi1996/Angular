import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCast',
})
export class TitleCastPipe implements PipeTransform {
  transform(word: string): any {
    if (!word) return null;
    else {
      let preposition = ['of', 'the', 'by', 'to'];
      let value = word.toLowerCase().split(' ');
      console.log('value', value);
      for (var i = 0; i < value.length; i++) {
        let val = value[i];
        if (i > 0 && this.isPreposition(value[i])) {
          console.log('valie[index]', val);
          value[i] = val.toLowerCase();
        } else {
          value[i] = this.toTitleCase(val);
        }
      }
      return value.join(' ');
    }
  }

  private isPreposition(word: string): boolean {
    let preposition = ['of', 'the', 'by', 'to'];
    return preposition.includes(word.toLowerCase());
  }
  private toTitleCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
