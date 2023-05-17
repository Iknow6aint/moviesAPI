const request = require('supertest');
const app = require('../src/app');
const { mongoConnect, mongoDisconnect } = require('../src/services/mongo');



describe('Movies controller', () => {
    beforeAll(async () => {
        await mongoConnect();
    });


    afterAll(async () => {
        await mongoDisconnect()
    })

    describe('GET /movies', () => {
        it('should return movies', async () => {
            const response = await request(app).get('/movies');
            expect(response.status).toBe(200);
            expect(response.body.length).toBeGreaterThan(0);
        })
    });



    describe('POST /movies', () => {
        const newMovie = {

            title: "our movie",
            ratings: 5

        }
        it('should return movie', async () => {
            const response = await request(app)
                .post('/movies').
                send(
                    newMovie
                )
            expect(response.status).toBe(200)
            expect(response.body).toMatchObject(newMovie);
            console.log(response.status);
        });

    })

    describe('PUT/movies', () => {
        const id = '1';
        const newMovie = {
            title: "our test movie",
            ratings: 5
        }
        it('should return movie', async () => {
            const response = await request(app)
                .put(`/movies/${id}`).
                send(
                    newMovie
                )
            expect(response.status).toBe(200)
            expect(response.body).toMatchObject(newMovie);
        });
    });
    describe('DELETE /movies/:id', () => {
        const id = 1;
        it('should return movie', async () => {
            const response = await request(app)
                .delete(`/movies/${id}`);
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                _id: id
            });
        });
    });
})