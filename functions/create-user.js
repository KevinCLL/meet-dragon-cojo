// functions/create-user.js
exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Usuario ${data.name} creado` }),
    };
};