const corsOptions = {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
