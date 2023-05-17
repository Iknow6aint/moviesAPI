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

    describe('PATCH/movies', () => {
        const id = "646529b432ed67e1e43227fb";
        const newMovie = {
            title: 'our test movie',
            ratings: 5
        }
        it('should return movie', async () => {
            const response = await request(app)
                .patch(`/movies/${id}`)
                .
                send(
                    newMovie
                )
            expect(response.status).toBe(200)
            expect(response.body).toMatchObject(newMovie);
        });
    });
    describe('DELETE/movies', () => {
        const id = '64652ab05cb21eff1e019070';
        it('should return movie', async () => {
            const response = await request(app)
                .delete(`/movies/${id}`);
            expect(response.status).toBe(200);
        });
    });
})