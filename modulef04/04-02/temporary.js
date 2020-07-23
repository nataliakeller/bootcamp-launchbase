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
    }
}