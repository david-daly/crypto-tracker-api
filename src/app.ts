import { DB } from './models/db';

export const handler = async(event, context, callback) => {
    const db = new DB();

    const test = await db.User.create({
        userId: '4',
        userName: 'David',
        email: 'test'
    })

    context.succeed({ statusCode: 200, body: JSON.stringify(test) });
}