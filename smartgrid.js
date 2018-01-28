const smartgrid = require('smart-grid');

const settings = {
	filename: "_smart-grid",
	outputStyle: 'styl',
	breakPoints: {
        lg: {
            width: "1200px",
            fields: "20px"
        },
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        }
    },
    container: {
        maxWidth: "1280px",
        fields: "30px"
    },
    columns: 12,
}

smartgrid('./src/css/libs', settings);