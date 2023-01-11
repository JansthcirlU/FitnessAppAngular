import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {
    transform(value: string, length: number) {
        // TODO: optional arg for length
        // TODO: set limit globally?
        // TODO extra: arg for available width
        return value.length > length
            ? value.substring(0, length - 3) + '...'
            : value;
    }
}