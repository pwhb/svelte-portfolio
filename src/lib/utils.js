import { marked } from 'marked';

export const markedUL = (md) => md ? marked(md).replace(/<ul>/g, '<ul class="list-disc">') : "";

export function parseDate(dateString) {
    if (!dateString) {
        return "Present"
    }
    const date = new Date(dateString);
    return date.toUTCString().slice(8, 16);
}

export function dateDiff(start, end) {
    const date1 = new Date(start);
    const date2 = end ? new Date(end) : new Date();
    const yearDiff = date2.getFullYear() - date1.getFullYear();
    const monthDiff = date2.getMonth() - date1.getMonth();
    if (!yearDiff && !monthDiff) {
        return "less than a month"
    }
    const year = monthDiff < 0 ? yearDiff - 1 : yearDiff;
    const month = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    const yearStr = `${year > 0 ? year + ' year' : ''}${year > 1 ? 's' : ''}`;
    const monthStr = `${month > 0 ? month + ' month' : ''}${month > 1 ? 's' : ''}`;
    return yearStr ? yearStr + ' ' + monthStr : monthStr;
}