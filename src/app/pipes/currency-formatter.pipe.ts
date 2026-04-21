import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true,
  pure: true
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(
    value: number,
    locale: string = 'en-IN',
    currency: string = 'INR'
  ): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2
    }).format(value);
  }
}