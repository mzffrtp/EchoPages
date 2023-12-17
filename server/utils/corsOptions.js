
const corsOptions = {
    origin: function (origin, callback) {


        const allowedOrigins = ['http://localhost:5173', 'http://localhost:4000'];

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

export default corsOptions
