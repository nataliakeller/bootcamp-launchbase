module.exports = {
    age: function(timestamp) {
        const birthday = new Date(timestamp);
        const today = new Date();

        let age = today.getFullYear() - birthday.getFullYear();

        let month = today.getMonth() - birthday.getMonth();
        let day = today.getDate() - birthday.getDate();

        if (month < 0 || month == 0 && day < 0) {
            return age - 1;
        } else {
            return age;
        };
    },
    date: function(timestamp) {
        const birthday = new Date(timestamp);

        const year = birthday.getUTCFullYear();
        let month = `0${birthday.getUTCMonth() + 1}`; // Lembrar que o mês é de 0-11
        let day = `0${birthday.getUTCDate()}`; // UTC para pegar a data universal

        month = month.slice(-2);
        day = day.slice(-2);
        
        return `${year}-${month}-${day}`;
    }
};