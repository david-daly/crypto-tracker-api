module.exports.handler = (event, context, callback) => {
    context.succeed({ statusCode: 200, body: JSON.stringify('handler') });
}