import moment from 'moment';
import {Moment} from "moment/moment";
import {TimeArray} from "../constants/DateTime";

const formatDate = (date?: Date | string | Moment, formatType:string='MM/DD/YYYY') => moment(date).format(formatType);

const getPreviousUnit = (date?: Date | string, unit: moment.unitOfTime.DurationConstructor='month', formatType: string='MM/DD/YYYY'  ) =>
    formatDate(moment(date).subtract(1, unit), formatType)

const getNextUnit = (date?: Date | string, unit: moment.unitOfTime.DurationConstructor='month', formatType: string='MM/DD/YYYY' ) =>
    formatDate(moment(date).add(1, unit), formatType)

const filteredTimeArr = (startDate: Date = new Date()) => {
    if(moment(startDate).diff(new Date(), 'hours') > 0){
        return TimeArray;
    }else{
       return TimeArray.filter(time => moment(startDate).isBefore(moment((time), 'hh:mm A')));
    }
}


export {formatDate, filteredTimeArr, getNextUnit, getPreviousUnit}
