import {filteredTimeArr, formatDate, getNextUnit, getPreviousUnit} from "./DateUtils";
import {FORMAT_MONTH_YEAR} from "../constants/DateTime";
import moment from 'moment';

describe('format date function', () => {
    test('formats correctly without any value', () => {
        expect(formatDate('2021-09-06')).toBe('09/06/2021')
    })
    test('formats correctly with date and without formatType', () => {
        expect(formatDate('2021-09-06', FORMAT_MONTH_YEAR)).toBe('September 2021')
    })
})

describe('get next month function', () => {
    test('get next date', () => {
        expect(getNextUnit('2021-09-06', 'day')).toBe('09/07/2021')
    })
    test('get next month', () => {
        expect(getNextUnit('2021-09-06')).toBe('10/06/2021')
    })
    test('get next year', () => {
        expect(getNextUnit('2021-09-06', 'year')).toBe('09/06/2022')
    })
    test('get formatted next month', () => {
        expect(getNextUnit('2021-09-06', 'month',FORMAT_MONTH_YEAR)).toBe('October 2021')
    })
})

describe('get previous month function', () => {
    test('get previous date', () => {
        expect(getPreviousUnit('2021-09-06', 'day')).toBe('09/05/2021')
    })
    test('get previous month', () => {
        expect(getPreviousUnit('2021-09-06')).toBe('08/06/2021')
    })
    test('get previous year', () => {
        expect(getPreviousUnit('2021-09-06', 'year')).toBe('09/06/2020')
    })
    test('get formatted previous month', () => {
        expect(getPreviousUnit('2021-09-06', 'month',FORMAT_MONTH_YEAR)).toBe('August 2021')
    })
})

describe('get filtered time', () => {
    test('get time slots', () => {
        expect(filteredTimeArr(moment().add(1, 'day').toDate())).toHaveLength(9)
    })
})
