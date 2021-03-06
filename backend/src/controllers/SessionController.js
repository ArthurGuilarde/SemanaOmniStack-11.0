const connection = require('../database/connection.js');

module.exports = {

    async create(request, response) {
        const { id } = request.body;

        try {
            const ong = await connection('ongs')
                .where('id', id)
                .select('name')
                .first();

            if (!ong) {
                return response.status(400).json({ error: 'No ONG found.' });
            } else {
                return response.json(ong);
            }

        } catch (error) {

        }


    }

}
