import { Component } from '@angular/core';

@Component({
  selector: 'title-casting',
  templateUrl: './title-casting.component.html',
  styleUrl: './title-casting.component.css',
})
export class TitleCastingComponent {
  titleCasting = 'HI';
  Title = this.titleCasting;
  printing(TitleCasting: any) {
    if (!TitleCasting) {
      this.Title = '';
    } else {
      this.Title = TitleCasting.toLowerCase()
        .split(' ')
        .map((word: string, index: number) => {
          // return word === 'of' || word === 'the'
          //   ? word
          //   : word[0].toUpperCase() + word.slice(1);
          if (index === 0 && word === 'the') {
            // Capitalize the first character of "the"
            return 'The';
          } else if (word !== 'of' && word !== 'the') {
            // Capitalize the first character of each word except "of" and "the"
            return word.charAt(0).toUpperCase() + word.slice(1);
          } else {
            // Return "of" or "the" as is
            return word;
          }
        })
        .join(' ');
    }
  }
  tranform(word: any) {
    if (!word) this.Title = '';
    else {
      let preposition = ['of', 'the', 'by', 'to'];
      let value = word.toLowerCase().split(' ');
      console.log(value);
      for (var i = 0; i < value.length; i++) {
        if (i == 0 || !preposition.includes(word[i])) {
          value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
        }
        else {
          value[i] = value[i]
        }
      }
      this.Title = value.join(' ');
    }
  }
}
