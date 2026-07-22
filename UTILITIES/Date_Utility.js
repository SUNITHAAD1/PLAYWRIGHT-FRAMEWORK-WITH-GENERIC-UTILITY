export class Date_Utility
{
    getSystemDate__DDMMYYYY() {
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

      getSystemDate__MMDDYYYY() {
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }


    // Returns date after adding/subtracting days
    getDateByAddingDays(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}+'/'+${month}+'/'+${year}`;
    }

    // Returns current date in DD/MM/YYYY format
    getSystemDateDDMMYYYYWithSlash() {
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    // Returns current date in YYYY-MM-DD format
    getSystemDateYYYYMMDD() {
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    }
}



