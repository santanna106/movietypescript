const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port:3000,
    dbUri:"mongodb://localhost/movies",
    env:"development"
};