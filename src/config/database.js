module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'docker',
    password: 'password',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true,
    },
};